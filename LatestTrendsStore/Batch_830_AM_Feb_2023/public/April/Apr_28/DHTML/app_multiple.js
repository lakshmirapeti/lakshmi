
var pdetails = [
    {
        name:'New Generation Laptop',
        price: '$2300',
        manufacturer: 'Dell Inspiron',
        seller: 'ABC Electronics India Pvt Ltd.',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating: 4
    },
    {
        name:'Iphone 14 Max Pro',
        price: '$2300',
        manufacturer: 'Dell Inspiron',
        seller: 'ABC Electronics India Pvt Ltd.',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating: 4.5
    },
    {
        name:'Pen Drive',
        price: '$1200',
        manufacturer: 'Dell Inspiron',
        seller: 'ABC Electronics India Pvt Ltd.',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating: 2.5
    },
    {
        name:'New Generation Laptop',
        price: '$2300',
        manufacturer: 'Dell Inspiron',
        seller: 'ABC Electronics India Pvt Ltd.',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating: 4.5
    },
    {
        name:'Harddisk',
        price: '$4300',
        manufacturer: 'Dell Inspiron',
        seller: 'ABC Electronics India Pvt Ltd.',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating: 3.5
    }

]

var loadProductDetails = (pData) => {
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'pultag')
    var li1 = document.createElement("li");
    li1.innerText = pData.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = pData.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = pData.manufacturer;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = '<b>By</b> ' + pData.seller;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    
    var imageTag = document.createElement("img"); // <img />
    imageTag.setAttribute("class", 'productImg'); // <img class='productImg' />
    imageTag.setAttribute("src", pData.image);// <img class='productImg' src="...."/>
    li5.append(imageTag);
    ulTag.append(li5);

    var li6 = document.createElement("li");
    li6.setAttribute("class", 'ratingImgContainer');
    li6.append(getRatingImage(pData.rating));
    ulTag.append(li6);

    document.querySelector(".productDetailsContainer").append(ulTag);
}

var getRatingImage = (rating) => {
    var noOfFullStars = 0;
    var noOfHalfStars = 0;
    var noOfZeroStars = 0;
    if (!Number.isInteger(rating)) {
        noOfHalfStars = 1;
    }

    noOfFullStars = parseInt(rating);
    noOfZeroStars = 5 - noOfFullStars - noOfHalfStars;

    if ((noOfFullStars + noOfZeroStars) != 5) {
        noOfHalfStars = 1;
    }
    
    var divTag = document.createElement("div");
    divTag.setAttribute("class", 'ratingContainer');

    for (var i = 0; i < noOfFullStars; i++) { //Creating multiple fullstart image tags
        var div1 = document.createElement("div");
        div1.setAttribute("class", 'fullImage rating');
        divTag.append(div1)
    }
    
    if (noOfHalfStars) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", 'halfImage rating');
        divTag.append(div1)
    }
    for (var i = 0; i < noOfZeroStars; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", 'zeroImg rating');
        divTag.append(div1)
    }
    return divTag;
}


var loadDetails = () => {
    for (var i = 0 ; i < pdetails.length; i++) {
        loadProductDetails(pdetails[i]);
    }
}