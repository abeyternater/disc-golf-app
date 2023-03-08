
const arrayOfPlayers = []
function addPlayer(){
    console.log("adding players...")
    var name = window.prompt("Please enter the name of the player: ")
    const h1 = document.createElement("h1")
    const node = document.createTextNode(name)
    h1.appendChild(node)

    const element = document.getElementById("div1")
    element.appendChild(h1);

    arrayOfPlayers.push(name)
}

function startRound(){
    const h1 = document.createElement("h1");
    const node = document.createTextNode("Hole 1")
    h1.appendChild(node)

    const element = document.getElementById("div1")
    element.appendChild(h1)

}
