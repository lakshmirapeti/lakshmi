var otp = () => {
    var temp = "";
    var array = [];
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < 6; i++)
    {
        if(i % 3 == 0)
        {
            array[i] = upper.charAt(otpgen(65,91));
        }
        else if(i % 3 == 1)
        {
            array[i] = lower.charAt(otpgen(97, 123));
        }
        else if(i % 3 == 2)
        {
            array[i] = otpgen(48,57) + 1;
        }
        if(i < 5)
        temp += array[i] + " ";
        else
        temp += array[i];
    }
    document.querySelector("#otp").innerText = temp;
}
var otpgen = (min, max) => {
    var diff = max - min;
    var randomNum = Math.floor(Math.random(diff) * diff);
    return randomNum;
}
var checkOtp = () => {
    var userinput = document.querySelector("#uservalue").value;
    console.log(userinput);
    console.log(document.querySelector("#otp").innerText);
    if(userinput === document.querySelector("#otp").innerText)
    {
        document.querySelector("#display").style.display = "block"
        document.querySelector("#display").innerText = "Hello"
        console.log("Success");
    }
    else
    {
        console.log("Fail");
    }
}