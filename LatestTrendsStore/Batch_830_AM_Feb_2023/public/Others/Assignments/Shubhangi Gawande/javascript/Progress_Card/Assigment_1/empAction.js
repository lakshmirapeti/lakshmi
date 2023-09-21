var generatePayslip = () => {

    document.querySelector(".resultContainer").style.display = 'block';

    var empDetails = {

        readEmpData() {
            this.empName = document.querySelector("#ename").value;
            this.empAge = document.querySelector("#eage").value;
            this.empGender = document.querySelector("input[name=gender]:checked").value;
            this.month = document.querySelector("#emonth").value;
            this.department = document.querySelector("#eDept").value;
            this.basicSalary = parseInt(document.querySelector("#esal").value);
            this.empTotalSalary();
        },

        empTotalSalary() {
            this.HRA = (this.basicSalary * 24) / 100;
            this.PF = (this.basicSalary * 14) / 100;
            this.totalSalary = this.basicSalary + this.HRA + this.PF;
            this.taxDetails();
        },
        taxDetails() {
            var taxPercent = 0;

            if (this.empGender === "male") {
                if (this.totalSalary > 500000) {
                    this.taxPercent = 15;
                }

                else if (this.totalSalary >= 300000 && this.totalSalary < 500000) {
                    this.taxPercent = 10;
                }

                else if (this.totalSalary >= 200000 && this.totalSalary < 300000) {
                    this.taxPercent = 5;
                }

                else {
                    this.taxPercent = 0;
                }
            }
            else {

                //For Female
                if (this.totalSalary > 500000) {
                    this.taxPercent = 10;
                }

                else if (this.totalSalary >= 300000 && this.totalSalary < 500000) {
                    this.taxPercent = 5;

                }

                else {
                    this.taxPercent = 0;
                }
            }

            this.totalTax = (this.totalSalary * this.taxPercent) / 100;
            this.salaryAfterTax = this.totalSalary - this.totalTax;
            this.totalTax = parseInt(this.totalTax);
            this.salaryAfterTax = parseInt(this.salaryAfterTax);
            this.PF = parseInt(this.PF);
            this.HRA = parseInt(this.HRA);
            this.showEmpData();
        },
        showEmpData() {
            this.empGender = this.empGender.charAt(0).toUpperCase() + this.empGender.slice(1);
            document.querySelector("#rName").innerText = this.empName;
            document.querySelector("#rAge").innerText = this.empAge;
            document.querySelector("#rGender").innerText = this.empGender;
            document.querySelector("#rMonth").innerText = this.month;
            document.querySelector("#rDept").innerText = this.department;
            document.querySelector("#rBasicSal").innerText = this.basicSalary;
            document.querySelector("#rPF").innerText = this.PF;
            document.querySelector("#rHRA").innerText = this.HRA;
            document.querySelector("#rTotalTax").innerText = this.totalTax;
            document.querySelector("#rTaxSlab").innerText = this.taxPercent;
            document.querySelector("#rSalAftTax").innerText = this.salaryAfterTax;
        }
    }

    empDetails.readEmpData();
}

