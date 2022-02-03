const clapAnalog = document.querySelector("#clapAnalog");
const kickZapper = document.querySelector("#kickZapper");
const tomAnalog = document.querySelector("#tomAnalog");
const tomRototom = document.querySelector("#tomRototom");
const snareModular = document.querySelector("#snareModular");
const kickElectro = document.querySelector("#kickElectro");
const cat = document.querySelector("#cat"); 
const body = document.querySelector("body");
const pads = document.querySelectorAll(".pad");
const padsArray = Array.from(pads);
const keys = document.querySelectorAll(".keys")
const keysArray = Array.from(keys);
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

console.log(keysArray);

let newBoxShadowColor0 = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")"
let newBoxShadowColor1 = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")"
let newBoxShadowColor2 = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")"
let newBoxShadowColor3 = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")"
let newBoxShadowColor4 = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")"
let newBoxShadowColor5 = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")"

padsArray[0].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor0+"";
padsArray[1].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor1+"";
padsArray[2].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor2+"";
padsArray[3].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor3+"";
padsArray[4].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor4+"";
padsArray[5].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor5+"";
keysArray[0].style.color = ""+newBoxShadowColor0+"";
keysArray[1].style.color = ""+newBoxShadowColor1+"";
keysArray[2].style.color = ""+newBoxShadowColor2+"";
keysArray[3].style.color = ""+newBoxShadowColor3+"";
keysArray[4].style.color = ""+newBoxShadowColor4+"";
keysArray[5].style.color = ""+newBoxShadowColor5+"";

function randomNumFunc(min,max){
    let randomNumber = Math.floor(Math.random() * (max-min) + min);
    return randomNumber;
}

document.addEventListener("keydown", (e) => {
    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = true;
    }
    playSamples(); 
    pushDown();
    backgroundColorChange();
})

document.addEventListener("keyup", (e) => {
    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = false;
    }
    pushDown();
})

function playSamples() {
    tomRotoTomSample();
    snareModularSample();
    clapAnalogSample();
    tomAnalogSample();
    kickElectroSample();
    kickZapperSample();
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

function pushDown(){
    if(padControllers[65].pressed == true){
        padsArray[0].style.boxShadow = "inset 0 0 10px 3px "+newBoxShadowColor0+"";
        keysArray[0].style.fontSize = "8.7rem";
    } else {
        padsArray[0].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor0+"";
        keysArray[0].style.fontSize = "9rem";
    }

    if(padControllers[83].pressed == true){
        padsArray[1].style.boxShadow = "inset 0 0 10px 3px "+newBoxShadowColor1+"";
        keysArray[1].style.fontSize = "8.7rem";
    } else {
        padsArray[1].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor1+"";
        keysArray[1].style.fontSize = "9rem";
    }

    if(padControllers[68].pressed == true){
        padsArray[2].style.boxShadow = "inset 0 0 10px 3px "+newBoxShadowColor2+"";
        keysArray[2].style.fontSize = "8.7rem";
    } else {
        padsArray[2].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor2+"";
        keysArray[2].style.fontSize = "9rem";
    }

    if(padControllers[66].pressed == true){
        padsArray[3].style.boxShadow = "inset 0 0 10px 3px "+newBoxShadowColor3+"";
        keysArray[3].style.fontSize = "8.7rem";
    } else {
        padsArray[3].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor3+"";
        keysArray[3].style.fontSize = "9rem";
    }

    if(padControllers[78].pressed == true){
        padsArray[4].style.boxShadow = "inset 0 0 10px 3px "+newBoxShadowColor4+"";
        keysArray[4].style.fontSize = "8.7rem";
    } else {
        padsArray[4].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor4+"";
        keysArray[4].style.fontSize = "9rem";
    }

    if(padControllers[77].pressed == true) {
        padsArray[5].style.boxShadow = "inset 0 0 10px 3px "+newBoxShadowColor5+"";
        keysArray[5].style.fontSize = "8.7rem";
    } else {
        padsArray[5].style.boxShadow = "inset 0 0 5px 2px "+newBoxShadowColor5+"";
        keysArray[5].style.fontSize = "9rem";
    }
}

function backgroundColorChange (){

    function randomColor(){
        let newBackgroundColor = "rgb("+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+", "+randomNumFunc(255,0)+")";
        body.style.backgroundColor = newBackgroundColor;
    }

    if(padControllers[81].pressed == true && padControllers[76].pressed == true){
        clearInterval(partyInterval);
        partyInterval = setInterval(randomColor, 500);
    } else if (padControllers[81].pressed == true){
        clearInterval(partyInterval);
    }
}








































































