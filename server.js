var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});

app.get("/", function(req, res) {
    res.send("welcome");
});

app.use('/api', router);

app.listen(port, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.blue('Magic Happens on Port 69'));
    }
});