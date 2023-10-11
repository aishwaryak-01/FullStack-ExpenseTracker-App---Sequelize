const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const expenseRoutes = require('./routes/expenseRoutes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', expenseRoutes);
sequelize.sync().then(() => { 
app.listen(3000) })
.catch(err => console.log(err));