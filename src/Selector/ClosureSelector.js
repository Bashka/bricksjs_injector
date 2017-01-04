define('BricksJS/Injector/Selector/ClosureSelector', function(require){
  var SelectorInterface = require('BricksJS/Injector/Selector/SelectorInterface');
  
  /**
   * @class
   * @implements {SelectorInterface}
   *
   * @param {Function} callback
   */
  function ClosureSelector(callback){
    this.callback = callback;
  }
  ClosureSelector.prototype = new SelectorInterface;
  ClosureSelector.prototype.constructor = ClosureSelector;
  ClosureSelector.super = SelectorInterface.prototype;

  /**
   * @inheritdoc
   */
  ClosureSelector.prototype.select = function(root){
    return this.callback(root);
  };

  return ClosureSelector;
});
