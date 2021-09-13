// let filterA = document.getElementById("blur");
// let filterB = document.getElementById("contrast");
// let filterC = document.getElementById("hue-rotate");
// let filterD = document.getElementById("sepia");

// let noFlipBtn = document.getElementById("no-flip");
// let xFlipBtn = document.getElementById("x-flip");
// let yFlipBtn = document.getElementById("y-flip");

// let uploadBtn = document.getElementById("upload-button");
// let image = document.getElementById("chosen-image");

// //reset filter
// function resetFilter(){
//     filterA.value = "0";
//     filterB.value = "100";
//     filterC.value = "0";
//     filterD.value = "0";
//     noFlipBtn.checked = true;
//     addFilter();
//     flipImage();
// }

// //upload image
// uploadBtn.onchange = () => {
//     resetFilter();
//     document.querySelector(".image-container").style.display = "block";
//     let reader = new FileReader();
//     reader.readAsDataURL(uploadBtn.files[0]);
//     reader.onload = () =>{
//         image.setAttribute("src", reader.result);
//     }
// }

// //slider input
// let sliders = document.querySelectorAll(".filter input[type='range']");
// sliders.forEach(slider => {
//     slider.addEventListener("input", addFilter);
// });

// //add image filters
// function addFilter(){
//     image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
// }

// //radio button
// let radioBtns = document.querySelectorAll(".flip-option input[type='radio']")
// radioBtns.forEach(radioBtn => {
//     radioBtn.addEventListener("click", flipImage);
// });

// function flipImage(){
//     if(xFlipBtn.checked){
//         image.style.transform = "scaleX(-1)";
//     }
//     else if(yFlipBtn.checked){
//         image.style.transform = "scaleY(-1)";
//     }
//     else{
//         image.style.transform = "scaleY(1,1)";
//     }
// }
let filterA = document.getElementById("blur");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("hue-rotate");
let filterD = document.getElementById("sepia");

let noFlipBtn = document.getElementById("no-flip");
let flipXBtn = document.getElementById("x-flip");
let flipYBtn = document.getElementById("y-flip");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");


function resetFilter(){
    filterA.value = "0";
    filterB.value = "100";
    filterC.value = "0";
    filterD.value = "0";
    noFlipBtn.checked = true;
    addFilter();
    flipImage();
}

uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }
}

let sliders = document.querySelectorAll(".filters input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter);
});

function addFilter(){
    image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
}

let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach( radioBtn => {
    radioBtn.addEventListener("click", flipImage);
});

function flipImage(){
    if(flipXBtn.checked){
        image.style.transform = "scaleX(-1)";
    }
    else if(flipYBtn.checked){
        image.style.transform = "scaleY(-1)";
    }
    else{
        image.style.transform = "scale(1,1)";
    }
}