var validateeUserCredentials = () => {
  $(".invalidCredentials").hide();
    var userData = {};
    userData.userId = $('#userid').val();
    userData.password = $('#acctPwd').val();
    var captcha = $('#capchaInput').val();

    if (userData.captcha !== $('#captchaImage').attr('alt')) {
      $('.invalidCredentials').text('Invalid Capttcha');
      $('.invalidCredentials').show();
      return;
    }

    // http://localhost:1818/validate/userCredentials

    axios.post('/validate/userCredentials', {params: userData})
      .then(function (response) {
        console.log(response);
        if(response.data.msg == 'validUser') {
          loginModel.hide();
          $('.loginBnts').hide();
          $('.logoutBnts').show();
          loadSelectedPage('productDetails');

          // clear field
          document.querySelector("#userId").value = "";
          document.querySelector("#acctPassword").value = "";
          document.querySelector("#captchaInput").value = "";
        }else {
          // invalid user
          $(".invalidCredentials").show();
        }

      })
      .catch(function (error) {
        console.log(error);
      });

}
var loginModel;
var showLoginDialog = () => {
  loginModel = new bootstrap.Modal('#loginDialog');
  loginModel.show();
}
// var signUpModel;
// var signUp = () => {
//   signUpModel = new bootstrap.Modal('#signupDialog');
//   signUpModel.show();
// }