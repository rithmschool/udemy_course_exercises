var student = {
  favoriteCourse: "The Web Developer Bootcamp",
  favoriteInstructor: "Colt",
  displayInfo(){
    return `Your favorite course is ${this.favoriteCours} and your favorite instructor is ${this.favoriteInstructor}`
  }
}

function createObjAndKey(key, value){
  return {
    [key]: value
  }
}