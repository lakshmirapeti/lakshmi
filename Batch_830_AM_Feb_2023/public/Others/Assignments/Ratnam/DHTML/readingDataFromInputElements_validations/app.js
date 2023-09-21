var noCount = 0;
var specialCount=0;
var upCase = 0;
 var lowCase = 0;
var validPassword = (event) => {
    var password = document.querySelector('#psw').value;

    applycolorbased('#minlength' ,password.length >= 8);
    console.log(event);

  //number......
   if(event.keyCode >=48 && event.keyCode<=57){
    noCount++;
   }
   applycolorbased('#numCount', noCount>=2);

   //specialKeys.....
   if(event.keyCode>= 33 && event.keyCode<=47 || event.keyCode>=58 && event.keyCode<=64 || event.keyCode>=123 && event.keyCode<=126 ||  event.keyCode>=91 &&  event.keyCode<=96){
    specialCount++;
  }
  applycolorbased('#symbols', specialCount>=2);
  // start with not a upper case
   if(password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90){
    document.querySelector('#notUCase').style.color='red';
   }else{
    document.querySelector('#notUCase').style.color='green';
   }

   //atleast 2 uppercase value
   if(event.keyCode>=65 && event.keyCode <= 90){
    upCase++;
   }
   applycolorbased('#UCase', upCase>=2);
   /*if(upCase>=2){
    document.querySelector('#UCase').style.color='green';
    }else{
    document.querySelector('#UCase').style.color='red';
    }*/
    if(event.keyCode>=97 && event.keyCode <= 122){
      lowCase++;
     }
     applycolorbased("#lCase" , lowCase>=2);
     console.log(password);
  }



  var applycolorbased=(selector,isValid)=>{
    if(isValid){
      document.querySelector(selector).style.color='green';
    }else{
      document.querySelector(selector).style.color='red';
    }
   }
 
  // another way
  /* var password = document.querySelector('#psw').value;
   console.log(password);
   console.log(event);
  if(password.length >=8){
   document.querySelector('#minlength').style.color='green';
  }else{
   document.querySelector('#minlength').style.color='red';

   number............
   if(event.keyCode >=48 && event.keyCode<=57){
    noCount++;
   }
   applycolorbased('#numCount', noCount>=2);
   /*if(noCount>=2){
    document.querySelector('#numCount').style.color='green';
   }else{
    document.querySelector('#numCount').style.color='red';
   
   }*/