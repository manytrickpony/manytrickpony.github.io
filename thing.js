document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('fname');
const amount = params.get('amount');
const genres = params.getAll('genres');
const seasonal = params.get('seasonal');
const school = params.get('school');
const social = params.get('social')
const drinks = params.get('drinks')

let characters;
let image;
let sentence;

if (seasonal == "winter" && school == "mathematics") {
    characters = 'oreo milk tea';
    image = 'images/oreo milk tea.jpg';
    sentence = 'From a glance, you may seem cold, but you are truly sweet inside!';
} else if (seasonal == "summer" && school == "language arts") {
    characters = 'kiwi green tea';
    image = 'images/kiwi green tea.jpg';
    sentence = 'Your friends may think of you as the cool and collected one!'
} else if (seasonal == "spring" && school == "science") {
    characters = 'mango green tea';
    image = 'images/mango green tea.png';
    sentence = 'Always refreshing and a joy to be around!';
} else if (seasonal == "fall" && school == "social studies") {
    characters = 'creme brulee milk tea';
    image = 'images/creme brulee milk tea.png';
    sentence = 'I bet you like to get out of your comfort zone sometimes!';
} else {
    characters = 'brown sugar milk tea';
    image = 'images/brown sugar milk tea.jpg';
    sentence = 'You are a simple and iconic character!';
}

//writing html code
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1>You would make a great ${characters}!</h1>
                           <img src="${image}"></img>
                           <p>${sentence}</p>`;
}
