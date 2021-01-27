const assert = require('assert');

function flatWhite(arr) {
    const result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    });
    return result;
}

assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);
console.log('Looks good');