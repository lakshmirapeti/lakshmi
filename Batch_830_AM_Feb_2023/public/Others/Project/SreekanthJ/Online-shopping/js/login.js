document.querySelector(".submit").addEventListener("click", function() {
  var username = document.querySelector('input[name="username"]').value;
  var password = document.querySelector('input[name="pswrd"]').value;

  // Validate username
  if (username === "") {
    alert("Please enter a username");
    return;
  }

  // Validate password
  if (password === "") {
    alert("Please enter a password");
    return;
  }

  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (username === storedUsername) {
    if (password === storedPassword) {
      // Credentials match, redirect to the product page
      window.location.href = "../components/productPage.html";
    } else {
      alert("Invalid password");
    }
  } else {
    alert("Invalid username");
  }
});
