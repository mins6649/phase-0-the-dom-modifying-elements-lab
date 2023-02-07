// Write your code here!
const main = document.getElementById("main");
main.remove()

const body = document.querySelector("body")
//you dont need to define body to use LINE 14
const newHeader = document.createElement('h1');
newHeader.id = "victory";
function champion(name){
    newHeader.textContent = `${name} is the champion`;
}
champion("Min");

document.body.append(newHeader);