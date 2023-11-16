/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits. */


var plusOne = function(digits) {
    // let num = digits.toString().split(",").join("");
    // num = Number(num);

    // let a = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
    
    // num = (num+1).toString();

    // let arr = [];
    // for(let i=0; i<num.length; i++){
    //     arr.push(num[i]);
    // }

    // return arr;


    let num = [];
    let carry = 0;

    for(let i=digits.length-1; i>=0; i--){
        let sum = 0;
        if(i === digits.length-1){
            sum += digits[i]+1+carry;
        }
        else{
            sum += digits[i]+carry;
        }

        carry = Math.floor(sum/10);
        num.push(sum%10);
    }

    if(carry !== 0){
        num.push(carry);
    }
    // console.log(num);

    return num.reverse();
};


const digits = [1,2,3];
console.log(plusOne(digits));