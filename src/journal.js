export function Entry (title, body) {
this.title = title,
this.body = body
}

Entry.prototype.wordCount = function() {
  return this.title.split(" ").length + this.body.split(" ").length;
}

Entry.prototype.count = function() {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  let outputVowels = [];
  let outputConsonants = [];

  let wholeArray = this.title.split('').concat(this.body.split(''));

  for (let i = 0; i < wholeArray.length; i++) {
    if (vowels.includes(wholeArray[i]) === true) {
      outputVowels.push(wholeArray[i]);
    } else if (consonants.includes(wholeArray[i]) === true) {
      outputConsonants.push(wholeArray[i]);
    }
  }
        return [outputVowels.length, outputConsonants.length];
}

// Entry.prototype.getTeaser = function() {
//   var firstSentence = this.body.split("./?/!",1);
//   return firstSentence;
// }
