const User = require('../models/Expense');
exports.getExpenses = (req, res) => {
    User.findAll().then(users => { res.render('index', { users })})
        .catch(err => console.log(err));
};
exports.addExpenses = (req, res) => {
    const { expense, description, category } = req.body;
    User.create({ expense, description, category }).then(() => { res.redirect('/')})
        .catch(err => console.log(err));
};
exports.postEditExpense = (req, res) => {
    const userId = req.params.id;
    const { expense, description, category } = req.body;
    User.findByPk(userId).then(user => {
            user.expense = expense;
            user.description = description;
            user.category = category;
            return user.save()})
        .then(() => { res.redirect('/')})
        .catch(err => console.log(err));
};
exports.getEditExpense = (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId).then(user => { res.render('edit', { user })})
        .catch(err => console.log(err));
};
exports.getDeleteExpense = (req, res) => {
    const userId = req.params.id;
    User.destroy({ where: { id: userId }}).then(() => { res.redirect('/') })
    .catch(err => console.log(err));
};
