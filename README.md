# Bossggle-Word-Game

## Specifications

These are the basic specs for Bossggle, broken into 5 stages. If you complete these specs, try taking on some of the [Stretch specs](#stretch).

#### Stage 1
- [x ] Repo is created on GitHub.
- [x ] The site looks the same as in the [mockups](#mockups) (except without the same words/letters/points - those are just placeholders).
- [x ] Your repo includes the files: `index.html`, `main.css`, and `bossggle.js`.

#### Stage 2
- [x ] Clicking on a letter changes its color to orange.
- [x ] Clicking on a letter adds it to the word.
- [x ] The word is updated with each new letter.

#### Stage 3
- [x ] Pressing the "Submit" button submits the word for points.
- [x ] Pressing the "Clear" button clears the word and all selected letters.
- [ ] Pressing the "Reset" button clears the word, all selected letters, and generates a new set of letters on the board.

#### Stage 4
- [x ] Submitted words are added to the left in reverse chronological order (last word submitted is at the top).
- [x ] Submitted words are awarded 9 points per letter.
- [x ] Any word / combination of characters is allowed. There is no validation.
- [x ] Players start with a score of 0.
- [x ] The score is updated after each word is submitted.

#### Stage 5
- [x ] There is a link to the source code (your GitHub repo) in the bottom left.
- [x ] Repo is published as a [GitHub pages][gh-pages] site.
- [x ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].


### Stretch

If you complete all of the specs listed above (the checkboxes), there's no reason to stop there! Try building more advanced features with these stretch specs.

Game uses real Boggle rules:
- [ ] Letters must all be connected (second letter must be a "neighbor" of the first letter, third letter must be a "neighbor" of the second, and so on).
- [x ] Words must be at least 3 letters long.
- [x ] Game is timed: players have 1 minute to make as many words as possible.
- [ ] Words must be real English words; non-English words don't earn points. See [Validating Words](#validating-words) section for more information.

#### Validating Words

Building a game that can answer the question "what is a valid word?" is a harder problem than it might seem.

First of all, who decides what "valid" means? Is it the Oxford English Dictionary? The Urban Dictionary? The list of words in your `/usr/share/dict/words` file?

Secondly, no matter how you cut it, English has _a lot_ of words. That could present some architecture problems for us: how should we store and access a list of 200,000+ words?

To keep this problem more manageable, let's choose a subset of English words: just 1000 basic words from [this Wikipedia list][wiki-basic-words].

In fact, we even created a [small script][gist-basic-words] that you can use in your site to help with this validation. To use it, just add this `<script>` tag in your HTML `<head>`:

```html
<script src="https://cdn.rawgit.com/tannerwelsh/dcd33611c1bc615fd5a1c8cadc05d1b2/raw/470cde9d72927fef717f354b3ba3718a0aaabb99/basicWords.js" charset="utf-8"></script>
```

Then, you'll have access to a `isBasicWord()` function in your JavaScript that you can use to check if a word is included in that list of 1000. Here's how you use it:

```javascript
isBasicWord('candle') // => true
isBasicWord('xenophon') // => false
```

This isn't a _great_ final solution, but it's better than not validating at all :).

