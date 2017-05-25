function displayStudentInfo(obj){
  var {first, last} = obj;
  return `Your full name is ${first} ${last}`
}

function printFullName({first,last}){
  return `Your full name is ${first} ${last}`
}

function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
  var start = 'The student';
  if(likesJavaScript && likesES2015){
    start += ' likes JavaScript and ES2015!'
  } else if(likesJavaScript){
    start += ' likes JavaScript!'
  } else if(likesES2015){
    start += ' likes ES2015!'
  } else {
    start += ' does not like much...'
  }
  return start;
}

function reverseArray(arr){
  for(var i = 0; i < arr.length/2; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr;
}

