function validatePassword() {
  const password = document.querySelector("#password").value;
  const error = document.querySelector("#password-error");
  const uppercaseReq = document.querySelector("#uppercase-req");
  const lengthReq = document.querySelector("#length-req");
  const specialReq = document.querySelector("#special-req");
  const firstCharReq = document.querySelector("#first-char-req");
  const twoUppercaseReq = document.querySelector("#two-uppercase-req");
  const twoLowercaseReq = document.querySelector("#two-lowercase-req");
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let specialCount = 0;

  if (password === "") {
    error.innerHTML = "";
    uppercaseReq.style.color = "";
    lengthReq.style.color = "";
    specialReq.style.color = "";
    firstCharReq.style.color = "";
    twoUppercaseReq.style.color = "";
    twoLowercaseReq.style.color = "";
    return;
  }

  if (password.length < 8) {
    lengthReq.style.color = "red";
  } else {
    lengthReq.style.color = "green";
  }

  if (password[0] === password[0].toUpperCase()) {
    firstCharReq.style.color = "red";
  } else {
    firstCharReq.style.color = "green";
  }

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char === char.toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
    if ("!@#$%^&*(),.?\":{}|<>".indexOf(char) !== -1) {
      specialCount++;
    }
  }

  if (uppercaseCount < 2) {
    twoUppercaseReq.style.color = "red";
  } else {
    twoUppercaseReq.style.color = "green";
  }

  if (lowercaseCount < 2) {
    twoLowercaseReq.style.color = "red";
  } else {
    twoLowercaseReq.style.color = "green";
  }

  if (specialCount < 2) {
    specialReq.style.color = "red";
  } else {
    specialReq.style.color = "green";
  }

  if (uppercaseCount >= 1) {
    uppercaseReq.style.color = "green";
  } else {
    uppercaseReq.style.color = "red";
  }

  if (
    uppercaseReq.style.color === "green" &&
    lengthReq.style.color === "green" &&
    specialReq.style.color === "green" &&
    firstCharReq.style.color === "green" &&
    twoUppercaseReq.style.color === "green" &&
    twoLowercaseReq.style.color === "green"
  ) {
    error.innerHTML = "Password is valid!";
    error.style.color = "green";
  } else {
    error.innerHTML = "Password is invalid!";
    error.style.color = "red";
  }
}
