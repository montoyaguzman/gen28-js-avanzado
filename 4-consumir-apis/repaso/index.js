const getPokemons = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    // const resp = fetch(URL)
    // console.log(resp)
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // do logic to render html
            console.log('data: ', data, info);
        }).catch(error =>
            console.log(error)    
        ).finally(() => console.log('termine'))
}

getPokemons();