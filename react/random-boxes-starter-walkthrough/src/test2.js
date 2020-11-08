
class App {
  constructor () {
    this.show = () => 'heyder'
    this.peep = () => 'peep'
  }
  show2() {
    console.log('heyheyder')
  }
}

let dog = new App()
// console.log(dog.peep())
console.log(dog.show())
console.log(dog.show2())