const cloneArray = require('./cloneArray');
// example of cloning an array
test("clone an array", () => {
    const array = [1, 2, 3];
    expect(
        cloneArray(array)
    ).toEqual(array);
})