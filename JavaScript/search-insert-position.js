// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// Complexidade: O(n)

const procurarPosicao = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        // se o target for igual ao elemento na posição i:
        if (nums[i] === target) {
            return i;
        }

        // procurar ate chegar em um i maior que o target, pois significa q o target deve ocupar a posição anterior ao i
        if (nums[i] > target) {
            return i
        }
    } // fim do loop for
    // se nenhum dos casos for encontrado, o elemento deve estar na última posição do array
    return nums.length
}

// caso de teste 1:
nums = [1,3,5,6]
target = 7

console.log(procurarPosicao(nums, target));

/* teste 2:
* [1,3,5,6]
* target = 2
*/