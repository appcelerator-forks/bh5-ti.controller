
/*!
 * MVC Controller Interface
 */

// module deps

var Emitter = require('emitter');

// expose Controller

module.exports = Controller;

/**
 * [Controller description]
 * @param {[type]} view [description]
 */

function Controller(view){
  Emitter.call(this);
  this.view = view;
}

// inherit from Emitter

Controller.prototype.__proto__ = Emitter.prototype;

/**
 * [init description]
 * @return {[type]} [description]
 */

Controller.prototype.init = function (){
  throw new Error('Refresh function must be defined for Controller');
}

/**
 * [open description]
 * @return {[type]} [description]
 */

Controller.prototype.open = function (){
  throw new Error('Open function must be defined for Controller')
}

/**
 * [close description]
 * @return {[type]} [description]
 */

Controller.prototype.close = function (){
  throw new Error('Close function must be defined for Controller');
}
