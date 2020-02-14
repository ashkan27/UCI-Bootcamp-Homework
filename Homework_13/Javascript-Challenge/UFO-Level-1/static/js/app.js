// from data.js
var tableData = data;

function ufotable(ufodata) {

    var body = d3.select("tbody"); // table ref
    body.html(""); // To clear table

    // Loop through each object to add rows
    ufodata.forEach((r) => {
    var uforow = body.append("tr");

    // Loop through each row to add cells
      Object.values(r).forEach((value) => {
        var cell = uforow.append("td");
          cell.html(value);
        }
      );
    });
  }

  ufotable(tableData); // Call the function


  // A function to clear the table. we can all it if we want to.
  function cleartable(){
    var body = d3.select("tbody"); // table ref
    body.html(""); // To clear table
  }
  // To clear the table we can call "cleartable" function
//   cleartable()


// to create an event listener
var click = d3.selectAll("#filter-btn");

click.on("click", function(){

    var filteredData = tableData; //copy the data
    var dateinput = d3.select("#datetime").property("value"); // to get datetime value
    
    // if dateinput is in our record, show the filtered results.
    if (dateinput) {

        filteredData = filteredData.filter(r => r.datetime === dateinput);
        ufotable(filteredData); // Call the function with filtered data
    }

    // if dateinput is not in our record, show this error.
    if (filteredData.length == 0) {
        d3.select("tbody").append("tr").append("td").attr("colspan", 20).html("<h3>Sorry! No records were found! Try another date! e.g. (1/2/2010)</h3>");
      };

});

