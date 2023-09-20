function storeCredentials(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("mobile", mobile);
  localStorage.setItem("email", email);
}

document.querySelector(".register").addEventListener("click", function() {
  var username = document.querySelector('input[name="username"]').value;
  var password = document.querySelector('input[name="pswrd"]').value;
  var confirmPassword = document.querySelector('input[name="confirmpswrd"]').value;
  var mobile = document.querySelector('input[name="mobile"]').value;
  var email = document.querySelector('input[name="email"]').value;

  if (username === "" || password === "" || confirmPassword === "" || mobile === "" || email === "") {
      alert("Please fill in all the fields");
      return;
  }

  if (password !== confirmPassword) {
      alert("The passwords do not match");
      return;
  }

  if (!isValidMobileNumber(mobile)) {
      alert("Please enter a valid mobile number");
      return;
  }

  if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
  }

  storeCredentials(username, password);
  window.location.href = "../components/login.html";
});

document.querySelector('input[name="pswrd"]').addEventListener("input", function() {
  var password = this.value;
  var passwordValidationMessage = document.querySelector(".password-validation-message");

  if (!isValidPassword(password)) {
    passwordValidationMessage.style.display = "block";
    passwordValidationMessage.textContent = "Password must have a minimum of 6 characters and at least 1 special character";
  } else {
    passwordValidationMessage.style.display = "none";
    passwordValidationMessage.textContent = "";
  }
});

function isValidMobileNumber(mobile) {
  var mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  var passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  return passwordRegex.test(password);
}
