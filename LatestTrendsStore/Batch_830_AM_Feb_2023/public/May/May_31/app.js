var singleSlideTemplate;
var loadSingleTemplate = () => {
    fetch("templates/slideShowImageTmplt.htm").then((response) => response.text()).then((response) => {
        console.log(response);
        singleSlideTemplate = Handlebars.compile(response);
        loadImagesToSlideShow();
    })
}

loadSingleTemplate();

var imagesList = [
    {
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
        title: 'Image 1',
        desc: 'This is about the image 1'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdKUO_WLVtXzRm3Yey70mMgnCkuL1Hm6y6hEVPT6uE42OXhgdPZcFxFNZEdTRgawVpiQ&usqp=CAU',
        title: 'Image 2',
        desc: 'This is about the image 1'
    },
    {
        imageUrl: 'https://static.autox.com/uploads/cars/2023/01/volvo-s60.jpg',
        title: 'Image 3',
        desc: 'This is about the image 1'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLcjoXNFf_a80NyGiRw2As7dtR8i5t4A4pQ&usqp=CAU',
        title: 'Image 2',
        desc: 'This is about the image 2'
    },
    {
        imageUrl: 'https://img.freepik.com/free-photo/car-with-blue-orange-taillight-word-maserati-side_1340-37769.jpg',
        title: 'Image 3',
        desc: 'This is about the image 3'
    }
];


var loadImagesToSlideShow = () => {
    imagesList.forEach((item, index) => {
        // if (index == 0) {
        //     item.ativeClass = 'active';
            
        // } else {
        //     item.ativeClass = '';
        // }

        item.ativeClass = (index == 0 )? 'active' : '';
        $(".carousel-inner").append(singleSlideTemplate(item));
    })
}