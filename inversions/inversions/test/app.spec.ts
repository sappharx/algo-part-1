import assert = require('assert');

//describe("Test Suite 1", () => {
//    it("Test A", () => {
//        assert.ok(true, "This shouldn't fail");
//    });

//    it("Test B", () => {
//        assert.ok(1 === 1, "This shouldn't fail");
//        assert.ok(false, "This should fail ts");
//    });
//});

var app = require('../app'),
    should = require('should');

describe('App', function () {
    describe('sortAndCountInversions', function () {
        it('should return 17 for [8, 5, 4, 1, 3, 6, 7, 2]', function () {
            var array = [8, 5, 4, 1, 3, 6, 7, 2];
            sortAndCountInversions(array).should.equal(17);
        });
    });
});