const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sat_realtime_telemetry.csv'); // Update the file path

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading CSV file:', err);
        return;
    }

    const lines = data.split('\n');
    lines.forEach((line, lineNumber) => {
        const columns = line.split(',');
        console.log(`Line ${lineNumber + 1}:`, columns);
    });
});