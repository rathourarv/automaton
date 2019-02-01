const createDfa = require('../src/Dfa.js');
const createNfa = require('../src/Nfa');
const fs = require('fs');
const assert = require('chai').assert;

const testData = JSON.parse(fs.readFileSync('./test/testData.json'));
const nfasData = testData.filter((data) => data.type === 'nfa');
const dfasData = testData.filter((data) => data.type === 'dfa');

describe('Automaton', function() {
    describe('Dfa',function () {
        dfasData.forEach(function(dfaData) {
            describe(dfaData.name, function () {
                let dfa = createDfa(dfaData.tuple.states, dfaData.tuple.alphabets, dfaData.tuple.delta, dfaData.tuple["start-state"], dfaData.tuple["final-states"]);

                dfaData["pass-cases"].forEach(function (validInput) {
                    it(`${validInput} should be accepted`, function () {
                        assert.isTrue(dfa.doesAccept(validInput))
                    })
                });

                dfaData['fail-cases'].forEach(function (invalidInput) {
                    it(`${invalidInput} should be rejected`, function () {
                        assert.isFalse(dfa.doesAccept(invalidInput))
                    })
                });
            })
        });
    });

    describe('Nfa',function () {
        nfasData.forEach(function(nfaData) {
            describe(nfaData.name, function () {
                let nfa = createNfa(nfaData.tuple.states, nfaData.tuple.alphabets, nfaData.tuple.delta, nfaData.tuple["start-state"], nfaData.tuple["final-states"]);
                nfaData["pass-cases"].forEach(function (validInput) {
                    it(`${validInput} should be accepted`, function () {
                        assert.isTrue(nfa.doesAccept(validInput))
                    })
                });

                nfaData['fail-cases'].forEach(function (invalidInput) {
                    it(`${invalidInput} should be rejected`, function () {
                        assert.isFalse(nfa.doesAccept(invalidInput))
                    })
                });
            })
        });
    });

    describe('Nfa to Dfa',function () {
        nfasData.forEach(function(nfaData) {
            describe(nfaData.name, function () {
                let nfa = createNfa(nfaData.tuple.states, nfaData.tuple.alphabets, nfaData.tuple.delta, nfaData.tuple["start-state"], nfaData.tuple["final-states"]);
                let dfa = nfa.convert();
                nfaData["pass-cases"].forEach(function (validInput) {
                    it(`${validInput} should be accepted`, function () {
                        assert.isTrue(dfa.doesAccept(validInput))
                    })
                });

                nfaData['fail-cases'].forEach(function (invalidInput) {
                    it(`${invalidInput} should be rejected`, function () {
                        assert.isFalse(dfa.doesAccept(invalidInput))
                    })
                });
            })
        });
    });
});