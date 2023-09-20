var paySlip = () => {

    var details = {
        readDataFromEmp () {
            this.name = document.querySelector("#empname").value;
            this.age = document.querySelector("#empage").value;
            this.gender = document.querySelector("input[name = gender]:checked").value;
            this.department = document.querySelector("#empdep").value;
            this.basicsal = document.querySelector("#basicsal").value;
            this.basicsal = parseInt(this.basicsal);
        },
        getHRA_And_PF () {
            this.hra = (this.basicsal * 24 ) / 100;
            this.hra = parseInt(this.hra);
            this.pf = (this.basicsal * 14) / 100;
            this.pf = parseInt(this.pf);
            this.Total = this.basicsal + this.hra + this.pf;
            this.Total = parseInt(this.Total);
            this.getTax();
        },
        getTax () {
            this.taxpercent = 0;
            if (this.gender == "Male" && this.Total >= 500000) {
                this.taxpercent = 15;
            }else if (this.gender == "Male" && this.Total >= 200000) {
                this.taxpercent = 10;
            }else {
                this.taxpercent = 0; 
            };
            if (this.Total >= 500000 && this.gender == "Female") {
                this.taxpercent = 10;
            }else if (this.Total >= 200000 && this.gender == "Female"){
                this.taxpercent = 0;
            };
            
            this.taxToBePaid = (this.Total * this.taxpercent) / 100;
            this.taxToBePaid = parseInt(this.taxToBePaid);
        },
        displayDetails () {
            this.readDataFromEmp();
            this.getHRA_And_PF();
            document.querySelector("#rname").innerHTML = this.name;
            document.querySelector("#rage").innerHTML = this.age;
            document.querySelector("#rgender").innerHTML = this.gender;
            document.querySelector("#rdep").innerHTML = this.department;
            document.querySelector("#rbasicsal").innerHTML = this.basicsal;
            document.querySelector("#rhra").innerHTML = this.hra;
            document.querySelector("#rpf").innerHTML = this.pf;
            document.querySelector("#rtotal").innerHTML = this.Total;
            document.querySelector("#rtax").innerHTML = this.taxToBePaid;
        }  
    };
    details.displayDetails ();
}