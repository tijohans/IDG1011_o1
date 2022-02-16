// Declaring global variables
const gibbyBtn = document.getElementById('gibby');
const kanyeBtn = document.getElementById('kanye');
const tshirtBtn = document.getElementById('tshirt')
const quoteDisplay = document.getElementById('quote');
const buttons = document.querySelectorAll('.btn');

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
    "tshirtQuotes": [
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


// const getQuoteOrigin = quote => {
//     // origins is each key in quotes, using spread operator to get keys as an array
//     const origins = [...Object.keys(quotes)];

//     // Looking through each key for a match with the current quote
//     origins.forEach(origin => {
//         //return quotes[origin].includes(quote) ? true : false;
//         // console.log(quotes[origin])
//         // console.log(quotes[origin].includes(quote))
//         if(quotes[origin].includes(quote)) {
//             console.log(origin)
//             return origin;
//         }
//     })
// }

// TODO: Make this function work, for now it just returns undefined or localhost adddress
const getQuoteOrigin = quote => {
    let quoteOrigin = '';
    console.trace(origin)
    return origin;
}

// TODO: This does not have any functionality at the moment, need to make getQuoteOrigin() work first
const checkResult = (answer, quoteOrigin) => {
    // console.log(answer);
    // console.log(quoteOrigin)
    console.log(answer, quoteOrigin);
}


const initializeGame = _ => {
    // Getting a random quote and displaying it in the quote display
    const quote = getRandomQuote();
    quoteDisplay.innerHTML = quote;

    // Adding onClick event on all buttons
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log(`${btn.innerHTML.toLowerCase()} has been clicked`)
            checkResult(btn.innerHTML.toLowerCase(), getQuoteOrigin(quote));
        });
    })
}

initializeGame();