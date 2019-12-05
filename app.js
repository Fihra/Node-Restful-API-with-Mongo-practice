const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware to start route when URL is '/posts'
app.use('/posts', postsRoute);

//Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// })

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World");
})

//Connect to DB
mongoose.connect('mongodb://localhost:27017/UserDB', {useNewUrlParser: true}, () => {
    console.log("Connected to DB!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});