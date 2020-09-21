const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8888';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('homepage', { title: 'Homepage' });
});

app.listen(port, () => {
    console.log(`The app took off on http://localhost:${port}`);
});