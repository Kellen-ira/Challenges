function findTargetSumSubarray(arr, target) {
    let cumulativeSum = 0;
// Use Map instead of object for better key-value handling
    const cumulativeSums = new Map(); 
    // Initialize with 0 sum at index -1
    cumulativeSums.set(0, -1); 

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];
        const complement = cumulativeSum - target;
        if (cumulativeSums.has(complement)) {
            // Found a subarray that sums up to the target
            return true; 
        }
        cumulativeSums.set(cumulativeSum, i);
    }
// No such subarray found
    return false; 
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(findTargetSumSubarray(arr, target)); 
