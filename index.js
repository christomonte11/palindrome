module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join('');
};

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    };

    // Returns the letters in the content ("Hello, world!" -> "Helloworld").
    this.letters = function letters() {
        let theLetters = [];

        for(let i = 0; i < this.content.length; i++) {
            if (this.content.charAt(i).match(/[a-zA-Z]/)) {
                theLetters.push(this.content.charAt(i));
            }
        }

        return theLetters.join("");
    };

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        let processedContent = this.processedContent();
        return processedContent === processedContent.reverse();
    };
}

// $ node
// > .load palindrome.js
// > let napoleonsLament = new Phrase("Able was I ere I saw Elba");
// undefined
// > napoleonsLament.palindrome();
// true

