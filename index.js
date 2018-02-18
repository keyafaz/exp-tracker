const express = require('express');
const path = require('path');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const PORT = process.env.PORT || 5000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));