// const createNfa = require('../src/nfa');
// const chai = require("chai");
// const assert = chai.assert;

// describe('NfaToDfa', () => {
//     it('alternate characters beginning and ending with same letter', () => {
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
//         const nfaToDfa = createNfa(states, alphabets, delta, startState, finalState);
//         assert.isTrue(nfaToDfa.convert().doesAccept('00'));
//     });
// });