console.log("Welcome to Mi music");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('s3/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let s3 = [
    {songName: "Senorita", filePath: "s3/1.mp3", coverPath: "covers3/1.jpg"},
    {songName: "Say My Name", filePath: "s3/2.mp3", coverPath: "covers3/2.jpg"},
    {songName: "jelibi babe", filePath: "s3/3.mp3", coverPath: "covers3/3.jpg"},
    {songName: "cradils", filePath: "s3/4.mp3", coverPath: "covers3/4.jpg"},
    {songName: "Love me like you do", filePath: "s3/5.mp3", coverPath: "covers3/5.jpg"},
    {songName: "Ignite", filePath: "s3/2.mp3", coverPath: "covers3/6.jpg"},
    {songName: "Diamond", filePath: "s3/2.mp3", coverPath: "covers3/7.jpg"},
    {songName: "Without me", filePath: "s3/2.mp3", coverPath: "covers3/8.jpg"},
    {songName: "Moonlight", filePath: "s3/2.mp3", coverPath: "covers3/9.jpg"},
    {songName: "Faded", filePath: "s3/4.mp3", coverPath: "covers3/10.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = s3[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = s3[i].songName; 
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
        audioElement.src = `s3/${songIndex+1}.mp3`;
        masterSongName.innerText = s3[songIndex].songName;
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
    audioElement.src = `s3/${songIndex+1}.mp3`;
    masterSongName.innerText = s3[songIndex].songName;
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
    audioElement.src = `s3/${songIndex+1}.mp3`;
    masterSongName.innerText = s3[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})