// 1. Fundamentos de programacion
// 2. Fundamentos JS
//     funciones, metodos y parametros, return

// 3. POO 
//     definicion de clases (sugar syntaxis)
//     creacion de objetos
//     llamar a metodos del objeto

// 4. ES6
    // literal templates 
    console.log(`hola ${name}`);
    // import/export ( {}, default, * as )
    // Short hand names
        const name = 'montoya';
        const sensei = { name };
    // arrow functions
        function hello() {

        }
        const hello = () => {
            // bla bla 
            // bla bla
            return a;
        };
        const hello = () => a
    // map y forEach
    // filter, find, findIndex, splice, push
    // spread operator ...
    // destructuring
        const create = (schemaSong) => {
            console.log(schemaSong)
        };
        
        const body = {
        author: 'karol g',
        song: 'bichota',
        album: 'bichota 2.0',
        anio: 2020
        };
        
        /*
        const author =  body.author;
        const song =  body.song;
        const album =  body.album;
        const anio =  body.anio;
        */
        const { author, song, album, anio: myName } = body;
        
        const schemaSong = {
        author1: author,
        song1: song,
        album1: album,
        anio1: myName
        }
        
        create(schemaSong);
    // optional chaining
    // if (obj.adress.street.name)
    // if (obj && obj.adress && obj.adress.street && obj.adress.street.name)
    // if (obj?.adress?.street?.name)

// 5. Render dinamico del html
        // createElement, appendChild, addClassList, .style, setAttribute, getAttribute

// 6. web api
        // eventos
            // addeventlister
        // fetch
        // 

// 7. node y npm
        // scaffold
        // package.json
        // package-lock.json
        // node_modules

// reactJS
  // web componentes