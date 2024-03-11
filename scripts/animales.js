const {random} = require('./random')
class Animal{
    constructor(nombre, tipo, fechaNacimiento, vacunas, proximaVisita, esterilizado, personalidad, imagen){
        this.nombre = nombre
        this.tipo = tipo
        this.fechaNacimiento = fechaNacimiento
        this.vacunas = vacunas
        this.proximaVisita = proximaVisita
        this.esterilizado = esterilizado
        this.personalidad = personalidad
        this.imagen = imagen
        this.uuid = this.generarUUID()
    }
    generarUUID(){
        const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let uuid = ''
        for(let i = 0; i < 16; i++){
            uuid += caracteres[random(0, caracteres.length-1)]
        }
        return uuid
    }
}

const listaPersonalidad = [
    "juguetón",
    "mimoso",
    "independiente",
    "curioso",
    "tranquilo",
    "activo",
    "cariñoso",
    "territorial",
    "agresivo",
    "tímido",
    "sociable",
    "loco",
    "perezoso",
    "hablador",
    "cazador",
    "dormilón",
    "glotón",
    "nervioso"
]

const listaNombresGatos = [
    'Michi',
    'Sardinas',
    'Bigotes',
    'Pelusa',
    'Dorito',
    'Mishu',
    'Pirata',
    'Vainilla',
    'Tigre',
    'Zeus',
    'Luna',
    'Canela',
    'Rocky',
    'Milo',
    'Papita',
    'Bruno',
    'Bella',
    'Max',
    'Lola',
]

const listaNombresPerros = [
    'Firulai',
    'Luna',
    'Rocky',
    'Milo',
    'Bella',
    'Max',
    'Duke',
    'Coco',
    'Oscar',
    'Simba',
    'Scooter',
    'Loki',
    'Pimiento'
]

const listaVacunasGatos = [
    'polivalente',
    'leucemia felina',
    'rabia',
    'moquillo',
    'leucemia',
    'panleucopenia',
    'herpes'
]

const listaVacunasPerros = [
    'parvovirus',
    'moquillo',
    'polivalente',
    'recordatorio polivalente',
    'rabia',
    'moquillo canino',
    'tos de las perreras',
]

function crearPersonalidad(){
    const n = random(1, 3)
    let personalidad = []
    for(let i = 0; i < n; i++){
        const new_p = random(listaPersonalidad)
        if(!personalidad.includes(new_p)){
            personalidad.push(new_p)
        } else {
            i--
        }
    }
    return personalidad
}

function crearVacunaciones(listaVacunas){
    const n = random(1, 4)
    let vacunas = []
    for(let i = 0; i < n; i++){
        const new_v = listaVacunas[i]
        if(!vacunas.includes(new_v)){
            vacunas.push(new_v)
        } else {
            i--
        }
    }
    return vacunas
}

function usarNombre(nombres){
    nombres.sort(() => Math.random() - 0.5)
    return nombres[0]
}

function crearGatoRandom(){
    const nImagenes = 8;
    const img = random(0, nImagenes-1)
    const imgPath = `/imgs/gato${img}.png`
    const nombre = usarNombre(listaNombresGatos)
    const fechaNacimiento = new Date(random(2010, 2021), random(0, 11), random(1, 28))
    const vacunas = crearVacunaciones(listaVacunasGatos)
    const proximaVisita = new Date(fechaNacimiento.getFullYear() + 1, fechaNacimiento.getMonth(), fechaNacimiento.getDate())
    const esterilizado = random([true, false])
    const personalidad = crearPersonalidad()
    return new Animal(nombre, "gato", fechaNacimiento, vacunas, proximaVisita, esterilizado, personalidad, imgPath)
}

function crearPerroRandom(){
    const nImagenes = 3;
    const img = random(0, nImagenes-1)
    const imgPath = `/imgs/perro${img}.png`
    const nombre = usarNombre(listaNombresPerros)
    const fechaNacimiento = new Date(random(2010, 2021), random(0, 11), random(1, 28))
    const vacunas = crearVacunaciones(listaVacunasPerros)
    const proximaVisita = new Date(fechaNacimiento.getFullYear() + 1, fechaNacimiento.getMonth(), fechaNacimiento.getDate())
    const esterilizado = random([true, false])
    const personalidad = crearPersonalidad()
    return new Animal(nombre, "perro", fechaNacimiento, vacunas, proximaVisita, esterilizado, personalidad, imgPath)
}

const nPerros = 3
const nGatos = 8
const perros = []

for(let i = 0; i < nPerros; i++){
    perros.push(crearPerroRandom())
}

const gatos = []
for(let i = 0; i < nGatos; i++){
    gatos.push(crearGatoRandom())
}

module.exports = {
    Animal,
    crearGatoRandom,
    crearPerroRandom,
    listaNombresGatos,
    listaNombresPerros,
    gatos,
    perros
}