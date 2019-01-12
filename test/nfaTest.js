// const assert = require('chai').assert;
// const NFA = require('../src/nfa')
// let tuple
// beforeEach('Set up dfa', function () {
//     tuple = {
//         states: ['q1', 'q3', 'q7', 'q2', 'q5', 'q6', 'q4'],
//         alphabets: ['1', '0'],
//         delta: {
//           q1: { e: ['q2', 'q5'] },
//           q2: { '0': ['q3'] },
//           q3: { '1': ['q4'] },
//           q4: { '0': ['q3'] },
//           q5: { '1': ['q6'] },
//           q6: { '0': ['q7'] },
//           q7: { '1': ['q6'] }
//         },
//         'start-state': 'q1',
//         'final-states': ['q3', 'q6']
//       }});

// describe('NFA testing', function () {
//     it('should accept string "0"', function () {
//         let machine = new DFA(tuple);
//         assert.isFlase(machine.doesAccept('10'))
//     })
//     it('should reject string "00"', function () {
//         let machine = new DFA(tuple);
//         assert.isTrue(machine.doesAccept('0'))
//     })
// })