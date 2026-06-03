
function go(id){
document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
document.getElementById(id).classList.add('active');
window.scrollTo({top:0,behavior:'smooth'});
}

const groups=[
['Photo1.jpg','Photo2.jpg','Photo3.jpg','Photo4.jpg','Photo5.jpg'],
['Photo6.jpg','Photo7.jpg','Photo8.jpg','Photo9.jpg','Photo10.jpg'],
['Photo11.jpg','Photo12.jpg','Photo13.jpg','Photo14.jpg','Photo15.jpg'],
['Photo16.jpg','Photo17.jpg','Photo18.jpg','Photo19.jpg','Photo20.jpg'],
['Photo21.jpg','Photo22.jpg','Photo23.jpg','Photo24.jpg','Photo25.jpg']
];

['g1','g2','g3','g4','g5'].forEach((id,i)=>{
document.getElementById(id).innerHTML=groups[i].map(
p=>`<img style="--r:${Math.floor(Math.random()*16-8)}" src="images/${p}">`
).join('');
});

const music=document.getElementById('music');
document.getElementById('musicBtn').onclick=()=>music.paused?music.play():music.pause();

for(let i=0;i<30;i++){
const s=document.createElement('div');
s.className='sparkle';
s.style.left=Math.random()*100+'vw';
s.style.animationDelay=Math.random()*8+'s';
document.body.appendChild(s);
}
