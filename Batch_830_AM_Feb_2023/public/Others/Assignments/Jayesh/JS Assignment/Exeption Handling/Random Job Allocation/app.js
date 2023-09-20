  var taskList = [
        "Do Testing",
        "Deliver Project",
        "Join daily Meeting"
    ];
    var userName;
    var saveUserName = () => {
         userName = document.querySelector("#uName").value;
        document.querySelector("#uName").value = '';
    }
    var allocateTask = () => {
        var divTag = document.createElement("div");
                divTag.setAttribute("id", 'taskBlock')
                divTag.setAttribute("class", 'taskContainer');
                document.querySelector('body').append(divTag);
    }
    var getRandomTask = () => {
        var randomIndex = Math.floor(Math.random() * taskList.length);
        var task = 'Mr.' + userName + '-' + taskList[randomIndex];
        return task; 
    }
    var showTask = () => {
        var task = getRandomTask();
        try {
            document.querySelector("#taskBlock").innerHTML = task;   
        }
        catch (error)
        {
            alert("Make Sure u create task before get to know task")
        }

            finally {
                setTimeout(() => {
                    document.querySelector(".wlcmBlock").style.display = 'block';
                }, 2000)
            }
    }