var empolyeeTaxPercent = () => {
    var eData = {
        readEmployeeData(){
            this.name = document.querySelector('#ename').value;
            this.age = document.querySelector('#eage').value;
            this.gender = document.querySelector("input[name=gender]:checked").value;
            this.department = document.querySelector('#eDepartment').value;
            this.basicSalary = parseInt(document.querySelector('#salary').value);
        },
        getTotalPfHra(){
            this.totalSalary=0;
            this.pf = (this.basicSalary *14)/100;
            this.hra = (this.basicSalary *24)/100;
            this.totalSalary = this.basicSalary + this.pf + this.hra;
            this.getTaxPercent();
        },
        getTaxPercent(){
            this.taxPercent=0;
         if(this.gender == 'male'){
            if(this.totalSalary >= 500000){
                this.taxPercent = 15;
            }else if(this.totalSalary >= 400000){
                this.taxPercent =10;
            }else if(this.totalSalary >= 300000){
                this.taxPercent =5;
            }

         }else{
            if(this.totalSalary >= 500000){
                this.taxPercent = 10;
            }else if(this.totalSalary >= 400000){
                this.taxPercent =5;
            }else if(this.totalSalary >= 300000){
                this.taxPercent =0;
            }
         }
          this.taxToBePaid = (this.basicSalary *this.taxPercent)/100;
        },
        employeeData(){
            document.querySelector('.empData').style.display = 'block';
            this.readEmployeeData();
            this.getTotalPfHra();
            console.log(eData);
            document.querySelector('#rname').innerHTML=this.name;
            document.querySelector('#rage').innerHTML=this.age;
            document.querySelector('#rgen').innerHTML=this.gender;
            document.querySelector('#rdept').innerHTML=this.department;
            document.querySelector('#rsal').innerHTML=this.basicSalary;
            document.querySelector('#rtotal').innerHTML=this.totalSalary;
            document.querySelector('#rtax').innerHTML=this.taxToBePaid;
        }
    }
    eData.employeeData();
 
}
var newEmployeeData = () => {
     document.querySelector('#ename').value='';
     document.querySelector('#eage').value = '';
     document.querySelector("#gen1").checked = true;
     document.querySelector('#eDepartment').selectedIndex ='front end';
     document.querySelector('#salary').value = '';
     document.querySelector('.empData').style.display ='none';
}