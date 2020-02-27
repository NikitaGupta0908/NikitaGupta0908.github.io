
// ======= This is file which handles the numerical variables and creates histogram =========

function updateNumerical(arr, selectedAttribute, svg, data){
  
  d3.select("#info").selectAll("*").remove();
  console.log("adding text node:"+datafield[selectedAttribute]);

  d3.select("#info").append("text").text(datafield[selectedAttribute]);
  var xAxis = svg.append("g")
    .attr("transform", "translate(0," + svgheight + ")")

    var yAxis = svg.append("g")

  maxX = d3.max(arr);
  minX = d3.min(arr);
  console.log("max value is:"+maxX+" min value is:"+minX);
  console.log(arr);

  //================ Setting the X axis ======================================
  var xscale = d3.scaleLinear()
  .domain([minX, maxX])     
  .range([0, svgwidth]);

  //========== Appending the X axis to the bottom of svg giving it svgheight===    
  xAxis.transition()
        .attr("transform", "translate(0," + svgheight + ")")
        .duration(1010)
        .call(d3.axisBottom(xscale))
  //=============== Setting the Y axis =========================================
  var yscale = d3.scaleLinear()
  .range([svgheight, 0]);
    //=============== Creating the histogram ====================================
  var histogram = d3.histogram()
  .domain(xscale.domain())  
  .thresholds(xscale.ticks(numbins)); 

  //================== Updating the number of bins in the left button==========
  d3.select("#bins").selectAll("*").remove();
  console.log("adding #bins code:"+numbins);
  d3.select("#bins").append("text").text("#Bins: "+numbins).attr("class","bins-show");

  //=============== Setting the bins by using the function =====================
  var bins = histogram(arr); //===== this creates the bins with x0 as the lower bound and x1 as the upper bound
  console.log("in update function now! updating histogram"+bins)
  yscale.domain([0, d3.max(bins, function(d){ return d.length;})])
  yAxis.transition()
        .duration(1000)
        .call(d3.axisLeft(yscale));

  //============== Appending the rectangles to the svg using bins ==============
  var u = svg.selectAll("rect")
  .data(bins)
  u.enter()
  .append("rect")
  .merge(u)
  .transition()
  .duration(1000)
    .attr("x", 1)
    .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + yscale(d.length) + ")"; })
    .attr("width", function(d) {  if(xscale(d.x1) - xscale(d.x0) -1< 0) {console.log(d.x1+" "+d.x0)} return xscale(d.x1) - xscale(d.x0) -1;  })
    .attr("height", function(d) { return svgheight - yscale(d.length); })
    .style("fill", function(d){ return "rgb(0,100,"+(d.length*15)+")"});

  u.exit()
    .remove()

  d3.selectAll("rect").on("mouseover", function(d){
    console.log("in mouseover d is:"+d+" this is: "+ d3.select(this))
    console.log(d3.select(this),this)
      //changing bar color on hover:
      d3.select(this)
      .style("fill", "red")
      //making the bar higher and wider:
      .attr("width", function(d) {  if(xscale(d.x1) - xscale(d.x0) -1< 0) {console.log(d.x1+" "+d.x0)} return xscale(d.x1) - xscale(d.x0) -0.3;  })
      .attr("height", function(d) { return svgheight - yscale(d.length)+6; })
      .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + (yscale(d.length)-6) + ")"; })
      //adding labels

      d3.select(this.parentNode)
      .append("text")
      .transition().duration(1000)
      .attr("text-anchor", "middle") 
      
      
      .text(d.length)
      .attr("x", 1)
      .attr("y", function(){ return xscale(d.x1) - xscale(d.x0) -40})
      .attr("transform", function() { return "translate(" + (xscale(d.x0)+((xscale(d.x1) - xscale(d.x0))/2)) + "," + yscale(d.length) + ")"; })

      .attr("font-size", 15+"px")
      .style("fill", "black")
      .attr("id", "label")

  })
    .on("mouseout", function(d){
      d3.select(this)
      .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + yscale(d.length) + ")"; })
      .attr("width", function(d) {  if(xscale(d.x1) - xscale(d.x0) -1< 0) {console.log(d.x1+" "+d.x0)} return xscale(d.x1) - xscale(d.x0) -1;  })
      .attr("height", function(d) { return svgheight - yscale(d.length); })
      .style("fill", function(d){ return "rgb(0,100,"+(d.length*15)+")"});
  
      //removing the label on mouseout:
      d3.select("#label").remove();
    })

  //drag function to update bins
  var x0, x1;
  var body = d3.selectAll("body").call(d3.drag()
  .on("start", function(){
      x0 = d3.event.x;
    console.log("drag started! at: "+x0);
  })
  .on("end", function(){
    console.log("drag ended")
      x1 = d3.event.x;
    console.log("drag ended! at: "+x1);
    var changeX = x1-x0;
    console.log("x init: "+x0+ "x final: "+x1)
    if(x1>x0){
      numbins-=10;
      console.log("moved right by!"+changeX)
      console.log("#bins: "+numbins)
      updateHist(numbins, xscale, yscale, xAxis, yAxis);
    }
    if(x1==x0){
      console.log("no change in x")
    }
    else if(x1<x0){
      numbins+=10;
      console.log("moved left by!"+changeX)
      console.log("#bins: "+numbins)
      updateHist(numbins, xscale, yscale, xAxis, yAxis);
    }
    }));
}

function updateHist(numbins, xscale, yscale, xAxis, yAxis){
  console.log(xscale);
  console.log();
  //=============== Creating the histogram ====================================
  var histogram = d3.histogram()
  .domain(xscale.domain())  
  .thresholds(xscale.ticks(numbins)); 

  //================== Updating the number of bins in the left button==========
  d3.select("#bins").selectAll("*").remove();
  console.log("adding #bins code:"+numbins);
  d3.select("#bins").append("text").text("#Bins: "+numbins).attr("class","bins-show");

  //=============== Setting the bins by using the function =====================
  var bins = histogram(arr); //===== this creates the bins with x0 as the lower bound and x1 as the upper bound
  console.log("in update function now! updating histogram"+bins)
  yscale.domain([0, d3.max(bins, function(d){ return d.length;})])
  yAxis.transition()
        .duration(1000)
        .call(d3.axisLeft(yscale));

  //============== Appending the rectangles to the svg using bins ==============
  var u = svg.selectAll("rect")
  .data(bins)
  u.enter()
  .append("rect")
  .merge(u)
  .transition()
  .duration(1000)
    .attr("x", 1)
    .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + yscale(d.length) + ")"; })
    .attr("width", function(d) {  if(xscale(d.x1) - xscale(d.x0) -1< 0) {console.log(d.x1+" "+d.x0)} return xscale(d.x1) - xscale(d.x0) -1;  })
    .attr("height", function(d) { return svgheight - yscale(d.length); })
    .style("fill", function(d){ return "rgb(0,100,"+(d.length*15)+")"});

    u.exit()
    .remove()

    d3.selectAll("rect").on("mouseover", function(d){
      console.log("in mouseover d is:"+d+" this is: "+ d3.select(this))
      console.log(d3.select(this),this)
        //changing bar color on hover:
        d3.select(this)
        .style("fill", "red")
        //making the bar higher and wider:
        .attr("width", function(d) {  if(xscale(d.x1) - xscale(d.x0) -1< 0) {console.log(d.x1+" "+d.x0)} return xscale(d.x1) - xscale(d.x0) -0.3;  })
        .attr("height", function(d) { return svgheight - yscale(d.length)+6; })
        .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + (yscale(d.length)-6) + ")"; })
        //adding labels
  
        d3.select(this.parentNode)
        .append("text")
        .transition().duration(1000)
        .attr("text-anchor", "middle") 
        
        
        .text(d.length)
        .attr("x", 1)
       // .attr("y", function(){ return svgheight - yscale(d.length)-3; })
        .attr("transform", function() { return "translate(" + (xscale(d.x0)+((xscale(d.x1) - xscale(d.x0))/2)) + "," + (yscale(d.length)-8) + ")"; })
  
        .attr("font-size", 15+"px")
        .style("fill", "black")
        .attr("id", "label")
  
    })
      .on("mouseout", function(d){
        d3.select("#label").remove();

        d3.select(this)
        .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + yscale(d.length) + ")"; })
        .attr("width", function(d) {  if(xscale(d.x1) - xscale(d.x0) -1< 0) {console.log(d.x1+" "+d.x0)} return xscale(d.x1) - xscale(d.x0) -1;  })
        .attr("height", function(d) { return svgheight - yscale(d.length); })
        .style("fill", function(d){ return "rgb(0,100,"+(d.length*15)+")"});
    
        //removing the label on mouseout:
       
      })
  }
