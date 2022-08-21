// import the data from data.js
const UFO = data
var searchFilter = {}


// define the function to build the table with provided data
function buildTable(tableData) {
    // clear out any existing data in the table and append refreshed data
    let tbody = d3.select("tbody");
    tbody.html("");

    // loop throu each sighting making it a row
    tableData.forEach(row => {
        let tr = tbody.append("tr");
        // loop through each data point and append it to the row as a cell in the table
        Object.values(row).forEach(cell => tr.append("td").text(cell));
        
    });
}

function filterTable() {
    let filteredData = UFO;

    // loop through all of the filters and keep any data that matches the filters
    Object.entries(searchFilter).forEach(function([key, value]){
        filteredData = filteredData.filter((row) => row[key] === value);

    });  

    // build the table from the filtered Data
    buildTable(filteredData);
    

}



function updateFilters() {
    const categories = ["#datetime", "#city", "#state", "#country", "#shape"]
    for (i=0; i<categories.length; i++) {
        let changeElement = d3.selectAll(categories[i]);
        let elementValue = changeElement.property("value");
        let elementID = changeElement.property("id");
        
        if(elementValue !== "") { searchFilter[elementID] = elementValue }
        else {delete searchFilter[elementID]}
      
    }
    
    filterTable()
}


d3.select("#filter-btn").on("click", updateFilters)
buildTable(UFO);