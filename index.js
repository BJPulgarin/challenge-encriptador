let input = document.querySelector("textarea");
let encriptBtn = document.getElementById("encriptar");
let desencriptarBtn = document.getElementById("desencriptar");
let solucion = document.getElementById("solution")
let searching = document.getElementById("searching")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let result = document.getElementById("result")

solucion.style.display = "none"
let aux = true

function encriptar(event) {
  event.preventDefault();
  if (input.value == ""){
    input.setAttribute("placeholder", "QUE ESCRIBAS UN TEXTO HJPTA!")
  }
  else{
    let text = input.value.split("");
    for(let i=0; i<text.length; i++){
        switch (text[i]){
            case "a" : text[i] = "ai";
            break;
            case "e" : text[i] = "enter";
            break;
            case "i" : text[i] = "imes";
            break;
            case "o" : text[i] = "ober";
            break;
            case "u" : text[i] = "ufat";
            break;
        }
    }
    let encText = text.join("")
    solucion.textContent = encText
    searching.style.display = "none"
    p1.style.display = "none"
    p2.style.display = "none"
    solucion.style.display = "block"
    if (aux){
        crearCopy()
    }
    aux = false
    copy.addEventListener("click", function(event){
        event.preventDefault()
        navigator.clipboard.writeText(encText)
        copy.textContent = "¡Texto copiado!"
    })
    copy.textContent = "Copia tu texto"
  }
}

function desencriptar (event){
  event.preventDefault()
  if (input.value == ""){
    input.setAttribute("placeholder", "QUE ESCRIBAS UN TEXTO HJPTA!")
  }
  else{
    let text = input.value
    text = text.replaceAll("ai", "a")
    text = text.replaceAll("enter", "e")
    text = text.replaceAll("imes", "i")
    text = text.replaceAll("ober", "o")
    text = text.replaceAll("ufat", "u")
    solucion.textContent = text
    searching.style.display = "none"
    p1.style.display = "none"
    p2.style.display = "none"
    solucion.style.display = "block"
    if (aux){
      crearCopy()
    }
    aux = false
    copy.textContent = "Copia tu texto"
    copy.addEventListener("click", function(event){
      event.preventDefault()
      navigator.clipboard.writeText(text)
      copy.textContent = "¡Texto copiado!"
    })
    copy.textContent = "Copia tu texto"
  }
}


function crearCopy(){
    let copy = document.createElement("button")
    copy.setAttribute("id", "copy")
    copy.textContent = "Copia tu texto"
    result.appendChild(copy)
    return copy
}


encriptBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
