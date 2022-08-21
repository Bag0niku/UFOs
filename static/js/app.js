// import the data from data.js
const UFO = data

// define the function to build the table with provided data
function buildTable(tableData) {
    // clear out any existing data in the table and append refreshed data
    let tbody = d3.select("tbody");
    tbody.html("")

    // loop throu each sighting making it a row
    tableData.forEach(row => {
        let tr = tbody.append("tr");
        // loop through each data point and append it to the row as a cell in the table
        Object.values(row).forEach(cell => tr.append("td").text(cell));
        
    });
}


buildTable(UFO);