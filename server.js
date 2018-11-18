var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())

app.use('/', express.static('./'))

app.get('/test', (req, res) => {
    res.json({
        ok: true,
        msg: 'Received the request'
    })
});

app.listen(2000, function () {
    console.log("server is now running on 2000");
})
