var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4){
        let monsters = JSON.parse(xhr.responseText);
        console.log(monsters)
    }
}

xhr.open('GET', './scripts/monsters.JSON')
xhr.send()


const start = document.querySelector(".start")

console.log(start);
console.log("SAVE E+NE FRIN");
start.addEventListener("click", ()=> {
    start.textContent = "LETS BEGIN";
})


console.log("LICKED");