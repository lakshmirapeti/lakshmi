
var pdetails = [];
var productTemplate

$(document).ready(() => {

        // $.ajax({
        //     url: 'templates/singleProductTmplt.htm',
        //     method: 'GET',
        //     success: (response) => {
        //         productTemplate = Handlebars.compile(response);
        //     }
        // });

        fetch("templates/singleProductTmplt.htm").then((response) => response.text()).then((response) => {
            productTemplate = Handlebars.compile(response);
        })

    
});


var loadProductDetails = (pData) => {
    var ratingContainer = getRatingImage(pData.rating.rate)
    pData.ratingContent = $(ratingContainer).html();

    var finalResultProductTemplate = productTemplate(pData);
    $(".productDetailsContainer").append(finalResultProductTemplate);
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

var getProductDetails = () => {
    $(".loadingBlock").show();
    $.ajax({
        url: '/data/getProductDetails',
        method: 'GET',
        dataType: 'JSON',
        success: (response) => {
            $(".loadingBlock").hide();
            pdetails = response.pdata;
            loadDetails();
        },
        error: (err) => {
            console.log(err);
            $(".errorBlock").show();
        }
    });
}


var loadDetails = () => {
    for (var i = 0 ; i < pdetails.length; i++) {
        loadProductDetails(pdetails[i]);
    }
}