// filter

function filterLetters(arr, letter){
    var lowerCasedLetter = letter.toLowerCase();
    return arr.filter(function(val){
        return val.toLowerCase() === lowerCasedLetter;
    }).length;
}

function filterKey(arr,key){
    return arr.filter(function(val){
        return val[key];
    });
}

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}

function findStudent(arr, firstName){
    return arr.filter(function(val){
        return val.firstName === firstName;
    })[0];
}

function removeVowels(str){
    var vowels = ["a","e","i","o","u"]
    return str.split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    });
}