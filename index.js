let fadeOutButton = document.querySelector("#startButton");
let box = document.querySelector(".title-container-transition");
 
fadeOutButton.onclick = function(){
   box.classList.remove("fade-out")
   window.location.href='gameIntro.html';
}