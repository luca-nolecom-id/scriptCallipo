var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.10.10.90:27019/";

MongoClient.connect(url, function(err, db) {
  console.log("inside");
  if (err) throw err;
  var dbo = db.db("pickToLight");
  dbo.collection("lines").findOne({"status":"inactive"}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});