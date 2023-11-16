/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */


var climbStairs = function(n) {
    // if(n < 0){
    //     return 0;
    // }

    // if(n === 0){
    //     return 1;
    // }

    // return climbStairs(n-1) + climbStairs(n-2);

    if(n <= 3){
        return n;
    }
    else{
        return 2 * climbStairs(n - 2) + climbStairs(n - 3);
    }
};

const n = 2;
console.log(climbStairs(n));