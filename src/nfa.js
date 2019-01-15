class Nfa {
    constructor(tuple) {
        this.tuple = tuple;
        this.epsilon = "e";
    }

    getNextStates(state, epsilonedStates = []) {
        epsilonedStates.push(state);
        const nextEpsilonState = this.getNextStateForState(state, this.epsilon);
        if (nextEpsilonState.length == 0) return [state];
        nextEpsilonState.filter(state => !epsilonedStates.includes(state))
            .map(st => this.getNextStates.call(this, st, epsilonedStates));
        return epsilonedStates;
    }

    getNextStateForState(state, alphabet) {
        return this.tuple.delta[state] && this.tuple.delta[state][alphabet]
            ? this.tuple.delta[state][alphabet] : [];
    }

    doesAccept(message) {
        const startStates = this.getNextStates(this.tuple.startState);
        return message.split("").reduce((accum, currentAlphabet) => {
            const nextStates = accum.flatMap(state => this.getNextStateForState(state, currentAlphabet));
            return nextStates.flatMap(state => this.getNextStates(state));
        }, startStates).some(state => this.tuple.finalState.includes(state));
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