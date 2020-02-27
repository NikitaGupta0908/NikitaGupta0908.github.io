
//============ Includes the helper functions for the program ================//

//== converts the categorical variable to an object with key-value pair where key is the variable and value is the frequency//

function getCount(attribute) {
    var frequency = {};
    attribute.forEach(function(c) {
        if (!frequency[c]) {
            frequency[c] = 0;
        }
        frequency[c] += 1;
    });
    return frequency;
}

//======== helper function to create an array out of the mapped object=====

function getArray(object){
    result = []
    for (const property in object) {
      pair = [];
      pair.push(property);
      pair.push(object[property]);
      result.push(pair);
    }
    var filtered =  result.sort((b,a)=>(a[1]-b[1]))
    filtered = filtered.splice(0, 10);
    //result.filter((row) =>  row[1] > 1);
    console.log("fil");
    console.log(filtered);
  
    return filtered;
  }
  