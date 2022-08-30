const express = require('express');
const path = require('path')
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3001;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.listen(3001)