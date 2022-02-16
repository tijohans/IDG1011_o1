
const getQuotes = _ => {
    // Hosting on live server so it is possible to fetch the .json file
    return fetch('./assets/quotes.json').then(response => {
        return response.json();
    }).then(quotes => {
        return quotes;
    });
}



// function fetchDemo() {
//     return fetch(countriesUrl).then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         return json;
//     });
// }

// fetchDemo().then(function(result) {
//     console.log(result);
// });