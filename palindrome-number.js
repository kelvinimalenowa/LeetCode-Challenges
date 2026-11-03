/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }

    let current = x

    let reverse = 0

    while (x > 0) {
        let num = x % 10
        reverse = reverse * 10 + num
        x = Math.floor(x / 10)
    }

    return current == reverse

    // // pseudocode:
    // // convert to string
    // const str = x.toString()
    // // convert the string into an array
    // const arr = Array.from(str)
    // // reverse nums in array
    // const rev = arr.reverse()
    // // join everything
    // const joined = rev.join('')
    // // convert back to digit

    // // if joined = x then valid, otherwise no
    // if (joined == str){
    //     return true
    // } else{
    //     return false
    // }
};