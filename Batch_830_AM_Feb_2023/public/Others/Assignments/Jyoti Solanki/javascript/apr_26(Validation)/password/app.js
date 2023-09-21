
var noCount = 0;
var special = 0;
var upper = false;
var upperCount = 0;
var lowerCount = 0;
var validatePassword = (event) => {
    var userInputPwd = document.querySelector("#acctPwd").value;
    var ruserInputPwd = document.querySelector("#rpwd").value;
    console.log(event);


    applyColorBasedOnType('.minlength', userInputPwd.length >= 8)

    //Min Length should be 8 chars
    if (userInputPwd.length >= 8) {
        return false;
    }
   
    //Should have min 2 numbers
    if (event.key.charCodeAt(0) >= 48 && event.key.charCodeAt(0) <= 57) {
        noCount++;
    }
    applyColorBasedOnType('#numCount', noCount >= 2);

    //Should 2 special symbols
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (event.key.match(format)) {
        special++;
    }
    applyColorBasedOnType('#spe', special >= 2);


    //Should not start with upper case
    if (!(userInputPwd[0].toUpperCase() == userInputPwd[0])) {
        upper = true;
    }
    applyColorBasedOnType('#startUpper', upper);


      //Should have 2 upper case char
    if (event.key.charCodeAt(0) >= 65 && event.key.charCodeAt(0) <= 90 || event.key.charCodeAt(0) >= 97 && event.key.charCodeAt(0) <= 122) {
        if (event.key.match(format)) {
            return false;
        }
        else if (event.key.toUpperCase() == event.key) {
            upperCount++;
        }
    }
    applyColorBasedOnType('#upperChar', upperCount >= 2);

     //Should have min 2 lower case chars
    if (event.key.charCodeAt(0) >= 65 && event.key.charCodeAt(0) <= 90 || event.key.charCodeAt(0) >= 97 && event.key.charCodeAt(0) <= 122) {
        if (event.key.match(format)) {
            return false;
        }
        else if (event.key.toLowerCase() == event.key) {
            lowerCount++;
        }
    }
    applyColorBasedOnType('#lowerChar', lowerCount >= 2);

//input button
    if (userInputPwd == ruserInputPwd) {
        const button = document.getElementById('btn');
        button.removeAttribute('disabled');

    }
}

var applyColorBasedOnType = (selector, isValid) => {
    if (isValid) {
        document.querySelector(selector).style.color = 'green';
    } else {
        document.querySelector(selector).style.color = 'red';
        return false
    }
}
