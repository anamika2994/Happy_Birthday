const startBtn = document.getElementById("startBtn");

const gift = document.getElementById("gift");

const music = document.getElementById("music");

const letter = document.getElementById("letter");

const closeLetter = document.getElementById("closeLetter");

const bigGift = document.getElementById("bigGift");

const giftArea = document.getElementById("giftArea");

const cakeSection = document.getElementById("cakeSection");

const blow = document.getElementById("blow");

const candle = document.getElementById("candle");

const final = document.getElementById("final");

const musicBtn = document.getElementById("musicBtn");

music.loop = true;
music.preload = "auto";
music.volume = 1;



/* ================= START BUTTON ================= */


startBtn.onclick = ()=>{

alert("🎉 🎉 Welcome Jannatul! Click the Small Gift Box 🎁  Then open your Big Surprise 💖🎁");

};





/* ================= MAIN GIFT ================= */


gift.onclick = ()=>{


gift.innerHTML="💝";

gift.style.transform="scale(1.3)";


music.play().catch(()=>{});


createConfetti();

fireworks();


setTimeout(()=>{

letter.style.display="flex";

},500);



};





/* ================= LETTER CLOSE ================= */


closeLetter.onclick=()=>{


letter.style.display="none";


};







/* ================= CONFETTI ================= */


function createConfetti(){


for(let i=0;i<120;i++){


let c=document.createElement("div");


c.className="confetti";


c.style.position="fixed";


c.style.left=Math.random()*100+"vw";


c.style.top="-20px";


c.style.width="10px";

c.style.height="10px";


c.style.borderRadius="50%";


c.style.background=
`hsl(${Math.random()*360},100%,50%)`;


c.style.animation=
"fall 3s linear forwards";


document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},3000);


}


}







/* ================= TYPEWRITER ================= */


const text="🎉 Happy Birthday Dear Jannatul 🎂";

let index=0;


function typeWriter(){


if(index < text.length){


document.getElementById("typing").innerHTML += 
text.charAt(index);


index++;


setTimeout(typeWriter,120);


}


}


typeWriter();








/* ================= STARS ================= */


for(let i=0;i<120;i++){


let star=document.createElement("div");


star.className="star";


star.style.position="fixed";


star.style.width="3px";

star.style.height="3px";


star.style.background="white";


star.style.borderRadius="50%";


star.style.left=Math.random()*100+"vw";


star.style.top=Math.random()*100+"vh";


star.style.animation="twinkle 2s infinite";


document.body.appendChild(star);


}







/* ================= ROSE PETALS ================= */


setInterval(()=>{


let petal=document.createElement("div");


petal.innerHTML="🌹";


petal.style.position="fixed";


petal.style.left=Math.random()*100+"vw";


petal.style.top="-20px";


petal.style.fontSize="25px";


petal.style.animation="petalFall 6s linear";


document.body.appendChild(petal);



setTimeout(()=>{

petal.remove();

},6000);



},700);








/* ================= FIREWORK ================= */


function fireworks(){


for(let i=0;i<80;i++){


let fire=document.createElement("div");


fire.className="firework";


fire.style.position="fixed";


fire.style.left="50%";

fire.style.top="50%";


fire.style.width="8px";

fire.style.height="8px";


fire.style.borderRadius="50%";


fire.style.background=
`hsl(${Math.random()*360},100%,50%)`;



fire.style.setProperty(
"--x",
(Math.random()*500-250)+"px"
);


fire.style.setProperty(
"--y",
(Math.random()*500-250)+"px"
);



document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},1200);



}


}





/* ================= BIG GIFT ================= */


bigGift.onclick=()=>{


bigGift.classList.add("open");



setTimeout(()=>{


giftArea.style.display="none";


cakeSection.style.display="block";


},800);



};







/* ================= CANDLE ================= */


blow.onclick=()=>{


candle.innerHTML="💨";



setTimeout(()=>{


cakeSection.style.display="none";


final.style.display="block";


fireworks();



},1000);



};









/* ================= MUSIC BUTTON ================= */


let playing=false;



musicBtn.onclick=()=>{


if(playing){


music.pause();


musicBtn.innerHTML="🎵 Music";


}

else{


music.play();


musicBtn.innerHTML="🔇 Stop Music";


}



playing=!playing;


};









/* ================= COUNTDOWN ================= */


let birthday = 
new Date("August 20, 2026 00:00:00").getTime();



setInterval(()=>{


let now=new Date().getTime();


let distance=birthday-now;



let days=Math.floor(
distance/(1000*60*60*24)
);



let hours=Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);



let minutes=Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);



let seconds=Math.floor(
(distance%(1000*60))
/
1000
);



document.getElementById("timer").innerHTML=

days+" Days : "+
hours+" H : "+
minutes+" M : "+
seconds+" S";



},1000);