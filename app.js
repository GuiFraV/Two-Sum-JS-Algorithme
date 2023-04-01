/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = {};

    for (let i = 0; i<nums.length; i++){

        hashMap[nums[i]] = i;

    }

    for(let j = 0; j<nums.length; j++){
        let complement = target - nums[j];
        // console.log(complement);

        if(hashMap.hasOwnProperty(complement) && hashMap[complement] !== j){
            return [hashMap[complement], j]
        }
    }

    return null;
    
};

console.log(twoSum([2,7,11,15], 9))


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

