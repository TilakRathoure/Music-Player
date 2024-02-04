const progress= document.getElementById("progress");
 const music=document.getElementById("song");
 const play=document.getElementById("play");
 const cnt=document.getElementById("cnt");
 const total=document.getElementById("total-time");
 const current=document.getElementById("current-time");




 progress.addEventListener("input",function(){
   music.play();
    music.currentTime=progress.value;
    cnt.classList.remove("fa-play");
    cnt.classList.add("fa-pause");
 })



 music.onloadedmetadata=function(){
   let sec=Math.floor((music.duration)%60);
   let min=Math.floor((music.duration)/60);
   sec=String(sec);
   min=String(min);
   if(sec.length==1){
      sec="0"+sec;
   }
   else if(sec.length==1 && min.length==1){sec="0"+sec;
   min="0"+min;
}
   total.innerHTML=`${min}:${sec}`;
   music.pause();
   progress.max=music.duration;
   progress.value=music.currentTime;
 }




 function playpause(){
    if(cnt.classList.contains("fa-pause")){
        music.pause();
        cnt.classList.remove("fa-pause");
        cnt.classList.add("fa-play");
    }
    else{
            music.play();
            cnt.classList.remove("fa-play");
            cnt.classList.add("fa-pause");
    }
 }




 if(music.play()){
    setInterval(()=>{progress.value=music.currentTime;
      500});
 }




 const volume=document.querySelector("#firstdiv");
 const volumeicon=document.querySelector("#volume");
 const changevolume=document.querySelector("#change-volume");
 const divofvolume=document.querySelector(".div-of-change-volume");
 volume.addEventListener("click",()=>{
   if(divofvolume.style.display=="none"){
      divofvolume.style.display="block"
   }
   else{
      divofvolume.style.display="none"
   }
 });




   changevolume.addEventListener('input', function() {

   if(changevolume.value==0){
      volumeicon.classList.add("fa-volume-xmark");
      volumeicon.classList.remove("fa-volume-high");
   }
   else if(changevolume.value<=40){
      volumeicon.classList.add("fa-volume-low");
      volumeicon.classList.remove("fa-volume-xmark");
      volumeicon.classList.remove("fa-volume-high");
   // }
   }
   else{
      volumeicon.classList.add("fa-volume-high");
      volumeicon.classList.remove("fa-volume-xmark");

   }
 });





 setInterval(()=>{
   let sec=Math.floor((music.currentTime)%60);
   let min=Math.floor((music.currentTime)/60);
   sec=String(sec);
   if(sec.length==1){
      sec="0"+sec;
      current.innerHTML=`${min}:${sec}`;
   }
   else if(min.length==1){
      min="0"+min;
      current.innerText=`${min}:${sec}`;
   }
   else if(min.length==1&&sec.length==1){
      sec="0"+sec;
      min="0"+min;
      current.innerText=`${min}:${sec}`;
   }
   else{
   current.innerHTML=`${min}:${sec}`;}
 },1000)






 const repeat=document.querySelector(".repeat");
 repeat.addEventListener("click",()=>{
   repeat.classList.toggle("active");
 })


 const heart=document.querySelector(".heart");
 heart.addEventListener("click",()=>{
   heart.classList.toggle("active");
 })





 songs=[{artist:"Post Malone",songname:"White Iverson",image:"./Data/pic1.jpg",aboutimage:"./Data/artist1.jpg",aboutartist:"Post Malone, aka Austin Richard Post, is a genre-blending American artist celebrated for hits like \"White Iverson\" and \"Rockstar.\" His music combines hip-hop, rock, and pop, delving into themes of love, nightlife, and introspection, captivating a broad fan base.",aboutname:"Post Malone",background:"./Data/artist1.jpg",song:"./Data/song1.mp3"},{artist:"The Weeknd",songname:"Blinding Lights",image:"./Data/pic2.png",aboutimage:"./Data/artist2,5.jpg",aboutartist:"ldfsjglsdfg",aboutname:"The Weeknd",background:"./Data/artist2,5.jpg",song:"./Data/song2.mp3"},{artist:"Travis Scott",songname:"Goosebumps",image:"./Data/pic3.jpg",aboutimage:"./Data/artist3.jpg",aboutartist:"",aboutname:"Travis Scott",background:"./Data/artist3.jpg",song:"./Data/song3.mp3"},{artist:"Dababy",songname:"Rockstar",image:"./Data/pic4.jpg",aboutimage:"./Data/artist4.jpg",aboutartist:"",aboutname:"Dababy",background:"./Data/artist4.jpg",song:"./Data/song4.mp3"},
 {artist:"The Weeknd",songname:"Reminder",image:"./Data/pic5.jpg",aboutimage:"./Data/artist2,5.jpg",aboutartist:"",aboutname:"The Weeknd",background:"./Data/artist2,5.jpg",song:"./Data/song5.mp3"}
];




const artist=document.querySelector("#artist");
const songname=document.querySelector("#songname");
const background=document.querySelector(".tryingnew");
const image=document.querySelector("#image");
const previous=document.querySelector("#previous");
const next=document.querySelector("#next");
const aboutimage=document.querySelector(".aboutpanel img");
const aboutartist=document.querySelector(".aboutpanel p");
const aboutname=document.querySelector(".aboutpanel h2");




function songloaded(songindex){
   artist.innerHTML=songs[songindex].artist;
   songname.innerHTML=songs[songindex].songname;
   image.src=songs[songindex].image;

   background.style.background=`url(${songs[songindex].background})`;
   background.style.backgroundSize="cover";

   music.src=songs[songindex].song;
   aboutimage.src=songs[songindex].aboutimage;
   aboutartist.innerHTML=songs[songindex].aboutartist;
   aboutname.innerHTML=songs[songindex].aboutname;



};
let songindex=0;

songloaded(songindex);



next.addEventListener("click",()=>{
   if(songindex==4){
      songindex=0;
   }
   else{
      songindex+=1;
   }
   songloaded(songindex);
});



previous.addEventListener("click",()=>{
   if(songindex==0){
      songindex=4;
   }
   else{
      songindex-=1;
   }
   songloaded(songindex);
});



const about=document.querySelector("#about");
const aboutpanel=document.querySelector(".aboutpanel");
const back=document.querySelector("#back");
const nav=document.querySelector(".nav");

about.addEventListener("click",()=>{
   aboutpanel.classList.toggle("active");
   back.classList.toggle("active");
   nav.classList.toggle("active");
})

back.addEventListener("click",()=>{
   aboutpanel.classList.toggle("active");
   back.classList.toggle("active");
   nav.classList.toggle("active");
})
 









