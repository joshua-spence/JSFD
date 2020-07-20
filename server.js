const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//get home page
app.get('/index', (req, res) => {
    res.render('index');
});

//get funeral page
app.get('/funeral', (req, res) => {
    res.render('funeral');
});

//get bespoke page
app.get('/bespoke', (req, res) => {
    res.render('bespoke');
});

//get wedding page
app.get('/wedding', (req, res) => {
    res.render('wedding');
});

























app.listen(process.env.PORT || 3000, () => {
    console.log('server connected');
});



















