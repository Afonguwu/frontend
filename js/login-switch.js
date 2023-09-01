const loginButton = document.getElementById('loginButton');
const profileButton = document.getElementById('profileButton');

loginButton.addEventListener('click', () => {
  // Hide the login button
    loginButton.style.display = 'none';
  // Show the profile button
    profileButton.style.display = 'block';
});