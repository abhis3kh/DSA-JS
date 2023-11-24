var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const ans = [];

  function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return false;
  }

  const uniqueNums1 = [...new Set(nums1)]; // Get unique elements from nums1

  for (const num of uniqueNums1) {
    if (binarySearch(num, nums2)) {
      ans.push(num);
    }
  }

  return ans;
};
