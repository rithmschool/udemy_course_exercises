function padCenter(str){
  return str.padStart(5,'_').concat(str.padEnd(5,'_'))
}

function generateId(str){
  return padStart(10, 'x')
}

function createByte(sequence){
  return sequence.padStart(8,'0')
}