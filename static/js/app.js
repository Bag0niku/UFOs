// import the data.js file
const tableData = data;

function buildTable(data) {
    tbody.html("");  // clear the data from the table for the new freshly filtered results
    
    // iterate through the data building the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append(td);
            cell.text(val);   // each value in the row is a cell in the table row

        });
    });

}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // check for filter parameters
    if (date) {
        filteredData.filter(row => row.datetime === date);
    }

    // build the table from the filtered Data
    buildTable(filteredData);

}


// event code attached to the filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// initial load of the data on the webpage
buildTable(tableData);