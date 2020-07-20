const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

//get home page
app.get('/', (req, res) => {
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

























app.listen(PORT, () => {
    console.log('server connected');
});



















