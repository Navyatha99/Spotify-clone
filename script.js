console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=1;
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Bang Bang", filePath: "1.mp3",coverpath:"1.jpg"},
    {songName: "Premiche premava", filePath: "2.mp3",coverpath:"2.jpg"},
    {songName: "Challaga", filePath: "3.mp3",coverpath:"3.jpg"},
    {songName: "Nenu Nuvvantu", filePath: "4.mp3",coverpath:"4.jpg"},
    {songName: "Emo Emo", filePath: "5.mp3",coverpath:"5.jpg"},
    {songName: "Modalaudam", filePath: "6.mp3",coverpath:"6.jpg"},
    {songName: "Damarukam", filePath: "7.mp3",coverpath:"7.jpg"},
    {songName: "Darshana", filePath: "8.mp3",coverpath:"8.jpg"},
    {songName: "Na Hridayam", filePath: "9.mp3",coverpath:"9.jpg"}
]
// songItems.forEach((element,i)=>{
// console.log(element,i);
// element.getElementsByTagName("img")[0].src=songs[i].coverPath;
// element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
// })
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
//Handle play pause click
masterPlay.addEventListener('click',()=>{
 if(audioElement.paused||audioElement.currentTime<=0){
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity=1;
}
else
{
 audioElement.pause();
 masterPlay.classList.add('fa-play-circle');
  masterPlay.classList.remove('fa-pause-circle');
  gif.style.opacity=0;
}
}
)
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
//update the bar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
 audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
   console.log(e.target);
   makeAllPlays();
   songIndex=parseInt(e.target.id);
  // masterSongName.innerText=songs[songIndex-1].songName;
  console.log(songIndex);
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');
   let val=songIndex+1;
   audioElement.src=`${val}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
 })
})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=9)
songIndex=0;
else
 songIndex+=1;
 audioElement.src=`${songIndex}.mp3`;
// masterSongName.innerText=songs[songIndex-1].songName;
 audioElement.currentTime=0;
 audioElement.play();
 gif.style.opacity=1;
 masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=0;
    else
     songIndex-=1;

     audioElement.src=`${songIndex}.mp3`;
     //masterSongName.innerText=songs[songIndex-1].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    })

