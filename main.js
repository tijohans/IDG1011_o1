const gibbyBtn = document.getElementById('gibby');
const kanyeBtn = document.getElementById('kanye');
const tshirtBtn = document.getElementById('tshirt')
const quoteDisplay = document.getElementById('quote');
const buttons = document.querySelectorAll('.btn');

const gibbyQuotes = ["My mom thinks I'm awesome",
"And bring a mop for your blood",
"What am I, a mushroom?",
"Do you not see me eating chicken wings?",
"You can't buy my head!",
"No corn juice for you",
"I love that new head smell",
"My cat loves watching me bathe",
"I'm just a kid, I'm not a wizard!",
"War is whack",
"I had my head up something for almost 2 hours"]

const kanyeQuotes = ["Sometimes I get emotional over fonts",
"Have you ever thought you were in love with someone but then realized you were just staring at a mirror for 20 minutes?",
"BILL COSBY INNOCENT !!!!!!!!!!",
"When I sneeze, I bless myself",
"I made it so we could wear tight jeans",
"Now there is only one important color... Green",
"Oh great now I gotta be responsible for this water bottle",
"Man.. ninjas are kind of cool... I just don't know any personally",
"I ordered the salmon medium insted of medium well. I didn't want to ruin the magic",
"I just threw some kazoo on this bitch",
"Man.. whatever happened to my antique fish tank?",]

const tshirtQuotes = [ "Be danced, or dance",
"Who the fuck is jesus?",
"I don't need life I'm high on drugs",
"Try my delicious salt beef",
"Color me gangsta",
"The pig is full of many many cats",
"Think less, stupid more",
"I feel happiness when I eat a potato",
"Who can stop me? Catch me if you can! No way. Beep, beep!",
"Bad beer is the enemy",
"My buttocks is dead good"]

const getRandomQuote = origin => {

    let randomIndex;

    switch(origin) {
        case 'gibbyQuotes': 
            randomIndex = Math.floor(Math.random() * gibbyQuotes.length);
            gibbyQuotes[randomIndex];
            return
    }
}

const getRandomOrigin = _ => {
    const origins = ['gibbyQuotes', 'kanyeQuotes', 'tshirtQuotes'];
    return origins[Math.floor(Math.random() * origins.length)];
}

console.log(getRandomQuote(getRandomOrigin()));