const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000...');
    console.log('http://localhost:3000')
});
