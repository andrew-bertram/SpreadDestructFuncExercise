// Spread & Destructuring with Functions Exercise

// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];
// 1b
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2b
function seeCharacters(name) {
    console.log(name.ellieSattler);
}
seeCharacters(jPCharacters);

// BONUS
// 3a
const jurrasicParkMovies = {
    one: "Jurassic Park",
    two: "The Lost World: Jurassic Park",
    three: "Jurassic Park III"
},
{
    four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom"
}