window.onload = function() {
    var table = document.createElement("table");
    var count = 1;
    var cells = [];

    for (var i = 1; i <= 9; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 10; j++) {
            var cell = document.createElement("td");
            cell.textContent = count++;
            cells.push(cell);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    var button = document.createElement("button");
    button.textContent = "Pick a Coin";
    button.onclick = function() {
        var unhighlightedCells = cells.filter(function(cell) {
            return !cell.classList.contains("highlight");
        });

        if (unhighlightedCells.length === 0) {
            alert("Tambola Completed!");
            return;
        }

        var randomIndex = Math.floor(Math.random() * unhighlightedCells.length);
        var cell = unhighlightedCells[randomIndex];
        cell.classList.add("highlight");
    };
    document.body.appendChild(button);
    document.body.appendChild(table);
}