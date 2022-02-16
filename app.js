const quotes = {
    "gibbyQuotes": [
        "My mom thinks I'm awesome",
        "And bring a mop for your blood",
        "What am I, a mushroom?"
    ],
    "kanyeQuotes": [
        "Sometimes I get emotional over fonts",
        "Have you ever thought you were in love with someone but then realized you were just staring at a mirror for 20 minutes?",
        "BILL COSBY INNOCENT !!!!!!!!!!"
    ],
    "tshirtQuotes": [
        "Be danced, or dance",
        "Who the fuck is jesus?",
        "I don't need life I'm high on drugs"
    ]
}


const getRandomQuote = _ => {
    // Gets the different keys from quotes in an array
    const keys = Object.keys(quotes);

    // Gets a random key from the keys array, using Math.floor and Math.random times the length of the array
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Gets a random index from the length of the value in the array of the random key
    const randomIndex = Math.floor(Math.random()* quotes[randomKey].length);

    // Returns a random quote from a random index in an array from a random key
    return quotes[randomKey][randomIndex];
}

const quote = getRandomQuote();