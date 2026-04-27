import capitalize from "./capitalize";

test('First lettter is capitalized', () => {
    expect(capitalize('zigzag')).toBe('Zigzag')
})