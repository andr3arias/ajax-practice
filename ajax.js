console.log("ajax practice")

//capturando evento de clic en boton personajes
$("#btn-personajes").click(function(){
    console.log("el personaje hizo click")
   
    consultarPersonajes()
    console.log("siguiente linea")
})

//cosulta personajes y los muestra en htl
function consultarPersonajes(){
    $.ajax({
        method:"GET",
        url:"https://rickandmortyapi.com/api/character/"
    })
    .done(function(response){
        console.log("***HA LLEGADO LA RESPUESTA***",response)
        var personajes = response.results

        //Recorrer los personajes
        for (var personaje of personajes){
            console.log('Personaje: ',personaje)
            $(".contenedor-personajes").append(
                renderCardPersonaje(personaje)
            )
        }
    })
    .fail(function(error){
        console.log("hubo un error",JSON.parse(error.responseText).error)
})
}
// Devuelve el Personaje en div
function renderCardPersonaje(obj_personaje){
    var personaje_html = `
        <div class="personaje">
            <img src="${obj_personaje.image}">
            <h3>${obj_personaje.name}</h3>
            <button> Favorito </button>
        </div>
    `
    return personaje_html
}


