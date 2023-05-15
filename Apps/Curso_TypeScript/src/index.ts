// Le indicamos su tipo de dato, en este caso es string
let mensaje:string = "Hello World"

mensaje = "Pepe feliz"

mensaje = "Bye World"
console.log(mensaje)

/* Types Js:
    -number
    -string
    -boolean
    -null
    -undefined
    -object
    -function

    Types Ts:
    -any -> Hay que tratar no utilizarlo por motivos de buenas practicas
    -unknown
    -never
    -arrays
    -tuplas
    -Enums
*/

// Tipos inferidos
let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-rex"
let extintos = true


// TIPOS DE ARREGLO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let animales: string[] = ['Perro', 'Gato', 'Tigre']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

// .map para iterar los datos de un arreglo y aplicarles una función
// nums.map(x => x.) El autocompletado sugiere métodos del tipo de dato

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TUPLAS -> Es una variable que contiene un set de datos ordenados 
let tupla: [number, string[]] = [1, ['Chanchito Feliz', 'Chanchito Felipe']]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ENUMS -> Es una lista de constantes las cuales podemos referenciar en un futuro, podemos representar estados en la db, o tallas de ropa, o para representar cuando los datos están cargando
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error}

const estado = LoadingState.Success 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  OBJETOS

type Direccion =  {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    // readonly es para que la propiedad sea una constante y no se pueda cambiar
        readonly id: number,
    // Si la queremos volver opcional le agregamos un signo de interrogación antes de los ' : '
        nombre: string, 
        talla: Talla,
        direccion: Direccion
}

const objeto: Persona = { 
        id: 1, 
        nombre: 'Hello World', 
        talla: Talla.Mediana,
        direccion: {
            numero: 1,
            calle: 'Siempre viva',
            pais: 'Mongolia'
        }
    }

    // Un arreglo de objetos
const arr: Persona[] = []