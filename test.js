test("One dollar should be 156.5 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(1)).toBe(156.5);
})

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1)).toBe(0.87);
})