'use strict';
var path = require('path');
var express = require('express');

var app = express();
const port = process.env.PORT || 3000;

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', port);

app.listen(app.get('port'), function () {
    console.log(`listening at port ${port}`);
});