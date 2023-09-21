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
function refreshCaptchaLogin() {
    var captchaImage = document.getElementById("captchaImage");
    var captchaInput = document.getElementById("captchaInput");
    var captcha = generateCaptcha();
  
    captchaImage.src = "https://dummyimage.com/200x80/000/fff&text=" + captcha;
    
  
    return false;
  }

  // function refreshCaptchaSignUp() {
  //   var captchaImage = document.getElementById("captchaImage1");
  //   var captchaInput = document.getElementById("captchaInput1");
  //   var captcha = generateCaptcha();
  
  //   captchaImage.src = "https://dummyimage.com/200x80/000/fff&text=" + captcha;
    
  
  //   return false;
  // }

  // function refreshCaptchaForgetPwd() {
  //   var captchaImage = document.getElementById("captchaImage2");
  //   var captchaInput = document.getElementById("captchaInput2");
  //   var captcha = generateCaptcha();
  
  //   captchaImage.src = "https://dummyimage.com/200x80/000/fff&text=" + captcha;
    
  
  //   return false;
  // }

  
  window.onload = function () {
    refreshCaptchaLogin();
    // refreshCaptchaSignUp();
    // refreshCaptchaForgetPwd();
  
    var refreshBtn = document.querySelector(".refresh-btn");
    refreshBtn.addEventListener("click", function (event) {
      event.preventDefault();
      refreshCaptchaLogin();
        // refreshCaptchaSignUp();
        // refreshCaptchaForgetPwd();
    });

  };
  