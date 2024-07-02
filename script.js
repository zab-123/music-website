 

let songIndex= 0;
let audioElement = new Audio('songs/Let Me Love You(PagalWorld.com.se).mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let msn = document.getElementById('msn');

let songs = [
    {songName: "Let me love you",filePath: "songs/1.mp3" ,coverPath:"covers/chandan-verma-2SY5YB0Szf4-unsplash.jpg"},
    {songName: "Solo",filePath: "songs/2.mp3" ,coverPath:"covers/clark-tibbs-oqStl2L5oxI-unsplash.jpg"},
    {songName: "Kali-Kali-zulfo-ke",filePath: "songs/3.mp3" ,coverPath:"covers/greg-rakozy-oMpAz-DN-9I-unsplash.jpg"},
    {songName: "Kesariya",filePath: "songs/4.mp3" ,coverPath:"covers/henry-be-IicyiaPYGGI-unsplash.jpg"},
    {songName: "Yeh Dil Deewana",filePath: "songs/5.mp3" ,coverPath:"covers/istockphoto-486440133-612x612.jpg"},
    {songName: "Night changes",filePath: "songs/6.mp3" ,coverPath:"covers/jr-korpa-wAXD_Its-48-unsplash.jpg"},
    {songName: "I don't wanna Live",filePath: "songs/7.mp3" ,coverPath:"covers/mohammadhosein-mohebbi-6dkoR1b4nt0-unsplash.jpg"},
]

songItem.forEach((Element,i) => {
       console.log(Element,i);
       Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
       Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () =>{
       console.log('timeupdate');
       progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
       console.log(progress);
       progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
                Element.classList.remove('fa-circle-pause');
                Element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
       Element.addEventListener('click', (e)=>{
            songIndex =parseInt(e.target.id);
            makeAllPlays();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            msn.innerText= songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
       })
})


document.getElementById('next').addEventListener('click', () =>{
        if(songIndex>=6){
            songIndex = 0;
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        msn.innerText= songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
})


document.getElementById('previous').addEventListener('click', () =>{
        if(songIndex<=0){
            songIndex = 6;
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
            msn.innerText= songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
})



