var userDetils = {};

/* var readUserDetails = () => {
    userDetils.name = document.querySelector('#uname').value;
    userDetils.name = userDetils.name.trim();

    if(userDetils.name == '') {
        document.querySelector('.nameErr').style.display = 'block';
        return;
    }else {
        document.querySelector('.nameErr').style.display = 'none';
    }

    userDetils.emailID = document.querySelector('#umail').value;
    userDetils.emailID = userDetils.emailID.trim();
    
    if(userDetils.emailID == '') {
        document.querySelector('.mailErr').style.display = 'block';
        return;
    }else {
        document.querySelector('.mailErr').style.display = 'none';
    }

    userDetils.gender = document.querySelector('input[name=gender]:checked').value;

    userDetils.age = document.querySelector('#uage').value;
    userDetils.age = userDetils.age.trim();
    
    if(userDetils.age == '') {
        document.querySelector('.ageErr').style.display = 'block';
        return;
    }else {
        document.querySelector('.ageErr').style.display = 'none';
    }
    
    console.log(userDetils); 
} */

/*var readUserDetails = () => {
    userDetils.name = document.querySelector('#uname').value;
    userDetils.name = userDetils.name.trim();
    
    try {
    if(userDetils.name == '') {
       throw 'Name_Err';

    }else {
        document.querySelector('.nameErr').style.display = 'none';
    }

    userDetils.emailID = document.querySelector('#umail').value;
    userDetils.emailID = userDetils.emailID.trim();
    
    if(userDetils.emailID == '') {
        throw 'Mail_Err';

    }else {
        document.querySelector('.mailErr').style.display = 'none';
    }

    userDetils.gender = document.querySelector('input[name=gender]:checked').value;

    userDetils.age = document.querySelector('#uage').value;
    userDetils.age = userDetils.age.trim();
    
    if(userDetils.age == '') {
        throw 'Age_Err';
    }else {
        document.querySelector('.ageErr').style.display = 'none';
    }
} catch (error) {
    switch (error) {
        case 'Name_Err' :
            document.querySelector('.nameErr').style.display = 'block';
            break;
        case 'Mail_Err' :
            document.querySelector('.mailErr').style.display = 'block';
            break;
        case 'Age_Err' :
            document.querySelector('.ageErr').style.display = 'block';
            break;
    }
}
    
    console.log(userDetils);
}*/
var readUserDetails = () => {
    userDetils.name = document.querySelector('#uname').value;
    userDetils.name = userDetils.name.trim();
    
    try {
    if(userDetils.name == '') {
       throws;

    }else {
        document.querySelector('.nameErr').style.display = 'none';
    }
    } catch(error) {
        document.querySelector('.nameErr').style.display = 'block';
    }

    try {
    userDetils.emailID = document.querySelector('#umail').value;
    userDetils.emailID = userDetils.emailID.trim();
    
    if(userDetils.emailID == '') {
        throws;

    }else {
        document.querySelector('.mailErr').style.display = 'none';
    }
    } catch(error) {
        document.querySelector('.mailErr').style.display = 'block';   
    }

    try {
    userDetils.gender = document.querySelector('input[name=gender]:checked').value;

    userDetils.age = document.querySelector('#uage').value;
    userDetils.age = userDetils.age.trim();
    
    if(userDetils.age == '') {
        throws;
    }else {
        document.querySelector('.ageErr').style.display = 'none';
    }
    } catch(error) {
        document.querySelector('.ageErr').style.display = 'block';
    }
    console.log(userDetils);
}