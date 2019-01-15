class Dfa {
    constructor(tuple) {
        this.tuple = tuple;
    }

    doesAccept(message) {
        const splitedMessage = message.split("");
        const resultantState = splitedMessage.reduce((lastState, currentAlphabet) => 
        this.tuple.delta[lastState][currentAlphabet]
        , this.tuple.startState);
        return this.tuple.finalState.includes(resultantState);
    }
}

const createDfa = (state, alphabets, delta, startState, finalState) => {
    const tuple = {
        state,
        alphabets,
        delta,
        startState,
        finalState
    }
    return new Dfa(tuple);
}

module.exports = createDfa;