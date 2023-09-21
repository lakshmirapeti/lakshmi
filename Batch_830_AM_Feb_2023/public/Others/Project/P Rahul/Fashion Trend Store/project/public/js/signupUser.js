var addNewUser = () => {
    var userData = {};
    userData.account_id = $("#signupUserId");
    userData.password = $("#signupPwd");
    userData.mailId = $("#signupMailId");

    console.log(userData);
}