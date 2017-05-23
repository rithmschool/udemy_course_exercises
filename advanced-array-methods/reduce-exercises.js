function extractKey(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

function filterLetters(arr,letter){
    var lowerCasedLetter = letter.toLowerCase();
    return arr.reduce(function(acc,next){
        if(next.toLowerCase() === lowerCasedLetter){
            acc++;
        }
        return acc;
    },0);
}

function vowelCount(arr){
    var vowels = "aeiou";
    return arr.split('').reduce(function(acc,next){
        if(vowels.indexOf(next.toLowerCase() !== -1)){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
}

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}