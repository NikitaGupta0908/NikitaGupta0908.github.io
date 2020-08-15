// set the dimensions and margins of the graph
var width = 
    height = 400
    margin = 20

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin
console.log("loaded")
// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#prog")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//tooltip
var line_tooltip = d3.select("#my_dataviz")
    .append("div")
    .attr("class","tooltip")
    .style("background-color", "black")
    .style("color", "white")
    .style("border-radius", "5px")
    .style("padding", "10px");

// Create dummy data
var data = {Java: 75, Python: 40, Cplusplus:30, JS:50 }

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#eb6383", "#fa9191", "#ffe9c5", "#b4f2e1"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(100)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)
  .on("mouseover", function(d){
      console.log(d['data'].key)
    d3.select(this).style("opacity",1);
    showTooltip(line_tooltip,(d['data'].key+": "+d.value));
    })
    // .on("mousemove", function(d){
    //     moveTooltip(line_tooltip);
    // })
    // .on("mouseleave", function(d){
    //     console.log("removing",d3.select(this))
    //     d3.select(this).style("opacity",0);
    //     hideTooltip(line_tooltip);
    // }); 
