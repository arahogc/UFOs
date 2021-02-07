// import the data from data.js
const tableData = data; 

// Reference the html table using d3
var tbody = d3.select("tbody"); 

// Build a table 
function buildTable(data){
    //First, clear any existing data
    tbody.html("");
    //Next, loop through each objet in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the the table body
        let row =tbody.append("tr");

        //Loop through each field in the dataRow and add
        //each value as a table cell(td)
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// create a function to "listen" to clicks us d3 library
function handleClick() {
    let date= d3.select("#datetime").property("value");
    let filteredData = tableData;
    // if-statement, === looks for exact matches only
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Rebuild the table using the filtered data
    //@Note: if no date was entered, then filteredData will
    //just be the original tableData. 
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll("#filtered-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);


