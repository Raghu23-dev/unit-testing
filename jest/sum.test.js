const sum = require('./sum');


test('desc of add test',()=>{
    expect(sum(1, 2)).toBe(3);
})