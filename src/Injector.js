define('BricksJS/Injector/Injector', function(require){
  var ClassSelector = require('BricksJS/Injector/Selector/ClassSelector'),
    BackboneJSInjector = require('BricksJS/Injector/Injector/BackboneJSInjector');

  /**
   * @class
   *
   * @param {Array} declaration Declaration with structure:
   * [{selector: selectorObject, injector: injectorObject}, ...].
   * @param {SelectorInterface} selectorPrototype
   * @param {InjectorInterface} injectorPrototype
   */
  function Injector(declaration, selectorPrototype, injectorPrototype){
    this.declaration = declaration;
    this.selectorPrototype = selectorPrototype || ClassSelector;
    this.injectorPrototype = injectorPrototype || BackboneJSInjector;
  }

  /**
   * @param {DOMNode} root Root node select.
   */
  Injector.prototype.selectAndInjectFor = function(root){
    for(var i in this.declaration){
      var selector = this.declaration[i].selector,
        injector = this.declaration[i].injector;

      if(typeof selector != 'object' || typeof selector.select != 'function'){
        var selectorArgs = selector;
        selector = new this.selectorPrototype();
        this.selectorPrototype.apply(selector, selectorArgs);
      }
      if(typeof injector != 'object' || typeof injector.inject != 'function'){
        var injectorArgs = injector;
        injector = new this.injectorPrototype();
        this.injectorPrototype.apply(injector, injectorArgs)
      }

      var injectableNodes = selector.select(root);
      for(var i in injectableNodes){
        injector.inject(injectableNodes[i]);
      }
    }
  };

  return Injector;
});
