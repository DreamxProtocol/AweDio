const clapAnalog = document.querySelector("#clapAnalog");
const kickZapper = document.querySelector("#kickZapper");
const tomAnalog = document.querySelector("#tomAnalog");
const tomRototom = document.querySelector("#tomRototom");
const snareModular = document.querySelector("#snareModular");
const kickElectro = document.querySelector("#kickElectro");
const cat = document.querySelector("#cat"); 
const body = document.querySelector("body");
let bobbingInterval = "";
let partyInterval = "";

const padControllers =  {
    81: {pressed: false},
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
    setTimeout(bobRightDelay, 1000);
    setTimeout(bobReturn, 1500);
}

function backgroundColorChange (){

    function randomNumFunc(min,max){
        let randomNumber = Math.floor(Math.random() * (max-min) + min);
        return randomNumber;
    }
    
    function randomColor(){
        let newColor = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")";
        body.style.backgroundColor = newColor;
    }

    if(padControllers[81].pressed == true && padControllers[76].pressed == true){
        clearInterval(partyInterval);
        partyInterval = setInterval(randomColor, 500);
    } else if (padControllers[81].pressed == true){
        clearInterval(partyInterval);
    }
}

function tomRotoTomSample () {
    
    if(padControllers[65].pressed == true && padControllers[76].pressed == true){
        tomRototom.setAttribute("loop", "")
        tomRototom.play();
        clearInterval(bobbingInterval);
        bobbingInterval = setInterval(bobHead, 2100);
    } else if(padControllers[65].pressed == true){
        tomRototom.play();
        tomRototom.removeAttribute("loop"); 
        clearInterval(bobbingInterval);
        bobHead();
    }
}

function snareModularSample (){
    if (padControllers[83].pressed == true && padControllers[76].pressed == true){
        snareModular.setAttribute("loop", "")
        snareModular.play();
        clearInterval(bobbingInterval);
        bobbingInterval = setInterval(bobHead, 2100);
    } else if(padControllers[83].pressed == true){
        snareModular.play();
        snareModular.removeAttribute("loop")
        clearInterval(bobbingInterval);
        bobHead();
    }
}

function clapAnalogSample () {
    if(padControllers[68].pressed == true && padControllers[76].pressed == true){
        clapAnalog.setAttribute("loop", "");
        clapAnalog.play(); 
        clearInterval(bobbingInterval);
        bobbingInterval = setInterval(bobHead, 2100);
    } else if (padControllers[68].pressed == true) {
        clapAnalog.play(); 
        clapAnalog.removeAttribute("loop");
        clearInterval(bobbingInterval);
        bobHead();
    }
}

function tomAnalogSample(){
    if(padControllers[66].pressed == true && padControllers[76].pressed == true){
        tomAnalog.setAttribute("loop", "")
        tomAnalog.play();
        clearInterval(bobbingInterval);
        bobbingInterval = setInterval(bobHead, 2100);
    } else if (padControllers[66].pressed == true){
        tomAnalog.play();
        tomAnalog.removeAttribute("loop");
        clearInterval(bobbingInterval);
        bobHead();
    }
}

function kickElectroSample(){
    if (padControllers[78].pressed == true && padControllers[76].pressed == true){
        kickElectro.setAttribute("loop", "")
        kickElectro.play();
        clearInterval(bobbingInterval);
        bobbingInterval = setInterval(bobHead, 2100);
    } else if (padControllers[78].pressed == true){
        kickElectro.play();
        kickElectro.removeAttribute("loop")
        clearInterval(bobbingInterval);
        bobHead();
    }
}

function kickZapperSample(){
    if (padControllers[77].pressed == true && padControllers[76].pressed == true){
        kickZapper.setAttribute("loop", "")
        kickZapper.play();  
        clearInterval(bobbingInterval);
        bobbingInterval = setInterval(bobHead, 2100);
    } else if (padControllers[77].pressed == true){
        kickZapper.play();
        kickZapper.removeAttribute("loop");
        clearInterval(bobbingInterval);
        bobHead();
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
    backgroundColorChange();
    
})

document.addEventListener("keyup", (e) => {

    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = false;
    }
    
})





























































