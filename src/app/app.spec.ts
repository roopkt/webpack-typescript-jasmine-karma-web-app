import { add } from "./app";

describe('app', () => {
    it('can add', () => {
        expect(add(2, 3)).toBe(5);
    })
});
