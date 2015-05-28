describe("#countWords", function() {
  // it("displays all words in the inputted string", function() {
  //   var string = 'this is a test'
  //   expect(countWords(string)).to.equal([[1, "this"], [1, "is"], [1, "a"], [1, "test"]])
  // });
  //
  //
  // it("displays all the words in the inputted string and adds multiples of the same string", function() {
  //   var string = "this this is a test"
  //   expect(countWords(string)).to.equal("this 2 is 1 a 1 test 1 ")
  // });

  it("displays all the words in the inputted string and add multiples of them same string, and displays them by wordcount", function() {
    var string = "this this is is a test test test of of of a"
    expect(countWords(string)).to.equal("test 3, of 3, this 2, is 2, a 1, ")
  })
});
