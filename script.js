console.log("welcome to spotify");
//initialisze the variable
let songindex =0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName:"NO-LOVE - Subh", filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Jaadugar - Paradox", filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Mehrama - Darshan Raval", filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Cold Water - Justin Bieber", filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Main Rahoon Ya Na Rahoon Song - Arijit Singh", filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"Tera Hua Na Kabhii - King", filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Tinka - Jubin Nautiyal", filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"Cheap Thrills - SIA", filePath:"songs/8.mp3",coverPath:"cover/8.jpg"},
    {songName:"Emptiness - Gajendra Verma", filePath:"songs/9.mp3",coverPath:"cover/9.jpg"},
    {songName:"Takeaway - Chainsmokers,ILLENIUM", filePath:"songs/10.mp3",coverPath:"cover/10.jpg"},
]
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// audioElement.play();
 

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
 

 //update seekbar
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element )=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element )=>{
   element.addEventListener('click', (e)=>{
    console.log(e.target);
    makeAllPlays();
    songindex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText =songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    })
})
 

document.getElementById('next').addEventListener('click',()=>{
   if(songindex>=9){
    songindex = 0;
   } 
   else{
    songindex += 1;
   }
   audioElement.src = `songs/${songindex+1}.mp3`;
   masterSongName.innerText =songs[songindex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
     songindex = 9;
    } 
    else{
     songindex -= 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText =songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 })