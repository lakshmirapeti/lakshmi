var loadSelectedPage = (type) => {
    var tamplateUrl;
    switch (type) {
        case "wlcmPage" :
            tamplateUrl = "tamplates/welcomePage.htm";
            break;
        case "productDetails" :
            tamplateUrl = "tamplates/productDetailsPage.htm";
            break;
    }

axios.get(tamplateUrl)
  .then(function (response) {
    // handle success
    console.log(response.data);
    $('main').html(response.data);

    if (type == 'productDetails') {
        loadDetails();
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

  
}

document.addEventListener("DOMContentLoaded", () => {
    loadSelectedPage('wlcmPage');
})
