/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    // parameters: two strings seperated by a comma
    // return: the letters in each word, together, in alternating order
    // example: Input: word1 = "abc", word2 = "pqr"
    //          Output: "apbqcr"
    // pseudocode:
    // hold sorted word in new variable
    let result = []
    // establish index to count throguh word
    let i = 0
    // push each letter in string while letter exists
    while (i < word1.length || i < word2.length) {
        if (word1[i]) result.push(word1[i])
        if (word2[i]) result.push(word2[i])
        i++
    }
    let answer = result.join('')
    return answer
};