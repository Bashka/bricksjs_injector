define("BricksJS/Injector/Selector/ClassSelector",["require","BricksJS/Injector/Selector/SelectorInterface"],function(e){function t(e){this.classSelector=e}var r=e("BricksJS/Injector/Selector/SelectorInterface");return t.prototype=new r,t.prototype.constructor=t,t.super=r.prototype,t.prototype.select=function(e){return Array.prototype.slice.call(e.getElementsByClassName(this.classSelector))},t});