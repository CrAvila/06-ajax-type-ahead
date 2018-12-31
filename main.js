const endpoint = 'https://gist.githubusercontent.com/CrAvila/fde2c03d9e7cd72520614cb674f25ab6/raw/186f3887fbd74a1b1e38e7c4edd1f85bb33264fd/playerdata.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
let players = [];

fetch(endpoint)
                .then(blob => blob.json())
                .then(data => players = data);

function findMatches(word, players){
    const regex = RegExp(word, 'gi')
    return players.filter(player => {
        return player.name.match(regex) || player.country.match(regex);
    });
};

function displayMatches() {
    console.log(this.value);
    const matchArray = findMatches(this.value, players);
    console.log(matchArray);
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
