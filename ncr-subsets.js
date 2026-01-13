const isInteger = require("number.isinteger");

// combinations: n choose r (nCr)
function nCrSubsets(n, r) {
  if (
    (isInteger(n) && isInteger(r)) &&
    (n >= 0 && r >= 0) &&
    n >= r
  ) {
    return nCrSubsetsRecursive(n, r, [], []);
  } else {
    return undefined;
  }
}

function nCrSubsetsRecursive(n, r, subset, setOfSubsets) {
  let initial = subset.length > 0 ? subset[subset.length-1]+1 : 0;
  for (let i=initial; i<n; i++) {
    let s = [...subset];
    s.push(i);
    if (s.length == r) {
      setOfSubsets.push(s);
    } else {
      nCrSubsetsRecursive(n, r, s, setOfSubsets);
    }
  }
  return setOfSubsets;
}

nCrSubsets(4,2);