// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 90},
    width = 440 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barchart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var data = [
    {
        db:"Postgres",
        val:"90"
    },
    {
        db:"MongoDB",
        val:"40"
    },
    {
        db:"XML",
        val:"30"
    },
    {
        db:"Datalog",
        val:"30"
    },
]
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.db; }))
    .padding(.1);
  svg.append("g")
    .call(d3.axisLeft(y))

  //Bars
  rec = svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.db); })
    .attr("width", function(d) { return x(d.val); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#69b3a2")
    .on("mouseover", function(d){
        d3.select(this).attr("width", x(d.val*1.2));
        d3.select(this).attr("height", y.bandwidth()*1.1);
    })
    .on("mouseout", function(d){
        d3.select(this).attr("width", x(d.val));
        d3.select(this).attr("height", y.bandwidth());
    })