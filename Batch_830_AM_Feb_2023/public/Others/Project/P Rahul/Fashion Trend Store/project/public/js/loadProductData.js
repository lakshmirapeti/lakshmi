

var pData = [];
var loadProductDetails = (pData) => {
    var ulTag = $('<ul></ul>').addClass('pulTag');
    var li1 = $('<li></li>').text(pData.name);
    ulTag.append(li1);

    var li2 = $('<li></li>').text(pData.price);
    ulTag.append(li2);

    var li3 = $('<li></li>').text(pData.manufacturer);
    ulTag.append(li3);

    var li4 = $('<li class="productDescription"></li>').text(pData.seller);
    ulTag.append(li4);

    var li5 = $('<li></li>');

    var imgTag = $('<img />').addClass('productImg').attr('src', pData.image);
    li5.append(imgTag);
    ulTag.append(li5);

    var li6 = $('<li></li>').addClass('ratingContainer');
    // li6.append(getRatingImage(pData.rating.rate));
    li6.append(getRatingImage(pData.rating));
    ulTag.append(li6);

    $("#productDataContainer").append(ulTag);
}

var getRatingImage = (rating) => {
    var noOfFullStars = 0;
    var noOfHalfStars = 0;
    var noOfZeroStars = 0;
    if(!Number.isInteger(rating)) {
        noOfHalfStars = 1;
    }
    noOfFullStars = parseInt(rating);
    noOfZeroStars = 5 - noOfFullStars - noOfHalfStars;

    if((noOfFullStars + noOfZeroStars) != 5) {
        noOfHalfStars = 1;
    }

    var divTag = $('<div></div>').addClass('ratingContainer');

    for(var i = 0; i < noOfFullStars; i++) {
        var div1 = $('<div></div>').addClass('fullImage rating');
        divTag.append(div1);
    }
    if(noOfHalfStars) {
        var div1 = $('<div></div>').addClass('halfImage rating');
        divTag.append(div1);
    }
    for(var i = 0; i < noOfZeroStars; i++) {
        var div1 = $('<div></div>').addClass('zeroImage rating');
        divTag.append(div1);
    }
    return divTag;
}

var loadDetails = () => {

    axios.post('/get/product/details', {}).then((response) => {
        console.log(response);
        pData = response.data.data;

        for (var i = 0 ; i < pData.length; i++) {
            loadProductDetails(pData[i]);
        }
        
    }, (error) => {
        console.log('error while getting data');
    })
    
}