var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var productData = {
        data :[
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
    }]
}

productData = JSON.stringify(productData);
res.send(productData);

});

module.exports = router;
