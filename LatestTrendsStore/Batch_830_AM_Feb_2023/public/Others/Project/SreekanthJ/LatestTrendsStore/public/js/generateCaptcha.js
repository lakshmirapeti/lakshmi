 // Generate a random CAPTCHA string
 function generateCaptcha() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = 6;
    var captcha = "";

    for (var i = 0; i < length; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return captcha;
  }

// Update the CAPTCHA image source and input field value
function refreshCaptcha() {
    var captchaImage = document.getElementById("captchaImage");
    var captchaInput = document.getElementById("captchaInput");
    var captcha = generateCaptcha();
  
    captchaImage.src = "https://dummyimage.com/200x80/000/fff&text=" + captcha;
    captchaInput.value = "";
  
    return false;
  }
  
  window.onload = function () {
    refreshCaptcha();
  
    var refreshBtn = document.querySelector(".refresh-btn");
    refreshBtn.addEventListener("click", function (event) {
      event.preventDefault();
      refreshCaptcha();
    });
  };
  
