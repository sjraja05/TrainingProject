sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/core/Fragment"
        
    ],
    function(Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
      "use strict";
  
      return Controller.extend("com.fiori.training.trainingproject.controller.App", {
        onInit : function () {
          var oData = {
            recipient : {
              name : "Sajithan"
            }
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);


          var i18nModel = new ResourceModel({
            bundleName : "com.fiori.training.trainingproject.i18n.i18n"
          });
          this.getView().setModel(i18nModel, "i18n");

        },
        onShowHello : function () {
          // console.log("dadada");
          // MessageToast.show("adsadadadadas", 3);
            // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
         
         window.alert(sMsg);
        },
        sayHello : function () {
          window.alert("asdada");
        },
        onOpenDialog : function () {

          // create dialog lazily
          if (!this.pDialog) {
            this.pDialog = this.loadFragment({
              name: "com.fiori.training.trainingproject.view.HelloDialog"
            });
          } 
          this.pDialog.then(function(oDialog) {
            oDialog.open();
          });
        },
        onCloseDialog : function () {
          // note: We don't need to chain to the pDialog promise, since this event-handler
          // is only called from within the loaded dialog itself.
          this.byId("helloDialog").close();
          MessageToast.show("Dialog popUp closed");
        }
      });
    }
  );
  