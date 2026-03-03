const { consent, batch } = require('./index');

describe('cookie-consent', () => {
  test('should process string input', () => {
    expect(consent('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => consent(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = consent('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
