# IDG1011 Obligatory Assignment 1



## Background

This game is created as part of the course IDG1011 Front End development for the Obligatory Assignment 1. The website is a game were you get shown a sentence, and then you have to guess wether the sentence shown is either a Gibby quote, a Kanye tweet, or a poorly translated t-shirt.

## Description 

This website consists of several files, the file structure is as follows: 

* index.html
* app.js
* assets
    * styles 
        * index.css
        * index.scss
        * _colors.scss
        * index.css.map
    * svg
        * blob-scene-haikei.svg
        * blob-scene-haikei-2.svg
* IDG1011_flowchart.pdf

### app.js

The app.js file contains all the functionality of the website. This is where the flowchart.pdf is put into practice. One of the first things in the script file is an object with all the quotes. The key in the object is the origin of the quote, and each key contains an array of quotes. This object is used to get the random quote, and to check the origin of the quote. 