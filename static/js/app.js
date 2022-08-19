function createTable(data) {
    tbody.html("");  // clear the data from the table for the new freshly filtered results
    
    // iterate through the data building the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append(td);
            cell.text(val);

        });
    });

;}