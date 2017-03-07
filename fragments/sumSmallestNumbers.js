/*
 * assumptions:
 * - the input is an array
 * - the length is not smaller than 2
 * - the array consists of only numbers
 *
 * Time complexity:    O(|input| * log |input|)
 * Memory complexity:  O(|input|)                 (because of not modifying the input)
 */

export default input => input
    .slice()
    .sort((a1, a2) => a1 - a2)
    .slice(0, 2)
    .reduce((acc, current) => acc + current, 0);
