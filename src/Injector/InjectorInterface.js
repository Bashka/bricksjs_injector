define('BricksJS/Injector/Injector/InjectorInterface', function(require){
  /**
   * @interface
   */
  function InjectorInterface(){
  }

  /**
   * @param {DOMNode} node Injectable node.
   */
  InjectorInterface.prototype.inject = function(node){
  };

  return InjectorInterface;
});
