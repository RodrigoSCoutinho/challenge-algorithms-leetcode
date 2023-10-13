// 704. Binary Search
// Easy
// Topics
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Primeira maneira de fazer com "while"

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        // Encontra o ponto médio do intervalo atual
        const mid = Math.floor((left + right) / 2);
        
        // Compara o valor do elemento médio com o alvo
        if (nums[mid] === target) {
            return mid; // O alvo foi encontrado, retorna o índice
        } else if (nums[mid] < target) {
            left = mid + 1; // O alvo está na metade direita do intervalo
        } else {
            right = mid - 1; // O alvo está na metade esquerda do intervalo
        }
    }
    return -1;
};

//Segunda maneira e rapida com "for"

var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i
        }
    }
    return -1;
};

// Terceira maneira de fazer 

var search = function(nums, target) {
    const index = nums.indexOf(target);
    return index !== -1 ? index : -1;
  };

//Quarta maneira APENAS em arrays ordenados


var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    do {
        const middle = Math.floor((right + left) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    } while (left <= right);

    return -1;
};
