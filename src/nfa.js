class NFA {
    constructor(tuple) {
        this.startState = tuple['start-state']
        this.finalStates = tuple['final-states']
        this.delta = tuple.delta
    }
    hasEpsilon(state) {
        let deltaElement = this.delta[state];
        return deltaElement ? deltaElement.hasOwnProperty('e') : false;
    }
    hasTransition(state, char) {
        let deltaElement = this.delta[state];
        return deltaElement ? deltaElement.hasOwnProperty(char) : false;
    }
    applyEpsilon(state) {
        this.currentStates = this.currentStates.concat(this.delta[state]['e'])
    }
    getNewStates(currentStates){
        return this.currentStates.filter((state)=>{
            return !currentStates.includes(state)
        })
    }
    applyEpsilons(){
        let currentStates = this.currentStates
        let epsilonedStates = this.currentStates.filter(this.hasEpsilon.bind(this))
        epsilonedStates.forEach(this.applyEpsilon.bind(this))
        let newStates = this.getNewStates(currentStates)
        if(newStates.length){
            this.applyEpsilons()
        }
    }
    applyTransitions(char) {
        this.currentStates = this.currentStates.reduce((currentStates, state) => {
            if(this.hasTransition(state,char)){
                return currentStates.concat(this.delta[state][char])
            }
            return currentStates
        }, [])
        this.applyEpsilons()
    }
    doesAccept(string) {
        this.currentStates = [this.startState]
        let chars = string.split('')
        this.currentStates.forEach(state => {
            this.applyEpsilons()
            chars.forEach(this.applyTransitions.bind(this))
        });
        return this.currentStates.some((state) => {
            return this.finalStates.includes(state)
        })
    }
}

module.exports = NFA