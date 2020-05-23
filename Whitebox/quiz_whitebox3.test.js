const whitebox_testcase3 = require('./quiz_whitebox_testcase3');

describe('Testing loop', () =>{
  test('if rows == 5, it will get condition to yes', () => {
    expect(whitebox_testcase3(0)).toBe(1)
  });
  test('if rows == 0, it will not get condition', () => {
    expect(whitebox_testcase3(5)).toBe(0)
  });
});
