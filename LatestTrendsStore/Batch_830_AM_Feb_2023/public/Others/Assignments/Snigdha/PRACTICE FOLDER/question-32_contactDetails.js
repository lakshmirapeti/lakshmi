var contactDetails = {
    gender : 'male',
    maritalStatus : 'single',
    profilepic : 'myProfile.png',
    name : {
        firstName : 'snigdha',
        lastName : 'Gundu',
        
    },
    contactNo :{
        officeNo : '9398xxxxxx',
        personalNo : ['9703xxxxx1','801480xxxx','90005xxxx4'],

    },
    address :{
        office :{
            buildingNo: '11-168',
            state :'Telangana',
            officeSpace : 'Hyderabad', 
        },
        personal :{
            Dno :'11-168/p-236 sp/316',
            stateInfo :{
                stateCode : '500073',
                stateName : 'Telangana',
             },

        country : 'INDIA',
       },
    },   
    emailID :{
        office : 'snigdhavenkatesh123@gmail.com',
        personal :['snigdha1819@gmail.com','snigdhagundu18@gmail.com','gundusnigdha19@gmail.com'],

    },
    socialId : {
        twitter : 'snigdhagundu',
        linkdID : 'snigdha181907hduiwh',
        fbID :'snigdhagundu19',
    }
}

contactDetails.maritalStatus;
contactDetails.name.lastName;
contactDetails.contactNo.personalNo[1];
contactDetails.address.office.officeSpace;
contactDetails.address.personal.stateInfo.stateCode;
contactDetails.emailID.personal[2];
//we can also declare the json object as
contactDetails ['emailID']['personal[2]'];
contactDetails.socialId.fbID;