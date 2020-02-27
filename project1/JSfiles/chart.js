var numbins = 30;

//======== Fetching metadata object for info about the data fields====================
var datafield = myfields;

//======= Initializing columns list for dropdown============ =========================
var columns = ['Select an item!'];

//======= set the dimensions and margins of the graph =======
var marginTop = 30, marginRight = 30, marginBottom= 70, marginLeft = 90;
var marginLR = marginLeft + marginRight
var marginTB = marginTop + marginBottom

//==============setting the svg height and width=================
var svgwidth = 900 - marginLR,
    svgheight = 600 - marginTB;

//===== function to set the svg object to the chart div ===============

function setCanvas(selectedAttribute){
  var svg = d3.select("#chart")
              .append("svg")
                  .attr("width", svgwidth + marginLR)
                  .attr("height", svgheight + marginTB)      
              .append("g")
                  .attr("transform",
                      "translate(" + marginLeft + "," + marginTop + ")")
  setAxes(svg, selectedAttribute);
  return svg;
}
//================= function to handle change on change in dropdown =====
function changingDropdown(data){
  
  // when the button is selected, update the data!
  d3.select("#selectButton").on("change", function(d) {
    var userchoice = d3.select(this).property("value")
    console.log("the option selected is: "+ userchoice)
    update(userchoice, data)
  })
}

//=====================================================================
//======== function to set axes =======================================
function setAxes(svg, selectedAttribute){
  //adding names to X and Y axes
  var xAxis = svg.append("g")
  .attr("transform", "translate(0," + svgheight + ")")

  var yAxis = svg.append("g")
      // now add titles to the axes
      svg.append("text")
      .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
      .attr("transform", "translate("+(-40)+","+(svgheight/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
      .text("Frequency")
      .attr("font-size",20+"px")
      .style("text-transform", "uppercase")

      //"transform", "translate(0," + svgheight + ")"
      console.log("appending axes");

      svg.append("text")
      .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
      .attr("transform", "translate("+ (svgwidth/2) +","+(svgheight+marginBottom)+")")  // centre below axis
      .text(selectedAttribute)
      .attr("font-size",20+"px")
      .style("text-transform", "uppercase")
}        

//=========================================================================================================
//=============== fetching the dataset=====================================================================
function createChart(selectedAttribute){
  d3.csv("https://raw.githubusercontent.com/nikitagupta0809/D3Tutorials/master/moviesdataset.csv", d3.autoType)
  .then(function(data) {

  // checking if the data was fetched successfully
  // console.log("fetched data successfully!" +data)

  // pushing the column names to an array called columns
  d3.keys(data[0]).forEach(function(item)
  {
    columns.push(item);
  })
  
  // adding the columns to the dropdown dynamically
  d3.select("#selectButton")
      .selectAll('myOptions')
        .data(columns)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; })

  changingDropdown(data);
  }
)}
  
// updating the chart according to which attribute was selected
function update(selectedAttribute, data) 
{
  d3.selectAll("svg").remove(); 
  svg = setCanvas(selectedAttribute);
  var typeofattr;
  console.log("the selected attribute is:" );
  arr = data.map(function(d)
  {
    typeofattr = typeof(d[selectedAttribute]);
    console.log("type of: "+typeof(d[selectedAttribute]))
    return (d[selectedAttribute]);
  })
  console.log(arr);
  if(selectedAttribute == "year"){
    updateCategorical(arr, selectedAttribute, svg, data);
  
  }
  else if(typeofattr=="string")
  {
    updateCategorical(arr, selectedAttribute, svg, data);
  }
  else
  {
    updateNumerical(arr, selectedAttribute, svg, data);
  }
}

createChart("country");
