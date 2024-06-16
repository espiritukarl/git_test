import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './script.js';

test("Capitalize", () => 
    expect(capitalize("string")).toBe("String")
)

test("Reverse String", () =>
    expect(reverseString("string this bitch")).toBe("hctib siht gnirts")
)

describe('Calculator', () => {
    const results = calculator(6,3)
    test('adds two numbers', () => {
      expect(results.add()).toBe(9);
    });
  
    test('subtracts two numbers', () => {
      expect(results.subtract()).toBe(3);
    });
  
    test('multiplies two numbers', () => {
      expect(results.multiply()).toBe(18);
    });
  
    test('divides two numbers', () => {
      expect(results.divide()).toBe(2);
    });
  
    test('throws an error when dividing by zero', () => {
      expect(() => calculator(6,0).divide()).toThrow('Division by zero is not allowed');
    });

});

describe('Caesar Cipher', () => {
    test("Correct Usage", () =>{
        expect(caesarCipher('abc', 3)).toBe('def');
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })    

    test('Text Wrapping', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    })

    test("Case Prevention", () =>{
        expect(caesarCipher('Hello', 3)).toBe('Khoor');
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
      })  

    test("Punctuation", () =>{
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Attack at dawn!', 1)).toBe('Buubdl bu ebxo!');
    })  
})

describe("Analyze Array", () => {
    let result = analyzeArray([1,8,3,4,2,6])
    test("Average", () => 
        expect(result.average()).toBe(4)    
    )   

    test("Minimum", () =>
        expect(result.minimum()).toBe(1)    
    )

    test("Maximum", () =>
        expect(result.maximum()).toBe(8)    
    )

    test("Length", () =>
        expect(result.length()).toBe(6)    
    )
})