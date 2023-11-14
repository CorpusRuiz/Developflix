import peliculas from './peliculas.js'

console.log(peliculas)


const accion = 28;
const peliculasAccion = peliculas.filter((element)=>  {
        return element.genre_ids.includes(accion);
});
console.log(peliculasAccion)


const thriller = 53
const peliculasThriller = peliculas.filter((element)=> { 
    return element.genre_ids.includes(thriller)
});
console.log(peliculasThriller)


const aventura = 12
const peliculasAventura = peliculas.filter((element) => {
    return element.genre_ids.includes(aventura)
});
console.log(peliculasAventura)


const genero28 = peliculasAccion.map((accion) =>{
    let image = 'https://image.tmdb.org/t/p/w500'+accion.poster_path;
    return '<li><img src="'+image+'"/><p><b>'+accion.title+'</b></p></li>'
  })
document.getElementById("genero-28").innerHTML = genero28;


const genero53 = peliculasThriller.map((thriller) => {
    let image = 'https://image.tmdb.org/t/p/w500'+thriller.poster_path
    return '<li><img src="'+image+'"/><p><b>'+thriller.title+'</b></p></li>'
})
document.getElementById('genero-53').innerHTML = genero53;


const genero12 = peliculasAventura.map((aventura) => {
    let image = 'https://image.tmdb.org/t/p/w500'+aventura.poster_path
    return '<li><img src="'+image+'"/><p><b>'+aventura.title+'</b></p></li>'
})
document.getElementById('genero-12').innerHTML = genero12;



