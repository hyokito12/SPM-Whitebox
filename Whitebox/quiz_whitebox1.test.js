const whitebox_testcase = require('./quiz_whitebox_testcase1');

describe('Testing loop so they not put negative number', () =>{
  test('if rows == -1 it will stop', () => {
    expect(whitebox_testcase(-1)).toBe(1)
  });
  test('if rows == 5 it will loop', () => {
    expect(whitebox_testcase(5)).toBe(0)
  });
});
