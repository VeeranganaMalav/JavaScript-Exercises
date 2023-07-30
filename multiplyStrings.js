/* Given two non-negative integers 'num1' and 'num2' represented as strings, return the product of 'num1' and 'num2', also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly. */


function multiply(num1, num2){
    // any zero
    if ([num1, num2].includes(`0`)) {
        return `0`
    }

    // get length of a, b
    const [lenNum1, lenNum2] = [num1.length, num2.length]

    // set nums for calculate
    let nums = Array(lenNum1 + lenNum2).fill(0), index = nums.length - 1

    // reverse loop from a
    for (let i = lenNum1 - 1; i >= 0; i--) {
        let key = index--

        // reverse loop from b
        for (let j = lenNum2 - 1; j >= 0; j--) {
            const v = +num1[i] * +num2[j] + nums[key]

            // current
            nums[key] = v % 10
            // carry
            nums[--key] += Math.floor(v / 10)
        }
    }

    // remove `0` noneed
    return nums.join('').replace(/^0+/, '')
}

var result = multiply("123", "456");
console.log(result);