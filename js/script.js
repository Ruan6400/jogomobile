let tela;
let player;
let direcaoY=0;
let finger_in=0;
let finger_out=0;
let slideble = true
let untouch = true
let timing =0;


let SlideFingers ={
    inn:(ev)=>{
        if(slideble&&untouch){
            let touch= ev.touches[0]
            finger_in=touch.clientY
            console.log("start: "+finger_in)
        }
    },
    middle:(ev)=>{
        let touch= ev.touches[0]
        finger_out=touch.clientY
        if(Math.abs(finger_in-finger_out)>30&&slideble&&untouch){
            console.log("end: "+finger_out)
            if(finger_in-finger_out>0){
                direcaoY= player.offsetTop>=1? -1: 0
            }else{
                direcaoY= player.offsetTop<=(tela.offsetHeight-player.offsetHeight)?1:0
            }
            finger_in=0
            finger_out=0
            slideble=false
            untouch=false
        }
    },
    out:()=>{
        untouch=true
    }
}


function Start(){
    player = document.getElementById('Player')
    tela = document.getElementById('Game')
    document.addEventListener('touchstart',SlideFingers.inn)
    document.addEventListener('touchmove',SlideFingers.middle)
    document.addEventListener('touchend',SlideFingers.out)
    Update()
}



function Update(){
    if(!slideble){
        timing++
        if(timing>=10){
            timing=0
            direcaoY=0
            slideble=true
        }
    }
    player.style.top=(player.offsetTop+7*direcaoY)+"px"
        

    requestAnimationFrame(Update)
}



document.addEventListener('DOMContentLoaded',Start)