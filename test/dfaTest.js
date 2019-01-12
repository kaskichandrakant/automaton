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

    it('should accept string "0"', function () {
        let machine = new DFA(tuple);
        assert.isTrue(machine.doesAccept('0'))
    })
    it('should reject string "00"', function () {
        let machine = new DFA(tuple);
        assert.isFalse(machine.doesAccept('00'))
    })
    it('should accept string "000"', function () {
        let machine = new DFA(tuple);
        assert.isTrue(machine.doesAccept('000'))
    })
    it('should reject string "0000"', function () {
        let machine = new DFA(tuple);
        assert.isFalse(machine.doesAccept('0000'))
    })
})
// {  
//     "name":"odd number of zeroes",
//     "type":"dfa",
//     "tuple":,
//     "pass-cases":[  
//       "0",
//       "000",
//       "00000",
//       "10",
//       "101010",
//       "010101"
//     ],
//     "fail-cases":[  
//       "00",
//       "0000",
//       "1001",
//       "1010",
//       "001100"
//     ]
//   }

describe('DFA Tests',function(){
    let tuple = {  
        "states":[  
          "q1",
          "q2"
        ],
        "alphabets":[  
          "1",
          "0"
        ],
        "delta":{  
          "q1":{  
            "0":"q2",
            "1":"q1"
          },
          "q2":{  
            "0":"q1",
            "1":"q2"
          }
        },
        "start-state":"q1",
        "final-states":[  
          "q2"
        ]
      }
    // it('should accept string "0"', function () {
    //     let machine = new DFA(tuple);
    //     assert.isTrue(machine.doesAccept("0"))
    //     assert.isTrue(machine.doesAccept("000"))
    //     assert.isTrue(machine.doesAccept("00000"))
    //     assert.isTrue(machine.doesAccept("101010"))
    //     assert.isTrue(machine.doesAccept("010101"))
    //     assert.isTrue(machine.doesAccept("10"))
    // })
})