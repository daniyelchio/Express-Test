const express = require('express');
const app = express();

/* app.use((req, res) => {
    console.log("We got a new request");
    res.send('Request received');
}) */

app.get('/',(req, res) => {
    console.log('Home requested');
    res.send('Home Page');
})

app.get('/cats',(req, res) => {
    console.log('Cats requested');
    res.send('Meow');
})

app.get('/dogs',(req, res) => {
    console.log('Dogs requested');
    res.send('Woof');
})

app.get('*',(req, res) => {
    console.log('Unknown Request');
    res.send('Request is unknown');
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})