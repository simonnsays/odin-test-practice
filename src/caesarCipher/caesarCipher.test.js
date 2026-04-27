import { caesarCipher } from "./caesarCipher";

test('Shifts letter to the next wrapped indexed letter', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})