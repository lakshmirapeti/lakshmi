var studentDetailsList = [];
class sdata {
    constructor (data) {
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.class = data.class;
        this.location = data.location;
    }
    readData () {
        document.querySelector("#sname").value;
    }
    showData () {
        this.readData ();
        console.log("name is " + data.name);
    }
}
 
var sRegistration = () => {
    var obj = new sdata(data);
    obj.showData ();
}