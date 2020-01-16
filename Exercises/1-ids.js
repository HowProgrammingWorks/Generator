'use strict';

const allCombinations = function* (arrs) {
  const ixs = new Array(arrs.length).fill(0);
  const combination = arrs.map(arr => arr[0]);

  const incIx = i => {
    ixs[i]++;
    combination[i] = arrs[i][ixs[i]];
  };

  const resetIx = i => {
    ixs[i] = 0;
    combination[i] = arrs[i][ixs[i]];
  };

  while (ixs[0] < arrs[0].length) {
    yield combination.join('');

    let i = ixs.length - 1;
    incIx(i);

    while (i > 0 && ixs[i] === arrs[i].length) {
      incIx(i - 1);
      resetIx(i);
      i--;
    }
  }
};

const greedySizes = (totalSize, sizesInCache) => {
  const sizes = [];
  let i = sizesInCache.length - 1;
  while (totalSize > 0) {
    while (sizesInCache[i] > totalSize) {
      i--;
    }

    while (totalSize >= sizesInCache[i]) {
      totalSize -= sizesInCache[i];
      sizes.push(sizesInCache[i]);
    }
  }
  return sizes;
};

const mapGen = function* (g, f) {
  for (const el of g) {
    yield f(el);
  }
};

const prependOne = s => '1' + s;

const ids = function* (maxSizeInCache = 20, cache = {}) {
  if (!(1 in cache)) {
    cache[1] = ['00', '10'];
  }

  let sizesInCache = Object.keys(cache).sort();
  for (let size = 1; ; size++) {
    if (size in cache) {
      yield* mapGen(cache[size], prependOne);
      continue;
    }

    const combinationGroups = greedySizes(size, sizesInCache)
      .map(size => cache[size]);
    const combinations = allCombinations(combinationGroups);

    if (size > maxSizeInCache) {
      yield* mapGen(combinations, prependOne);
      continue;
    }

    cache[size] = [];
    for (const combination of combinations) {
      cache[size].push(combination);
      yield prependOne(combination);
    }
    sizesInCache = Object.keys(cache).sort();
  }
};

module.exports = { ids };
