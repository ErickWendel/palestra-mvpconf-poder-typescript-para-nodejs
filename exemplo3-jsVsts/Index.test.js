"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass.sum = function (number1, number2) {
        return number1 + number2;
    };
    return TestClass;
}());
describe('Testing Typescript', function () {
    it('testando se o resultado é um inteiro', function () {
        var result = TestClass.sum(1, 2);
        assert_1.ok(result === 3);
    });
});
