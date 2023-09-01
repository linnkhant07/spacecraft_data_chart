const Chart = require("chart.js")
const readCSVFileAndExportArray = require('./import_data');

async function main() {
    try {
        const data = await readCSVFileAndExportArray();
        
        // Extract headers from the first row
        const headers = data[0];

        // Initialize an object to store data by headers
        const dataObj = {};

        // Initialize arrays for each header
        headers.forEach(header => {
            dataObj[header] = [];
        });

        // Iterate through the remaining rows and assign data to the corresponding header
        for (let i = 1; i < data.length; i++) {
        const rowData = data[i];
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            dataObj[header].push(rowData[j]);
        }
        }
        console.log(dataObj)

    } catch (err) {
        console.error('Error:', err);
    }
}

main();



