define('BricksJS/Injector/Selector/SelectorInterface', function(require){
  /**
   * @interface
   */
  function SelectorInterface(){
  }

  /**
   * @param {DOMNode} root Root node select.
   *
   * @return {Array<DOMNode>} Selected DOM nodes.
   */
  SelectorInterface.prototype.select = function(root){
  };

  return SelectorInterface;
});
