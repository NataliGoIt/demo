import './sass/main.scss';
const playBtn = document.querySelector('.btn__play'),
player = document.querySelector('.player'),
prevBtn = document.querySelector('.btn__prev'),
nextBtn = document.querySelector('.btn__next'),
playImg = document.querySelector('.play-img'),
pauseImg = document.querySelector('.pause-img'),
progressContainer = document.querySelector('.progress__container'),
progress = document.querySelector('.progress'),
// =======================playlist=================
playlistBtnPlay = document.querySelector('.music__play-play'),
playListBtnPause = document.querySelector('.music__play-pause'),
// =======================audio====================
audio = document.querySelector('.audio'),
music1 = document.querySelector('.music-1'),
audio1 = document.querySelector('#audio1'),

music2 = document.querySelector('.music-2'),
audio2 = document.querySelector('#audio2'),

music3 = document.querySelector('.music-3'),
audio3 = document.querySelector('#audio3'),

music4 = document.querySelector('.music-4'),
audio4 = document.querySelector('#audio4'),

music5 = document.querySelector('.music-5'),
audio5 = document.querySelector('#audio5'),

music6 = document.querySelector('.music-6'),
audio6 = document.querySelector('#audio6'),

music7 = document.querySelector('.music-7'),
audio7 = document.querySelector('#audio7'),

music8 = document.querySelector('.music-8'),
audio8 = document.querySelector('#audio8'),

music9 = document.querySelector('.music-9'),
audio9 = document.querySelector('#audio9'),

music10 = document.querySelector('.music-10'),
audio10 = document.querySelector('#audio10'),

music11 = document.querySelector('.music-11'),
audio11 = document.querySelector('#audio11');









let songIndex = 0;

const songs = [
    {
        src: audio1.src,
        title: "22:22"
    }, 
    {
        src: audio2.src,
        title: "Feel So Good"
    }, 
    {
        src: audio3.src,
        title: "Ginger Snaps"
    },
    {
        src: audio4.src,
        title: "Hazel Eyes"
    }, 
    {
        src: audio5.src,
        title: "Kosmos"
    },
    {
        src: audio6.src,
        title: "Major Lazer Style"
    },
    {
        src: audio7.src,
        title: "Rose Baby Rose"
    },
    {
        src: audio8.src,
        title: "Ruff Day"
    },  
    {
        src: audio9.src,
        title: "Lambada"
    },
    {
        src: audio10.src,
        title: "Dance 1"
    },
    {
        src: audio11.src,
        title: "Broken Heart"
    }, 
];

function lodaSong(song){
    audio.src= song.src;                
}

function playSong(){
    player.classList.add('play')
    audio.play()
    if(pauseImg.classList.contains('play-pause')){
        pauseImg.classList.remove('play-pause')
        playImg.classList.add('play-pause')
    }
}
function pauseSong(){
    player.classList.remove('play') 
    audio.pause()
    if(playImg.classList.contains('play-pause')){
        pauseImg.classList.add('play-pause')
        playImg.classList.remove('play-pause')
    }
}
playBtn.addEventListener('click', () =>{
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})
nextBtn.addEventListener('click', nextSong)
function nextSong(){
    songIndex ++

    if(songIndex > songs.length -1){
        songIndex = 0
    }

    lodaSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSong)
function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    lodaSong(songs[songIndex])
    playSong()
}

music1.addEventListener('click', onAudioHG)
function onAudioHG(){
    songIndex = 0;
    audio.src = audio1.src;
    playSong();
}
music2.addEventListener('click', onAudioTh)
function  onAudioTh(){
    songIndex = 1;
    audio.src = audio2.src;
    playSong();   
}
music3.addEventListener('click', onAudioThree)
function  onAudioThree(){
    songIndex = 2;
    audio.src = audio3.src;
    playSong();
}
music4.addEventListener('click', onAudiofour)
function  onAudiofour(){
    audio.src = audio4.src;
    playSong();
    songIndex = 3;
}

music5.addEventListener('click', onAudioFive)
function  onAudioFive(){
    audio.src = audio5.src;
    playSong();

    songIndex = 4;
}
music6.addEventListener('click', onAudioSixe)
function  onAudioSixe(){
    audio.src = audio6.src;
    playSong();
    songIndex = 5;
}
music7.addEventListener('click', onAudioSeven)
function  onAudioSeven(){
    audio.src = audio7.src;
    playSong();
    title.innerHTML = "Rose Baby Rose";
    songIndex = 6;
}
music8.addEventListener('click', onAudioEight)
function  onAudioEight(){
    audio.src = audio8.src;
    playSong();
    songIndex = 7;
}
music9.addEventListener('click', onAudioNine)
function  onAudioNine(){
    audio.src = audio9.src;
    playSong();
    songIndex = 8;
}
music10.addEventListener('click', onAudioTen)
function  onAudioTen(){
    audio.src = audio10.src;
    playSong();
    songIndex = 9;
}
music11.addEventListener('click', onAudioElemen)
function  onAudioElemen(){
    audio.src = audio11.src;
    playSong();
    songIndex = 10;
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    
    function setProgress(e){
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = audio.duration
    
        audio.currentTime = (clickX / width) * duration
    
    }
    progressContainer.addEventListener('click', setProgress)
    audio.addEventListener('ended', nextSong)
    