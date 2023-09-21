var getPaySlip = () => {

    var empData = {
        getEmpDetail () {
            this.name = document.querySelector("#ename").value;
            this.age = document.querySelector("#eage").value;
            this.gender = document.querySelector("input[name=egender]:checked").value;
            this.dept = document.querySelector("#edept").value;
            this.basicSal = parseInt(document.querySelector("#ebsal").value);
           
        },

        getAllSalary () {
            /*this.hra=0;
            this.pf=0;
            this.totalSal=0,*/

            this.hra = (this.basicSal * 14) / 100;
            this.pf = (this.basicSal * 20) / 100;
            this.pf = parseInt(this.pf)
            this.hra = parseInt(this.hra)
            this.totalSal = (this.basicSal + this.hra +this.pf)
            this.totalSal = parseInt(this.totalSal)
        },

        getTaxDetail (){
        
                var taxPercent=0;
           // this.gender = this.gender.toLowerCase(); // male
            if (this.gender === 'male') 
            {
                if (this.totalSal >= 500000) {
                    this.taxPercent=15;
                } else if (this.totalSal >= 400000 && this.totalSal < 500000) {
                    this.taxPercent=10;
                } else if (this.totalSal >= 300000 && this.totalSal < 400000) {
                    this.taxPercent=5;
                }
                else {
                    this.taxPercent=0;
                }
            }
           
                else { // female
                if (this.totalSal >= 500000) {
                    this.taxPercent=10;
                } else if (this.totalSal >= 400000 && this.totalSal < 500000) {
                  this.taxPercent=5;
                } 
                else{
                    this.taxPercent=0;
                }
            }

            this.taxToBePaid = (this.totalSal * this.taxPercent)/100;
            this.taxToBePaid = parseInt(this.taxToBePaid)
            this.salaryAfterTax = (this.totalSal - this.taxToBePaid)
            this.salaryAfterTax = parseInt(this.salaryAfterTax)
            
        },

        getDisplay () {
            document.querySelector("#paySlip").style.display="block";
            this.getEmpDetail();
            this.getAllSalary();
            this.getTaxDetail();
            document.querySelector("#pname").innerHTML = this.name;
            document.querySelector("#page").innerHTML = this.age;
            document.querySelector("#pgender").innerHTML = this.gender;
            document.querySelector("#pdept").innerHTML = this.dept;
            document.querySelector("#pbsal").innerHTML = this.basicSal;
            document.querySelector("#phra").innerHTML = this.hra;
            document.querySelector("#ppf").innerHTML = this.pf;
            document.querySelector("#ptsal").innerHTML = this.totalSal;
            //document.querySelector("#ptpercent").innerHTML = this.taxPercent;
            //document.querySelector("#ptaxtobepaid").innerHTML = this.taxToBePaid;
            //document.querySelector("#ptotalsalaryafttax").innerHTML = this.salaryAfterTax;

        }
    };

    empData.getDisplay ();
    console.log(empData);

};
