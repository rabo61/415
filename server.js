var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
var tickets = ;

router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});

router.get('/list', function(req, res) {
    res.status(200).send('Get all tickets');
});

router.get('/ticket/id', function(req, res) {
    res.status(200).send('Get single ticket');
});

router.post('/ticket', function(req, res) {
    
});

app.get("/", function(req, res) {
    res.send("Welcome to my tickets app");
});

app.use('/api', router);
app.use('/rest', router)

app.listen(port, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.blue('Magic Happens on Port 69'));
    }
});