define('BricksJS/Injector/Injector/BackboneJSInjector', function(require){
  var InjectorInterface = require('BricksJS/Injector/Injector/InjectorInterface');

  /**
   * @class
   * @implements {InjectorInterface}
   *
   * @param {Backbone.View} view
   */
  function BackboneJSInjector(view){
    this.view = view;
  }
  BackboneJSInjector.prototype = new InjectorInterface;
  BackboneJSInjector.prototype.constructor = BackboneJSInjector;
  BackboneJSInjector.super = InjectorInterface.prototype;

  /**
   * @inheritdoc
   */
  BackboneJSInjector.prototype.inject = function(node){
    new this.view({el: node})
  };

  return BackboneJSInjector;
});
