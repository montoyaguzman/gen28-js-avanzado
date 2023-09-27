const getPokemons = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // do logic to render html
            console.log('data: ', data);
        })
}

getPokemons();