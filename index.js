//how to do fade in/out effect with javascript https://digitalfox-tutorials.com/tutorial.php?title=How-to-create-a-javascript-and-css-fade-effect
let fadeOutButton = document.querySelector("#startButton");
let box = document.querySelector(".title-container-transition");
 
fadeOutButton.onclick = function(){
   box.classList.remove("fade-out")
   window.location.href='gameIntro.html';
}

var dialogs = ['Hello, i was so bored that i ended making this shit so yeah i am bored, as you can see i am bored !'],  
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog').text($('#dialog').text() +   dialog[i]);
        if (i == dialog.length-1 ) {
          $('#dialog').prepend('<div id="arrow"></div>');
          Mousetrap.bind('enter', function() {
            if (dialogs[initial+1]) {
              $('#dialog').text('');
              initial += 1;
              individual = dialogs[initial].split('');
              createDiag( individual );
            }
          });
        }
      }, 50*i);  
    
    }(i));
    
  }

}

createDiag( individual );

