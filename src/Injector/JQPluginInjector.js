define('BricksJS/Injector/Injector/JQPluginInjector', function(require){
  var InjectorInterface = require('BricksJS/Injector/Injector/InjectorInterface');

  /**
   * @class
   * @implements {InjectorInterface}
   *
   * @param {JQuery} jquery
   * @param {String} constructorName
   * @param {mixed} options
   */
  function JQPluginInjector(jquery, constructorName, options){
    this.jquery = jquery;
    this.constructorName = constructorName;
    this.options = options;
  }
  JQPluginInjector.prototype = new InjectorInterface;
  JQPluginInjector.prototype.constructor = JQPluginInjector;
  JQPluginInjector.super = InjectorInterface.prototype;

  /**
   * @inheritdoc
   */
  JQPluginInjector.prototype.inject = function(node){
    this.jquery(node)[this.constructorName](this.options);
  };

  return JQPluginInjector;
});
