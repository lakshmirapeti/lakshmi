var payslipgenerator = () =>{
    var employee = {
        name :document.querySelector("#ename").value,
        age : document.querySelector("#eage").value,
        deptartment : document.querySelector("#edept").value,
        bsal : parseInt(document.querySelector("#ebsal").value),
        getHra() {
            this.hra = (this.bsal * 24 ) / 100;
            this.getPf();
        },
        getPf() {
            this.pf = (this.bsal * 14 ) / 100;
        },
        getTotal(){
            this.getHra();
            this.total = this.hra + this.pf + this.bsal;
        },
        getTax(){
            this.getTotal();
            if(this.total > 600000)
            this.tax = (this.total * 15) / 100;
            else if(this.total > 400000)
            this.tax = (this.total * 10) / 100;
            else if(this.total > 300000)
            this.tax = (this.total * 5) / 100;
            else
            this.tax = 0;
        },
        displayDetails(){
            document.querySelector(".details").style.display = "block";
            this.getTax();
            document.querySelector("#name").innerHTML = this.name;
            document.querySelector("#age").innerHTML = this.age;
            document.querySelector("#dept").innerText = this.deptartment;
            document.querySelector("#total").innerHTML = this.total;
            document.querySelector("#tax").innerHTML = this.tax;
        },
    };
    employee.displayDetails();
    console.log(employee);
}