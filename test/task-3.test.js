const countBox = require("../src/task-3");
const { apple, kue } = require("./mock.data");

describe("testing-count-box", () => {
    it("test countbox function", async () => {
        const result = countBox(apple,kue);
        expect(result).toBe(5);
    });

});