class DFA{
    constructor(tuple) {
        this.startState = tuple['start-state']
        this.finalState = tuple['final-states']
        this.currentState = this.startState
        this.states = tuple.states
        this.transitions = tuple.delta
        this.alphabets = tuple.alphabets
    }
    doesAccept(string) {
        let sampleArr = string.split('');
        return this.finalState.includes(sampleArr.reduce((currentState,char)=>{
            return this.transitions[currentState][char]
        },this.startState))
    }
}
module.exports = DFA