function sumRange(num) {
    if (num <= 1) return 1
    return sumRange(num-1) + num
}

// console.log(sumRange(4))

function power(base, exponent) {
    if (exponent === 0) return 1
    return power(base, exponent-1) * base
}

// console.log(power(2, 3))

function factorial(num) {
    if (num === 1) return 1
    return factorial(num-1) * num
}

// console.log(factorial(6))

function productOfArray(array) {
    if (array.length === 0) return 1
    return array.pop() * productOfArray(array)
}

// console.log(productOfArray([1,2,3,10]))