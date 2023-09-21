
var NumberOfTd = [];
function onBodyLoad(e){
    e.preventDefault();
    var table = document.getElementById("GameTable");
    var number = 1;
    for(var i = 1 ; i <=9; i++){
        var tr = document.createElement('tr');
        for(var j = 1; j<=10; j++){
         var td = document.createElement('td');
         td.innerHTML = number;
         contain = true;
         number++
         tr.append(td);
        }
        table.append(tr);
    }   
}

var playGame = () =>{   
    document.querySelector("#count").style.display =" block";
    var myTable = document.getElementById('GameTable');
    var selectedNum = Math.floor(Math.random() * 91); 
    if(NumberOfTd.length === 91){
        alert("game completed");
       return false;
    }  
   if(!(NumberOfTd.includes(selectedNum))){
      NumberOfTd.push(selectedNum);
      for (let row of myTable.rows){
        for(let cell of row.cells){      
           if(cell.innerText == selectedNum){
               document.querySelector("#count").innerHTML = `your selected number ${selectedNum}`             
               cell.classList.add('selectectd');
               break;
           };
        }         
    }
   }else{
    playGame();
   }
}