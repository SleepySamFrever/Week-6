var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('hello5');
        })
    })
})