var generateCaptcha = () => {
    var captcha = '';
    for (let i = 0; i < 5; i++) {
        const randomAscii = Math.floor(Math.random() * 75) + 48;
        // exclude characters that are hard to read, such as I, O, 0, l, etc.
        if ((randomAscii >= 58 && randomAscii <= 64) || (randomAscii >= 91 && randomAscii <= 96)) {
            i--;
            continue;
        }
        captcha += String.fromCharCode(randomAscii);
    }
    document.querySelector("#rblock").innerText = captcha;
}

generateCaptcha();