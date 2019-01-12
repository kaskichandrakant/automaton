class NFA{
    constructor(tuple) {
        this.startState = tuple['start-state']
        this.finalState = tuple['final-states']
        this.delta = tuple.delta
    }
    doesAccept(string) {
        return false;
    }
}

module.exports = NFA
