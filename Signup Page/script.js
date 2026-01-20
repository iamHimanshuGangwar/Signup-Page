const message = document.getElementById("message");

message.innerHTML = "";

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const repassword = document.getElementById("repassword").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  // Clear previous message
  message.innerHTML = "";

  // Validation: Check all fields are filled
  if (!username || !email || !password || !repassword) {
    message.innerHTML = `<div class="alert alert-danger">❌ All fields are required</div>`;
    return;
  }

  // Validation: Check gender is selected
  if (!gender) {
    message.innerHTML = `<div class="alert alert-danger">❌ Please select a gender</div>`;
    return;
  }

  // Validation: Check password length
  if (password.length < 6) {
    message.innerHTML = `<div class="alert alert-danger">❌ Password must be at least 6 characters</div>`;
    return;
  }

  // Validation: Check passwords match
  if (password !== repassword) {
    message.innerHTML = `<div class="alert alert-danger">❌ Password and Re-password must be the same</div>`;
    return;
  }

  // All validations passed - Save user data
  const userData = {
    username,
    email,
    gender: gender.value
  };

  // Save user (LocalStorage - demo purpose)
  localStorage.setItem("user", JSON.stringify(userData));

  message.innerHTML = `<div class="alert alert-success">
    ✅ Signup successful! Welcome ${username}!
  </div>`;

  // Clear form
  document.getElementById("signupForm").reset();
});