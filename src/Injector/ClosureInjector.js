define('BricksJS/Injector/Injector/ClosureInjector', function(require){
  var InjectorInterface = require('BricksJS/Injector/Injector/InjectorInterface');

  /**
   * @class
   * @implements {InjectorInterface}
   *
   * @param {Function} callback
   */
  function ClosureInjector(callback){
    this.callback = callback;
  }
  ClosureInjector.prototype = new InjectorInterface;
  ClosureInjector.prototype.constructor = ClosureInjector;
  ClosureInjector.super = InjectorInterface.prototype;

  /**
   * @inheritdoc
   */
  ClosureInjector.prototype.inject = function(node){
    this.callback(node);
  };

  return ClosureInjector;
})
