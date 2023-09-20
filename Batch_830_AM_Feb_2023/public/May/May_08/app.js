var userDetils = {};
/*var readUserDetails = () => {
    userDetils.name = document.querySelector("#userName").value;
    userDetils.name = userDetils.name.trim();

    if (userDetils.name == '') {
        document.querySelector(".nameErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".nameErr").style.display = 'none';
    }

    userDetils.mailid = document.querySelector("#userMailId").value;
    userDetils.mailid = userDetils.mailid.trim();
    if (userDetils.mailid == '') {
        document.querySelector(".mailErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".mailErr").style.display = 'none';
    }
    userDetils.gender = document.querySelector("input[name=gender]:checked").value;
    userDetils.age = document.querySelector("#userage").value;

    if (userDetils.age == '') {
        document.querySelector(".ageErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".ageErr").style.display = 'none';
    }

    console.log(userDetils);
} */

/*var readUserDetails = () => {
    userDetils.name = document.querySelector("#userName").value;
    userDetils.name = userDetils.name.trim();

    
    try {
        
        if (userDetils.name == '') {
            // throws;            
            throw 'NAME_ERR';
            
        } else {
            document.querySelector(".nameErr").style.display = 'none';
        }

        userDetils.mailid = document.querySelector("#userMailId").value;
        userDetils.mailid = userDetils.mailid.trim();
        if (userDetils.mailid == '') {
            throw 'MAIL_ERR';
            
        } else {
            document.querySelector(".mailErr").style.display = 'none';
        }
        userDetils.gender = document.querySelector("input[name=gender]:checked").value;
        userDetils.age = document.querySelector("#userage").value;

        if (userDetils.age == '') {
           throw 'AGE_ERR';
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
    } 
    catch(error) {
        console.log('erro occured');
        switch(error) {
            case 'NAME_ERR':
                document.querySelector(".nameErr").style.display = 'block';
                break;
            case 'AGE_ERR':
                document.querySelector(".ageErr").style.display = 'block';
                break;
            case 'MAIL_ERR':
                document.querySelector(".mailErr").style.display = 'block';
                break;
        }
        
    }
        //console.log(userDetils);
} */

var readUserDetails = () => {
    userDetils.name = document.querySelector("#userName").value;
    userDetils.name = userDetils.name.trim();

    
    try {        
        if (userDetils.name == '') {
            throws;                        
        } else {
            document.querySelector(".nameErr").style.display = 'none';
        }
    } 
    catch(err) {
        document.querySelector(".nameErr").style.display = 'block';
    }

        userDetils.mailid = document.querySelector("#userMailId").value;
        userDetils.mailid = userDetils.mailid.trim();
    try {
        if (userDetils.mailid == '') {
            throws;            
        } else {
            document.querySelector(".mailErr").style.display = 'none';
        }
    } catch(e) {
        document.querySelector(".mailErr").style.display = 'block';
    }
        userDetils.gender = document.querySelector("input[name=gender]:checked").value;
        userDetils.age = document.querySelector("#userage").value;
    try {
        if (userDetils.age == '') {
           throw 'AGE_ERR';
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
    }  catch(e) {
        document.querySelector(".ageErr").style.display = 'block';
    }
   
        //console.log(userDetils);
}