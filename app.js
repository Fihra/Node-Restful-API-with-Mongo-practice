const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// })

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/posts', (req, res) => {
    res.send("We are on posts");
})

//Connect to DB
mongoose.connect('localhost:27017/UserDB', {useNewUrlParser: true}, () => {
    console.log("Connected to DB!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});