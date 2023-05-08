var merge = function (nums1, m, nums2, n) {
  let i = 0, j = 0;
  while (i < m) {
    if (nums2[j] < nums1[i]) {
      nums1.splice(i, 0, nums2[j]);
      m++;
      nums1.pop()
      j++;
    }
    i++;
  }
  while (j < n) {
    nums1[i] = nums2[j];
    i++;
    j++;
  }
};

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }
  nums1.sort((a, b) => a - b);
}
