//Web game aprt 7 assignemnt
function arrowKeyThing () {
    if(key === 'left') {
        console.log('left key was pressed')
    }

}

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
    guessedPattern.push('left')
    key === 'left'
    console.log('left key was pressed')
    }
    if(e.key === 'ArrowUp'){
        key === 'up'
        guessedPattern.push('up')
    }
    if(e.key === 'ArrowRight'){
        key === 'right'
        guessedPattern.push('right')
    }
    if(e.key === 'ArrowDown'){
        key === 'down'
        guessedPattern.push('down')
    }
})

document.addEventListener('keyup', function(e){
    key === null
})
