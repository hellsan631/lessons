function bubbleSort(notSorted, related) {
  var sorted = [];
  var sortRelated = [];

  while (notSorted.length > 0) {
    step();
  }

  return [sorted, sortRelated];

  function step() {
    var index = 0;
    var max   = notSorted[index];

    for (var i = 1; i < notSorted.length; i++) {
      isMax(i);
    }

    if (max) {
      sorted.push(max);
      notSorted.splice(index, 1);

      if (related[index]) {
        sortRelated.push(related[index]);
        related.splice(index, 1);
      }
    }

    function isMax(pos) {
      if (notSorted[pos] > max) {
        max   = notSorted[pos];
        index = pos;
      }
    }
  }
}
