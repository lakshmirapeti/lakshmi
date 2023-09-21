
import * as salUtil from './lib/salaryUtil.js';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#pfbtn").addEventListener("click", () => {
        doOperation('pf');
    })


    document.querySelector("#hrabtn").addEventListener("click", () => {
        doOperation('hra');
    })

    document.querySelector("#tsalbtn").addEventListener("click", () => {
        doOperation('totalSal');
    })
})


var doOperation = (type) => {
    var data = {
        name: document.querySelector("#uname").value,
        bSal: document.querySelector("#bsal").value
    };
    data.bSal = parseInt(data.bSal);
    var pf, hra, totalSal, msg;
    switch (type) {
        case 'pf':
            pf = salUtil.getPf(data.bSal);
            msg = `PF value for ${data.name} ` + pf;
            break;
        case 'hra':
            hra = salUtil.getHRA(data.bSal);
            msg = `HRA value for ${data.name} ` + hra;
            break;
        case 'totalSal':
            totalSal = salUtil.getTotalSal(data.bSal);
            msg = `Total Sal value for ${data.name} ` + totalSal;
            break;
    }
    document.querySelector("#rBlock").innerHTML = msg;
}