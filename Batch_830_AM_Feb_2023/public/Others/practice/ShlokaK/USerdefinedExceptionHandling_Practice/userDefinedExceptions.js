var userData = {};
var userDetails = () => {
    userData.name = document.querySelector('#userName').value;
    userData.mailId = document.querySelector('#userMailId').value;
    userData.gender = document.querySelector("input[name=Gender]:checked").value;
    userData.age = document.querySelector('#userAge').value;
    try{
        if(userData.name.trim() == '')
        {
            throws;
        }
        else{
            document.querySelector('.nameErr').style.display = 'none';
        }
    }
    catch(e){
        document.querySelector(".nameErr").style.display = 'block';
    }
    try{
        if(userData.mailId.trim() == '')
        {
            throws;
        }
        else{
            document.querySelector('.mailIdErr').style.display = 'none';
        }
    }
    catch(e){
        document.querySelector('.mailIdErr').style.display = 'block';
    }
    try{
        if(userData.age == '')
        {
            throws;
        }
        else{
            document.querySelector('.ageErr').style.display = 'none';
        }
    }
    catch(e){
        document.querySelector('.ageErr').style.display = 'block';
    }
}