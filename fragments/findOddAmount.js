/*
 * assumptions:
 * - the input is an array that contains only numbers
 * - there is always just one number with an odd amount
 *
 * Time complexity: O(|input|)
 * Memory complexity: O(|input|)
 */

export default numbers => {
    const histogram = numbers
        .reduce((acc, number) => {
            acc[number] = (acc[number] || 0) + 1;
            return acc;
        }, {});

    let result;
    Object.keys(histogram)
        .forEach(number => {
            if (histogram[number] % 2) {
                result = number;
            }
        });

    return Number(result);
};
