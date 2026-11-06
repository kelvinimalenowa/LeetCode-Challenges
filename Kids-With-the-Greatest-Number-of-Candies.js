/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //parameters: nums, an array of numbers & target, what the 2 numbers should add up to 
    //return: the 2 indicies within nums that add up to target
    //example: input = nums = [2, 5, 6, 3]  target = 9
    //               output = [6, 3]
    //pseudocode: 
    //have first number loop through each number in array
    for (let i = 0; i <= nums.length; i++) {
        //have second number loop through each number in array 
        for (let j = i + 1; j <= nums.length; j++) {
            //if the first and second number equal target, return both indicies
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

};