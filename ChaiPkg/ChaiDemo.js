const { expect } = require('chai');

/**
 * tc-1
 * input array : [1,2,3,4,5]
 * number to remove : 2
 * 
 * verify ans is [1,3,4,5]
 * 
 * the chai library helps you to write down the multiple test cases
 *  -> regarding websits
 *  -> testing functions
 */

const removeNumFromArray = (inputArray, inputNumber) => {
    return inputArray.filter(num => num !== inputNumber);
}

const arr1_1 = [1, 2, 3, 4, 5];
const numToRemove = 2;

const numsArrayAfterRemoval = removeNumFromArray(arr1_1,numToRemove);

console.log(`\nRemoving '${numToRemove}', from '${arr1_1}' -> ${numsArrayAfterRemoval}\n`);



/**
 * define a test suite (feature): use describe-block to write test suite 
 *  'feature' -> keyword used to describe function of software
 * 
 * define a test case (scenario): use it-block to write test scenario
 */

// describe('Verify removeNumFromArray function', () => {

//     it('verify results of inputArray = [1, 2, 3, 4, 5] and numToRemove = 2', () => {
//         if (numsArrayAfterRemoval === [1,2,3,4,5]) {
//             console.log('Pass');
//         } else {
//             console.log('Fail');
//         }
//     });

// });

const num1 = 5, num2 = 20;
const res = num1 * num2;

// verify res is equal to 100

expect(res, 'Res is no returning expected result').to.equal(100);   

const num2GrNum1 = num2 > num1;

// verify num2GrNum1 is true

expect(num2GrNum1, 'value is not what was expected').to.equal(true);
expect(num2GrNum1, 'value is not what was expected').to.be.true;