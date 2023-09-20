var validateName = (event) => {
    var studentName = document.querySelector("#nameBox").value;
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        return true;
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        return true;
    } else if(event.keyCode == 32){
        return true
    } 
    else {
        return false;
    }
}

var validateNumber = (event) => {
    console.log(event);
    var marksNumber = document.querySelector("#sub2").value;
    console.log(marksNumber);
    if(event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
    } else {
        return false;
    }
}


var studentReportGenerate = () => {

    var studentDetails = {

        readStudentData() {
            studentDetails.name = document.querySelector("#nameBox").value;
            studentDetails.english = parseInt(document.querySelector("#sub1").value);
            studentDetails.maths = parseInt(document.querySelector("#sub2").value);
            studentDetails.history = parseInt(document.querySelector("#sub3").value);
            studentDetails.geography = parseInt(document.querySelector("#sub4").value);
            studentDetails.socialScience = parseInt(document.querySelector("#sub5").value);
            studentDetails.calculateTotalAndPercentAndDivision();
        },

        calculateTotalAndPercentAndDivision() {
            studentDetails.total = studentDetails.english + studentDetails.maths + studentDetails.history + studentDetails.geography + studentDetails.socialScience;

            studentDetails.percentage = studentDetails.total / 5;

            if (studentDetails.total >= 300) {
                studentDetails.division = '1st';
            } else if (studentDetails.total > 200) {
                studentDetails.division = '2nd';
            } else if (studentDetails.total >= 150) {
                studentDetails.division = '3rd'
            } else {
                studentDetails.division = 'Failed'
            }
            studentDetails.showData();
        },

        showData() {
            document.querySelector("#nameOutput").innerHTML = studentDetails.name;
            document.querySelector("#eng").innerHTML = studentDetails.english;
            document.querySelector("#math").innerHTML = studentDetails.maths;
            document.querySelector("#his").innerHTML = studentDetails.history;
            document.querySelector("#geo").innerHTML = studentDetails.geography;
            document.querySelector("#ss").innerHTML = studentDetails.socialScience;
            document.querySelector("#totalMarks").innerHTML = studentDetails.total;
            document.querySelector("#percentage").innerHTML = studentDetails.percentage;
            document.querySelector("#grade").innerHTML = studentDetails.division;
        }
    }
    studentDetails.readStudentData();
}