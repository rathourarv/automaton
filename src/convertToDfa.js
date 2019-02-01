const createDfa = require('./dfa');

class Converter {
    constructor(tuple) {
        this.tuple = tuple;
        this.dfaDelta = { "dead": { "0": "dead", "1": "dead" } };
        this.allStates = [];
    }

    convert(startStates, getNextStates) {
        this.allStates.push(startStates);
        for (let index = 0; index < this.allStates.length; index++)
            this.createDfaDelta(this.allStates[index], getNextStates);
        const finalStates = this.getFinalStates();
        const statesForDfa = this.allStates.map(a => a.toString());
        return createDfa(statesForDfa, this.tuple.alphabets, this.dfaDelta, this.allStates[0].toString(), finalStates);
    }

    getFinalStates() {
        return this.allStates.filter(
            states => states.some(
                st => this.tuple.finalState.includes(st)))
            .map(a => a.toString());
    }

    createDfaDelta(stateForDfa, getNextStates) {
        const states = this.tuple.alphabets.map(alphabet => this.nextState(stateForDfa, alphabet, getNextStates));
        states.forEach(st => st.length !== 0 && !this.doesStateExist(st) && this.allStates.push(st));
        this.dfaDelta[stateForDfa] = {
            '0': states[1].toString() || 'dead',
            '1': states[0].toString() || 'dead'
        };
    }

    doesStateExist(state) {
        return this.allStates.some(s => {
            if (s.length !== state.length) return false;
            return s.every(st => state.includes(st));
        })
    }

    nextState(startStates, alphabet, getNextStates) {
        const states = startStates.flatMap(state => {
            const states = this.getStateFor(state, alphabet);
            return states.flatMap(state => getNextStates(state));
        });
        return [...new Set(states)];
    }

    getStateFor(state, alphabet) {
        return this.tuple.delta[state] && this.tuple.delta[state][alphabet]
            ? this.tuple.delta[state][alphabet] : [];
    }
}

module.exports = Converter;