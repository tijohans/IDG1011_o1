# IDG1011 Obligatory Assignment 1

https://github.com/tijohans/IDG1011_o1

## Background

This game is created as part of the course IDG1011 Front End development for the Obligatory Assignment 1. The website is a game were you get shown a sentence, and then you have to guess wether the sentence shown is either a Gibby quote, a Kanye tweet, or a poorly translated t-shirt.

## Description 


### File structure

This website consists of several files, the file structure is as follows: 

```
IDG1011_o1_tijohans
│   app.js
│   IDG1011_flowchart.pdf
│   index.html
│   README.md
│
└───assets
    │
    └───styles
    │   │   _colors.scss
    │   │   index.css
    │   │   index.css.map
    │   │   index.scss
    │
    └───svg
        │   blob-scene-haikei.svg
        │   blob-scene-haikei-2.svg
```

### app.js

The app.js file contains all the functionality of the website. This is where the flowchart.pdf is put into practice. One of the first things in the script file is an object with all the quotes. The key in the object is the origin of the quote, and each key contains an array of quotes. This object is used to get the random quote, and to check the origin of the quote. 

#### getRandomQuote()
The getRandomQuote function first collects all the keys from quotes, then it generates a random key, and a random index. It then returns the object with a random key selected and a random index selected like this: `object[randomKey][randomIndex]`

#### getQuoteOrigin()
The getQuoteOrign function figures out which origin, or which key the given quote belongs to. It takes a parameter of *quote* and then loops over all the keys in the array, and checks if the key contains *quote* using `array.prototype.includes()`.

#### checkResult()
The checkResult function takes in two parameters, the *guess*, which is the button the user has clicked, and the *quoteOrigin* which is the returned value of `getQuoteOrigin()`. The main functionality of this function if to check if the *guess* matches the *quoteOrigin*, it then colors the button pressed accordingly. If the button pressed was not the right answer, the button pressed will turn red. If the button pressed was the right one, the button pressed will be turned green, and the other will be turned red. When the right button is pressed, the restart button will also pop up. 

How the buttons are colored is by using `classlist.add()` and then appending the class with the according style to the button. The same for the restart screen, there it changes the display from *none* to *flex*.

#### initializeGame()
`initializeGame()` is the function that starts the whole script. It first displays a random quote in the html using `getRandomQuote()`. It then adds an eventListener to all the appropriate buttons, and when the button is clicked it calls `chechResult()` with the appropriate parameters.






### Sources

https://app.haikei.app/

https://coolors.co/generate/

I first used coolors to generate a color pallette for my site, and then I used haikei to generate the svg's used on the background with the colora pallette I created.