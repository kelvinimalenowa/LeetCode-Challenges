/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // parameter: s, a roman numeral
    // return: an integer corresponding to the roman numeral
    // example: s = 'III'  |  3
    // pseudocode: 
    // assign symbol to value
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    // somewhere to hold running total
    let total = 0
    // loop through each symbol in the string
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]]
        // s[0] = L = 50  ||  
        // s[1] = V = 5  || 
        // s[2] = I = 1 || 
        // s[3] = I = 1
        const next = map[s[i + 1]]
        // s[0 + 1] = V = 5  || 
        // s[1 + 1] = I = 1 || 
        // s[2 + 1] = I = 1
        // s[3 + 1] = I = 1

        // LVIII
        // 0
        if (current < next) { // first loop
            total -= current
        } else {
            total += current // total = 0 + current = 50 --> 50

        } // new running total is now 50

        // // LVIII
        // // 01
        // if (5 < 1) { // second loop
        //     total -= current
        // } else {
        //     total += current // total = 50 + current = 5 --> 55
        // }

        // // LVIII
        // // 012
        // if (1 < 1) { // third loop
        //     total -= current
        // } else {
        //     total += current // total = 55 + current = 1 --> 56
        // }

        // // LVIII
        // // 0123
        // if (1 < 1) { // fourth loop
        //     total -= current
        // } else {
        //     total += current // total = 56 + current = 1 --> 57
        // }

        // // LVIII
        // // 01234
        // if (1 < 1) { // fifth loop
        //     total -= current
        // } else {
        //     total += current // total = 57 + current = 1 --> 58
        // }
        // it would try to loop again but would end here because there are no following values
    }
    return total
};