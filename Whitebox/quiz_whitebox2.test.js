const whitebox_testcase2 = require('./quiz_whitebox_testcase2');

describe('Testing loop', () =>{
  test('if k == 2, it will not looping', () => {
    expect(whitebox_testcase2(1)).toBe(1)
  });
  test('if k not negative it will looping', () => {
    expect(whitebox_testcase2(0)).toBe(0)
  });
});
