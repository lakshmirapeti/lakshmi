var studentProgressCard = () => {
  var sData = {
     getStudentData (){
        this.name = document.querySelector("#sname").value;
        this.age=  document.querySelector("#sage").value;
        this.gender=  document.querySelector(" input[name=gender]:checked").value;
        this.class=document.querySelector("#sclass").value;
        this.marks=[];
      for(var i = 0; i < 5; i++){
        var id = "#m" + (i + 1);    
      this.marks[i] = parseInt(document.querySelector(id).value);
    }
    },
    getTotalAvg(){
        this.total=0;
        for(var i = 0; i < this.marks.length; i++){
        this.total += this.marks[i];
        }
        this.avg = this.total/this.marks.length;
    },
    getGrade(){
        this.grade = '';
        if(this.avg > 40){
           this.grade='You Are Passed' 
        }else{
            this.grade = 'you have a surprise'
        }
    },
    getStudentResult(){
        
        document.querySelector('.sResult').style.display = 'block';
        this.getStudentData();
        this.getTotalAvg();
        this.getGrade();
        console.log( this.name);
        document.querySelector("#rname").innerHTML=this.name;
        document.querySelector("#rage").innerHTML=this.age;
        document.querySelector("#rgen").innerHTML=this.gender;
        document.querySelector("#rclass").innerHTML=this.class;
        document.querySelector("#rtotal").innerHTML=this.total;
        document.querySelector("#ravg").innerHTML=this.avg;
        document.querySelector("#rresult").innerHTML=this.grade;
    }
  };
  sData.getStudentResult();
}