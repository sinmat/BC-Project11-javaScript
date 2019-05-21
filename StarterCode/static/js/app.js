// from data.js
let tableData = data;

let tbody = d3.select('tbody');

// function build table

function buildTable(data){
    //first, clean out existing data
    tbody.html("");

    data.forEach((dataRow) => {
        console.table(dataRow);
        let row = tbody.append('tr');

        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        })
    })
};

// event that call function named handleClick

function handleClick(){ //function declaration
    d3.event.preventDefault(); // prevents form from refreshing

    let date = d3.select('#datetime').property('value');
    let filterData = tableData;

    // check to see if the date was entered and filter the data using that date;
    if (data) {
        // apply filter to the table data, to show only the rows where the datetime value matches the filter value

        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
};

d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);




