console.log("Welcome to Mi music");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('s2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let  s2= [
    {songName: "Vaaste", filePath: "s2/1.mp3", coverPath: "covers2/1.jpg"},
    {songName: "Bule Eyes", filePath: "s2/2.mp3", coverPath: "covers2/2.jpg"},
    {songName: "Paani_Paani", filePath: "s2/3.mp3", coverPath: "covers2/3.jpg"},
    {songName: "Desi Kalakaar", filePath: "s2/4.mp3", coverPath: "covers2/4.jpg"},
    {songName: "LOVE-DOSE", filePath: "s2/5.mp3", coverPath: "covers2/5.jpg"},
    {songName: "Sakhiyan 2.0", filePath: "s2/2.mp3", coverPath: "covers2/6.jpg"},
    {songName: "Jalebi baby", filePath: "s2/2.mp3", coverPath: "covers2/7.jpg"},
    {songName: "Param Sundari ", filePath: "s2/2.mp3", coverPath: "covers2/8.jpg"},
    {songName: "Raataan Lambiyan ", filePath: "s2/2.mp3", coverPath: "covers2/9.jpg"},
    {songName: "Ranjha ", filePath: "s2/4.mp3", coverPath: "covers2/10.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = s2[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = s2[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `s2/${songIndex+1}.mp3`;
        masterSongName.innerText = s2[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `s2/${songIndex+1}.mp3`;
    masterSongName.innerText = s2[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `s2/${songIndex+1}.mp3`;
    masterSongName.innerText = s2[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})