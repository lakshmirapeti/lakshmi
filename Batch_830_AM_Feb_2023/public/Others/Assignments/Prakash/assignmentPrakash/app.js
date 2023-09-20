var singleNewsAccordionTemplate;
var news = [];

var loadSingleTemplate = () => {
    fetch("template/singleAccordion.htm").then((response) => response.text()).then((response) => {
        // console.log(response);
        singleNewsAccordionTemplate = Handlebars.compile(response);
        // loadNews();
    })
}

loadSingleTemplate();

// var news = [
//     {
//         title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, illo?",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur reprehenderit nesciunt hic praesentium suscipit, maxime dolorum eaque recusandae sapiente eum dicta aperiam delectus voluptate assumenda harum qui. Aut provident ex voluptate non, libero explicabo exercitationem adipisci enim voluptates cumque soluta iure molestias a, nostrum suscipit sed pariatur vitae. Esse!"
//     },
//     {
//         title: "",
//         description: ""
//     }
// ]

var getNewsJson = () => {
    $(".loadingBlock").show();
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=2d5dfac3ea8c4875bcfe181b2c3b99b1",
        method: 'GET',
        dataType: 'JSON',
        success: (response) => {
            $(".loadingBlock").hide();
            news = response.articles;
            // console.log(news);
            loadNews();
        }, 
        error: (err) => {
            console.log(err);
            $(".errorBlock").show();
        }
    })
}

var loadNews = () => {
    news.forEach((item, index) => {
        if(item.content != null && item.author != null){
            item.number = index;
            // console.log(item.number);
            $(".accordion").append(singleNewsAccordionTemplate(item));
        }
    })
}