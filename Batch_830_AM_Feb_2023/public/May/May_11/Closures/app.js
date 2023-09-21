var empData = {};

var count = 0;


var getTotalTax = () => {
    readDetails();
    var totalTaxTobePaid = salUtilAPI.getEmpTotalTaxValue(empData);
    document.querySelector("#rblock").innerHTML = 'Total tax to be paid is ' + totalTaxTobePaid;
}

var getTotalEmpSal = () => {
    readDetails();
    var totalSal = salUtilAPI.getEmpTotalSal(empData);
    document.querySelector("#rblock").innerHTML = 'Total Salary to be paid is ' + totalSal;
}

var readDetails = () => {
    count++;
    empData.name = document.querySelector("#empName").value;
    empData.age = document.querySelector("#empAge").value;
    empData.basicSal = document.querySelector("#empBSal").value;
    empData.basicSal = parseInt(empData.basicSal);
    empData.gender = document.querySelector("input[name=gender]:checked").value;
    empData.department = document.querySelector("#empDep").value;
    console.log(empData)
    console.log("These many times user used the feature in page " + count);

    console.log("Count from API lib is " + salUtilAPI.getCountVal())
    
}