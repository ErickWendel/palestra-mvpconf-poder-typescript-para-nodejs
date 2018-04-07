const { equal, throws } = require('assert')

class TestClass { 
    static sum(number1, number2) {

        if(isNaN(number1) || isNaN(number2))
            throw TypeError('NOT A NUMBER')

        if(typeof(number1) === 'string')
            number1 = parseInt(number1)
        
        if(typeof(number2) === 'string')
            number2 = parseInt(number2)

        return number1 + number2
    }
}

describe('Testing SumJS', () => {
    it('sum 2 numbers with one string', () =>{
        const result = TestClass.sum(1, '2')
        equal(result, 3)
    })

    it('sum 2 numbers throws error', () =>{
        throws(() => TestClass.sum(1, 'ae'), TypeError)
    })
})