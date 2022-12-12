const {WhoAmI,} = require("../src/WhoAmI");
const {WhoAmIError} = require("../src/WhoAmIError");

test("test", () => {
    expect((new WhoAmI()).get()).toBe("Monkey");
});

test("test Error", () => {
    expect(() => {
        throw new WhoAmIError("Error")
    }).toThrow(WhoAmIError);
});