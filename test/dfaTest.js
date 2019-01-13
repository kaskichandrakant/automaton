const assert = require('chai').assert;
const dfa = require('../src/dfa')

describe('dfa', () => {
    let tuple = {
        "states": ["q1", "q2"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {
                "0": "q2",
                "1": "q1"
            },
            "q2": {
                "0": "q1",
                "1": "q2"
            }
        },
        "start-state": "q1",
        "final-states": ["q2"]
    };
    let machine;
    beforeEach(() => {
        machine = new dfa(tuple);
    });
    it('odd number of zeroes', () => {
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('000'));
        assert.isTrue(machine.doesAccept('00000'));
        assert.isTrue(machine.doesAccept('10'));
        assert.isTrue(machine.doesAccept('101010'));
        assert.isTrue(machine.doesAccept('010101'));
        assert.isFalse(machine.doesAccept('00'));
        assert.isFalse(machine.doesAccept('0000'));
        assert.isFalse(machine.doesAccept('1001'));
        assert.isFalse(machine.doesAccept('1010'));
        assert.isFalse(machine.doesAccept('001100'));
    });
});

describe('dfa', () => {
    let tuple = {
        "states": ["q1", "q2"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {
                "0": "q2",
                "1": "q1"
            },
            "q2": {
                "0": "q1",
                "1": "q2"
            }
        },
        "start-state": "q1",
        "final-states": ["q1"]
    };
    let machine;
    beforeEach(() => {
        machine = new dfa(tuple);
    });
    it('even number of zeroes', () => {
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('0000'));
        assert.isTrue(machine.doesAccept('1001'));
        assert.isTrue(machine.doesAccept('1010'));
        assert.isTrue(machine.doesAccept('001100'));
        assert.isFalse(machine.doesAccept('0'));
        assert.isFalse(machine.doesAccept('000'));
        assert.isFalse(machine.doesAccept('00000'));
        assert.isFalse(machine.doesAccept('10'));
        assert.isFalse(machine.doesAccept('101010'));
        assert.isFalse(machine.doesAccept('010101'));
    });
});

describe('dfa', () => {
    let tuple = {
        states: ['q1', 'q2'],
        alphabets: ['1', '0'],
        delta: {q1: {'0': 'q2', '1': 'q1'}, q2: {'0': 'q2', '1': 'q2'}},
        'start-state': 'q1',
        'final-states': ['q2']
    };
    let machine;
    beforeEach(() => {
        machine = new dfa(tuple);
    });
    it('at least one zero', () => {
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('10'));
        assert.isTrue(machine.doesAccept('100'));
        assert.isTrue(machine.doesAccept('1100'));
        assert.isTrue(machine.doesAccept('01'));
        assert.isTrue(machine.doesAccept('010'));
        assert.isFalse(machine.doesAccept(''));
        assert.isFalse(machine.doesAccept('1'));
        assert.isFalse(machine.doesAccept('11'));
        assert.isFalse(machine.doesAccept('111'));
    });
});

describe('dfa', () => {
    let tuple = {
        "states": ["q1", "q2"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {
                "0": "q1",
                "1": "q2"
            },
            "q2": {
                "0": "q2",
                "1": "q2"
            }
        },
        "start-state": "q1",
        "final-states": ["q2"]
    };
    let machine;
    beforeEach(() => {
        machine = new dfa(tuple);
    });
    it('at least one one', () => {
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('10'));
        assert.isTrue(machine.doesAccept('100'));
        assert.isTrue(machine.doesAccept('1100'));
        assert.isTrue(machine.doesAccept('01'));
        assert.isTrue(machine.doesAccept('010'));
        assert.isFalse(machine.doesAccept(''));
        assert.isFalse(machine.doesAccept('0'));
        assert.isFalse(machine.doesAccept('00'));
        assert.isFalse(machine.doesAccept('000'));
    });
});

describe('dfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q2"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {
                "0": "q2",
                "1": "q2"
            },
            "q2": {
                "0": "q3",
                "1": "q3"
            },
            "q3": {
                "0": "q1",
                "1": "q1"
            }
        },
        "start-state": "q1",
        "final-states": ["q1"]
    };
    let machine;
    beforeEach(() => {
        machine = new dfa(tuple);
    });
    it('string length multiple of three', () => {
        assert.isTrue(machine.doesAccept('000'));
        assert.isTrue(machine.doesAccept('111'));
        assert.isTrue(machine.doesAccept('010'));
        assert.isTrue(machine.doesAccept('101'));
        assert.isTrue(machine.doesAccept('111111'));
        assert.isTrue(machine.doesAccept('000000'));
        assert.isTrue(machine.doesAccept('101010'));
        assert.isTrue(machine.doesAccept('010101'));
        assert.isFalse(machine.doesAccept('00'));
        assert.isFalse(machine.doesAccept('11'));
        assert.isFalse(machine.doesAccept('10'));
        assert.isFalse(machine.doesAccept('01'));
        assert.isFalse(machine.doesAccept('11111'));
        assert.isFalse(machine.doesAccept('00000'));
        assert.isFalse(machine.doesAccept('01010'));
        assert.isFalse(machine.doesAccept('10101'));
    });
});

describe('dfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q2", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {
                "0": "q2",
                "1": "q4"
            },
            "q2": {
                "0": "q4",
                "1": "q3"
            },
            "q3": {
                "0": "q2",
                "1": "q4"
            },
            "q4": {
                "0": "q4",
                "1": "q4"
            }
        },
        "start-state": "q1",
        "final-states": ["q3", "q2"]
    };
    let machine;
    beforeEach(() => {
        machine = new dfa(tuple);
    });
    it('alternate ones and zeroes beginning with zero', () => {
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('01'));
        assert.isTrue(machine.doesAccept('010'));
        assert.isTrue(machine.doesAccept('0101'));
        assert.isTrue(machine.doesAccept('01010'));
        assert.isTrue(machine.doesAccept('010101'));
        assert.isFalse(machine.doesAccept(''));
        assert.isFalse(machine.doesAccept('1'));
        assert.isFalse(machine.doesAccept('10'));
        assert.isFalse(machine.doesAccept('101'));
        assert.isFalse(machine.doesAccept('11'));
        assert.isFalse(machine.doesAccept('00'));
        assert.isFalse(machine.doesAccept('0100'));
        assert.isFalse(machine.doesAccept('011'));
    });
});