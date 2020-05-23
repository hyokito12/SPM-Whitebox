const whitebox_testcase4 = require('./quiz_whitebox_testcase4');

describe('Testing loop', () =>{
  test('if rows == 5, it will get condition to yes', () => {
    expect(whitebox_testcase4(0)).toBe(0)
  });
  test('if rows == 0, it will not get condition', () => {
    expect(whitebox_testcase4(5)).toBe(1)
  });
});
