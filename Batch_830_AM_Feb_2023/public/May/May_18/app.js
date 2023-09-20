
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('userChoosenTheme') != null) {
        document.querySelector("body").style.background = sessionStorage.getItem('userChoosenTheme');
    }

    if (sessionStorage.getItem('userCredentials') != null) {
        var userData = JSON.parse(sessionStorage.getItem('userCredentials'));
        document.querySelector("#userId").value = userData.uid;
        document.querySelector("#password").value = userData.upwd;

        document.querySelector("#rembrCredentials").checked = true;
    }
});


var validateUser = () => {
    var data = {};
    data.uid = document.querySelector("#userId").value;
    data.upwd = document.querySelector("#password").value;

    if (document.querySelector("#rembrCredentials:checked")) { // save the crednetial in cache.
        sessionStorage.setItem("userCredentials", JSON.stringify(data))


    } else { // clear the credentials
        sessionStorage.removeItem("userCredentials")
    }
    console.log(data);
}

var applyTheme = () => {
    var themeName = document.querySelector("#themeContainer").value;
    sessionStorage.setItem("userChoosenTheme", themeName);

    
    document.querySelector("body").style.background = themeName;
}