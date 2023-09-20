            var pData ={
                productName :'Laptop',
                price : 400,
                Manufacturer : 'DELL',
                SellerName : 'ABC Electronics',
                Image : "https://tse3.mm.bing.net/th?id=OIP.v6Mb7DYaqAcxgTMGbT0j_wHaE2&pid=Api&P=0&h=180" 

            }
             var renderProductDetails =() => {
                var mainLi = document.createElement('li');
             var ulTag = document.createElement('ul');
              ulTag.setAttribute ('class','productDetails');

              var li1 = document.createElement('li');
              li1.innerHTML = 'productName :'+ pData.productName;
             ulTag.append(li1);

             var li2 = document.createElement('li');
              li2.innerHTML ='price :' + '$', pData.price;
             ulTag.append(li2);

             var li3= document.createElement('li');
             li3.innerHTML = 'Manufacturer :' + pData.Manufacturer;
             ulTag.append(li3);

             var li4 = document.createElement('li');
             li4.innerHTML = 'sellerName :'+ pData.SellerName;
             ulTag.append(li4);

             var li5 = document.createElement('li');
             var imgtag = document.createElement('img');
             imgtag.setAttribute("src", pData.Image);
             li5.append(imgtag);
             ulTag.append(li5)

             mainLi.append(ulTag);
             document.querySelector('.container').append(mainLi );
                
             }

             renderProductDetails();