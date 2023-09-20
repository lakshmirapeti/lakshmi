var validateName = (event) => {
    var empName = document.querySelector("#ename").value;
    if(event.charCode >= 66 && event.charCode <= 90) {
        return true;
    }else if(event.charCode >= 97 && event.charCode <=122) {
        return true;
    }else if(event.charCode == 32) {
        return true;
    }else {
        return false;
    }
}

var validateAge = (event) => {
    var empAge = document.querySelector("#eage").value;
    if(event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }else {
        return false;
    }
}

var validateSal = (event) => {
    var empSal = document.querySelector("#bsal").value;
    if(event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }else {
        return false;
    }
}

var generateEmpReport = () => {
    var empData = {
        readEmpData () {
            this.name = document.querySelector("#ename").value;
            this.age = document.querySelector("#eage").value;
            this.gender = document.querySelector("input[name = gender]:checked").value;
            this.department = document.querySelector("#edep").value;
            this.BasicSal = document.querySelector("#bsal").value;
            this.BasicSal = parseInt(this.BasicSal);
            this.getPfAndHra();
        },
        getPfAndHra () {
            this.pf = (this.BasicSal * 14) / 100;
            this.hra = (this.BasicSal * 24) / 100;
            this.totalSal = this.BasicSal + this.pf + this.hra;
            this.getTaxData();
        },
        getTaxData () {
            this.taxPersent = 0;
            if(this.gender == 'Male') {
                if(this.totalSal >= 500000) {
                    this.taxPersent = 15;
                } else if(this.totalSal >= 400000) {
                    this.taxPersent = 10;
                }else if(this.taxPersent >=300000) {
                    thid.taxPersent = 5;
                }
            }else {
                if(this.totalSal >= 500000) {
                    this.taxPersent = 10;
                }
                else if(this.taxPersent >= 400000) {
                    this.taxPersent = 5;
                }
            }
            this.totalTaxPaid = (this.totalSal * this.taxPersent) / 100;
        },
        displayEmpData () {
            document.querySelector(".empReport").style.display = "block";
            this.readEmpData();
            document.querySelector("#rname").innerHTML = this.name;
            document.querySelector("#rage").innerHTML = this.age;
            document.querySelector("#rgender").innerHTML = this.gender;
            document.querySelector("#rdep").innerHTML = this.department;
            document.querySelector("#rpf").innerHTML = this.pf;
            document.querySelector("#rhra").innerHTML = this.hra;
            document.querySelector("#rtsal").innerHTML = this.totalSal;
            document.querySelector("#rtax").innerHTML = this.totalTaxPaid;
        }
    };
    empData.displayEmpData();

    console.log(empData);
}