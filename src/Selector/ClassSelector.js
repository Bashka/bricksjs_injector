define('BricksJS/Injector/Selector/ClassSelector', function(require){
  var SelectorInterface = require('BricksJS/Injector/Selector/SelectorInterface');

  /**
   * @class
   * @implements {SelectorInterface}
   *
   * @param {String} classSelector
   */
  function ClassSelector(classSelector){
    this.classSelector = classSelector;
  }
  ClassSelector.prototype = new SelectorInterface;
  ClassSelector.prototype.constructor = ClassSelector;
  ClassSelector.super = SelectorInterface.prototype;

  /**
   * @inheritdoc
   */
  ClassSelector.prototype.select = function(root){
    return Array.prototype.slice.call(root.getElementsByClassName(this.classSelector));
  };

  return ClassSelector;
});
