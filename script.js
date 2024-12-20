let player;
let direcaoY=0;
let tecla_baixa = {
    clicar:()=>{direcaoY=1}
    ,soltar:()=>{direcaoY=0}
}


function Start(){
    player = document.getElementById('Player')
    dw_btn = document.getElementById('down')
    dw_btn.addEventListener('mousedown',tecla_baixa.clicar)
    dw_btn.addEventListener('mouseup',tecla_baixa.soltar)
    Update()
}

function Update(){
    player.style.top=(player.offsetTop+3*direcaoY)+"px"

    requestAnimationFrame(Update)
}



document.addEventListener('DOMContentLoaded',Start)