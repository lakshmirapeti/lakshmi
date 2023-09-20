
   var  students=[]

function addStudent() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var location = document.getElementById("location").value;
  students.push([name, age, gender, location]);
 AddData();
  clearForm();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "Male";
  document.getElementById("location").value = "";
}



function AddData() {
  var table = document.getElementById("student-table");
  table.innerHTML = "";

  
  var headerRow = table.insertRow(0);
  headerRow.insertCell(0).innerHTML = "<b>Name</b>";
  headerRow.insertCell(1).innerHTML = "<b>Age</b>";
  headerRow.insertCell(2).innerHTML = "<b>Gender</b>";
  headerRow.insertCell(3).innerHTML = "<b>Location</b>";
  headerRow.insertCell(4).innerHTML = "<b>Action</b>";
  headerRow.insertCell(5).innerHTML = "<b></b>";

  
  for (var i = 0; i < students.length; i++) {
      var row = table.insertRow(i+1);
      row.insertCell(0).innerHTML = students[i][0];
      row.insertCell(1).innerHTML = students[i][1];
      row.insertCell(2).innerHTML = students[i][2];
      row.insertCell(3).innerHTML = students[i][3];
      row.insertCell(4).innerHTML = "<button type='button' onclick='editStudent(" + i + ")'>Edit</button>";
      row.insertCell(5).innerHTML = "<button type='button' onclick='deleteStudent(" + i + ")'>Delete</button>";
  }
}

function editStudent(index) {
  var name = students[index][0];
  var age = students[index][1];
  var gender = students[index][2];
  var location = students[index][3];

  document.getElementById("name").value = name;
  document.getElementById("age").value = age;
  document.getElementById("gender").value = gender;
  document.getElementById("location").value = location;

  students.splice(index, 1);
 AddData();
}

function deleteStudent(index) {
  students.splice(index, 1);
 AddData();
}
