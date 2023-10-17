// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Criamos uma "caixa" vazia chamada "numToIndex" para armazenar informações.
    const numToIndex = new Map();
  
    // Iniciamos um loop que vai passar por todos os números no array "nums".
    for (let i = 0; i < nums.length; i++) {
      // Para cada número do array, calculamos qual outro número é necessário
      // para que a soma dos dois seja igual ao "target" que queremos.
      const complement = target - nums[i];
  
      // Verificamos se já encontramos esse "complemento" em algum número anterior.
      if (numToIndex.has(complement)) {
        // Se encontrarmos, isso significa que encontramos dois números que somam
        // ao "target". Então, retornamos um array com as posições desses números.
        return [i, numToIndex.get(complement)];
      }
  
      // Se não encontramos o "complemento" ainda, armazenamos o número atual e sua posição
      // na "caixa" chamada "numToIndex". Isso nos ajuda a procurar o "complemento" posteriormente.
      numToIndex.set(nums[i], i);
    }
  };

//RUNTIME 48MS


//*OTHER SOLUTION


var twoSum = function(nums, target) {
     const map = new Map();
  
     for(let i = 1; i < nums.length; i++) {
        if(map.has(nums[i])) {
          return [map.get(nums[i]), i] 
        }
        else{
          const b = target - nums[i];
          return map.set(b, i)
        }
     }
  }
