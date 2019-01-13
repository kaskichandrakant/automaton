class DFA{
    constructor(tuple) {
        this.startState = tuple['start-state']
        this.finalState = tuple['final-states']
        this.delta = tuple.delta
    }
    doesAccept(string) {
        let sampleArr = string.split('');
        return this.finalState.includes(sampleArr.reduce(this.changeCurrentState.bind(this),this.startState))
    }
    changeCurrentState(currentState,char){
            return this.delta[currentState][char]
    }
}
module.exports = DFA