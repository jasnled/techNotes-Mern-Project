const express = require('express');
const app = express();
const path = require('path'); 
const PORT = process.env.PORT || 3500;

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'));

app.all('*', (req, res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if(req.accepts('json')){
        res.send({ message: '404 Not found'});
        console.log('else if')
    } else {
        res.type('txt').send('404 Not Found');
        console.log('else if');
    }
});
app.listen(PORT, ()=>{console.log(`listing on port ${PORT}`)});

