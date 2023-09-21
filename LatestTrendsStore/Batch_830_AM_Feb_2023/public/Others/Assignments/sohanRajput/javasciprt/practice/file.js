var employname,employage,amploygender,employsal;
employname = prompt("enter your name");
employage = prompt("enter your age");
amploygender = prompt("enter your gender");
employsal  = prompt("enter your sal");
employsal = parseInt(employsal);
var hra = employsal*24 /100;
hra = parseInt(hra);
var pf = employsal*14/100;
pf = parseInt(pf);
var totalsal = employsal+hra+pf;
var tax15 = totalsal*15/100;
apay15 = totalsal-tax15;
var tax10 = totalsal*10/100;
apay10 = totalsal-tax10;
var tax5 = totalsal*5/100;
apay5 = totalsal - tax5;

console.log(`your ${employname} total sallary is ${totalsal}`)
if(amploygender == "male"){
if (employsal>=500000){
    console.log(`your 15% tax of sallary ${tax15}`)
    console.log("your total sallry after tax pay" +apay15)

}
if (employsal>=300000 && employsal<500000){
    console.log(`your 10% tax of sallary ${tax10}`)
    console.log(`your sallry after 10% tax pay ${apay10}`)
}
if (employsal>=200000 && employsal<300000){
    console.log(`your 5% tax of sallary ${tax5}`)
    console.log(`your sallry after 5% tax pay ${apay5}`)
}
}
if(amploygender == "female"){
    if (employsal>=500000){
        console.log(`your 10% tax of sallary ${tax10}`)
        console.log("your total sallry after 10% tax pay" +apay10)
    }
    if (employsal>=200000 && employsal<500000){
        console.log(`your 5% tax of sallary ${tax5}`)
        console.log(`your sallry after 5% tax pay ${apay5}`)
    }
    
}