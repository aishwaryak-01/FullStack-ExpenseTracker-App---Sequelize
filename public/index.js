document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const expense = document.getElementById('expense').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
axios.post('/expense/add-expense', { expense, description, category }).then(response => {
            console.log(response);
            showUser(response.data.user)})
        .catch(error => {
            console.error(error)});
    document.getElementById('expense').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
});
window.addEventListener('DOMContentLoaded', () => {
axios.get('/expense/get-expense').then(response => {
            const users = response.data.users;
            users.forEach(user => {
                showUser(user)})})
        .catch(error => console.error(error));
});
function showUser(user) {
    const userList = document.getElementById('userList');
    const li = document.createElement('li');
    li.textContent = `Expense: ${user.expense}, Description: ${user.description}, Category: ${user.category}`;
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        editUser(user.id, user.expense, user.description, user.category)})
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        deleteUser(user.id)});
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    userList.appendChild(li);
}
function editUser(id, expense, description, category) {
    const newUsername = prompt('Enter new expense:', expense);
    if (newUsername !== null)
    {
        axios.put(`/expense/edit-expense/${id}`, { expense: newUsername, description, category }).then(response => {
                alert('User updated successfully!');
                location.reload()})
            .catch(error => console.error(error));
    }}
function deleteUser(id)
{
    if (confirm('Are you sure you want to delete this user?'))
    {
        axios.delete(`/expense/delete-expense/${id}`).then(() => {
                alert('User deleted successfully!');
                location.reload()})
            .catch(error => console.error(error));
    }}