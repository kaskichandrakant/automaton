const assert = require('chai').assert;
const nfa = require('../src/nfa')


describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q7", "q2", "q5", "q6", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"e": ["q2", "q5"]},
            "q2": {"0": ["q3"]},
            "q3": {"1": ["q4"]},
            "q4": {"0": ["q3"]},
            "q5": {"1": ["q6"]},
            "q6": {"0": ["q7"]},
            "q7": {"1": ["q6"]}
        },
        "start-state": "q1",
        "final-states": ["q3", "q6"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('alternate characters beginning and ending with same letter', () => {
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('010'));
        assert.isTrue(machine.doesAccept('01010'));
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('101'));
        assert.isTrue(machine.doesAccept('10101'));
        assert.isNotTrue(machine.doesAccept(''));
        assert.isNotTrue(machine.doesAccept('10'));
        assert.isNotTrue(machine.doesAccept('01'));
        assert.isNotTrue(machine.doesAccept('11'));
        assert.isNotTrue(machine.doesAccept('00'));
        assert.isNotTrue(machine.doesAccept('001'));
        assert.isNotTrue(machine.doesAccept('100'));
        assert.isNotTrue(machine.doesAccept('1100'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q2", "q5", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"e": ["q2", "q4"]},
            "q2": {"0": ["q3"], "1": ["q2"]},
            "q3": {"0": ["q2"], "1": ["q3"]},
            "q4": {"0": ["q4"], "1": ["q5"]},
            "q5": {"0": ["q5"], "1": ["q4"]}
        },
        "start-state": "q1",
        "final-states": ["q2", "q4"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('either even number of zeroes or even number of ones', () => {
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('0000'));
        assert.isTrue(machine.doesAccept('0101010'));
        assert.isTrue(machine.doesAccept('00010'));
        assert.isTrue(machine.doesAccept('11'));
        assert.isTrue(machine.doesAccept('1111'));
        assert.isTrue(machine.doesAccept('110101'));
        assert.isTrue(machine.doesAccept('10101010'));
        assert.isNotTrue(machine.doesAccept('0001'));
        assert.isNotTrue(machine.doesAccept('1110'));
        assert.isNotTrue(machine.doesAccept('111000'));
        assert.isNotTrue(machine.doesAccept('01'));
        assert.isNotTrue(machine.doesAccept('10'));
        assert.isNotTrue(machine.doesAccept('000111'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q2"],
        "alphabets": ["1", "0"],
        "delta": {"q1": {"0": ["q2"], "1": ["q1"], "e": ["q2"]}, "q2": {"1": ["q2"]}},
        "start-state": "q1",
        "final-states": ["q2"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('sparse zero sandwich - any number of 1s with utmost one zero', () => {
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('11'));
        assert.isTrue(machine.doesAccept('101'));
        assert.isTrue(machine.doesAccept('110'));
        assert.isTrue(machine.doesAccept('01'));
        assert.isTrue(machine.doesAccept('011'));
        assert.isTrue(machine.doesAccept('1111'));
        assert.isNotTrue(machine.doesAccept('00'));
        assert.isNotTrue(machine.doesAccept('010'));
        assert.isNotTrue(machine.doesAccept('100'));
        assert.isNotTrue(machine.doesAccept('110011'));
        assert.isNotTrue(machine.doesAccept('1010'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q2"],
        "alphabets": ["1", "0"],
        "delta": {"q1": {"0": ["q1"], "e": ["q2"]}, "q2": {"1": ["q2"]}},
        "start-state": "q1",
        "final-states": ["q2"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('any number of zeroes followed by any number of ones', () => {
        assert.isTrue(machine.doesAccept(''));
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('001'));
        assert.isTrue(machine.doesAccept('0011'));
        assert.isTrue(machine.doesAccept('0001'));
        assert.isTrue(machine.doesAccept('011'));
        assert.isTrue(machine.doesAccept('000111'));
        assert.isNotTrue(machine.doesAccept('10'));
        assert.isNotTrue(machine.doesAccept('1110'));
        assert.isNotTrue(machine.doesAccept('010'));
        assert.isNotTrue(machine.doesAccept('10101'));
        assert.isNotTrue(machine.doesAccept('1101'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q2", "q5", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"e": ["q2", "q4"]},
            "q2": {"0": ["q2"], "e": ["q3"]},
            "q3": {"1": ["q3"]},
            "q4": {"1": ["q4"], "e": ["q5"]},
            "q5": {"0": ["q5"]}
        },
        "start-state": "q1",
        "final-states": ["q3", "q5"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('0*1* or 1*0*', () => {
        assert.isTrue(machine.doesAccept(''));
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('11'));
        assert.isTrue(machine.doesAccept('001'));
        assert.isTrue(machine.doesAccept('110'));
        assert.isTrue(machine.doesAccept('011'));
        assert.isTrue(machine.doesAccept('100'));
        assert.isTrue(machine.doesAccept('0011'));
        assert.isTrue(machine.doesAccept('1100'));
        assert.isNotTrue(machine.doesAccept('101'));
        assert.isNotTrue(machine.doesAccept('010'));
        assert.isNotTrue(machine.doesAccept('11001'));
        assert.isNotTrue(machine.doesAccept('00110'));
        assert.isNotTrue(machine.doesAccept('0101'));
        assert.isNotTrue(machine.doesAccept('1010'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q7", "q2", "q5", "q6", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"e": ["q2", "q4"]},
            "q2": {"0": ["q2"], "e": ["q3"]},
            "q3": {"1": ["q3"], "e": ["q6"]},
            "q4": {"1": ["q4"], "e": ["q5"]},
            "q5": {"0": ["q5"], "e": ["q7"]}
        },
        "start-state": "q1",
        "final-states": ["q7", "q6"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('0*1* or 1*0* with extra epsilons', () => {
        assert.isTrue(machine.doesAccept(''));
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('11'));
        assert.isTrue(machine.doesAccept('001'));
        assert.isTrue(machine.doesAccept('110'));
        assert.isTrue(machine.doesAccept('011'));
        assert.isTrue(machine.doesAccept('100'));
        assert.isTrue(machine.doesAccept('0011'));
        assert.isTrue(machine.doesAccept('1100'));
        assert.isNotTrue(machine.doesAccept('101'));
        assert.isNotTrue(machine.doesAccept('010'));
        assert.isNotTrue(machine.doesAccept('11001'));
        assert.isNotTrue(machine.doesAccept('00110'));
        assert.isNotTrue(machine.doesAccept('0101'));
        assert.isNotTrue(machine.doesAccept('1010'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q7", "q2", "q8", "q5", "q6", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"e": ["q2", "q5"]},
            "q2": {"0": ["q3"]},
            "q3": {"0": ["q4"]},
            "q4": {"e": ["q8"]},
            "q5": {"1": ["q6"]},
            "q6": {"0": ["q7"]},
            "q7": {"e": ["q8"]},
            "q8": {"1": ["q8"]}
        },
        "start-state": "q1",
        "final-states": ["q8"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('001* or 101*', () => {
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('10'));
        assert.isTrue(machine.doesAccept('001'));
        assert.isTrue(machine.doesAccept('101'));
        assert.isTrue(machine.doesAccept('0011'));
        assert.isTrue(machine.doesAccept('1011'));
        assert.isNotTrue(machine.doesAccept(''));
        assert.isNotTrue(machine.doesAccept('1'));
        assert.isNotTrue(machine.doesAccept('0'));
        assert.isNotTrue(machine.doesAccept('11'));
        assert.isNotTrue(machine.doesAccept('01'));
        assert.isNotTrue(machine.doesAccept('0010'));
        assert.isNotTrue(machine.doesAccept('1010'));
        assert.isNotTrue(machine.doesAccept('00110'));
        assert.isNotTrue(machine.doesAccept('10110'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q11", "q1", "q3", "q12", "q14", "q9", "q7", "q2", "q8", "q13", "q5", "q10", "q6", "q4", "q15"],
        "alphabets": ["1", "0"],
        "delta": {
            "q11": {"e": ["q12"]},
            "q1": {"e": ["q9", "q2"]},
            "q3": {"0": ["q4"]},
            "q12": {"0": ["q13"]},
            "q14": {"1": ["q15"]},
            "q9": {"1": ["q10"]},
            "q7": {"0": ["q8"]},
            "q2": {"e": ["q3"]},
            "q8": {"e": ["q3"]},
            "q13": {"e": ["q14"]},
            "q5": {"0": ["q6"]},
            "q10": {"e": ["q11"]},
            "q6": {"e": ["q7"]},
            "q4": {"e": ["q5"]},
            "q15": {"e": ["q12"]}
        },
        "start-state": "q1",
        "final-states": ["q11", "q2", "q8", "q15"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('(000)* U 1(01)*', () => {
        assert.isTrue(machine.doesAccept(''));
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('000'));
        assert.isTrue(machine.doesAccept('000000'));
        assert.isTrue(machine.doesAccept('101'));
        // assert.isTrue(machine.doesAccept('1010101'));
        // assert.isNotTrue(machine.doesAccept('0'));
        // assert.isNotTrue(machine.doesAccept('0000'));
        // assert.isNotTrue(machine.doesAccept('1010'));
        // assert.isNotTrue(machine.doesAccept('00001'));
        // assert.isNotTrue(machine.doesAccept('0001'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q9", "q7", "q2", "q8", "q5", "q6", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"e": ["q2", "q4"]},
            "q3": {"0": ["q3"]},
            "q9": {"e": ["q7"]},
            "q7": {"1": ["q8"], "e": ["q9"]},
            "q2": {"0": ["q3"]},
            "q8": {"0": ["q9"]},
            "q5": {"1": ["q6"]},
            "q6": {"e": ["q7", "q4"]},
            "q4": {"0": ["q5"], "e": ["q6"]}
        },
        "start-state": "q1",
        "final-states": ["q3", "q9", "q6"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('(01)*(10)* U 11*', () => {
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('000'));
        assert.isTrue(machine.doesAccept('01'));
        assert.isTrue(machine.doesAccept('10'));
        assert.isTrue(machine.doesAccept('0110'));
        assert.isNotTrue(machine.doesAccept('1'));
        assert.isNotTrue(machine.doesAccept('11'));
        assert.isNotTrue(machine.doesAccept('111'));
        assert.isNotTrue(machine.doesAccept('1101'));
        assert.isNotTrue(machine.doesAccept('0111'));
    });
});

describe('nfa', () => {
    let tuple = {
        "states": ["q1", "q3", "q2", "q5", "q6", "q4"],
        "alphabets": ["1", "0"],
        "delta": {
            "q1": {"0": ["q2", "q4"], "1": ["q2", "q4"]},
            "q2": {"0": ["q2"], "e": ["q3"]},
            "q3": {"1": ["q3"], "e": ["q6"]},
            "q4": {"1": ["q4"], "e": ["q5"]},
            "q5": {"0": ["q5"], "e": ["q6"]}
        },
        "start-state": "q1",
        "final-states": ["q6"]
    };
    let machine;
    beforeEach(() => {
        machine = new nfa(tuple);
    });
    it('[10] U ({0*1*} U {1*0*}) )', () => {
        assert.isTrue(machine.doesAccept('1'));
        assert.isTrue(machine.doesAccept('0'));
        assert.isTrue(machine.doesAccept('10'));
        assert.isTrue(machine.doesAccept('11'));
        assert.isTrue(machine.doesAccept('01'));
        assert.isTrue(machine.doesAccept('00'));
        assert.isTrue(machine.doesAccept('101'));
        assert.isTrue(machine.doesAccept('1001'));
        assert.isTrue(machine.doesAccept('1011'));
        assert.isTrue(machine.doesAccept('10011'));
        assert.isTrue(machine.doesAccept('010'));
        assert.isTrue(machine.doesAccept('0110'));
        assert.isTrue(machine.doesAccept('0100'));
        assert.isTrue(machine.doesAccept('01100'));
        assert.isNotTrue(machine.doesAccept(''));
        assert.isNotTrue(machine.doesAccept('1010'));
        assert.isNotTrue(machine.doesAccept('0101'));
        assert.isNotTrue(machine.doesAccept('001100'));
        assert.isNotTrue(machine.doesAccept('110010'));
    });
});