var pDetails = {
                ProductName : 'Saree',
                Price : 4000,
                ClothType : 'Chiffon',
                Designer : 'Urvi Botique',
                Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                

            }
           var renderProductDetails = ()=>{
            var mainLi = document.createElement('li');
            var ulTag = document.createElement('ul');
            ulTag.setAttribute('class','productDetails');

            var li1 = document.createElement('li');
            li1.innerHTML= 'product Name ' + pDetails.ProductName;
            ulTag.append(li1);

            var li2 = document.createElement('li');
            li2 .innerHTML= 'price ' + '$' + pDetails.Price;
            ulTag.append(li2);

            var li3 = document.createElement('li');
            li3 .innerHTML= 'cloth Type ' + pDetails.ClothType;
            ulTag.append(li3);

            var li4 = document.createElement('li');
            li4.innerHTML= 'Designer' + pDetails.Designer;
            ulTag.append(li4);

            var li5 = document.createElement('li');
            var imgTag = document.createElement('img');
            imgTag.setAttribute('src' , pDetails.Image);
            li5.append(imgTag);
            ulTag.append(li5);


            mainLi.append(ulTag);
            document.querySelector('.clothingContainer').append(ulTag);
            
           }
           renderProductDetails();