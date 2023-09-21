
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('userChoosenTheme') != null) {
        document.querySelector("body").style.background = localStorage.getItem('userChoosenTheme');
    }
});


var validateUser = () => {
    var data = {};
    data.uid = document.querySelector("#userId").value;
    data.upwd = document.querySelector("#password").value;
    console.log(data);
}

var applyTheme = () => {
    var themeName = document.querySelector("#themeContainer").value;
    localStorage.setItem("userChoosenTheme", themeName);

    
    document.querySelector("body").style.background = themeName;
}