var fullImgBox= document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openImg(pic){
fullImgBox.style.display = "flex";
fullImg.src = pic;
}

function closeImg(){
fullImgBox.style.display = "none";
}