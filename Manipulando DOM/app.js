const btn = document.getElementById("btn");
const fundo = document.getElementById("fundo")
var cor = 0;
function mudarCor(){
    //darkmode = 0
    //lightmode = 1
    
    if(cor === 1){
        cor = 0;
        fundo.style.background = "black"
        btn.innerHTML = "Dark Mode"
        btn.style.background = "#f5f2f2"
        btn.style.color = "black"
        console.log(cor)
    }
    else if(cor === 0){
        cor = 1;
        fundo.style.background = "#f5f2f2"
        btn.innerHTML = "Light Mode"
        btn.style.background = "black"
        btn.style.color = "white"
        console.log(cor)

    }
}

btn.addEventListener('click', mudarCor)