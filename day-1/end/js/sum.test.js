const sum = require('./sum');
// example of what we want to test
// 1 + 2 = 3
test("add two numbers", () => {
    expect(sum(1, 2)).toBe(3)
})