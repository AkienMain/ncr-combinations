const nCrSubsets = require('./ncr-subsets.js');

runTest();

//////////////////////////////


function runTest() {
  testSingleCase(0.1, 0.1, undefined);
  testSingleCase(  4, 0.1, undefined);
  testSingleCase(0.1,   4, undefined);
  testSingleCase( -1,  -1, undefined);
  testSingleCase( -1,   0, undefined);
  testSingleCase( -1,   1, undefined);
  testSingleCase(  0,  -1, undefined);
  testSingleCase(  0,   0, [[]]);
  testSingleCase(  0,   1, undefined);
  testSingleCase(  5,  -1, undefined);
  testSingleCase(  5,   0, [[]]);
  testSingleCase(  5,   1, [[0],[1],[2],[3],[4]]);
  testSingleCase(  5,   2, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
  testSingleCase(  5,   3, [[0,1,2],[0,1,3],[0,1,4],[0,2,3],[0,2,4],[0,3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4]]);
  testSingleCase(  5,   4, [[0,1,2,3],[0,1,2,4],[0,1,3,4],[0,2,3,4],[1,2,3,4]]);
  testSingleCase(  5,   5, [[0,1,2,3,4]]);
  testSingleCase(  5,   6, undefined);
}

function testSingleCase(n, r, expected) {
  let string = '';
  if (expected == undefined) {
    string += expected;
  } else {
    string += getString2dArray(expected);
  }
  test('n:' + n + ', r:' + r + ' ' + string, () => {expect(nCrSubsets(n, r)).toEqual(expected);});
}

function getString2dArray(res) {
  let strRes = 'length:' + res.length + '; [';
  for (let i=0; i<res.length; i++) {
    strRes += '[';
    for (let j=0; j<res[i].length; j++) {
      strRes += res[i][j];
      if (j < res[i].length-1) {
        strRes += ',';
      }
    }
    strRes += ']';
  }
  strRes += ']';
  return strRes;
}