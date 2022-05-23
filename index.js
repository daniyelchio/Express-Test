const express = require('express');
const app = express();

/* app.use((req, res) => {
    console.log("We got a new request");
    res.send('Request received');
}) */

app.get('/',(req, res) => {
    console.log('Home requested');
    res.send('Welcome to Home Page');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID: ${postId} in the ${subreddit} subreddit</h1>`);
})

app.get('/cats',(req, res) => {
    console.log('Cats requested');
    res.send('Meow');
})

app.get('/dogs',(req, res) => {
    console.log('Dogs requested');
    res.send('Woof');
})

app.get('/search',(req, res) => {
    const { q } = req.query;
    if (!q){
        res.send('Nothing found if nothing searched');
    }else{
    res.send(`<h1>Search results for: ${q}</h1>`);
}})

app.get('*',(req, res) => {
    console.log('Unknown Request');
    res.send('Request is unknown');
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})