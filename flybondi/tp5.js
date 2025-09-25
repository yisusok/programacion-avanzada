// Hola! Soy Nelsona y tengo 65 años. La compu no me gusta mucho pero me dijeron que en
//  Flybondi.com conseguís pasajes baratos, así que voy a hacer el esfuerzo. Quiero irme
//   de vacaciones y tengo sólo $800 para gastar en pasajes, ida y vuelta. No tengo mucho 
//   problema a dónde irme. Me gustan tanto las sierras, como el mar, el calor como el frío.
//    Me gustaría saber muy fácilmente y con muy pocos clicks, a qué lugares de Argentina y
// alrededores me puedo ir por esa plata. Tampoco tengo problema cuántos días irme ni cuándo.
//  Mi mayor restricción es la plata. Soy jubilada, sabrás entender! Me gustaría que la computadora
//      me diga a dónde me puedo ir, cuánto me sale, qué día y por cuánto tiempo.

// Quizás mi nieta Valentina que hizo un taller de computación me ayude.
//  Ella tiene 16 años y es muy inteligente. Me puede decir cuál es el que más me
//   conviene. Según la fecha que sea el pasaje, puede que mi hijo Víctor me acompañe,
//    también Valentina y Adriana (mi nuera).

// tengo $800 ordenar por precio
// ida y vuelta
// no importa lugar
// argentina y alrededores
// no importa cuantos dias
// donde ir cuanto sale que dia y cuanto tiempo, y cantidad disponible

// import dataset from './dataset.json' assert { type: 'json' };
// console.log(dataset)


const jsonn="./dataset.json";

const peticion=fetch(jsonn);

peticion.then(res=>res.json())
.then(data=>{
    console.log(data);
    const datosCrudos=data;

    const filtrar= data.filter(data=>(data.price<800) && (data.availability >= 4))
    filtrarPrecio(datosCrudos);
    


    const lista = document.createElement("section");
    
    data.forEach(data => {
      const item = document.createElement("div");
      item.textContent = `${data.origin} → ${data.destination} | $${data.price} | Fecha: ${data.date} | Disponibles: ${data.availability}`;
      lista.appendChild(item);
    });
    document.body.appendChild(lista);
    lista.className="lista"
    const botond = document.getElementById("btndlt");
    const uld = document.getElementsByClassName("lista")[0];
    



    const botonc = document.getElementById("btncrt");
    botonc.addEventListener("click", () => {
            const lista = document.createElement("section");
            
            filtrar.forEach(filtrar => {
            const item = document.createElement("div");
            item.textContent = `${filtrar.origin} → ${filtrar.destination} | $${filtrar.price} | Fecha: ${filtrar.date} | Disponibles: ${filtrar.availability}`;
            lista.appendChild(item);
            });
            document.body.appendChild(lista);
            lista.className="lista"

        uld.remove();

    });



})
.catch(error=>{console.error("el error es el siguiente",error)})


function filtrarPrecio (datosCrudos){
    const dp= datosCrudos;
    // const dp= datosCrudos.map(datosCrudos=>datosCrudos.price);
    const filtrado= dp.filter(dp=>(dp.price<800) && (dp.availability >= 4))
    return filtrado
}


