document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Sample users array
  const users = [
    { userid:'T1001', username: 'admin', password: 'password', name: 'Admin', surname: 'User', phonenumber: '123-456-7890', email: 'admin@example.com', dob: '01/01/1980', doj: '01/01/2020' },
    { userid:'T1002', username: 'SaiTeja1', password: 'SaiTeja@123', name: 'SaiTeja', surname: 'R', phonenumber: '234-567-8901', email: 'SaiTeja@gmail.com', dob: '01/01/1990', doj: '01/01/2021' },
    { userid:'T1003', username: 'Shravan4', password: 'Shravan@123', name: 'Shravan kumar', surname: 'N', phonenumber: '345-678-9012', email: 'shravankumar@gmail.com', dob: '01/01/1995', doj: '01/01/2022' }
  ];
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'home.html';  // Redirect to home page
  } else {
    document.getElementById('error-message').textContent = 'Invalid username or password';
  }
});
