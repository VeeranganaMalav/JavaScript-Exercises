/* We have 'n' jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time 'X' you will be able to start another job that starts at time 'X'. */

function jobScheduling(startTime, endTime, profit){
    let jobs = [];
    let n = startTime.length;

    for (let i = 0; i < n; i++) {
        jobs.push({s: startTime[i], e: endTime[i], p: profit[i]});
    }

    jobs.sort(
        (a,b) => {
            return a.e - b.e
        });
    
    let dp = new Array(n);
    dp[0] = jobs[0].p;

    for (let i = 1; i < n; i++) {
        let profit = jobs[i].p;
        let task = -1;
        for (let j = i-1; j >= 0; j--) {
            if (jobs[j].e <= jobs[i].s) {   //find the next task whose starting time is greater than or equal to current task ending time
                task = j;
                break;
            }
        }

        if (task != -1){
            profit += dp[task];     //add the profit of next task to current task profit
        }
        dp[i] = Math.max(profit, dp[i-1]);
    }

    return dp[n-1];     //last index is the maximum profit
}

var maxProfit = jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60]);
console.log(maxProfit);