sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
    "use strict";
    return Controller.extend(
      "com.fiori.training.trainingproject.controller.HelloPanel",
      {
        onInit: function () {
          var oData = {
            recipient: {
              name: "Sajithan",
            },
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);

          var i18nModel = new ResourceModel({
            bundleName: "com.fiori.training.trainingproject.i18n.i18n",
          });
          this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello: function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView()
            .getModel()
            .getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
        },
      }
    );
  }
);
