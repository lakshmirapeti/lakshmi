var generateSlip = () => {
    var employeedata = { 
        getemployeeDetails () {
            this.name = document.querySelector("#ename").value;
            this.age = document.querySelector("#eage").value;
            this.gender = document.querySelector("#egender").value;
            this.department = document.querySelector("#edepartment").value;
            this.basicSalary = document.querySelector("#esalary").value;
            this.basicSalary = parseInt(this.basicSalary);
        },
        getpfAndhra () {
            this.getemployeeDetails ();
            this.totalSal = 0;
            this.pf = (this.basicSalary * 14 ) / 100;
            this.hra = (this.basicSalary * 24 ) / 100;
            this.totalSal = this.pf + this.hra + this.basicSalary
        },
        display () {
            document.querySelector(".salarySlip").style.display = 'block';
            // getemployeeDetails();
            this.getpfAndhra();
            document.querySelector("#rname").innerHTML = this.name;
            document.querySelector("#rage").innerHTML = this.age;
            document.querySelector("#rgender").innerHTML = this.gender;
            document.querySelector("#rdepartment").innerHTML = this.department;
            document.querySelector("#rtotalSalary").innerHTML = this.totalSal;
            document.querySelector("#rpf").innerHTML = this.pf;
            document.querySelector("#rhra").innerHTML = this.hra;
        }
    };
    employeedata.display();
    console.log(employeedata);
}