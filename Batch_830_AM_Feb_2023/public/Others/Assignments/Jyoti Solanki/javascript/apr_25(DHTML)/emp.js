var employee = () =>{
  var slipCard = {
            employeeDetails(){
            this.name = document.querySelector("#ename").value,
            this.age = document.querySelector("#eage").value,
            this.gender = document.querySelector("input[name=gender]:checked").value,
            this.salary = parseInt(document.querySelector("#salary").value),
            this.selectedDepartment = document.getElementById('department').selectedOptions[0].innerHTML,
            this.totalSalary();
            this.taxCon = [this.gender , this.totalSalary]; 
            this.calTax (this.taxCon);  

            },
            totalSalary (){
                this.pf =  (this.salary * 14) /  100;
                this.hra = (this.salary * 24) /  100;
                this.totalSalary = this.pf + this.hra + this.salary;
            },
            calTax (taxCon){
            var empGender = taxCon[0];
            var empTotalSal = taxCon[1];
            if(empGender == 'male'){
                if(empTotalSal >= 500000){
                   empTax = 15;
                }
                else if(empTotalSal >= 300000 && empTotalSal <= 500000){
                   empTax = 10
                }
                else{
                   empTax = 0;
                }
              }              
              //female tax part
              else{
                if(empTotalSal >= 500000){
                    empTax = 10;
                }
                else if(empTotalSal >= 300000 && empTotalSal <= 500000){
                    empTax = 5;
                }
                else{
                    empTax = 0;
              }
            }
            this.tax = (empTotalSal * empTax) / 100;
        },
        displayDetails(){
            document.querySelector(".slipCard").style.display = "block";
           this.employeeDetails();
           document.querySelector("#empName").innerHTML = this.name;
           document.querySelector("#empAge").innerHTML = this.age;
           document.querySelector("#pf").innerHTML = this.pf;
           document.querySelector("#empGen").innerHTML = this.gender;
           document.querySelector("#hra").innerHTML = this.hra;
           document.querySelector("#totalSal").innerHTML = this.totalSalary;
           document.querySelector("#tax").innerHTML = this.tax;
           document.querySelector("#empSalary").innerHTML = this.salary;
           document.querySelector("#empDepart").innerHTML = this.selectedDepartment;
        }
    }
        slipCard.displayDetails();
        
}