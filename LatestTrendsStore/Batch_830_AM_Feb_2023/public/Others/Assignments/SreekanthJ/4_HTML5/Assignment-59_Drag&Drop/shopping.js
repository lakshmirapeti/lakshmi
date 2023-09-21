document.getElementById("mensContainer").innerHTML = "<p>Men's clothing items</p>";
document.getElementById("womensContainer").innerHTML = "<p>Women's clothing items</p>";
document.getElementById("kidsContainer").innerHTML = "<p>Kid's clothing items</p>";

const containers = document.querySelectorAll(".column");
containers.forEach(container => {
    container.addEventListener("dragover", allowDrop);
    container.addEventListener("drop", handleDrop);
});

// Add event listener to the product images
const products = document.querySelectorAll(".productList img");
products.forEach(product => {
    product.addEventListener("dragstart", handleDragStart);
});

function allowDrop(event) {
    event.preventDefault();
}

// Event handler for handling drop
function handleDrop(event) {
    event.preventDefault();
    const productId = event.dataTransfer.getData("text/plain");
    const productElement = document.getElementById(productId);
    const containerId = this.id;
    const container = document.getElementById(containerId);

    const category = productElement.parentNode.id;

    // Append the product to its corresponding container
    if (category === "mensProduct" && containerId === "mensContainer") {
        container.appendChild(productElement);
    } else if (category === "womensProduct" && containerId === "womensContainer") {
        container.appendChild(productElement);
    } else if (category === "kidsProduct" && containerId === "kidsContainer") {
        container.appendChild(productElement);
    }
}


function handleDragStart(event) {
    const productId = this.id;
    event.dataTransfer.setData("text/plain", productId);
}
