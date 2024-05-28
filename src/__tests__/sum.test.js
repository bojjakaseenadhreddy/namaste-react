import {sum} from '../utils/sum'
test("Should add two number",() => {
    const result = sum(2,3);
    expect(result).toBe(5);
})