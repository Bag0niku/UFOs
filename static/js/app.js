// import the data from data.js
const UFO = data

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

function handleClick() {
    let filteredData = UFO;
    let date = d3.select("#datetime").property("value");
    
    if(date) { filteredData = filteredData.filter(row => row.datetime === date) }
    buildTable(filteredData)

}

d3.select("#filter-btn").on("click", handleClick)
buildTable(UFO);