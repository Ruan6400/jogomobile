let player;
let direcaoY=0;
let mouseY;
let finger_in;
let finger_out;
let tecla_baixa = {
    clicar:()=>{direcaoY=1}
    ,soltar:()=>{direcaoY=0}
}
let tecla_alta = {
    clicar:()=>{direcaoY=-1}
    ,soltar:()=>{direcaoY=0}
}


let SlideFingers ={
    inn:()=>{finger_in=mouseY
        console.log(finger_in)
        setTimeout(()=>{direcaoY=0},750)
    },
    out:()=>{finger_out=mouseY
        console.log(finger_out)
        if(finger_in-finger_out>0){
            direcaoY=-1
        }else{
            direcaoY=1
        }
    }
}
function Arrastar(mouse){
       mouseY= mouse.clientY
}

function Start(){
    player = document.getElementById('Player')
    /*dw_btn = document.getElementById('down')
    dw_btn.addEventListener('mousedown',tecla_baixa.clicar)
    dw_btn.addEventListener('mouseup',tecla_baixa.soltar)
    dw_btn.style.top="100px"
    up_btn = document.getElementById('up')
    up_btn.addEventListener('mousedown',tecla_alta.clicar)
    up_btn.addEventListener('mouseup',tecla_alta.soltar)*/
    document.addEventListener('mousemove',Arrastar)
    document.addEventListener('mousedown',SlideFingers.inn)
    document.addEventListener('mouseup',SlideFingers.out)
    Update()
}

function Update(){
    player.style.top=(player.offsetTop+3*direcaoY)+"px"

    requestAnimationFrame(Update)
}



document.addEventListener('DOMContentLoaded',Start)