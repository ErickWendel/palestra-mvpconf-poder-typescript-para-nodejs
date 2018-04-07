import {ok} from 'assert' 

class TestClass {
    static sum(number1: number, number2: number) {
        return number1 + number2
    }
}


describe('Testing Typescript', () => {
    it('testando se o resultado é um inteiro', () => {
        const result = TestClass.sum(1, 2)
        ok(result === 3)
    })
})