// filter

function filterByValue(arr,key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue
    })[0];
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join('')
}

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}