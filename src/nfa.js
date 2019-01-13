class NFA {
    constructor(tuple) {
        this.tuple = tuple;
        this.startState = tuple['start-state']
        this.currentStates = [this.startState]
        this.finalStates = tuple['final-states']
        this.delta = tuple.delta
    }
    hasEpsilon(state) {
        return this.delta[state].hasOwnProperty('e')
    }
    hasTransition(state, char) {
        return this.delta[state].hasOwnProperty(char)
    }
    applyEpsilon(state) {
        this.currentStates = this.currentStates.concat(this.delta[state]['e'])
    }
    getNextStates(state, char) {
        return this.delta[state][char]
    }
    applyTransitions(char) {
        let liveStates = this.currentStates.filter((state) => {
            return this.hasTransition(state, char)
        })
        // console.log("live", liveStates);
        this.currentStates = liveStates.reduce((currentStates, liveState) => {
            return currentStates.concat(this.getNextStates(liveState, char))
        }, [])
        this.currentStates.forEach((state)=>{
            if(this.hasEpsilon(state)){
                this.applyEpsilon(state)
            }
        })
    }
    doesAccept(string) {
        this.currentStates = [this.tuple['start-state']]
        let chars = string.split('')

        this.currentStates.forEach(state => {
            if (this.hasEpsilon(state)) {
                this.applyEpsilon(state)
            }
            chars.forEach(this.applyTransitions.bind(this))
        });

        // console.log(this.currentStates);
        return this.currentStates.some((state) => {
            return this.finalStates.includes(state)
        })
    }
}

module.exports = NFA