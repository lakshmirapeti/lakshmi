var genratePaySlip=()=>{
          
    var empDetails={

     readEmpData() {
        this.name=document.querySelector("#Ename").value
        this.age=document.querySelector("#Eage").value
        this.gender= document.querySelector("input[name=gender]:checked").value; 
        this.dept=document.querySelector("#Edept").value
        this.address=document.querySelector("#Eadd").value
        this.mobile=document.querySelector("#Emob").value
        this.basic=document.querySelector("#Ebasic").value
          this.basic=parseInt(this.basic)
       this.empTotalSalary()
     },
     empTotalSalary() {
        this.hra = (this.basic * 24) / 100;
        this.pf = (this.basic * 14) / 100;
        this.totalSalary = this.basic + this.hra + this.pf;
        // this.taxDetails();
     },
     showEmpData(){
         document.querySelector(".block").style.display = 'block';
         this.readEmpData()
       
        document.querySelector("#Sname").innerHTML=this.name
        document.querySelector("#Sage").innerHTML=this.age
        document.querySelector("#Sgen").innerHTML=this.gender
        document.querySelector("#Sdept").innerHTML=this.dept
        document.querySelector("#Sad").innerHTML=this.address
        document.querySelector("#Smob").innerHTML=this.mobile
        document.querySelector("#Sbasic").innerHTML=this.basic
        document.querySelector("#Spf").innerHTML=this.pf
        document.querySelector("#Shra").innerHTML=this.hra
        document.querySelector("#Stotal").innerHTML=this.totalSalary

     }

    }
empDetails.showEmpData()
}