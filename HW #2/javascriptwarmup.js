function change(cents) {
    //if cents < 0: raise ValueError("Not an int > 0.")
    //if cents isBoolean: raise ValueError("Input unrounded number of cents (float found)")
    var usCoinDenominations = [25, 10, 5, 1];
    var results = [];
    var remaining = cents;
    for (i = 0; i < usCoinDenominations.length; i++) {
        s = usCoinDenominations[i];
        partialSolution = [Math.floor(remaining / s), remaining % s];  //ask toal
        results.push(partialSolution[0]);
        remaining = partialSolution[1];
    }
    return results;
}

function stripVowels(s) {
    return s.replace(/[aeiou]/ig, '');
}

function scramble(s) {
    return -1;
}

function powersOfTwo(max) {
    return -1;
}

function powers(base, max) {
    return -1;
}

function interleave(array1, array2) {
    var result = [];
    var i = 0;
    var j = 0;
    while (result.length < array1.length + array2.length) {
        if (i < array1.length) {
            result.push(array1[i]);
        }
        if (j < array2.length) {
            result.push(array2[j]);
        }
        i++, j++;
    }
    return '[' + result + ']';
}

function stutter(arrayA) {
    return interleave(arrayA, arrayA);
} 

function wordCount(s) {
    return -1;
}
function scramble(s) { //still testing to see if true, unbiased scramble.
    result = s.split("");
    for(var i = 0; i < s.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var scrambler = result[i];
        result[i] = result[j];
        result[j] = scrambler;
    }
    return result.join("");
}