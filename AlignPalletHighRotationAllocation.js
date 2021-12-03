var mysql = require("mysql");
const { exit } = require("process");

var connection = mysql.createConnection({
  host: "localhost",
  database: "rwms",
  port: 6033,
  user: "rwms",
  password: "rwms2020",
});

var arrayJson = [];

function getConfigPalletLowRotation() {
    console.log("Connected!");
    connection.query(
      "select pallet_id,articolo_id,quantita from ConfigPallet where pallet_id in (select id from Pallet where id in (SELECT pallet_id FROM `LocationTrace` where location_id in(SELECT id FROM `Location` where extLabel like 'ALR3L%' or extLabel like 'ALR2L%' or extLabel like 'ALR1L%') and expired is null ));",
      function (err, result) {
        if (err) throw err;
        result.forEach((element) => {
          arrayJson.push(element);
        });
        setAllocazionePallet(arrayJson);
        console.log("Result: " + arrayJson);
      }
    );
}

function getConfigPalletHighRotation() {
  console.log("Connected!");
  connection.query(
    "select pallet_id,articolo_id,quantita from ConfigPallet where pallet_id in (select id from Pallet where id in (SELECT pallet_id FROM `LocationTrace` where location_id in(SELECT id FROM `Location` where extLabel like 'ALR5L%') and expired is null ));",
    function (err, result) {
      if (err) throw err;
      result.forEach((element) => {
        arrayJson.push(element);
      });
      setAllocazionePallet(arrayJson);
      console.log("Result: " + arrayJson);
    }
  );
}

function setAllocazionePallet(arrayJson) {
    console.log("Connected!");
    arrayJson.forEach((element) => {
      connection.query(
        "UPDATE AllocazionePallet set quantita="+element.quantita+" where pallet_id ="+element.pallet_id +" and articolo_id="+element.articolo_id,
        function (err, result) {
          if (err) throw err;
          console.log("Result: " + JSON.stringify(result[0]));
        }
      );
    });
}

getConfigPalletHighRotation();
// getConfigPalletLowRotation();