const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes/api');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware for connecting back to front

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

// open react app during production build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});