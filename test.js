var express = require('express'),
    app = express(),
    windows1252 = require('windows-1252');

app.get('/', (req, res) => {
    console.log(windows1252.encode('’'));
    res.send('Logged character');
});

app.listen(8080);

module.exports = app ;