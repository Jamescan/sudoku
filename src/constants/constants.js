/**
 * Mapping of arrow key event keyCodes to grid index adjustment values
 * and any special cases to consider.
 *
 * For example:
 *    -Left arrow key has a keyCode of 37. Pressing the left arrow
 *     key should navigate left one cell, which corresponds to decreasing
 *     the current cell index by 1, hence an indexAdjustment value of -1.
 *     However, we should not loop around from the first column to the last
 *     column, so we store a specialCaseColumnNumber of 0 (first column).
 */

export const ARROW_KEYS = {
    // Left arrow key
    37: {
        indexAdjustment: -1,
        specialCaseColumnNumber: 0
    },

    // Up arrow key
    38: {
        indexAdjustment: -9
    },

    // Right arrow key
    39: {
        indexAdjustment: 1,
        specialCaseColumnNumber: 8
    },

    // Down arrow key
    40: {
        indexAdjustment: 9
    }
};
