console.log("am from Worker class");

var getUpdatedDate = () => {
    var date = new Date();
    // var formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    var formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;


    
    postMessage(formattedDate)
    
}
setInterval(() => {
    getUpdatedDate();
}, 1000);
