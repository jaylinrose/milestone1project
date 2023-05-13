// how to add dialouge text boxes https://codepen.io/punkydrewster713/pen/zYKdywP
var container = document.querySelector(".dialog");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
};

var textLines = [
   { speed: speeds.slow, string: "Where...where am I?" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.slow, string: "What happened? I don't..."},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.slow, string: "I don't remember."},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "*the player comes to consciousness in the middle of a dark unknown forest.*"}
]
;


var characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   line.string.split("").forEach((character) => {
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off

setTimeout(() => {
    revealOneCharacter(characters)   
 }, 600)

let dialougeBtn = document.querySelector("#arrowBtn");

dialougeBtn.onclick = function(){
   window.location.href=('gameIntro2.html');
    
}




