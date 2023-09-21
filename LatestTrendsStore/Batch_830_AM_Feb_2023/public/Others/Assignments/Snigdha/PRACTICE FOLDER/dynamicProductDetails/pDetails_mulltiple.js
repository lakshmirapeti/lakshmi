            var productData =[
                {
                    productName :'Laptop',
                    price : 400,
                    Manufacturer : 'DELL',
                    SellerName : 'ABC Electronics',
                    Image : "https://tse3.mm.bing.net/th?id=OIP.v6Mb7DYaqAcxgTMGbT0j_wHaE2&pid=Api&P=0&h=180" 
                
                },
                {
                    productName :'Mobile',
                    price : 200,
                    Manufacturer : 'samsung',
                    SellerName : 'jio Electronics',
                    Image : "https://d31tbjsx4owlmz.cloudfront.net/wp-content/uploads/2017/08/10093234/4G_Mobile_phones_under_5000_Videocon_Graphite1_V45ED-e1502360416146.jpeg" 
    
                },
                {
                    productName :'pendrive',
                    price : 50,
                    Manufacturer : 'kingston',
                    SellerName : 'key Electronics',
                    Image : "https://www.infoexpertmarica.com.br/wp-content/uploads/2020/06/pen-drive-16-gb1-1536x1536.jpg" 
    
                },
                {
                    productName :'mobile',
                    price : 800,
                    Manufacturer : 'iphone 14pro',
                    SellerName : 'Apple Electronics',
                    Image : "https://tse2.mm.bing.net/th?id=OIP.I2ZnXbGbJn7ZfcjFgVBICwHaEK&pid=Api&P=0&h=180" 
    
                },
                {
                    productName :'charger',
                    price : 50,
                    Manufacturer : 'iPhone',
                    SellerName : 'Apple Electronics',
                    Image : "https://reapp.com.gh/wp-content/uploads/2019/09/1566654465426.jpg" 
    
                },
                {
                    productName :'Laptop bag',
                    price : 100,
                    Manufacturer : 'DELL',
                    SellerName : 'Dell Electronics',
                    Image : "https://tse3.mm.bing.net/th?id=OIP.1GQOlH5BZ0cWzp5hVF_3SAHaHa&pid=Api&P=0&h=180" 
    
                },
                {
                    productName :'mobile',
                    price : 400,
                    Manufacturer : '1 plus',
                    SellerName : '1plus Electronics',
                    Image : "https://tse3.mm.bing.net/th?id=OIP.x2Fm0OCQRBmKghPAcWx04gHaIC&pid=Api&P=0&h=180" 
    
                },
                {
                    productName :'MacBook',
                    price : 1000,
                    Manufacturer : 'apple',
                    SellerName : 'Apple Electronics',
                    Image : "https://tse3.mm.bing.net/th?id=OIP.k0t0xCnDO3y8NZLsxM8M1wHaF7&pid=Api&P=0&h=180" 
    
                },
                {
                    productName :'Tablet',
                    price : 250,
                    Manufacturer : 'realme',
                    SellerName : 'realme Electronics',
                    Image : "https://1734811051.rsc.cdn77.org/data/images/full/323259/the-5-best-android-tablets-to-buy-in-2018.png" 
    
                },
                {
                    productName :'Laptop',
                    price : 400,
                    Manufacturer : 'DELL',
                    SellerName : 'ABC Electronics',
                    Image : "https://tse3.mm.bing.net/th?id=OIP.v6Mb7DYaqAcxgTMGbT0j_wHaE2&pid=Api&P=0&h=180" 
    
                }
            ];
            var renderProductDetails =(pData) => {
            var mainLi = document.createElement('li');
            var ulTag = document.createElement('ul');
            ulTag.setAttribute ('class','productDetails');

            var li1 = document.createElement('li');
            li1.innerHTML = 'productName :'+ pData.productName;
            ulTag.append(li1);

            var li2 = document.createElement('li');
            li2.innerHTML ='price :' + '$'+ pData.price;
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
                
             };

             for(var i=0; i<=productData.length; i++){
             renderProductDetails(productData[i]);
             };
             