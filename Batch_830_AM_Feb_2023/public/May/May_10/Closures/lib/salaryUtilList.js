var count = 0;

var getPf = (data) => {
    count += 1;
    var pf = 0;
    pf = (data.basicSal * 14) / 100;
    return pf;
}

var getHra = (data) => {
    count += 1;
    var hra = 0;
    hra = (data.basicSal * 24) / 100;
    return hra;
}

var getTotalSal = (data) => {
    count += 1;
    var pf = getPf(data);
    var hra = getHra(data);
    var totalSal = pf + hra + data.basicSal;
    return Math.round(totalSal);
}

var getTotalTaxToBePaid = (data) => {
    count += 1;
    var taxPercent = 0;
    var totalSal = getTotalSal(data); 
    if (data.gender == 'Male') {
        if (totalSal >= 300000) {
            taxPercent = 15;
        } else if (totalSal >= 200000) {
            taxPercent = 10
        }
    } else {
        if (totalSal >= 300000) {
            taxPercent = 10;
        } else if (totalSal >= 200000) {
            taxPercent = 5;
        }
    }
    var taxValue = (totalSal * taxPercent) / 100;

    return Math.round(taxValue);
}