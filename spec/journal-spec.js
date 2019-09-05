import { Entry } from './../src/journal.js';

describe('Entry', function() {
    let testEntry = new Entry("title", "body entry");
    it('should test whether a Entry has a title', function() {
      expect(testEntry.title).toEqual("title");
    });
    it('should test whether an Entry has a body', function() {
      expect(testEntry.body).not.toEqual("");
    });
    it('wordCount function should return 3', function() {
      expect(testEntry.wordCount()).toEqual(3);
    });
    it('count function should return 4,10', function() {
      expect(testEntry.count()).toEqual([4,10]);
    });
});
