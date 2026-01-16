
Generate a set of subsets of combination.


Inputs and returns
``` {js}
nCrSubsets(0.1, 0.1); // undefined
nCrSubsets(  4, 0.1); // undefined
nCrSubsets(0.1,   4); // undefined
nCrSubsets( -1,  -1); // undefined
nCrSubsets( -1,   0); // undefined
nCrSubsets( -1,   1); // undefined
nCrSubsets(  0,  -1); // undefined
nCrSubsets(  0,   0); // [[]]
nCrSubsets(  0,   1); // undefined
nCrSubsets(  5,  -1); // undefined
nCrSubsets(  5,   0); // [[]]
nCrSubsets(  5,   1); // [[0],[1],[2],[3],[4]]
nCrSubsets(  5,   2); // [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
nCrSubsets(  5,   3); // [[0,1,2],[0,1,3],[0,1,4],[0,2,3],[0,2,4],[0,3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
nCrSubsets(  5,   4); // [[0,1,2,3],[0,1,2,4],[0,1,3,4],[0,2,3,4],[1,2,3,4]]
nCrSubsets(  5,   5); // [[0,1,2,3,4]]
nCrSubsets(  5,   6); // undefined
```

# Install

```
npm i ncr-combinations
```

# Page

https://www.npmjs.com/package/ncr-combinations