const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('How you doing!');
})
app.get('/bye', (req,res) => {
    res.send('Bye, Have a good day!');
})

app.listen(8080, ()=> {
    console.log('listening on port 8080')
})