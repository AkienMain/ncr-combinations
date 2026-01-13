// combinations: n choose r (nCr)
function nCrSubsets(n, r) {
  if (
    (Number.isInteger(n) && Number.isInteger(r)) &&
    (n >= 0 && r >= 0) &&
    n >= r
  ) {
    if (r != 0) {
      return nCrSubsetsRecursive(n, r, [], []);
    } else {
      return [[]];
    }
  } else {
    return undefined;
  }
}
module.exports = nCrSubsets;

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