var details = {};
var readUserDetails = () => {
    details.name = document.querySelector("#userNameID").value;
    details.name = details.name.trim();

    
    try {        
        if (details.name == '') {
            throws;                        
        } else {
            document.querySelector(".nameErr").style.display = 'none';
        }
    } 
    catch(err) {
        document.querySelector(".nameErr").style.display = 'block';
    }

        details.mailid = document.querySelector("#userMailID").value;
        details.mailid = details.mailid.trim();
    try {
        if (details.mailid == '') {
            throws;            
        } else {
            document.querySelector(".mailErr").style.display = 'none';
        }
    } catch(e) {
        document.querySelector(".mailErr").style.display = 'block';
    }
        details.gender = document.querySelector("input[name=gender]:checked").value;
        details.age = document.querySelector("#userAgeID").value;
    try {
        if (details.age == '') {
           throw 'AGE_ERR';
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
    }  catch(e) {
        document.querySelector(".ageErr").style.display = 'block';
    }
   
        //console.log(details);
}