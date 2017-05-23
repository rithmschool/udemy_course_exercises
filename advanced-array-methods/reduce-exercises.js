function extractKey(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[])
}

function filterLetters(arr,letter){
    var lowerCasedLetter = letter.toLowerCase()
    return arr.reduce(function(acc,next){
        if(next.toLowerCase() === lowerCasedLetter){
            acc++;
        }
        return acc;
    },0);
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr)
}

// even more practice!
// https://github.com/rithmschool/javascript_iterators