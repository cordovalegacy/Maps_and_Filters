const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//1
const pokeByThree = pokémon.filter( idByThree => idByThree.id % 3 === 0 )
console.log(pokeByThree)

//2
const firePokemon = pokémon.filter( fire => fire.types.includes( "fire" ) )
console.log(firePokemon)

//3
const multiTypePokemon = pokémon.filter( multiType => multiType.types.length > 1 )
console.log(multiTypePokemon)

//4
const onlyNames = pokémon.map( namesOnly => namesOnly.name )
console.log(onlyNames)

//5
const namesWithIds = pokémon.filter( idNames => idNames.id > 99 ).map( idNames => idNames.name )
console.log(namesWithIds)

//6
const onlyPoison = pokémon.filter( poison => poison.types.includes('poison') ).filter( poison => poison.types.length == 1 ).map( poison => poison.name )
console.log(onlyPoison)

//7
const pokeChallenge = pokémon.filter( challenge => challenge.types[1] == 'flying' ).map( challenge => challenge.types[0] )
console.log(pokeChallenge)

//8
const normalPokes = pokémon.filter( normalCount => normalCount.types.includes('normal') ).map( normalCount => normalCount.length )
const numberOfPokes = [...normalPokes].length
//copies are shallow, so the end of line 56 returned an undefined on the 
//length of the array, so we make another copy with a spread operator and got a length of the new array
console.log(numberOfPokes)