const {getElementStandardValue, InvalidThetaError, calcOutputTheta, getOutputTheta} = require('./script');


test("Program constructs map", () => {
    expect(getElementStandardValue('mo')).toBe(0.7093);
});

test("Program handles incorrect input theta", () => {
    expect(() => calcOutputTheta(-1)).toThrow("Theta (Input Angle) must be valid number between 0 and 180 degrees.");
    expect(() => calcOutputTheta("44")).toThrow("Theta (Input Angle) must be valid number between 0 and 180 degrees.");
});

test("Program calculates output angle", () => {
    expect(calcOutputTheta()).toBe(18.4234);
});

test("Program controller function handles incorrect input theta", () => {
    expect(() => getOutputTheta(-1)).toThrow("Theta (Input Angle) must be valid number between 0 and 180 degrees.");
});
