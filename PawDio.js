const clapAnalog = document.querySelector("#clapAnalog");
const kickZapper = document.querySelector("#kickZapper");
const tomAnalog = document.querySelector("#tomAnalog");
const tomRototom = document.querySelector("#tomRototom");
const snareModular = document.querySelector("#snareModular");
const kickElectro = document.querySelector("#kickElectro");
const cat = document.querySelector("#cat"); 
let bobbingInterval = "";

const padControllers =  {
    76: {pressed: false},
    65: {pressed: false},
    83: {pressed: false},
    68: {pressed: false},
    66: {pressed: false},
    78: {pressed: false},
    77: {pressed: false}
} 

function bobHead() {

    function bobReturn(){
        cat.classList.add("bobReturn")
        cat.classList.remove("bobLeft");
        cat.classList.remove("bobRight");
        cat.classList.remove("bobReturn");
    }

    function bobRightDelay(){
        cat.classList.add("bobRight");
    }

    cat.classList.add("bobLeft");
    setTimeout(bobReturn, 500);
    setTimeout(bobRightDelay, 1000)
    setTimeout(bobReturn, 1500);
}

function tomRotoTomSample () {
    if(padControllers[65].pressed == true){
        tomRototom.play();
    }
    if(padControllers[65].pressed == true && padControllers[76].pressed == true){
        tomRototom.setAttribute("loop", "")
        tomRototom.play();
        bobbingInterval = setInterval(bobHead, 2100);
    } else if (padControllers[65].pressed == true){
        tomRototom.removeAttribute("loop"); 
        clearInterval(bobbingInterval);
    }
}

function snareModularSample (){
    if (padControllers[83].pressed == true){
        snareModular.play();
    }
    if (padControllers[83].pressed == true && padControllers[76].pressed == true){
        snareModular.setAttribute("loop", "")
        snareModular.play();
    } else if(padControllers[83].pressed == true){
        snareModular.removeAttribute("loop")
    }
}

function clapAnalogSample () {
    if(padControllers[68].pressed == true){
        clapAnalog.play(); 
    }
    if(padControllers[68].pressed == true && padControllers[76].pressed == true){
        clapAnalog.setAttribute("loop", "");
        clapAnalog.play(); 
    } else if (padControllers[68].pressed == true) {
        clapAnalog.removeAttribute("loop");
    }
}

function tomAnalogSample(){
    if(padControllers[66].pressed == true){
        tomAnalog.play();
    }
    if(padControllers[66].pressed == true && padControllers[76].pressed == true){
        tomAnalog.setAttribute("loop", "")
        tomAnalog.play();
    } else if (padControllers[66].pressed == true){
        tomAnalog.removeAttribute("loop");
    }
}

function kickElectroSample(){
    if (padControllers[78].pressed == true){
        kickElectro.play();
    }
    if (padControllers[78].pressed == true && padControllers[76].pressed == true){
        kickElectro.setAttribute("loop", "")
        kickElectro.play();
    } else if (padControllers[78].pressed == true){
        kickElectro.removeAttribute("loop")
    }
}

function kickZapperSample(){
    if (padControllers[77].pressed == true){
        kickZapper.play();
    }
    if (padControllers[77].pressed == true && padControllers[76].pressed == true){
        kickZapper.setAttribute("loop", "")
        kickZapper.play();  
    } else if (padControllers[77].pressed == true){
        kickZapper.removeAttribute("loop");
    }
}

function playSamples() {
    tomRotoTomSample();
    snareModularSample();
    clapAnalogSample();
    tomAnalogSample();
    kickElectroSample();
    kickZapperSample();
}

document.addEventListener("keydown", (e) => {

    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = true;
    }
    playSamples(); 
})

document.addEventListener("keyup", (e) => {

    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = false;
    }
    
})





























































