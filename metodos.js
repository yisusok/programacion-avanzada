const personas =[
    {nombre: 'Ana', edad :25,aprendiendo:'javascript'},
    {nombre: 'pepe', edad :29,aprendiendo:'javascript'},
    {nombre: 'lara', edad :14,aprendiendo:'javascript'}
]

const personas2 =[
    {nombre: 'Martin', edad :87,aprendiendo:'javascript'},
    {nombre: 'Daniel', edad :43,aprendiendo:'javascript'},
    {nombre: 'Gonzalo', edad :63,aprendiendo:'javascript'}
]
const personas3 =[
    {nombre: 'Cavani', edad :38,aprendiendo:'javascript'},
    {nombre: 'Enzo', edad :40,aprendiendo:'javascript'},
    {nombre: 'Borja', edad :32,aprendiendo:'javascript'}
]

console.log(personas);

const mayores = personas.filter(persona=>(persona.edad>=25));
console.log(mayores);

const Ana= personas.find(persona=>persona.nombre=='Ana')

console.log(Ana);

function filtro(array1, array2, array3){
    arraysuma=[...array1,...array2,...array3]

    filtro1=arraysuma.filter(persona=>(persona.edad>=25))

    console.log(filtro1)
}

filtro(personas, personas2, personas3)
