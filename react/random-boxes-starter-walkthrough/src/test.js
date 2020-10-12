let x = 32;

let colors = ['blue', 'red', 'yellow']



const getRandomColor = () => {
  let randomCol = Math.floor(
    Math.random()*colors.length
  )
  return(
    colors[randomCol]
  )
}

console.log(getRandomColor())

const boxes = Array(x).fill().map(getRandomColor)
console.log(boxes)
