sap.ui.define(
  ["com/fiori/training/trainingproject/core/UIComponent", "com/fiori/training/trainingproject/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("com.fiori.training.trainingproject.Component", {
      metadata: {
        interfaces: ["com.fiori.training.trainingproject.IAsyncContentCreation"],
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        var oData = {
          recipient: {
            name: "World",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
