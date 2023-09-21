// array
var data = [
       {  
        name:'New Generation Laptop',
        price: '61,999',
        company : 'Dell',
        saler : ' By Yash Electronics Pvt.Ltd',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating : 4.5,
    },
       {  
        name:'New Generation Laptop',
        price: '61,999',
        company : 'HP Pavillion',
        saler : ' By XYZ Electronics Pvt.Ltd',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating : 3.5,
    },
       {  
        name:'New Generation Laptop',
        price: '61,999',
        company : 'Dell IdeaPad',
        saler : ' By Jay Electronics Pvt.Ltd',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating : 4,
    },
       {  
        name:'New Generation Laptop',
        price: '61,999',
        company : 'Mi 180 degree',
        saler : ' By ABC Electronics Pvt.Ltd',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating : 5,
    },
       {  
        name:'New Generation Laptop',
        price: '63,999',
        company : 'Lenovo Yoga',
        saler : ' By Raj Electronics Pvt.Ltd',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
        rating : 2.5,
    }
]

var productDeatlsDom = (data) => {
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'dataTag');
    var li1 = document.createElement("li");
    li1.innerText = data.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = data.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = data.company;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = data.saler;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    
    var imageTag = document.createElement("img"); // <img />
    imageTag.setAttribute("class", 'productImg'); // <img class='productImg' />
    imageTag.setAttribute("src", data.image);// <img class='productImg' src="...."/>
    li5.append(imageTag);
    ulTag.append(li5);

    var li6 = document.createElement("li");
    li6.setAttribute("class", 'ratingImgContainer');
    li6.append(getRatingImg(data.rating));
    ulTag.append(li6);

    document.querySelector(".container").append(ulTag);


}
// Rating

var getRatingImg = (rating) => {
    var noFullStar = 0;
    var noHalfStar = 0;
    var noZeroStar = 0;
    if (!Number.isInteger(rating)) {
        noHalfStar = 1;
    }
    noFullStar = parseInt(rating);
    noZeroStar = 5 - noFullStar - noHalfStar;
    var divTag = document.createElement("div");
    divTag.setAttribute("class", 'ratingContainer');

    for (var i = 0; i < noFullStar; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", 'fullImage rating');
        divTag.append(div1)
    }
    
    if (noHalfStar) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", 'halfImage rating');
        divTag.append(div1)
    }
    for (var i = 0; i < noZeroStar; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", 'zeroImg rating');
        divTag.append(div1)
    }
    return divTag;
}
var loadProduct = () => {
    for (var i = 0 ; i < data.length; i++) {
        productDeatlsDom(data[i]);
    }

}