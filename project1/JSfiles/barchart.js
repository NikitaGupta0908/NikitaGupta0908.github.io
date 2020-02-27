
// ============== This file contains updateCategorical function =============================

// if the feature is a categorical feature:
function updateCategorical(arr, selectedAttribute, svg, data)
{
  d3.select("#bins").selectAll("*").remove();
  d3.select("#info").selectAll("*").remove();
  console.log("adding text node:"+datafield[selectedAttribute]);

  d3.select("#info").append("text").text(datafield[selectedAttribute])
  
  var xAxis = svg.append("g")
  .attr("transform", "translate(0," + svgheight + ")")

  var yAxis = svg.append("g")

  var x = d3.scaleBand()
      .range([ 0, svgwidth])
      .padding(0.4);
  var y = d3.scaleLinear()
  .range([ svgheight, 0]);

  mapped = getCount(arr);
  console.log("mapped");
  console.log(mapped);
  var cat = getArray(mapped);
  console.log("array: ");
  console.log(cat);
  

  x.domain(cat.map(function(d){ return d[0]}));
  xAxis.transition().duration(1010).call(d3.axisBottom(x));


  // Add Y axis
  maxY = d3.max(cat, function(d) { console.log(d[1]); return +d[1] });
  minY = d3.min(cat, function(d) { console.log(d[1]); return +d[1] });
  console.log("max and min of cat:"+maxY+" "+minY);

  y.domain([minY, maxY]);
  yAxis.transition().duration(1010).call(d3.axisLeft(y));
      
  var u = svg.selectAll("rect")
    .data(cat)
    .enter()
    .append("rect")
    .attr("x", function(d) { console.log("x: "+x(d[0]));return x(d[0]); })
    .attr("y", function(d) { console.log("y: "+y(d[1]));return y(d[1]); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return svgheight - y(d[1]); })
    .attr("fill", function(d){
      return "rgb(0,100,"+(d[1]*15)+")"
    });

    u.on("mouseover", function(d,i){    
      console.log("dhgf is:"+d)
      //changing bar color on hover:
      d3.select(this)
      .attr("fill", "#d10754");
    
      //making the bar higher and wider:
      d3.select(this)
      .transition().duration(500)
      .attr("x", function() { console.log("in row/l"+d[0]); return (x(d[0])-2.5);})
      .attr("width", x.bandwidth() + 5)
      .attr("height", function() { return svgheight - y(d[1]) + 5; }) 
      .attr("y", function() { return (y(d[1])-5) })

      //adding labels: 
      console.log("Inside func "+i);
      point = [];
      point.push(d[0]);
      point.push(d[1])
      
      console.log("point is: "+point+"type is:"+typeof(point));
      var offset = x.bandwidth()/2;
      console.log("offset for labels :"+offset);
      var labels = d3.select(this.parentNode)
      .append("text")
      .transition().duration(1000)
      .attr("text-anchor", "middle") 
      .text(point[1])
      .attr("x", function() { console.log("x: "+x(point[0])); return x(point[0])+offset; })
      .attr("y", function() { console.log("y in hover: "+y(point[1])); return y(point[1])-12;})
      .attr("font-size", 15+"px")
      .style("fill", "black")
      .attr("id", "label")
      
      })

    .on("mouseout", function(d,i){
    
      //removing bar color on mouseout:
      d3.select(this)
      .attr("fill", function(d){
        return "rgb(0,100,"+(d[1]*15)+")"
      });
      //removing the increased height and width on mouseout
    
      d3.select(this)
      .transition().duration(1000)
      .attr("width", x.bandwidth())
      .attr("height", function() { return svgheight - y(d[1]); }) 
      .attr("x", function() { console.log("x: "+x(d[0]));return x(d[0]); })
      .attr("y", function() { console.log("y: "+y(d[1]));return y(d[1]); })
    
      //removing the label on mouseout:
      d3.select("#label").remove();
    });
  }