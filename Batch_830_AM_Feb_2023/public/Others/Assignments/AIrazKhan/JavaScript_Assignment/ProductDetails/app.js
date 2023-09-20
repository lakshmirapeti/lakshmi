var productDetails = () =>{
    var pData = {
        name: 'New Generation Laptop',
        price: '$2000',
        manufacturer: 'Dell Inspiron',
        seller: 'Abc Dealer',
        image: 'https://cdn1.smartprix.com/rx-i4U4FAoxX-w1200-h1200/4U4FAoxX.jpg',
        rating: '5 Stars'
    }

    var ulTag = document.createElement("ul")
    var li1 = document.createElement("li")
    li1.innerHTML = pData.name;
    ulTag.append(li1)


    var li2 = document.createElement("li")
    li2.innerHTML = pData.price;
    ulTag.append(li2)
   
    
    var li3 = document.createElement("li")
    li3.innerHTML = pData.manufacturer;
    ulTag.append(li3)
 

    var li4 = document.createElement("li")
    li4.innerHTML = pData.seller;
    ulTag.append(li4)
    

    var li5 = document.createElement("li")
   var imageTag = document.createElement("img")
   imageTag.setAttribute("class", "productImg")
   imageTag.setAttribute("src", pData.image);
   li5.append(imageTag)
   ulTag.append(li5)

   var li6 = document.createElement("li")
   li6.setAttribute("class", 'ratingImgContainer')
   li6.append(getRatingImage(pData.rating))
   ulTag.append(li6)

   document.querySelector(".container").append(ulTag)

}
   var getRatingImage = (rating) => {
    var divTag = document.createElement("div")
    divTag.setAttribute("class", 'ratingContainer');
    
    for(var i = 0; i < rating; i++){
        var div1 = document.createElement("div")
        div1.setAttribute("class", 'fullImage rating');
        divTag.append(div1)
    }
    return divTag;
   }


