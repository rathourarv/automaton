const Converter = require('./convertToDfa');

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

    getStartStates() {
        return this.getNextStates(this.tuple.startState);
    }

    getNextStateForState(state, alphabet) {
        return this.tuple.delta[state] && this.tuple.delta[state][alphabet]
            ? this.tuple.delta[state][alphabet] : [];
    }

    doesAccept(message) {
        return message.split("").reduce((accum, currentAlphabet) => {
            const nextStates = accum.flatMap(state => this.getNextStateForState(state, currentAlphabet));
            return nextStates.flatMap(state => this.getNextStates(state));
        }, this.getStartStates()).some(state => this.tuple.finalState.includes(state));
    }

    convert() {
        const startStates = this.getStartStates();
        const converter = new Converter(this.tuple);
        return converter.convert(startStates, this.getNextStates.bind(this));
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