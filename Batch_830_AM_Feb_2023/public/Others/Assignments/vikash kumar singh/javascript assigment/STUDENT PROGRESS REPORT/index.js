var generateProgressCard=()=>{
  
   var Reportdata={
    getReportDetails (){
        this.name=document.querySelector("#sname").value;

        this.age=document.querySelector("#age").value;
    
        this.class=document.querySelector("#sclass").value;
    
        this.gender=document.querySelector("input[name=gender]:checked").value ;
    
        this.marks=[];
    
        for(var i=0; i< 5; i++){
            var id='#m' +(i + 1);
            this.marks[i]=parseInt(document.querySelector(id).value);
        }

    },
    getTotalandAvg (){
        this.total=0;
        for(var i= 0; i < this.marks.length; i++){
            this.total+=this.marks[i];
        }
        this.avg=this.total/ this.marks.length
        this.getGrade(); 
    },

    getGrade() {
        this.grade='';
        if(this.avg >= 40){
          this.grade="passed";
        }else{
          this.grade="you hava surprised"
        }
       },
       DispalyDetails (){
        this.getReportDetails()
        this.getTotalandAvg();
        console.log("Name is "+ this.name);
        document.querySelector("#rname").innerHTML=this.name;
        document.querySelector("#rage").innerHTML=this.age;
        document.querySelector("#rtotal").innerHTML=this.total;
        document.querySelector("#ravg").innerHTML=this.avg;
        document.querySelector("#rgrade").innerHTML=this.grade
    
    
      
      }
   }; 
   Reportdata.DispalyDetails();
   console.log(Reportdata) 
}
