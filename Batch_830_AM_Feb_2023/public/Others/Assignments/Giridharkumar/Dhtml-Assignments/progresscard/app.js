var generateProgressCard = () => {

    var studentdata = {
        getstdDetails() {
            this.name = document.querySelector("#sname").value;
            this.age = document.querySelector("#sage").value;
            this.gender = document.querySelector("input[name = gender]:checked").value;
            this.class = document.querySelector("#sclass");
            this.marks = [];
            for (var i = 0; i < 6; i++) {
                var id = "#m" + (i + 1)
                this.marks[i] = parseInt(document.querySelector(id).value);
            }
        },
        get_total_And_avg() {
            this.total = 0;
            for (var i = 0; i < this.marks.length; i++) {
                this.total +=  this.marks[i];
            }
            this.avg = this.total / this.marks.length;
            this.find_Grade()
        },
        find_Grade() {
            this.grade = '';
            if (this.avg >= 45) {
                this.grade = "passed"
            } else {
                this.grade = "Fail"
            } 
        },
        displaystdDetails() {
            document.querySelector(".progresscard").style.display = "block";
            this.getstdDetails()
            this.get_total_And_avg()
            document.querySelector("#pname").innerHTML = this.name;
            document.querySelector("#page").innerHTML = this.age;
            document.querySelector("#ptotal").innerHTML = this.total;
            document.querySelector("#pavg").innerHTML = this.avg;
            document.querySelector("#pgrade").innerHTML = this.grade;
        }
    };
    studentdata.displaystdDetails()
    console.log(studentdata)


}