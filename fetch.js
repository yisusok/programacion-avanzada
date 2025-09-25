const API_KEY = 'qgWBn6xnNQHaEFFA6tJ7G6AHBq8Lj3oW'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

// peticion.then(resp => resp.json() )
//        .then(({ data }) => {
//          const { url } = data.images.original;

//          const img = document.createElement('img');
//          const p = document.createElement('p');
//          p.textContent=data.user.username
//          img.src = url
//          document.body.append(p)
//          document.body.append(img)
         
//            console.log(url);
//            console.log(data);
//        })
//          .catch(console.warn)

const API= 'https://api.spacexdata.com/v5/launches'

const peticion= fetch(API)

peticion.then(res =>res.json())
.then(data=>{console.log(data.map(data=>data.name),console.log(data.map(data=>data.links.patch.small)));

})
.catch(error => { // 4. Maneja posibles errores durante la petición
  console.error('Error al realizar el fetch:', error);
});





// const getData = async (name) => {
//     const apiURL = name ? `${API}${name}` : API;
//     try {
//         const response = await fetch(apiURL);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log('Fetch Error', error);
//     }
// }





    // esto se conoce como promesas en cadena