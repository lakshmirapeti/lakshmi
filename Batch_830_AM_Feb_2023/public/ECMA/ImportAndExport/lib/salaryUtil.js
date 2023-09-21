export var getPf = (bsal) => {
    var pf = (bsal * 14 ) / 100;
    return pf;
}


export var getHRA = (bsal) => {
    var hra = (bsal * 24 ) / 100;
    return hra;
}


export var getTotalSal = (bsal) => {
    var pf = getPf(bsal);
    var hra = getHRA(bsal);
    var totalSal = bsal + pf + hra;
    return totalSal;
}


export class StudentData {
    
}
