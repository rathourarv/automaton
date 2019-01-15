class Nfa {
    constructor(tuple) {
        this.tuple = tuple;
        this.epsilon = "e";
    }

    getNextStates(state, epsilonedStates = []) {
        epsilonedStates.push(state);
        if (!this.isMultipleStatesPresent(state)) return [state];
        const eStates = this.tuple.delta[state][this.epsilon];
        const temp = eStates.filter(el => !epsilonedStates.includes(el))
        temp.map(st => this.getNextStates.call(this, st, epsilonedStates));
        return epsilonedStates;
    }

    isMultipleStatesPresent(state) {
        return this.tuple.delta[state] && this.tuple.delta[state][this.epsilon];
    }

    doesAccept(message) {
        const splitedMessage = message.split("");
        const startStates = this.getNextStates(this.tuple.startState);
        const lastStates = splitedMessage.reduce((accum, currentAlphabet) => {
            const nextStates = accum.map(state => this.tuple.delta[state] && this.tuple.delta[state][currentAlphabet]).filter(s => s).flat();
            return nextStates.map(sta => this.getNextStates(sta)).flat();
        }, startStates);
        const shouldAccept = lastStates.some(state => this.tuple.finalState.includes(state));
        return shouldAccept;
    }
};

const createNfa = (state, alphabets, delta, startState, finalState) => {
    const tuple = {
        state,
        alphabets,
        delta,
        startState,
        finalState
    }
    return new Nfa(tuple);
}

module.exports = createNfa;