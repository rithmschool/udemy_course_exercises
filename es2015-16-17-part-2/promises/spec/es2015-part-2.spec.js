describe("#getMostFollowers", function(){
  it("returns a string with the most followers", function(done){
    getMostFollowers('elie','tim','defunkt').then(function(result){
      expect(result).toEqual('Chris Wanstrath has the most followers with 16213')
      done();
    })
  });
});

describe("#starWarsString", function(){
  it("returns a string with the most followers", function(done){
    starWarsString(1).then(function(result){
      expect(result).toEqual('Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth')
      done();
    })
    starWarsString(5).then(function(result){
      expect(result).toEqual('Leia Organa is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth')
      done();
    })
  });
});
