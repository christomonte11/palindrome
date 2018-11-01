# christomonte11-paldindrome

This is a sample NPM module created according [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by christomonte11.

The module can be used as follows:

```
$ npm install --global christomonte11-palindrome
$ vim test.js
let Phrase = require("christomonte11-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```

