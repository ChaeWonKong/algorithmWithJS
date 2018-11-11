// Merge Sort With JavaScript

const mergeSort = arr => {
  const divide = (lo, hi) => {
    let mid = Math.floor((lo + hi) / 2);

    if (lo === hi) {
      return;
    } else {
      divide(lo, mid);
      divide(mid + 1, hi);
    }
    merge(lo, mid, hi);
  };

  const merge = (lo, mid, hi) => {
    let left = lo;
    let right = mid + 1;
    let temp = [];

    while (left <= mid || right <= hi) {
      if (left <= mid && (right > hi || arr[left] < arr[right])) {
        temp.push(arr[left]);
      } else {
        temp.push(arr[right]);
      }
      // slice splice
    }
  };
};
