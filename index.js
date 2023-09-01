const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

const dataObject = require('./scripts/import_data');


// Serve static files (HTML, JavaScript, etc.)
app.use(express.static(path.join(__dirname, 'public')))

// API endpoint to serve data
app.get('/api/data', async (req, res) => {
    try {
        const data = await dataObject();
        res.json(data);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
  });