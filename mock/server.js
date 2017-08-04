let express = require('express');
var app = express()
var appData = require('./positionData.json')
var schoolData = require('./schooldata.json')

app.get('/api/List',(req,res)=>{
    res.send(JSON.parse(JSON.stringify(appData)));
});

app.get('/api/map',(req,res)=>{
    res.send(JSON.parse(JSON.stringify(schoolData)));
});

app.listen(469);
