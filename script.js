function titleCase(str) {
    let words = str.toLowerCase().split(' ');

    let array = [];

    words.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let replacement = word.replace(word.charAt(0), firstLetter);
        array.push(replacement);
    });

    console.log(array.join(' '));
}

titleCase("bonjouR les gENS");

//exo 3 qstion 1

function facto(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * facto(n - 1);
    }
}

console.log(facto(0));

// E3Q2
function isPrime(nombre) {
    if (nombre === 2 || nombre === 3) {
        return true;
    }

    if (nombre === 1) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(11)); 
console.log(isPrime(4));

// exo 3 numero 3 
function fibonacci(n) {
    let sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence.slice(0, n); // Pour retourner exactement 'n' termes
  }
  

  console.log(fibonacci(5));  // ➞ [0, 1, 1, 2, 3]
  console.log(fibonacci(10)); // ➞ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  