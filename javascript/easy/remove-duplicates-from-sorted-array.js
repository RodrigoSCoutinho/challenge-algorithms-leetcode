// 26. Remove Duplicates from Sorted Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

function removeDuplicates(nums) {
    if (nums.length === 0) {
      return 0; // Se o array estiver vazio, não há elementos únicos.
    }
  
    let k = 1; // Inicializa a variável k para rastrear o índice dos elementos únicos.
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[k] = nums[i]; // Move o elemento para a próxima posição única.
        k++;
      }
    }
  
    return k;
  }
 
//   let nums1 = [1, 1, 2];
//   let k1 = removeDuplicates(nums1);
//   console.log(k1); // Deve imprimir 2
//   console.log(nums1); // Deve imprimir [1, 2, ...] - Os elementos adicionais não importam.
  
//   let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//   let k2 = removeDuplicates(nums2);
//   console.log(k2); // Deve imprimir 5
//   console.log(nums2); // Deve imprimir [0, 1, 2, 3, 4, ...] - Os elementos adicionais não importam.
//   Esta função modificará o array nums de forma que os primeiros k elementos conterão os elementos únicos na mesma ordem em que aparecem no array original, e retornará o valor k como o número de elementos únicos no array.