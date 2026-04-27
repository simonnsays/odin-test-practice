import { add, subtract, divide, multiply} from './calculator'

test('Adds positive integers', () => {
    expect(add(2, 3)).toBe(5)
})
test('Adds negative integers', () => {
    expect(add(-2, 3)).toBe(1)
})

// subtract
test('Subtracts positive integers', () => {
    expect(subtract(3, 2)).toBe(1)
})
test('Subtracts negative integers', () => {
    expect(subtract(-2, 3)).toBe(-5)
})

// divide
test('divides single digits integers', () => {
    expect(divide(9, 3)).toBe(3)
})

test('divides multiple digits integers', () => {
    expect(divide(144, 12)).toBe(12)
})

// multiply
test('Multiply positive integers', () => {
    expect(multiply(2, 3)).toBe(6)
})
test('Multiply negative integers', () => {
    expect(multiply(2, -3)).toBe(-6)
})