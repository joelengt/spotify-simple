
// Dom

var $btn_play = document.querySelector('.play')
var $btn_pause = document.querySelector('.pause')

var $btn_play_pause = document.querySelector('#btn_play_pause')

var audio = document.querySelector('#mySong')

// Declarando eventos para cada caso

// cuando el btn es play
$btn_play.addEventListener('click', OnPlay)
$btn_pause.addEventListener('click', OnPause)


function OnPlay () {
	$btn_play.style.display = "none"
	$btn_pause.style.display = "block"
	audio.play()	
}

function OnPause () {
	$btn_pause.style.display = "none"
	$btn_play.style.display = "block"
	audio.pause()	
}

