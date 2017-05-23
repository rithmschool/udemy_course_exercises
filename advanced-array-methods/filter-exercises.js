// filter

function filterLetters(arr, letter){
    var lowerCasedLetter = letter.toLowerCase();
    return arr.filter(function(val){
        return val.toLowerCase() === lowerCasedLetter;
    // since this value returns an array, we can access the length right away!
    }).length;
}

function filterKey(arr,key){
    return arr.filter(function(val){
        return val[key];
    });
}

function doubleOddNumbers(arr){

    var filtered = arr.filter(function(val){
        return val % 2 !== 0;
    })
    var mapped = map(function(val){
        return val *2;
    })

    return mapped;
}


var students = [{name: "Sam"}, {name: "Greg"}, {name: "Ray"}]

function findStudent(arr, name){
    return arr.filter(function(val){
        return val.name === name;
    })[0];
}

function removeVowels(str){
    var vowels = ["a","e","i","o","u"]
    return str.split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    });
}