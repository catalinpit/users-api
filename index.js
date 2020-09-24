const express = require('express');
const path = require('path');
const usersRoute = require('./routes/users');

require('dotenv/config');

const app = express();
const port = process.env.PORT || '8888';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 

app.use('/', usersRoute);

app.get("/login", function(req, res) {
    res.render("login", { title: 'Login Page' });
});

app.listen(port, () => {
    console.log(`The app took off on http://localhost:${port}`);
});