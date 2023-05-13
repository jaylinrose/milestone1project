//how to do fade in/out effect with javascript https://digitalfox-tutorials.com/tutorial.php?title=How-to-create-a-javascript-and-css-fade-effect
let fadeOutButton = document.querySelector("#startButton");
let box = document.querySelector(".title-container-transition");
 
fadeOutButton.onclick = function(){
   box.classList.remove("fade-out")
   window.location.href='gameIntro.html';
}
