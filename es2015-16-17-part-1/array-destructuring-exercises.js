function reverseArray(arr){
  for(var i = 0; i < arr.length/2; i++){
    [arr[i],arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

