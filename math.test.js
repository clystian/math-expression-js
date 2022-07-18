const math = require("./math");
const evaluateExpression = math.evaluateExpression;

describe('test evaluate expression', () =>{
    test('expression 01 -> 20/5-36*6', ()=>{
        const str = "20/5-36*6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 02 -> 1+2*3-4', ()=>{
        const str = "1+2*3-4";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 03 -> 100/5-36*6', ()=>{
        const str = "100/5-36*6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 04 -> 15++30+123456789*7-35+72/3', ()=>{
        const str = "15++30+123456789*7-35+72/3";
        expect(evaluateExpression(str)).toEqual("syntax error")
    })
    test('expression 05 -> 120/16/5*6', ()=>{
        const str = "120/16/5*6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 06 -> 6*115/5/3', ()=>{
        const str = "6*115/5/3";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 07 -> 75/5/8*6', ()=>{
        const str = "75/5/8*6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 08 -> 115/5/3*6', ()=>{
        const str = "115/5/3*6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 09 -> 20/6*1.5-7*13+3456765/47', ()=>{
        const str = "20/6*1.5-7*13+3456765/47";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 10 -> 86+73548.1914893617', ()=>{
        const str = "86+73548.1914893617";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 11 -> 80-90-8', ()=>{
        const str = "80-90-8";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })
    test('expression 12 -> -1/-6', ()=>{
        const str = "-1/-6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    })  
    test('expression 13 -> 56-1/-6', ()=>{
        const str = "56-1/-6";
        expect(evaluateExpression(str)).toEqual(eval(str))
    }) 
})