// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(tableData);

// Loop through data and console.log each ufo report object
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    // append table row
    var row = tbody.append("tr");
    // use object.entries to console.log each report value
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
    // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// reference the filter button
var button = d3.select("#filter-btn");

// button function
button.on("click", function() {

    // result placement
    tbody.html("");

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);

    console.log(filteredData);

    // adding filtered data
    filteredData.forEach(function(results) {
        console.log(results);
        // add row
        var row = tbody.append("tr");
        // add values
        Object.entries(results).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});