const fs = require('fs').promises;
const path = require('path');

async function readCSVFileAndExportArray() {
    const filePath = path.join(__dirname, 'sat_realtime_telemetry.csv'); // Update the file path

    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.trim().split('\n'); // Trim leading/trailing whitespace and split lines
        const dataArray = [];

        for (let i = 0; i < lines.length; i++) {
            const columns = lines[i].split(',');
            dataArray.push(columns);
        }

        return dataArray;
    } catch (err) {
        console.error('Error reading CSV file:', err);
        throw err;
    }
}

async function dataObject() {
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
        return dataObj;

    } catch (err) {
        console.error('Error:', err);
    }
}

module.exports = dataObject;
