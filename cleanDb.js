var mysql = require("mysql");
const { exit } = require("process");

var connection = mysql.createConnection({
  host: "10.10.10.90",
  database: "rwms",
  port: 6033,
  user: "rwms",
  password: "rwms2020",
});

function cleanTransportVectorExtraFields() {
  connection.query(
    "DELETE FROM `TransportVectorExtraFields` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanTransportVector() {
  connection.query(
    "DELETE FROM `TransportVector` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanSpedizioniereExtraFields() {
  connection.query(
    "DELETE FROM `SpedizioniereExtraFields` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanOrderOutBoundExtraFields() {
  connection.query(
    "DELETE FROM `OrderOutBoundExtraFields` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanRegistro() {
  connection.query(
    "DELETE FROM `registro` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanSerializedPalletAllocation() {
  connection.query(
    "DELETE FROM `SerializedPalletAllocation` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanPickingExecutionInventoryItem() {
  connection.query(
    "DELETE FROM `PickingExecutionInventoryItem` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanPickingTaskExecution() {
  connection.query(
    "DELETE FROM `PickingTaskExecution` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanPickingTask() {
  connection.query(
    "DELETE FROM `PickingTask` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanPickingProcessing() {
  connection.query(
    "DELETE FROM `PickingProcessing` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanProcessazioneTanum() {
  connection.query(
    "DELETE FROM `ProcessazioneTanum` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanProcessazione() {
  connection.query("DELETE FROM `Processazione` WHERE 1;", function (err, rows, fields) {
    if (err) throw err;
    // console.log(rows);
  });
}
function cleanOrderTransportVector() {
  connection.query(
    "DELETE FROM `OrderTransportVector` WHERE 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanItemOutBoundExtraFields() {
  connection.query(
    "DELETE FROM `ItemOutBoundExtraFields` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanItemOutBound() {
  connection.query(
    "DELETE FROM `ItemOutBound` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanOrderInBoundExtraFields() {
  connection.query(
    "delete FROM `OrderInBoundExtraFields` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanOrderInBound() {
  connection.query(
    "delete FROM `OrderInBound` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanDynamicLocationOutbound() {
  connection.query(
    "delete FROM `DynamicLocationOutbound` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanDynamicLocation() {
  connection.query(
    "delete FROM `DynamicLocation` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanOrderOutBound() {
  connection.query(
    "delete FROM `OrderOutBound` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanSpedizioniere() {
  connection.query(
    "delete FROM `Spedizioniere` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanMoveFromToSerialized() {
  connection.query(
    "delete FROM `MoveFromToSerialized` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanfrom_to_udc() {
  connection.query(
    "delete FROM `from_to_udc` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanClienteExtraFields() {
  connection.query(
    "delete FROM `ClienteExtraFields` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanCliente() {
  connection.query(
    "delete FROM `Cliente` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanAccettazioneTanum() {
  connection.query(
    "DELETE FROM `AccettazioneTanum` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanAccettazione() {
  connection.query(
    "DELETE FROM `Accettazione` where 1;",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanAllocazionePalletSorterBaie() {
  connection.query(
    "DELETE FROM `AllocazionePallet` where pallet_id in (760,770,767,764,761);",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanRullieraGravita() {
  connection.query(
    "DELETE FROM `AllocazionePallet` where pallet_id in (SELECT pallet_id FROM LocationTrace where location_id in (SELECT id FROM Location where extLabel like 'RG-%'));",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanMarkArticleLot() {
  connection.query(
    "DELETE FROM `MarkArticleLot` where 1",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}
function cleanLottoRullieraGravita() {
  connection.query(
    "UPDATE `Pallet` SET `lotto_id` = NULL WHERE `Pallet`.`id` in (SELECT pallet_id FROM LocationTrace where location_id in (SELECT id FROM Location where extLabel like 'RG-%'));",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}

function cleanLocationTracePalletBaie() {
  connection.query(
    "UPDATE `LocationTrace` set expired=now() where location_id in (11,14,17,20) and expired is null",
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
    }
  );
}

console.log("--STARTING CLEANING PROCESS--");

console.log("cleaning TransportVectorExtraFields");
cleanTransportVectorExtraFields();
console.log("TransportVectorExtraFields cleaned succesfully!");

console.log("cleaning TransportVector");
cleanTransportVector();
console.log("TransportVector cleaned succesfully!");

console.log("cleaning SpedizioniereExtraFields");
cleanSpedizioniereExtraFields();
console.log("SpedizioniereExtraFields cleaned succesfully!");

console.log("cleaning OrderOutBoundExtraFields");
cleanOrderOutBoundExtraFields();
console.log("OrderOutBoundExtraFields cleaned succesfully!");

console.log("cleaning Registro");
cleanRegistro();
console.log("Registro cleaned succesfully!");

console.log("cleaning SerializedPalletAllocation");
cleanSerializedPalletAllocation();
console.log("SerializedPalletAllocation cleaned succesfully!");

console.log("cleaning PickingExecutionInventoryItem");
cleanPickingExecutionInventoryItem();
console.log("PickingExecutionInventoryItem cleaned succesfully!");

console.log("cleaning PickingTaskExecution");
cleanPickingTaskExecution();
console.log("PickingTaskExecution cleaned succesfully!");

console.log("cleaning PickingTask");
cleanPickingTask();
console.log("PickingTask cleaned succesfully!");

console.log("cleaning cleanPickingProcessing");
cleanPickingProcessing();
console.log("cleanPickingProcessing cleaned succesfully!");

console.log("cleaning ProcessazioneTanum");
cleanProcessazioneTanum();
console.log("ProcessazioneTanum cleaned succesfully!");

console.log("cleaning Processazione");
cleanProcessazione();
console.log("Processazione cleaned succesfully!");

console.log("cleaning OrderTransportVector");
cleanOrderTransportVector();
console.log("OrderTransportVector cleaned succesfully!");

console.log("cleaning ItemOutBoundExtraFields");
cleanItemOutBoundExtraFields();
console.log("ItemOutBoundExtraFields cleaned succesfully!");

console.log("cleaning ItemOutBound");
cleanItemOutBound();
console.log("ItemOutBound cleaned succesfully!");

console.log("cleaning OrderInBoundExtraFields");
cleanOrderInBoundExtraFields();
console.log("OrderInBoundExtraFields cleaned succesfully!");

console.log("cleaning OrderInBound");
cleanOrderInBound();
console.log("OrderInBound cleaned succesfully!");

console.log("cleaning DynamicLocationOutbound");
cleanDynamicLocationOutbound();
console.log("DynamicLocationOutbound cleaned succesfully!");

console.log("cleaning DynamicLocation");
cleanDynamicLocation();
console.log("DynamicLocation cleaned succesfully!");

console.log("cleaning OrderOutBound");
cleanOrderOutBound();
console.log("OrderOutBound cleaned succesfully!");

console.log("cleaning Spedizioniere");
cleanSpedizioniere();
console.log("Spedizioniere cleaned succesfully!");

console.log("cleaning MoveFromToSerialized");
cleanMoveFromToSerialized();
console.log("MoveFromToSerialized cleaned succesfully!");

console.log("cleaning from_to_udc");
cleanfrom_to_udc();
console.log("from_to_udc cleaned succesfully!");

console.log("cleaning ClienteExtraFields");
cleanClienteExtraFields();
console.log("ClienteExtraFields cleaned succesfully!");

console.log("cleaning Cliente");
cleanCliente();
console.log("Cliente cleaned succesfully!");

console.log("cleaning AccettazioneTanum");
cleanAccettazioneTanum();
console.log("AccettazioneTanum cleaned succesfully!");

console.log("cleaning Accettazione");
cleanAccettazione();
console.log("Accettazione cleaned succesfully!");

console.log("cleaning AllocazionePalletSorterBaie");
cleanAllocazionePalletSorterBaie();
console.log("AllocazionePalletSorterBaie cleaned succesfully!");

console.log("cleaning RullieraGravita");
cleanRullieraGravita();
console.log("RullieraGravita cleaned succesfully!");

console.log("cleaning LottoRullieraGravita");
cleanLottoRullieraGravita();
console.log("LottoRullieraGravita cleaned succesfully!");

console.log("cleaning LocationTracePalletBaie");
cleanLocationTracePalletBaie();
console.log("LocationTracePalletBaie cleaned succesfully!");

console.log("cleaning MarkArticleLot");
cleanMarkArticleLot();
console.log("MarkArticleLot cleaned succesfully!");

console.log("--CLEANING PROCESS FINISHED--");
