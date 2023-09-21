    var validateName = (event) => {
        console.log(event);
       if(event.charCode>=97 && event.charCode<=122 ) 
        {
            return true;
        }
        else if(event.charCode>=58 && event.charCode <=90)
        {
            return true;
        }
        else if(event.charCode == 32)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    var validateAge = (event) => { 
        console.log(event);
        if(event.charCode>=48 && event.charCode<=57){
            return true;
        }
        else{
            return false;
        }

    }

    var validateMark = (event) => {
        console.log(event);
        if(event.charCode>=48 && event.charCode<=57)
        {
            return true;
        } 
        else{
            return false;
        }
    }


var getResult = () => {

    var studData = {

        getStudDetail(){
            this.name= document.querySelector("#sname").value;
            this.class= document.querySelector("#sclass").value;
            this.age= document.querySelector("#sage").value;
            this.gender= document.querySelector("input[name=gender]:checked").value;
            this.mark=[];
            for(var i=0; i<5; i++){
                var id = "#m" + (i+1);
                this.mark[i] = parseInt(document.querySelector(id).value);
            }
        },
        getTotalAndAverage(){
            this.total=0;
            for(var i=0; i<this.mark.length; i++){
                this.total += this.mark[i]; 
            }
            this.average= this.total/this.mark.length;
            
        },
        getDisplay(){
            document.querySelector("#progress").style.display='block';
            this.getStudDetail();
            this.getTotalAndAverage();
            
            document.querySelector("#rname").innerHTML = this.name;
            document.querySelector("#rclass").innerHTML = this.class;
            document.querySelector("#rage").innerHTML = this.age;
            document.querySelector("#rgender").innerHTML = this.gender;
            document.querySelector("#rtotal").innerHTML = this.total;
            document.querySelector("#raverage").innerHTML = this.average;
            
        }

    };
    studData.getDisplay();
    console.log(studData)  
};
