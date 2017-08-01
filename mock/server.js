let express = require('express');
var app = express()
var appData = require('./positionData.json')

app.get('/api/List',(req,res)=>{
    res.send(JSON.parse(JSON.stringify(appData)));
});

app.listen(3000);
