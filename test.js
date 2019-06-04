var express = require('express'),
    app = express();

app.get('/', (req, res) => {
    console.log('\u2019');
    res.send('Logged character');
});

app.listen(8080);

module.exports = app ;