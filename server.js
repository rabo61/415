const express = require('express');
const app = express();
const router = express.Router();
var port = process.env.PORT || 8080;
const tickets ;

app.get("/", (req, res)=>{
    res.send('Hello')
});

// list of ticket
router.get('/list', (req, res)=>{
    res.send(tickets);
});

//single ticket
router.get('/ticket/:id', (req, res)=>{
    const ticket = tickets.find(t => t.id === parseInt(req.params.id));
    if(!ticket) {
        return res.status(404).send("The ticket of given id is not Found");
    }
});

//create a ticket
router.post('/ticket', (req,res)=>{
    const ticket ={
        id: tickets.length+1,
        name: req.body.name,
        age: parseInt(req.body.age),
        major: req.body.major

    };
    if( !ticket.name ||
        !ticket.age ||
        !ticket.major
        ){
            return res.status(404).send('Incomplete Ticket info');
        }
    tickets.push(ticket);
    res.send(ticket);    
})

//get tickets by major
router.get('/ticket/major/:major', (req, res)=>{
    const ticket = tickets.filter(t => t.major.toLowerCase() === req.params.major.toLowerCase());
    console.log(ticket);
    if(!ticket.length) {
        return res.status(404).send('Ticket of this major is not Found');
    }
    res.send(ticket);
})

//get ticket by name and age
router.get('/ticket/na/:name/:age', (req, res) =>{
    const name = req.params.name.toLowerCase();
    const age = parseInt(req.params.age);

    const ticket = tickets.filter(t => (t.age === age && t.name.toLowerCase() === name));

    if(!ticket.name || !ticket.age){
        return res.send("Ticket of this name or age is not found")
    }
    res.send(ticket);
})

app.listen(port, (req, res)=>{
console.log("Listening....." + port);
});