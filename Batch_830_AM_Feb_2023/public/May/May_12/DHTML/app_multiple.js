
var pdetails = [
    {
        name:'New Generation Laptop',
        price: '$4000',
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
    var ulTag = $("<ul></ul>").addClass('pultag')
    var li1 = $("<li></li>").text( pData.name);
    ulTag.append(li1);

    var li2 = $("<li></li>").html(pData.price);
    ulTag.append(li2);

    var li3 = $("<li></li>").html(pData.manufacturer);
    ulTag.append(li3);

    var li4 = $("<li></li>").html('<b>By</b> ' + pData.seller);
    ulTag.append(li4);

    var li5 = $("<li></li>");
    
    var imageTag = jQuery("<img />").addClass('productImg').attr("src", pData.image);// <img class='productImg' src="...."/>
    li5.append(imageTag);
    ulTag.append(li5);

    var li6 = $("<li></li>").addClass('ratingImgContainer');
    li6.append(getRatingImage(pData.rating));
    ulTag.append(li6);

    $(".productDetailsContainer").append(ulTag);
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
    
    var divTag = $("<div></div>").addClass('ratingContainer');

    for (var i = 0; i < noOfFullStars; i++) { //Creating multiple fullstart image tags
        var div1 = $("<div></div>").addClass('fullImage rating');
        divTag.append(div1)
    }
    
    if (noOfHalfStars) {
        var div1 = $("<div></div>").addClass('halfImage rating');
        divTag.append(div1)
    }
    for (var i = 0; i < noOfZeroStars; i++) {
        var div1 = $("<div></div>").addClass('zeroImg rating');
        divTag.append(div1)
    }
    return divTag;
}


var loadDetails = () => {
    for (var i = 0 ; i < pdetails.length; i++) {
        loadProductDetails(pdetails[i]);
    }
}