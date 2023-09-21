
class StudentDetails {
    constructor() {
        
    }
    
    readDetails() {
        this.name = document.querySelector("#sname").value;
        this.age = document.querySelector("#sage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.marks = [];
        for (var i = 0 ; i < 5; i++) {
            var id = '#m' + (i+1);
            var submarks = document.querySelector(id).value;
            submarks = parseInt(submarks);
            this.marks.push(submarks);
        }
        this.showData();
    }
    
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }
    getGrade() {
        if (this.avg >= 60) {
            this.grade = 'Passed';
        } else {
            this.grade = 'Surprise';
        }
    }
    showData() {
        this.getTotalAndAvg();
        this.getGrade();
        console.log("Stuetn name is " + this.name);
        console.log("Stuetn Age is " + this.age);
        console.log("Stuetn Gender is " + this.gender);
        console.log("Stuetn Total is " + this.total);
        console.log("Stuetn Avg is " + this.avg);
        console.log("Stuetn Grade is " + this.grade);
    }
}


var generateProgressCard = () => {
    var s1 = new StudentDetails();
    s1.readDetails();
}