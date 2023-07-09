var superman ={
    strength: "1000",
    color: "red",
    power: "flight",
    name: "Super Man",
    height: "6",
    stealth: "0",
}
var batman = {
    name: "Bat Man",
    color: "black",
    power: "ninja",
    strength: "100",
    height: "6.5",
    stealth: "100",
    
}
{
    var spiderman = {
        name: "Spider Man",
        color: "black red",
        power: "ninja",
        strength: "100",
        height: "6.5",
        stealth: "100",
}}
var superHeroes = [superman, batman, spiderman];

for (var i=0; i < superHeroes.length; i++) 
{
    var currentHeroe = superHeroes[i];
  console.log(currentHeroe.name);
  console.log(currentHeroe.color);
  console.log("------------");
  
  

}


// log("Super Hero name " + superHeroes[0].name);
// log("Super Hero Body Color: " + superHeroes[0].color);
// log("Super Hero name " + superHeroes[1].name);
// log("Super Hero Body Color: " + superHeroes[1].color);
// log("Super Hero name " + superHeroes[2].name);
// log("Super Hero Body Color: " + superHeroes[2].color);


// }

