function Entry (title, body) {
this.title = title,
this.body = body
}

Entry.prototype.wordCount = function() {
  return this.title.split(" ").length + this.body.split(" ").length
}

Entry.prototype.vowelCount = function() {
  const vowels = ["a", "e", "i", "o", "u"];
  var outputVowels = [];
  let counter = 0;


  for (let letter of this.body {
    if (vowels.includes(letter)) {
      counter ++
      return === true,
      outputVowels.push(vowels);
      return outputVowels.length;
    }
    if (this.body[i].include(vowels)) {

    }
  }
}

Entry.prototype.consonants = function() {
  var consonants = [];

}
Entry.prototype.getTeaser = function() {
  var firstSentence = this.body.split("./?/!",1);
  return firstSentence;
}
