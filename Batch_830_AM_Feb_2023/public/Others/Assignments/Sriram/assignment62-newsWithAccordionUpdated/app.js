var singleNewsAccordionTemplate;
var news = [];

var loadSingleTemplate = () => {
    fetch("templates/newsItemTemplate.htm").then((response) => response.text()).then((response) => {
        // console.log(response);
        singleNewsAccordionTemplate = Handlebars.compile(response);
        // loadNews();
    })
}

loadSingleTemplate();

// var news = [
//     {
//         title: "LIVE: India's GDP grew 6.1% in Q4 2023, 7.2% for FY23, says govt data",
//         body: "In a letter to Chief Minister Siddramaiah through Karnataka Assembly Speaker U T Khader, who represents Mangaluru, minority cell president K K Shahul Hameed said the culprits behind the murders of three Muslim youths should be charged under Unlawful Activities (Prevention) Act (UAPA), after a proper reinvestigation"
//     },
//     {
//         title: "Ahmednagar in Maharashtra to be renamed Ahilyanagar", 
//         body: "Respecting the public demand, Ahmednagar will now be after Ahilyadevi Holkar,” CM Eknath Shinde said at a public rally organised in Chondi, Ahmednagar, PTI reported. He said, “This decision was taken by the state government. And I’m proud that both Devendra ji and I are a part of this historic moment."
//     }, 
//     {
//         title: "NASA Welcomes Spain as 25th Artemis Accords Signatory",
//         body: "During a ceremony at the Moncloa Palace in Madrid on Tuesday, Spain became the 25th country to sign the Artemis Accords. NASA Administrator Bill Nelson participated in the signing ceremony for the agency, and Diana Morant, Spain’s science and innovation minister, signed on behalf of Spain."
//     },
//     {
//         title: "NASA Sets Coverage for Next SpaceX Resupply Launch to Space Station",
//         body: "SpaceX’s Dragon will deliver new science investigations, food, supplies, and equipment for the international crew, including the next pair of IROSAs (International Space Station Roll Out Solar Arrays). The solar panels, which roll out using stored kinetic energy, will expand the energy-production capabilities of the space station. This will be the fifth and sixth IROSAs launching in a SpaceX Dragon’s trunk. Each new IROSA will produce more than 20 kilowatts of electricity, and once all are installed, will enable a 30% increase in power production over the station’s current arrays."
//     },
//     {
//         title: "NASA Sets Coverage for Axiom Mission 2 Departure from Space Station",
//         body: "NASA will provide live coverage of the undocking and departure of Axiom Mission 2 (Ax-2) private astronaut mission from the International Space Station before crew returns to Earth."
//     },
//     {
//         title: "NASA Pursues Lunar Terrain Vehicle Services for Artemis Missions",
//         body:"NASA is seeking industry proposals for a next-generation LTV (Lunar Terrain Vehicle) that will allow astronauts to go farther and conduct more science than ever before as they explore the south polar region of the Moon during Artemis missions.Artemis astronauts will drive to explore and sample more of the lunar surface using the LTV than they could on foot. NASA will contract LTV as a service from industry rather than owning the rover. Contracting services from industry partners allows NASA to leverage commercial innovation and provide the best value to U.S. taxpayers while achieving its human spaceflight scientific and exploration goals."
//     }, 
//     {
//         title: "NASA to Provide Briefing, Coverage of Spacewalks for Station Upgrades",
//         body: "Editor’s Note: This media advisory was updated May 30, 2023 to correct the spelling of Megan Shutika's last name and to clarify the information on roll-out solar array installation and benefits.Two NASA astronauts aboard the International Space Station will conduct a pair of spacewalks Friday, June 9, and Thursday, June 15, to install two new solar arrays.NASA will discuss the upcoming spacewalks during a news conference at 12 p.m. EDT Thursday, June 1. Live coverage of the news conference and spacewalks will air on NASA Television, the NASA app, and the agency’s website."
//     }, 
//     {
//         title: "New Mexico Students to Hear from NASA Astronauts Aboard Space Station",
//         body: "Students from southern New Mexico schools will have an opportunity to hear from NASA astronauts aboard the International Space Station. The Earth-to-space call will air live at 12:30 p.m. EDT Tuesday, May 30, on NASA Television, the NASA app, and the agency’s website. NASA astronauts Steve Bowen and Frank Rubio will answer prerecorded questions from students through a collaboration with the New Mexico Museum of Space History. The museum is dedicated to telling the story of space exploration and has engaged several school districts in southern New Mexico to participate in the downlink. The museum’s educators traveled to each district and presented information about the space station and its Expedition 69 crew, then worked with the students to develop the questions posed to the astronauts."
//     },
//     {
//         title: "NASA, Rocket Lab Complete Launch of TROPICS CubeSat Constellation",
//         body: "The final pair of NASA’s TROPICS (Time-Resolved Observations of Precipitation structure and storm Intensity with a Constellation of Smallsats) are in orbit after successfully launching at 3:46 p.m. NZST Friday, May 26 (11:46 p.m. EDT Thursday, May 25), completing the constellation. TROPICS launched aboard an Electron rocket from Rocket Lab’s Launch Complex 1 Pad B in Māhia, New Zealand. The smallsats were deployed at 12:20 a.m. EDT May 26. Signal for the first CubeSat was acquired at 1:16 a.m., and at 2:19 a.m., for the second. Through this mission, NASA will study tropical cyclones and aims to improve forecasting for hurricanes and typhoons."
//     }, 
//     {
//         title: "Florida Students to Hear from NASA Astronauts Aboard Space Station",
//         body: "NASA astronauts aboard the International Space Station will speak to students from St. Mark’s Episcopal School in Palm Beach Gardens, Florida.      The Earth-to-space call will air live at 10:10 a.m. EDT Thursday, May 25, on NASA Television, the NASA app, and the agency’s website. NASA astronauts Steve Bowen, Woody Hoburg, and Frank Rubio will answer prerecorded questions from pre-K and second through eighth grade students. The downlink is part of the school’s “Space Week” where students will participate in challenges related to space exploration. Through the downlink, students can look to NASA astronauts as an example of how to best be stewards of our planet and beyond. The school’s “Space Week” activity lesson plans will be shared with other community schools through the Cox Science Center and Aquarium website. Media interested in covering the event should respond no later than 5 p.m. on Wednesday, May 24, by contacting Naki Carter at: cafenaki@gmail.com or 313-283-1427."
//     }
// ];

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