function generateOTP() {
    var digits = '0123456789';
    var OTP = '';
    for (var i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    document.querySelector('.otp').innerHTML = OTP;
  }
  