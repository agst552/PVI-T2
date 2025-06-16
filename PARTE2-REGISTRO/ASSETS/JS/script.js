const inputSenha = document.getElementById ("senha");
const image = document.getElementById ("image");

image.addEventListener('click', ()=> {
    if (inputSenha.getAttribute ("type")=== "password"){
        inputSenha.setAttribute ("type", "text");
        image.setAttribute ("src", "/PARTE2-REGISTRO/ASSETS/IMG/hidden.png")
    }else {
        inputSenha.setAttribute ("type","password");
        image.setAttribute ("src", "/PARTE2-REGISTRO/ASSETS/IMG/eye.png")
    }
})

const inputSec = document.getElementById ("password");
const imagem = document.getElementById ("imagem");

imagem.addEventListener('click', ()=> {
    if (inputSec.getAttribute ("type")=== "password"){
        inputSec.setAttribute ("type", "text");
        imagem.setAttribute ("src", "/PARTE2-REGISTRO/ASSETS/IMG/hidden.png")
    }else {
        inputSec.setAttribute ("type","password");
        imagem.setAttribute ("src", "/PARTE2-REGISTRO/ASSETS/IMG/eye.png")
    }
})