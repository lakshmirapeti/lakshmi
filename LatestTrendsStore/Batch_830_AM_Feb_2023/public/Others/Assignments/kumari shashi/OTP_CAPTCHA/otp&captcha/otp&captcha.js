
//captcha code-----------------------------------------------------------------------

var uprChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var lowChar = ['a', 'b', 'c', 'd', 'e', 'f'];
var getGenerateCaptcha = () => {
var captchaValue = getUpperCase() + getLowerCase() + getLowerCase() + getNumber() + getUpperCase();
document.querySelector("#box1").innerHTML = captchaValue;
}


var getUpperCase = () => {
var uprValue = Math.floor(Math.random() * uprChar.length)
return uprChar[uprValue];
}

var getLowerCase = () => {
var lowValue = Math.floor(Math.random() * lowChar.length)
return lowChar[lowValue];
}

var getNumber = () => {
var maxCount = 10;
var numValue = Math.floor(Math.random() * maxCount);
return numValue;
}


//otp code -------------------------------------------------------------------------------------------------

var getGenerateOtp = () => {
    var randomOtp = '';
    for(var i=0; i<5; i++)
    {
    randomOtp = randomOtp + " " + randomValue();
    document.querySelector("#box2").innerHTML = randomOtp
    }
}

var randomValue = () => {
    var maxLength =10;
    var randomNo = Math.floor(Math.random() * maxLength);
    return randomNo;
}
