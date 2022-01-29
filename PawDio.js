const clapAnalog = document.querySelector("#clapAnalog");
const kickZapper = document.querySelector("#kickZapper");
const tomAnalog = document.querySelector("#tomAnalog");
const tomRototom = document.querySelector("#tomRototom");
const snareModular = document.querySelector("#snareModular");
const kickElectro = document.querySelector("#kickElectro");

const padControllers =  {
    65: {pressed: false},
    83: {pressed: false},
    68: {pressed: false},
    66: {pressed: false},
    78: {pressed: false},
    77: {pressed: false}
} 

function playSamples() {
    if (padControllers[65].pressed == true){
        tomRototom.setAttribute("loop", "")
        tomRototom.play();
    }

    if (padControllers[83].pressed == true){
        snareModular.setAttribute("loop", "")
        snareModular.play();
    }

    if (padControllers[68].pressed == true){
        clapAnalog.setAttribute("loop", "")
        clapAnalog.play(); 
    }

    if (padControllers[66].pressed == true){
        tomAnalog.setAttribute("loop", "")
        tomAnalog.play();
    }

    if (padControllers[78].pressed == true){
        kickElectro.setAttribute("loop", "")
        kickElectro.play();
    }

    if (padControllers[77].pressed == true){
        kickZapper.setAttribute("loop", "")
        kickZapper.play();  
    }   
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
        clapAnalog.removeAttribute("loop");
        kickZapper.removeAttribute("loop");
        tomAnalog.removeAttribute("loop");
        tomRototom.removeAttribute("loop");
        snareModular.removeAttribute("loop");
        kickElectro.removeAttribute("loop");
    }
})



















































// const padController = {

//     65: {pressed: false, func: "s"},
//     83: {pressed: false, func: ""},
//     68: {pressed: false, func: ""},
//     66: {pressed: false, func: ""},
//     78: {pressed: false, func: ""},
//     77: {pressed: false, func: ""}
// }

// document.addEventListener("keydown", (e) => {

//     if(padController[e.keyCode]){
//         padController[e.keyCode].pressed = true;
//     }

    
// })

// document.addEventListener("keyup", (e) => {

//     if(padController[e.keyCode]){
//         padController[e.keyCode].pressed = false;
//     }
// })









