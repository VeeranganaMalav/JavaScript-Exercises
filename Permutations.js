// Given an array 'nums' of distinct integers, return all the possible permutations. You can return the answer in any order.

function permute(nums){
    // Backtracking
    const used = new Set(); // Keep track of what we have used
    const path = []; // Current answer array
    const res = []; // Resultant array
    
    const dfs = () => {
        // If path is same length as nums, we know we have an answer. Push it to Resultant array
        if(path.length === nums.length) {
            res.push([...path]);
        }
        
        // Loop all numbers
        for(let i = 0; i < nums.length; i++) {
            // If numbers are already used
            if(used.has(nums[i])) {
                continue;
            }
            
            // Add to potienial answer array and make it used by adding to used set
            path.push(nums[i]);
            used.add(nums[i]);
            
            // After adding, we call DFS again. DFS will continue till we hit the base case above
            dfs();
            
            // Once we pop out of DFS, we need to remove from path array and remove from used Set
            // This will let it be used later in further paths
            path.pop();
            used.delete(nums[i]);
        }
    }

    // call DFS function
    dfs();

    return res;
}

var permutations = permute([1,2,3]);
console.log(permutations);