var slipGenerator = () => {
    // var name = document.querySelector("eName").value;
    // var gender = document.querySelector("input[name=gender]:checked").value;

    var empData = {
        getEmpDetails() {

            this.name = document.querySelector("#eName").value;
            this.gender =  document.querySelector("input[name=gender]:checked").value;
            this.department = document.querySelector("#edepartment").selectedOptions[0].innerHTML
            this.basicSalary= document.querySelector("#eSalary").value;
            this.basicSalary = parseInt(this.basicSalary)
            console.log(empData)
        },
     
        getHraAndPf(){
            this.totalSalary = 0;
    
            this.hra = (this.basicSalary * 24 )/100
            this.pf = (this.basicSalary * 14 )/100
            this.totalSalary = this.basicSalary + this.hra + this.pf;
            this.getTax()
        },

        getTax(){
            this.taxPercent = 0;
            this.gender =  document.querySelector("input[name=gender]:checked").value;
            
            if(this.gender === "Male"){
                if(this.totalSalary > 500000){
                    this.taxPercent = 15;
                }else if(this.totalSalary > 400000){
                    this.taxPercent = 10;
                }else if(this.totalSalary > 300000){
                    this.taxPercent = 5;
                }else{
                    this.tax = 0;
                }
            }
            if(this.gender === "Female"){
                if(this.totalSalary > 500000){
                    this.taxPercent = 10;
                }else if(this.totalSalary > 400000){
                    this.taxPercent = 5;
                }else{
                    this.tax = 0;
                }
            }
          
        },
        displayDetails(){
            document.querySelector(".slipCard").style.display = 'block';
            this.getEmpDetails();
            this.getHraAndPf();
            console.log("name is " + this.name);
            document.querySelector("#empName").innerHTML = this.name;
            document.querySelector("#empGen").innerHTML = this.gender;
            document.querySelector("#hra").innerHTML = this.hra;
            document.querySelector("#pf").innerHTML = this.pf;
            document.querySelector("#empSalary").innerHTML = this.basicSalary;
            document.querySelector("#empDepart").innerHTML = this.department;
            document.querySelector("#totalSal").innerHTML = this.totalSalary;
            document.querySelector("#tax").innerHTML = this.taxPercent;
        }
      
    }
    
   
    
    empData.displayDetails();

    console.log(empData);

   
}



// var calculateSalary = () => {
//     var empData = {
//         getEmployeeDetails() {
//             this.name = document.querySelector("#name").value;
//             this.age = document.querySelector("#age").value;
//             this.gender = document.querySelector("input[name=gender]:checked").value;
//             this.department = document.querySelector("#department").value;
//             this.basicSalary= parseFloat(document.querySelector("#basicSalary").value);
//         },
//         getHraAndPF() {
//             this.totalSalary = 0;
//              // Calculate HRA and PF
//                 this.hra = (this.basicSalary * 24) / 100;
//                 this.pf = (this.basicSalary * 14) / 100;

//              // Calculate total salary
//              this.totalSalary = this.basicSalary + this.hra + this.pf;
//             this.getTax();
//         },
//         getTax() {
//             this.taxPercent =0;
//             this.gender = document.querySelector('input[name="gender"]:checked').value;
//             if (this.gender === "Male") {
//                 if (this.totalSalary >= 500000) {
//                     this.taxPercent = 15;
//                 } else if (this.totalSalary >= 300000 && this.totalSalary < 500000) {
//                     this.taxPercent = 10;
//                 } else if (this.totalSalary >= 200000 && this.totalSalary < 300000) {
//                     this.taxPercent = 5;
//                 } else {
//                     this.tax = 0;
//                 }
//             } else {
//                 if (this.totalSalary >= 500000) {
//                     this.taxPercent = 15;
//                 } else if (this.totalSalary >= 300000 && this.totalSalary < 500000) {
//                     this.taxPercent = 5;
//                 } else {
//                     this.tax = 0;
//                 }
//             }
//         },
//         displayDetails() {
//             document.querySelector(".result").style.display = 'block';
//             this.getEmployeeDetails();
//             this.getHraAndPF();
//             console.log("name is " + this.name);
//             document.querySelector("#rname").innerHTML = this.name;
//             document.querySelector("#rage").innerHTML = this.age;
//             document.querySelector("#rgender").innerHTML = this.gender;
//             document.querySelector("#rhra").innerHTML = this.hra;
//             document.querySelector("#rpf").innerHTML = this.pf;
//             document.querySelector("#rtotal").innerHTML = this.totalSalary;
//             document.querySelector("#rtax").innerHTML = this.taxPercent;
            
//         }
//     };
//     empData.displayDetails();

//     console.log(empData);
// }
