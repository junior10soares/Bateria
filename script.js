const c = (e) =>{
    return document.querySelector(e)
}

document.body.addEventListener('keyup',(event)=>{ 
    playSound(event.code.toLowerCase())
})

function playSound(sound){

    let audioElement = c(`#s_${sound}`)
    let keyElement = c(`div [data-key=${sound}]`)

    if(audioElement){

        audioElement.play()

    }

    if(keyElement){

        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active') 
        }, 200)
    }
}

c('.composer button').addEventListener('click', ()=>{

    let song = c('#input').value
    
    if(song !== ''){
        let songArray = song.split('')
       playComposition(songArray)
    }
})

function playComposition(songArray){

    let wait = 0 

    for(let i of songArray ){ 

        setTimeout(() => { 
            playSound(`key${i}`) 
        }, wait);
        
        wait += 300
    }
}