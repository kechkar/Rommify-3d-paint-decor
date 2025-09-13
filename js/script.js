const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const Close = document.getElementById('close');
bar.addEventListener('click', function(){
    nav.classList.add('active');
})
Close.addEventListener('click', function(){
    nav.classList.remove('active');
})
var MainImg =document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("smalL-img")
smallImg[0].addEventListener("click",function(){
    MainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener("click",function(){
    MainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener("click",function(){
    MainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener("click",function(){
    MainImg.src = smallImg[3].src;
})