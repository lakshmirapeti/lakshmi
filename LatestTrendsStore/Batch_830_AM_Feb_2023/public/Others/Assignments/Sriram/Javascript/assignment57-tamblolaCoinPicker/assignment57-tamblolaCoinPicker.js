var coinContainerTable = document.querySelector(".coinContainer");

var allNumbers = () =>
{
    var count = 1;
    var cells = [];
    for (var i = 1; i <= 9; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 10; j++) {
            var cell = document.createElement("td");
            cell.textContent = count++;
            var id = 'coin' + count;
            cell.setAttribute("id", id)
            cell.setAttribute("class", "oneCoin");
            cells.push(cell);
            row.appendChild(cell);
        }
        coinContainerTable.appendChild(row);

    }
}
allNumbers();

var pickedNumber = [];

var replayGame = () => {
    window.location.reload();
}

var generateNumber = () => {
    var genNumber = Math.random() * 91;
    genNumber = Math.floor(genNumber);
    genNumber = genNumber + 1;
    // console.log(genNumber);
    if (pickedNumber.includes(genNumber) == true) {
        if (pickedNumber.length == 90) {
            document.querySelector(".gameOverMessage").style.display = "block";
            document.querySelector("#replayGameDiv").style.display = "block";
        }
        generateNumber();
    } else {
        var cId = 'coin' + genNumber;
        // console.log(cId);
        document.getElementById(cId).style.background = "red";
        document.querySelector("#showNumber").innerText = genNumber-1;
        pickedNumber.push(genNumber);
        // console.log(pickedNumber.length);
    }
}