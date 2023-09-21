var elementId, pClass, cClass;

var productDragStarted = (event) => {
    elementId = '#' + event.target.getAttribute("id");
    pClass = event.target.getAttribute("class");
}

var elementDragIsOver = (event) => {
    cClass = event.target.getAttribute("class");
    // console.log(cClass);
    event.preventDefault();
}

var elementGotDropped = (event) => {
    if (cClass == pClass) {
        event.preventDefault();
        var productImage = document.querySelector(elementId);
        event.target.append(productImage);
    } 
}