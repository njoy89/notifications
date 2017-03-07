/*
 * assumptions:
 * - the input is a string
 *
 * Time complexity:    O(|input|)
 * Memory complexity:  O(|input|)
 */

export default str => {
    const histogram = str
        .toLowerCase()
        .split('')
        .reduce((acc, char) => {
            if (char === 'o') {
                acc['o'] = (acc['o'] || 0) + 1;
            } else if (char === 'x') {
                acc['x'] = (acc['x'] || 0) + 1;
            }
            return acc;
        }, {});

    return histogram['o'] === histogram['x'];
}
