describe("#displayStudentInfo", function(){
  it("returns a string with the first value and last value of an object", function(){
    var obj = {first: 'Elie', last:'Schoppik'}
    expect(displayStudentInfo(obj)).toEqual('Your full name is Elie Schoppik')
  });
});

describe("#printFullName", function(){
  it("returns a string with the first value and last value of an object with a destructured parameter", function(){
    var obj = {first: 'Elie', last:'Schoppik'}
    expect(printFullName(obj)).toEqual('Your full name is Elie Schoppik')
  });
});

describe("#createStudent", function(){
  it("returns a string with the first value and last value of an object with a destructured parameter", function(){
    expect(createStudent()).toEqual('The student likes JavaScript and ES2015')
    expect(createStudent({likesES2015:false})).toEqual('The student likes JavaScript!')
    expect(createStudent({likesJavaScript:false})).toEqual('The student likes ES2015!')
    expect(createStudent({likesJavaScript:false,likesES2015:false})).toEqual('The student does not like much...')
  });
});

describe("#reverseArray", function(){
  it("reverses values in an array", function(){
    var arr = [1,2,3,4,5]
    var arr2 = [1,2]
    var arr3 = []
    var arr4 = [1,2,3,4,5,6,7,8,9,10]
    expect(reverseArray(arr)).toEqual([5,4,3,2,1])
    expect(reverseArray(arr2)).toEqual([2,1])
    expect(reverseArray(arr3)).toEqual([])
    expect(reverseArray(arr4)).toEqual([10,9,8,7,6,5,4,3,2,1])
  });
});