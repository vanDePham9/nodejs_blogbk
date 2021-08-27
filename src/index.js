const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const routes = require('./routes');

const db = require('./config/db');

//Connect to db
db.connect();

const app = express();
const port = 3000;

//const routes = require(.\\routes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //middleware xử lý giữ liệu từ form submit lên server
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
    
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourse', 'views'));

//Routes init
routes(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
