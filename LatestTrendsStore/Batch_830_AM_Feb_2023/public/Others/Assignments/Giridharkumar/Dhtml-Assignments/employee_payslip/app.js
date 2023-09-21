var salary = () => {
    var employeedata = {
        getempdetails() {
            this.name = document.querySelector("#empname").value;
            this.age = document.querySelector("#empage").value;
            this.gender = document.querySelector("input[name = gender]:checked").value;
            this.department = document.querySelector("#empdepart").value;
            this.basesalary = parseInt(document.querySelector("#empbasesal").value);
        },
        find_pf_and_hra() {
            this.totalsalary = 0;
            this.pf = (this.basesalary * 14) / 100;
            this.hra = (this.basesalary * 24) / 100;

            this.totalsalary = this.basesalary + this.pf + this.hra
            this.findtaxpercent()

        },
        findtaxpercent() {
            this.taxpercent = 0;
            this.gender = document.querySelector('input[name="gender"]:checked').value;
            if (this.gender == 'male') {
                if (this.totalsalary >= 500000) {
                    this.taxpercent = 15;
                } else if (this.totalsalary <= 500000) {
                    this.percent = 10;
                } else if (this.totalsalary <= 300000 ) {
                    this.percent = 5;
                }
            } else {
                if (this.totalsalary >= 400000) {
                    this.taxpercent = 10;
                } else if (this.totalsalary <=400000) {
                    this.taxpercent = 5;
                } 
            }
        },
        displayempslipdetails() {
            this.getempdetails()
            this.find_pf_and_hra()
            document.querySelector(".payslip").style.display = 'block';
            document.querySelector("#ename").innerHTML = this.name;
            document.querySelector("#eage").innerHTML = this.age;
            document.querySelector("#egender").innerHTML = this.gender;
            // document.querySelector("#edepart").innerHTML = this.department
            document.querySelector("#esalary").innerHTML = this.basesalary;
            document.querySelector("#epf").innerHTML = this.pf;
            document.querySelector("#ehra").innerHTML = this.hra;
            document.querySelector("#etotal").innerHTML = this.totalsalary;
            document.querySelector("#etax").innerHTML = this.taxpercent
        }
    };
    employeedata.displayempslipdetails()
    console.log(employeedata)

}