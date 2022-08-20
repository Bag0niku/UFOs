// import the data.js file
const tableData = data;
var tbody = d3.select("tbody");
filters = {}

function buildTable(data) {
    tbody.html("");  // clear the data from the table for the new freshly filtered results
    
    // iterate through the data building the table
    data.forEach(function(dataRow) {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach(function(val) {
            let cell = row.append("td");
            cell.text(val);   // each value in the row is a cell in the table row

        });
    });

}

function filterTable(){
    // ste the tableData to filteredData for filtering
    let filteredData = tableData;

    // loop through all of the filters and keep any data that matches the filters
    Object.entries(filters).forEach(function([key,value]){
        filteredData = filteredData.filter((row) => row[key]===value);

    });
    let date = d3.select("#datetime").property("value");
    

    // build the table from the filtered Data
    buildTable(filteredData);
}

function updatefilters() {
    let changeElement = d3.select(this).select("input");
    let elementValue = changeElement.property("value");
    let filterId = changeElement.attr("id");

    // check for filter parameters
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else { 
        delete filters[filterId];
    }    
    // filter the table
    filterTable();    
    }



// event code attached to the filter button
d3.selectAll("#filter-btn").on("change", updatefilters);

// initial load of the data on the webpage
buildTable(tableData);