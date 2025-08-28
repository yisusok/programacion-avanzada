const API_KEY = 'qgWBn6xnNQHaEFFA6tJ7G6AHBq8Lj3oW'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

peticion.then(resp => resp.json() )
       .then(({ data }) => {
         const { url } = data.images.original;

         const img = document.createElement('img');
         const p = document.createElement('p');
         p.textContent=data.user.username
         img.src = url
         document.body.append(p)
         document.body.append(img)
         
           console.log(url);
           console.log(data);
       })
         .catch(console.warn)

    // esto se conoce como promesas en cadena