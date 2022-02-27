const allPlayers = () => {
    const searchBox = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;

    fetch(url)
    .then(res => res.json())
    .then(data => showPlayerDetails(data.player))
}

const showPlayerDetails = (player) => {
    console.log(player);
}