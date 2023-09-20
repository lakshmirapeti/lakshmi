var taskList = [
    "Do the code review of the project",
    "Lead the team in delivering new project",
    "Implement and submit the code of new component ",
    "Finish teh assigned trainings",
    "Add test cases and code coverage"
];

var userName;
var saveName = () => {
    userName = document.querySelector("#name").value;
    document.querySelector('#name').value = '';

}

var createTaskBox = () => {
    var box = document.createElement("div");
    box.setAttribute("id","box");
    document.querySelector('body').append(box)
}

var getRandomTask = () => {
    var randomindex = Math.floor (Math.random() * (taskList.length));
    var task = "Mr" + userName + " - " + taskList[randomindex];
    return task;
}

var disPlayTask = () => {
    var task = getRandomTask();
    try {
             document.querySelector('#box').innerHTML = task;
        }
        catch(error) {
            alert("Make sure u create task Box, before get to knw the task")
        }finally {
            setTimeout(() => {
                document.querySelector("#wlblock").style.display = 'block';
            }, 2000)
        }
}
