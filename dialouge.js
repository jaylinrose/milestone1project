// how to add dialouge text boxes https://codepen.io/punkydrewster713/pen/zYKdywP
var container = document.querySelector(".dialog");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 130,
   normal: 90,
   fast: 40,
   superFast: 10
};

var textLines = [
   { speed: speeds.slow, string: "'Where...where am I?"},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.slow, string: "What happened? I don't..."},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.slow, string: "I don't remember.'"},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "*the player comes to consciousness in the middle of a dark unknown forest.*"},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "As they emerge into consciousness, an unseen voice speaks to them."}, 
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "They tell the player they were given the gift to see the 'keys' of the 3D world: portals that unlock access to other places dare I say dimensions."},
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "The strange voice continues and tells the player they were chosen and entrusted with this special ability as they are the only one able to find the potion to end all suffering."},
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "'You must find it or else this world's fate is doomed,' the voice says."}, 
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "The mysterious voice then tells the player in riddled words how to use their new-found abilities and then vanishes into the shadows."}, 
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "Delirious and confused, the player thinks hard on their words and then suddenly a strong force takes hold of the player. They close their eyes in fear and then suddenly all is calm and they no longer feel in danger. They open their eyes to awe and disbelief."}
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
    let myAudio3 = document.querySelector('#audio-3')
 myAudio3.play()
 }, 600)

let dialougeBtn = document.querySelector("#arrowBtn");

dialougeBtn.onclick = function(){
   window.location.href=('level-1.html');
    
}




