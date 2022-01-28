const clapAnalog = document.querySelector("#clapAnalog");
const kickZapper = document.querySelector("#kickZapper");
const tomAnalog = document.querySelector("#tomAnalog");
const tomRototom = document.querySelector("#tomRototom");
const snareModular = document.querySelector("#snareModular");
const kickElectro = document.querySelector("#kickElectro");

const padControllers =  {
    65: {pressed: false},
    83: {pressed: false} 
} 

document.addEventListener("keydown", (e) => {

    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = true;
        console.log(padControllers);
    }
    playSamples();
    
})

document.addEventListener("keyup", (e) => {

    if (padControllers[e.keyCode]){
        padControllers[e.keyCode].pressed = false;
        clapAnalog.removeAttribute("loop")
        kickZapper.removeAttribute("loop");
        console.log(padControllers);
    }
})



function playSamples() {
if (padControllers[65].pressed == true){
    clapAnalog.setAttribute("loop", "")
    clapAnalog.play();
} else {
    
    

}

if (padControllers[83].pressed == true){

    kickZapper.play();
    kickZapper.setAttribute("loop", "")

}


}















































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









