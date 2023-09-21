var express = require("express");

const {MongoClient} = require("mongodb");
var mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

var router = express.Router();
var userData
router.post("/", (req, res) => {
    userData = req.body.params;
    getDbConnection().then((result) => {
    console.log(result);
    // console.log(req.body);
    
    var data = {};

    if(result.length) {
        data.msg = "validUser";
    } else {
        data.msg = "invalidUser";
    }

    data = JSON.stringify(data);
    res.send(data);
}).catch((error) => {
    console.log("error");
    console.log(error);
});

});

async function getDbConnection(data) {
    await mongoClient.connect();
    var db = mongoClient.db("fashion-trends");
    var collection = db.collection("userAccountDetails");
    var userAccountDetails = collection.find({account_id: userData.userId, password: userData.password}).toArray();
    return userAccountDetails;
}

module.exports = router;