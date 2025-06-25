// verifica se o parênteses abre e fecha corretamente
// from leetCode

var isValid = function(s) {
    let array = s.split('');

    for (let i = 0; i < array.length; i++) {
        let char = array[i];

        if (char === '(') {
            for (let j = 1; j < array.length; j++) {
                if (array[j] === ')') {
                    return true
        }   
    }
        } 
        return false
    }
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
