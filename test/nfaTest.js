// const createNfa = require('../src/nfa');
// const chai = require("chai");
// const assert = chai.assert;

// describe('Nfa', () => {
//     it('alternate characters beginning and ending with same letter', () => {
//         const states = ['q1', 'q3', 'q7', 'q2', 'q5', 'q6', 'q4'];
//         const alphabets = ['1', '0'];
//         const delta = {
//             q1: { 'e': ['q2', 'q5'] },
//             q2: { '0': ['q3'] },
//             q3: { '1': ['q4'] },
//             q4: { '0': ['q3'] },
//             q5: { '1': ['q6'] },
//             q6: { '0': ['q7'] },
//             q7: { '1': ['q6'] }
//         };
//         const startState = 'q1';
//         const finalState = ['q3', "q6"]
//         const dfa = createNfa(states, alphabets, delta, startState, finalState).convert();
//         assert.isTrue(dfa.doesAccept("0"));
//         assert.isTrue(dfa.doesAccept("010"));
//         assert.isTrue(dfa.doesAccept("01010"));
//         assert.isTrue(dfa.doesAccept("1"));
//         assert.isTrue(dfa.doesAccept("101"));
//         assert.isTrue(dfa.doesAccept("10101"));
//         assert.isFalse(dfa.doesAccept("10"));
//         assert.isFalse(dfa.doesAccept("01"));
//         assert.isFalse(dfa.doesAccept("11"));
//         assert.isFalse(dfa.doesAccept("00"));
//         assert.isFalse(dfa.doesAccept("001"));
//         assert.isFalse(dfa.doesAccept("100"));
//         assert.isFalse(dfa.doesAccept("1100"));
//     });
//     it('Should accept message when ', () => {
//         const states = [
//             "q1",
//             "q3",
//             "q9",
//             "q7",
//             "q2",
//             "q8",
//             "q5",
//             "q6",
//             "q4"
//         ];
//         const alphabets = [
//             "1",
//             "0"
//         ];
//         const delta = {
//             "q1": {
//                 "e": [
//                     "q2",
//                     "q4"
//                 ]
//             },
//             "q3": {
//                 "0": [
//                     "q3"
//                 ]
//             },
//             "q9": {
//                 "e": [
//                     "q7"
//                 ]
//             },
//             "q7": {
//                 "1": [
//                     "q8"
//                 ],
//                 "e": [
//                     "q9"
//                 ]
//             },
//             "q2": {
//                 "0": [
//                     "q3"
//                 ]
//             },
//             "q8": {
//                 "0": [
//                     "q9"
//                 ]
//             },
//             "q5": {
//                 "1": [
//                     "q6"
//                 ]
//             },
//             "q6": {
//                 "e": [
//                     "q7",
//                     "q4"
//                 ]
//             },
//             "q4": {
//                 "0": [
//                     "q5"
//                 ],
//                 "e": [
//                     "q6"
//                 ]
//             }
//         }
//         const startState = "q1"
//         const finalState = [
//             "q3",
//             "q9",
//             "q6"
//         ]
//         const nfa = createNfa(states, alphabets, delta, startState, finalState);
//         assert.isTrue(nfa.doesAccept("0"));
//         assert.isTrue(nfa.doesAccept("01"));
//         assert.isTrue(nfa.doesAccept("10"));
//         assert.isTrue(nfa.doesAccept("0110"));
//         assert.isTrue(nfa.doesAccept("000"));
//         assert.isFalse(nfa.doesAccept("1"));
//         assert.isFalse(nfa.doesAccept("11"));
//         assert.isFalse(nfa.doesAccept("111"));
//         assert.isFalse(nfa.doesAccept("1101"));
//         assert.isFalse(nfa.doesAccept("0111"));
//     });
//     it("either even number of zeroes or even number of ones", () => {
//         const states = [
//             "q1",
//             "q3",
//             "q2",
//             "q5",
//             "q4"
//         ]
//         const alphabets = [
//             "1",
//             "0"
//         ]
//         const delta = {
//             "q1": {
//                 "e": [
//                     "q2",
//                     "q4"
//                 ]
//             },
//             "q2": {
//                 "0": [
//                     "q3"
//                 ],
//                 "1": [
//                     "q2"
//                 ]
//             },
//             "q3": {
//                 "0": [
//                     "q2"
//                 ],
//                 "1": [
//                     "q3"
//                 ]
//             },
//             "q4": {
//                 "0": [
//                     "q4"
//                 ],
//                 "1": [
//                     "q5"
//                 ]
//             },
//             "q5": {
//                 "0": [
//                     "q5"
//                 ],
//                 "1": [
//                     "q4"
//                 ]
//             }
//         };
//         const startState = "q1";
//         const finalState = [
//             "q2",
//             "q4"
//         ]
//         const nfa = createNfa(states, alphabets, delta, startState, finalState);
//         assert.isTrue(nfa.doesAccept("00"));
//         assert.isTrue(nfa.doesAccept("0000"));
//         assert.isTrue(nfa.doesAccept("0101010"));
//         assert.isTrue(nfa.doesAccept("00010"));
//         assert.isTrue(nfa.doesAccept("11"));
//         assert.isTrue(nfa.doesAccept("1111"));
//         assert.isTrue(nfa.doesAccept("110101"));
//         assert.isTrue(nfa.doesAccept("10101010"));
//         assert.isFalse(nfa.doesAccept("0001"));
//         assert.isFalse(nfa.doesAccept("1110"));
//         assert.isFalse(nfa.doesAccept("111000"));
//         assert.isFalse(nfa.doesAccept("01"));
//         assert.isFalse(nfa.doesAccept("10"));
//         assert.isFalse(nfa.doesAccept("000111"));
//     });
//     it('something', () => {
//         const states =  [
//             "q1",
//             "q3",
//             "q7",
//             "q2",
//             "q5",
//             "q6",
//             "q4"
//         ]
//         const alphabets = [
//             "1",
//             "0"
//         ]
//         const delta = {
//             "q1": {
//                 "e": [
//                     "q2",
//                     "q4"
//                 ]
//             },
//             "q2": {
//                 "0": [
//                     "q2"
//                 ],
//                 "e": [
//                     "q3"
//                 ]
//             },
//             "q3": {
//                 "1": [
//                     "q3"
//                 ],
//                 "e": [
//                     "q6"
//                 ]
//             },
//             "q4": {
//                 "1": [
//                     "q4"
//                 ],
//                 "e": [
//                     "q5"
//                 ]
//             },
//             "q5": {
//                 "0": [
//                     "q5"
//                 ],
//                 "e": [
//                     "q7"
//                 ]
//             }
//         };
//         const startState = "q1";
//         const finalState = [
//             "q7",
//             "q6"
//         ]
//         const nfa = createNfa(states, alphabets, delta, startState, finalState);
//         assert.isTrue(nfa.doesAccept("001"));
//     });
// });