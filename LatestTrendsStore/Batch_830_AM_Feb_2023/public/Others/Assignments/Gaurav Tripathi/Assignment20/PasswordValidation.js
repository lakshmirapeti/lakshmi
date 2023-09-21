var noCount = 0;
var speci=0
var upper=0
var lower=0
var specialChars = "!@#$%^&*()_+{}[]|\\:;\"'<>,.?/-=";
var validatePassword = (event) => {
    var userInputPwd = document.querySelector("#acctPwd").value;
   

    applyColorBasedOnType('.minlength', userInputPwd.length >= 8)
   
    if (event.keyCode >= 48 && event.keyCode <= 58) {
        noCount++;
    }

    applyColorBasedOnType('#numCount', noCount >= 2)
    
   
  
  for (var i = 0; i < userInputPwd.length; i++) {
    if (specialChars.indexOf(userInputPwd.charAt(i)) != -1) {
      speci++
    }
  }
  
  applyColorBasedOnType('#spec', speci >= 2)

      for(var i=0;i<userInputPwd.length;i++){
           var ch=userInputPwd[i]
           if(ch===ch.toUpperCase()){
              upper++;
           }
      }
    applyColorBasedOnType('#upper', upper>=2)

    for(var i=0;i<userInputPwd.length;i++){
        var ch=userInputPwd[i]
        if(ch===ch.toLowerCase()){
           lower++;
        }
   }
 applyColorBasedOnType('#lower', lower>=2)

   applyColorBasedOnType('#notU', userInputPwd.charAt(0) === userInputPwd.charAt(0).toLowerCase())   
   
//    if(reUserInputPwd===userInputPwd){
//     document.querySelector('#btn').style.display='enabled'
//    }

  

}
    


var applyColorBasedOnType = (selector, isValid) => {
    if (isValid) {
        document.querySelector(selector).style.color = 'green';
    } else {
        document.querySelector(selector).style.color = 'red';
    }

      
    
}


    var userInputPwd = document.querySelector("#acctPwd");
    var reserInputPwd =document.querySelector('#rpwd');
    var sub=document.querySelector('#btn')


    function checkPasswordsMatch() {
        if (userInputPwd.value === reserInputPwd.value) {
          sub.disabled = false;
        } else {
          sub.disabled = true;
        }
      }
      
      userInputPwd.addEventListener('input', checkPasswordsMatch);
      reserInputPwd.addEventListener('input', checkPasswordsMatch);
