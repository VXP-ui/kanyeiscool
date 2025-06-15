const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post('/log-ip', (req, res) => {
    const { ip, city, country } = req.body;
    const logEntry = `${new Date().toISOString()} - IP: ${ip} - City: ${city} - Country: ${country}\n`;
    fs.appendFileSync('ip_log.txt', logEntry);
    res.sendStatus(200);
});

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`IP logger backend running on http://localhost:${PORT}`);
});