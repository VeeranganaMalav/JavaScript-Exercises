// Given two binary strings 'a' and 'b', return their sum as a binary string.

function addBinary(a, b){
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 && j >= 0) {
        add((+a[i]) + (+b[j]) + carry);
        i--;
        j--;
    }

    if (i >= 0) {
        while (i >= 0){
            add((+a[i]) + carry);
            i--;
        }
    }
    else if (j >= 0) {
        while (j >= 0){
            add((+b[j]) + carry);
            j--;
        }
    }

    if (carry !== 0) {
        result.push(1);
    }

    return result.reverse().join('');

    function add(res){
        if(res > 1){
            result.push((res > 2) ? 1 : 0);
            carry = 1;
        }
        else{
            result.push(res);
            carry = 0;
        }
    }
}

var result = addBinary("11", "1");
console.log(result);