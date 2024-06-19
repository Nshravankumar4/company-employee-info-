document.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    document.getElementById('welcomeMessage').textContent = `${user.name} ${user.surname}!`;
  } else {
    document.getElementById('welcomeMessage').textContent = 'Welcome, Guest!';
  }

  document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  });

  document.getElementById('dashboardButton').addEventListener('click', function() {
    const employeeDetails = document.getElementById('employeeDetails');
    const projectDetails = document.getElementById('projectDetails');
    if (user) {
      document.getElementById('employeeUsername').textContent = user.username;
      document.getElementById('employeeEmail').textContent = user.email;
      document.getElementById('employeeUserID').textContent = user.userid;
      document.getElementById('employeeDOB').textContent = user.dob;
      document.getElementById('employeeDOJ').textContent = user.doj;
      document.getElementById('employeePhone').textContent = user.phonenumber;
      employeeDetails.style.display = 'block';
      projectDetails.style.display = 'none';
    } else {
      employeeDetails.style.display = 'none';
      projectDetails.style.display = 'none';
    }
  });

  document.getElementById('projectsButton').addEventListener('click', function() {
    const projectDetails = document.getElementById('projectDetails');
    projectDetails.style.display = 'block';
    document.getElementById('employeeDetails').style.display = 'none';
  });
});
