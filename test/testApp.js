const assert = require('chai').assert
const { sayHello, addNumber } = require('../app')
const app = require('../app')
// const sayHello = require('../app').sayHello
// const addNumbers = require('../app').addNumber


sayHelloResult = app.sayHello()
addNumberResult = app.addNumber(5, 5)

describe('App', function() {
    describe('sayHello()', function() {
        it('app should return >> hello', function() {
            // let result = app.sayHello()
            assert.equal(sayHelloResult, 'hello')
        })
    
        it('sayHello should return type string', function() {
            // let result = app.sayHello()
            assert.typeOf(sayHelloResult, 'string')
        })
    })
    
    describe('addNumber()', function() {
        it('addNumbers should be above 10', function() {
            // let result = app.addNumber(5, 5)
            assert.isAbove(addNumberResult, 5)
        })
    
        it('sayHello should return type number', function() {
            // let result = app.addNumber()
            assert.typeOf(addNumberResult, 'number')
        })
    })
})