describe("#MessageBoard", function(){
  var m = new MessageBoard
  it("has a messages property which is initialized to an empty map", function(){
    expect(m.messages.constructor).toEqual(Map);
  });
  it("has an id property which is initialized to at 1", function(){
    expect(m.hasOwnProperty('id')).toEqual(true);
    expect(m.id).toEqual(1);
  });
});

describe("#addMessage", function(){
  var m = new MessageBoard
  it("adds a message successfully", function(){
    m.addMessage('hello');
    expect(m.messages.size).toEqual(1)
  });
  it("returns the messageBoard object after adding so that the method can be chained", function(){
    expect(m.addMessage('awesome!')).toEqual(m)
    expect(m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')).toEqual(m)
  });
});

describe("#findMessageById", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("finds a message by its value", function(){
    expect(m.findMessageById(1)).toEqual('hello!')
    expect(m.findMessageById(2)).toEqual('hi!')
    expect(m.findMessageById(3)).toEqual('whats up?')
    expect(m.findMessageById(4)).toEqual(undefined)
    expect(m.findMessageById()).toEqual(undefined)
  });
});

describe("#findMessageByValue", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("finds a message by its value", function(){
    expect(m.findMessageByValue('hello!')).toEqual('hello!')
    expect(m.findMessageByValue('hi!')).toEqual('hi!')
    expect(m.findMessageByValue('whats up?')).toEqual('whats up?')
    expect(m.findMessageByValue('nothing here')).toEqual(undefined)
    expect(m.findMessageByValue()).toEqual(undefined)
  });
});

describe("#removeMessage", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("removes a message by id", function(){
    m.removeMessage(1)
    m.removeMessage(2)
    expect(m.messages.size).toEqual(1)
  });
  it("returns the message board object so the method can be chained", function(){
    expect(m.removeMessage()).toEqual(m)
  });
});

describe("#numberOfMessages", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("returns the numer of messages in the message board", function(){
    expect(m.numberOfMessages()).toEqual(3)
  });
});

describe("#messagesToArray", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("converts all the values in the messages map to an array", function(){
    expect(m.messagesToArray()).toEqual(['hello!', 'hi!', 'whats up?'])
  });
});

describe("#uniqueValues", function(){
  it("returns the number of unique values in an array", function(){
    expect(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])).toEqual(6)
  });
});

describe("#hasDuplicates", function(){
  it("returns true if there are duplicate values in the array", function(){
    expect(hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])).toEqual(true)
  });
  it("returns false if there are no duplicates", function(){
    expect(hasDuplicates([1,2,3,4,5,6])).toEqual(false)
    expect(hasDuplicates([])).toEqual(false)
  });
});

describe("#countPairs", function(){
  it("returns the number of pairs that sum to the second_parameter", function(){
    expect(countPairs([8,2,6,4,10,0],10)).toBe(3);
    expect(countPairs([8,2],10)).toBe(1);
    expect(countPairs([1,2],10)).toBe(0);
    expect(countPairs([1,2,3,4,5],10)).toBe(0);
    expect(countPairs([],10)).toBe(0);
  });
  it("handles negative numbers", function(){
    expect(countPairs([5,4,-10,6,-20,16],-4)).toBe(2);
    expect(countPairs([0,-4],-4)).toBe(1);
  });
});