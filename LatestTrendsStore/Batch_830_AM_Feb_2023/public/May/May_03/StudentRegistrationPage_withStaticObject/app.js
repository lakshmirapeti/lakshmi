var studentData = {};

var generateProgressCard = () => {
    studentData.name = '';
    studentData.age = '';
    studentData.marks = [];
    studentData.readDetails = () => {
        studentData.name = document.querySelector("#sname").value;
        studentData.age = document.querySelector("#sage").value;
        studentData.gender = document.querySelector("input[name=gender]:checked").value;
        studentData.marks = [];
        for (var i = 0 ; i < 5; i++) {
            var id = '#m' + (i+1);
            var submarks = document.querySelector(id).value;
            submarks = parseInt(submarks);
            studentData.marks.push(submarks);
        }
        studentData.showData();
    }
    studentData.getTotalAndAvg = () => {
        studentData.total = 0;
        for (var i = 0; i < studentData.marks.length; i++) {
            studentData.total += studentData.marks[i];
        }
        studentData.avg = studentData.total / studentData.marks.length;
    }
    studentData.getGrade = () => {
        if (studentData.avg >= 60) {
            studentData.grade = 'Passed';
        } else {
            studentData.grade = 'Surprise';
        }
    }

    studentData.showData = () => {
        studentData.getTotalAndAvg();
        studentData.getGrade();
        console.log("Stuetn name is " + studentData.name);
        console.log("Stuetn Age is " + studentData.age);
        console.log("Stuetn Gender is " + studentData.gender);
        console.log("Stuetn Total is " + studentData.total);
        console.log("Stuetn Avg is " + studentData.avg);
        console.log("Stuetn Grade is " + studentData.grade);

        console.log(studentData);

    }

    studentData.resetFields = () => {

    }
    studentData.readDetails();
}