class NFA{
    constructor(tuple) {
        this.startState = tuple['start-state']
        this.finalState = tuple['final-states']
        this.currentState = this.startState
        this.states = tuple.states
        this.transitions = tuple.delta
        this.alphabets = tuple.alphabets
    }
    doesAccept(string) {
        let currentStates=[]
        for(var i=0;i<string.length;i++){
            this.currentState = this.transitions[this.currentState]
        }
        return this.finalState.includes(this.currentState)
    }
}
