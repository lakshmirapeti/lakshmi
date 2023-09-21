var generateEmployslip = () => {

    var employDtails = {
        
        getEmployDetials() {
            this.getEmployDetials.name = document.querySelector("#ename").value;
            this.age = document.querySelector("#eage").value;
            this.gender = document.querySelector("input[name = sohan]:checked").value;
            this.basicsalary = + document.querySelector("#esalary").value;
            this.getHRAandPrTotal()
        },

        getHRAandPrTotal() {
            this.hra = + this.basicsalary * 24 / 100;
            this.pf = + this.basicsalary * 14 / 100;
            this.total = + this.basicsalary + this.hra + this.pf;


        },



        displayData() {
            document.querySelector("#employepay").style.display = "block"

            this.getEmployDetials();
            this.getHRAandPrTotal();
            console.log("name is " + this.name);
            document.querySelector("#eName").innerHTML = this.name;


            document.querySelector("#eTotal").innerHTML = this.total;
            document.querySelector("#eBasic").innerHTML = this.basicsalary;
            document.querySelector("#eGender").innerHTML = this.gender;
            document.querySelector("#eHra").innerHTML = this.hra;
            document.querySelector("#ePF").innerHTML = this.pf;
            if (this.basicsalary > 500000 && this.gender == "male") {
                this.tax = this.total * 15 / 100;
                document.querySelector("#tax").innerHTML = this.tax;

            } else if (this.basicsalary > 300000 && this.gender == "male") {
                this.tax = this.total * 10 / 100;
                document.querySelector("#tax").innerHTML = this.tax;

            }

            else if (this.basicsalary > 500000 && this.gender == "female") {
                this.tax = this.total * 10 / 100;
                document.querySelector("#tax").innerHTML = this.tax;
            } else if (this.basicsalary > 300000 && this.gender == "female") {
                this.tax = this.total * 5 / 100;
                document.querySelector("#tax").innerHTML = this.tax;
            } else {
                document.querySelector("#tax").innerHTML = " no tax is there";
            };
            if (this.age < 65 && this.age > 18 && this.basicsalary > 0) {
                document.querySelector("#eAge").innerHTML = this.age;
            } else (
                alert("please enter your right value")

            )

        }
    }
    if (employDtails.age < 65 && employDtails.age > 18 && employDtails.basicsalary > 0) {
        employDtails.displayData();
    }

}
