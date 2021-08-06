import solutions from './solutions.js';


describe('sample test', () => {

  test('solutions is defined', async () => {
    expect(solutions).toBeDefined();
  })

  test('square function', () => {
    
    const sol1 = solutions.sol1;
    expect(typeof sol1).toBe('function')

    expect(sol1(2)).toEqual(4);

  })

});