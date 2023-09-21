            var containerDetails = [
                {
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                   
                },
                {  
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                
                },
                {
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                
                },
                {
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                
                },
                {
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                
                },
                {
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                
                 },
            ]

            
            var renderProductDetails = (pData)=>{
            var mainLi = document.createElement('li');
            
            var ulTag = document.createElement('ul');
            ulTag.setAttribute('class','productDetails');

            var li1 = document.createElement('li');
            li1.innerHTML= 'Product Name : ' + pData.ProductName ;
            ulTag.append(li1);

            var li2 = document.createElement('li');
            li2 .innerHTML= 'price :' + '$' + pData.Price;
            ulTag.append(li2);

            var li3 = document.createElement('li');
            li3 .innerHTML= 'cloth Type :' + pData.ClothType;
            ulTag.append(li3);

            var li4 = document.createElement('li');
            li4.innerHTML= 'Designer :' + pData.Designer;
            ulTag.append(li4);

            var li5 = document.createElement('li');
            var imgTag = document.createElement('img');
            imgTag.setAttribute('src' , pData.Image);
            li5.append(imgTag);
            ulTag.append(li5);

            
            mainLi.append(ulTag);
            document.querySelector('.clothingContainer').append(ulTag);
            
            };

           for(var i=1; i<=containerDetails.length; i++){
            renderProductDetails(containerDetails[i]);
           }
           