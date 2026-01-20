// ================= REGEX =================
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ================= DOM ELEMENTS =================
const message = document.getElementById("message");
const signupForm = document.getElementById("signupForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repasswordInput = document.getElementById("repassword");
const genderInputs = document.querySelectorAll('input[name="gender"]');

// ================= HELPER FUNCTIONS =================
function showError(msg) {
  message.innerHTML = `<div class="alert alert-danger">${msg}</div>`;
}

function showSuccess(msg) {
  message.innerHTML = `<div class="alert alert-success">${msg}</div>`;
}

function clearMessage() {
  message.innerHTML = "";
}

// ================= REAL-TIME VALIDATION =================
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
repasswordInput.addEventListener("input", validatePasswordMatch);

genderInputs.forEach(radio => {
  radio.addEventListener("change", validateGender);
});

// ================= VALIDATION FUNCTIONS =================
function validateUsername() {
  const username = usernameInput.value.trim();

  if (!username) {
    showError("❌ Username is required");
    return false;
  }
  if (username.length < 3) {
    showError("❌ Username must be at least 3 characters");
    return false;
  }
  if (username.length > 20) {
    showError("❌ Username must not exceed 20 characters");
    return false;
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    showError("❌ Username can contain only letters, numbers, _ and -");
    return false;
  }

  clearMessage();
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();

  if (!email) {
    showError("❌ Email is required");
    return false;
  }
  if (!emailRegex.test(email)) {
    showError("❌ Invalid email format");
    return false;
  }

  clearMessage();
  return true;
}

function validatePassword() {
  const password = passwordInput.value.trim();

  if (!password) {
    showError("❌ Password is required");
    return false;
  }
  if (password.length < 6) {
    showError("❌ Password must be at least 6 characters");
    return false;
  }
  if (password.length > 50) {
    showError("❌ Password must not exceed 50 characters");
    return false;
  }

  clearMessage();
  return true;
}

function validatePasswordMatch() {
  const password = passwordInput.value.trim();
  const repassword = repasswordInput.value.trim();

  if (!repassword) {
    showError("❌ Please confirm your password");
    return false;
  }
  if (password !== repassword) {
    showError("❌ Passwords do not match");
    return false;
  }

  clearMessage();
  return true;
}

function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    showError("❌ Please select a gender");
    return false;
  }

  clearMessage();
  return true;
}

// ================= FORM SUBMIT =================
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  clearMessage();

  const isUsernameValid = validateUsername();
  if (!isUsernameValid) return;

  const isEmailValid = validateEmail();
  if (!isEmailValid) return;

  const isPasswordValid = validatePassword();
  if (!isPasswordValid) return;

  const isPasswordMatchValid = validatePasswordMatch();
  if (!isPasswordMatchValid) return;

  const isGenderValid = validateGender();
  if (!isGenderValid) return;

  // ================= SAVE USER =================
  const userData = {
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    password: "[encrypted]", // Never store plain passwords
    gender: document.querySelector('input[name="gender"]:checked').value,
    createdAt: new Date().toISOString()
  };

  try {
    localStorage.setItem("user", JSON.stringify(userData));
    showSuccess(`✅ Signup successful! Welcome <b>${userData.username}</b>`);
    signupForm.reset();
  } catch (err) {
    showError("❌ Failed to save data. Please try again.");
    console.error(err);
  }
});
