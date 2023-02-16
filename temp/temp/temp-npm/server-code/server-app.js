const express = require('express');
const app = express();

// Routes
function rootRoute(req, res) {
    res.send('Hello World!');
}

function aboutRoute(req, res) {
    res.send('About page');
}

app.get('/', rootRoute);
app.get('/about', aboutRoute);

// Statiske sider
const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

// Start server
app.listen(3000, () => console.log('Example app listening on port 3000!'));