sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";
  XMLView.create({
    viewName: "com.fiori.training.trainingproject.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });


//   XMLView.create({
//     viewName: "com.fiori.training.trainingproject.view.InvoiceList",
//   }).then(function (oView) {
//     oView.placeAt("content");
//   });


//   XMLView.create({
// 	viewName: "com.fiori.training.trainingproject.view.HelloPanel"
//   }).then(function (oView) {
// 	oView.placeAt("content");
//   });





//   XMLView.create({
//     viewName: "com.fiori.training.trainingproject.view.View1",
//   }).then(function (oView) {
//     oView.placeAt("content");
// 	XMLView.create({
// 		viewName: "com.fiori.training.trainingproject.view.App",
// 	  }).then(function (oView) {
// 		oView.placeAt("content");
// 	  });
//   });
});
