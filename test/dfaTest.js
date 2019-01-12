const assert = require('chai').assert;
const DFA = require('../src/dfa')
beforeEach('Set up dfa', function () {
    
});

describe('DFA testing', function () {
    let tuple = {
        states: ['q1', 'q2'],
        alphabets: ['1', '0'],
        delta: {
            q1: {
                '0': 'q2',
                '1': 'q1'
            },
            q2: {
                '0': 'q1',
                '1': 'q2'
            }
        },
        'start-state': 'q1',
        'final-states': ['q2']
    };
    it('should accept odd number of zeros', function () {
        let machine = new DFA(tuple);
        assert.isTrue(machine.doesAccept("0"))
        assert.isTrue(machine.doesAccept("000"))
        assert.isTrue(machine.doesAccept("00000"))
        assert.isTrue(machine.doesAccept("101010"))
        assert.isTrue(machine.doesAccept("010101"))
        assert.isTrue(machine.doesAccept("10"))
    })
})