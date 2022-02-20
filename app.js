// Declaring global variables
const gibbyBtn = document.getElementById('gibby');
const kanyeBtn = document.getElementById('kanye');
const tshirtBtn = document.getElementById('tshirt')
const quoteDisplay = document.getElementById('quote');
const buttons = document.querySelectorAll('.btn');
const restartScreen = document.querySelector('.restart')
const restartBtn = document.querySelector('.restartBtn');

// Object containing all quotes. Key is place of origin, containing an array of all quotes from said origin
const quotes = {
    "gibbyQuotes": [
        "My mom thinks I'm awesome",
        "And bring a mop for your blood",
        "What am I, a mushroom?",
        "Do you not see me eating chicken wings?",
        "You can't buy my head!",
        "No corn juice for you",
        "I love that new head smell",
        "My cat loves watching me bathe",
        "I'm just a kid, I'm not a wizard!",
        "War is whack",
        "I had my head up something for almost 2 hours",
    ],
    "kanyeQuotes": [
        "Sometimes I get emotional over fonts",
        "Have you ever thought you were in love with someone but then realized you were just staring at a mirror for 20 minutes?",
        "BILL COSBY INNOCENT !!!!!!!!!!",
        "When I sneeze, I bless myself",
        "I made it so we could wear tight jeans",
        "Now there is only one important color... Green",
        "Oh great now I gotta be responsible for this water bottle",
        "Man.. ninjas are kind of cool... I just don't know any personally",
        "I ordered the salmon medium insted of medium well. I didn't want to ruin the magic",
        "I just threw some kazoo on this bitch",
        "Man.. whatever happened to my antique fish tank?"
    ],
    "t-shirtQuotes": [
        "Be danced, or dance",
        "Who the fuck is jesus?",
        "I don't need life I'm high on drugs",
        "Try my delicious salt beef",
        "Color me gangsta",
        "The pig is full of many many cats",
        "Think less, stupid more",
        "I feel happiness when I eat a potato",
        "Who can stop me? Catch me if you can! No way. Beep, beep!",
        "Bad beer is the enemy",
        "My buttocks is dead good"
    ]
}


const getRandomQuote = _ => {
    // Gets the different keys from quotes in an array
    const keys = Object.keys(quotes);

    // Gets a random key from the keys array, using Math.floor and Math.random times the length of the array
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Gets a random index from the length of the value in the array of the random key
    const randomIndex = Math.floor(Math.random() * quotes[randomKey].length);

    // Returns a random quote from a random index in an array from a random key
    return quotes[randomKey][randomIndex];
}

// Takes the current quote in as a parameter, and then uses .includes to check which key the quote belongs to
const getQuoteOrigin = quote => {
    // Creates the const origins, with all the keys in the object, spread out in an array.
    const origins = [...Object.keys(quotes)];

    let quoteOrigin = '';

    // Checking each origins array, and uses .includes to check each array for a match.
    origins.forEach(origin => {
        if (quotes[origin].includes(quote)) {
            // Sets the var quoteOrigin declared above to the origin the quote comes from.
            quoteOrigin = origin;
        }
    })

    // Returning the origin of the quote
    return quoteOrigin;
}

// Function for checking win conditon. Takes in the guess the player presesed, and the origin of the quote.
const checkResult = (guess, quoteOrigin) => {
    // Handling cases in which the parameters are not of wanted type.
    if (typeof guess !== 'string' || typeof quoteOrigin !== 'string') {
        return 'Something wrong happened, try again';
    }

    // Checks the string quoteOrigin if it includes the guess.
    // The switch statement inside check the guess and then styles the elements appropriately, also makes the restart button show
    if (quoteOrigin.includes(guess)) {
        const result = quoteOrigin.includes(guess);
        switch (guess) {
            case 'gibby':
                gibbyBtn.classList.add('right-answer');
                kanyeBtn.classList.add('wrong-answer');
                tshirtBtn.classList.add('wrong-answer');
                restartScreen.classList.add('show');
                return result;
            case 'kanye':
                kanyeBtn.classList.add('right-answer');
                gibbyBtn.classList.add('wrong-answer');
                tshirtBtn.classList.add('wrong-answer');
                restartScreen.classList.add('show');
                return result;
            case 't-shirt':
                tshirtBtn.classList.add('right-answer');
                gibbyBtn.classList.add('wrong-answer');
                kanyeBtn.classList.add('wrong-answer');
                restartScreen.classList.add('show');
                return result;
        }
    } else {
        switch (guess) {
            case 'gibby':
                gibbyBtn.classList.add('wrong-answer');
                return
            case 'kanye':
                kanyeBtn.classList.add('wrong-answer');
                return
            case 't-shirt':
                tshirtBtn.classList.add('wrong-answer');
                return
        }
    }
}

restartBtn.addEventListener('click', () => {
    location.reload();
})


// Initializes the game, only function which is called when site loads in.
const initializeGame = _ => {
    // Getting a random quote and displaying it in the quote display
    const quote = getRandomQuote();
    quoteDisplay.innerHTML = quote;

    // Adding onClick event on all buttons
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(`${btn.innerHTML.toLowerCase()} has been clicked`)
            checkResult(btn.innerHTML.toLowerCase(), getQuoteOrigin(quote));
        });
    })
}



initializeGame();