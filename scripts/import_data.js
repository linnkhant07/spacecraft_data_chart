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

module.exports = readCSVFileAndExportArray;
