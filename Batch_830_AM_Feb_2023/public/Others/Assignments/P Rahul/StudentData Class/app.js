var validateName = (event) => {
    var studentName = document.querySelector("#sname").value;
    if(event.charCode >=65 && event.charCode <= 90) {
        return true;
    }else if(event.charCode >= 97 && event.charCode <= 122) {
        return true;
    }else if(event.charcode == 32) {
        return true;
    }
    else {
        return false;
    }
}

var validateAge = (event) => {
    var studentAge = document.querySelector('#sage').value;
    if(event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }else {
        return false;
    }
}

var validateMarks = (event) => {
    var studentMarks = document.querySelector("#m1").value;
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    }else {
        return false;
    }
}

var studentDetails = [];
class StudentData {
    constructor (data) {
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.marks = data.marks;
    }

    getTotalAndAvg () {
        this.total = 0;
        for(var i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }
    getGrade () {
        if(this.avg >= 45) {
            this.grade = 'Passed';
        } else {
            this.grade = 'Suprise';
        }
    }
    showData () {
        document.querySelector('.progressCard').style.display = 'block';
        this.getTotalAndAvg ();
        this.getGrade ();
        document.querySelector('#pname').innerHTML = this.name;
        document.querySelector('#page').innerHTML = this.age;
        document.querySelector('#pgender').innerHTML = this.gender;
        document.querySelector('#ptotal').innerHTML = this.grade;
        document.querySelector('#pavg').innerHTML = this.avg;
        document.querySelector('#pgrade').innerHTML = this.grade;
    }
}
var getStudentCard = () => {
    var sdata = {};
    sdata.name = document.querySelector("#sname").value;
    sdata.age = document.querySelector("#sage").value;
    sdata.gender = document.querySelector("input[name=gender]:checked").value;
    sdata.marks = [];
    for (var i = 0 ; i < 5; i++) {
        var id = '#m' + (i+1);
        var submarks = document.querySelector(id).value;
        submarks = parseInt(submarks);
        sdata.marks.push(submarks);
    }




    var obj = new StudentData(sdata);
    obj.showData();
    studentDetails.push(obj);
    console.log(studentDetails);

    // var a2 = new StudentData(sdata);
    // a2.showData();
    // studentDetails.push(a2);
    // console.log(studentDetails);
}