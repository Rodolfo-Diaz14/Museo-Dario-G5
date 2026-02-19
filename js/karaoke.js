
window.addEventListener('DOMContentLoaded', ()=>{
  const overlay=document.getElementById('playerOverlay');
  const closeBtn=document.getElementById('closeOverlay');
  if(closeBtn) closeBtn.addEventListener('click',()=>overlay.classList.add('hidden'));
  const textEl=document.getElementById('karaokeText');
  const select=document.getElementById('poemSelect');
  const sourceLink=document.getElementById('poemSource');
  const poems={
    sonatina:{source:'https://www.cervantesvirtual.com/obras/autor/dario-ruben-1867-1916-69',cues:[
      [0,'La princesa está triste... ¿Qué tendrá la princesa?'],
      [9,'Los suspiros se escapan de su boca de fresa,'],
      [18,'que ha perdido la risa, que ha perdido el color.'],
      [28,'La princesa está pálida en su silla de oro,'],
      [38,'está mudo el teclado de su clave sonoro,'],
      [48,'y en un vaso, olvidada, se desmaya una flor.']
    ]},
    cisnes:{source:'https://www.cervantesvirtual.com/obras/autor/dario-ruben-1867-1916-69',cues:[
      [0,'¡Qué signo haces, oh Cisne, con tu encorvado cuello'],
      [8,'al paso de los tristes y errabundos poetas?'],
      [16,'¿Eres acaso un encanto de blancos amuletos'],
      [24,'o un símbolo de ensueño para nuevas estéticas?']
    ]},
    margarita:{source:'https://www.cervantesvirtual.com/obras/autor/dario-ruben-1867-1916-69',cues:[
      [0,'Margarita, está linda la mar, y el viento'],
      [8,'lleva esencia sutil de azahar; yo siento'],
      [16,'en el alma una alondra cantar; tu acento...'],
      [24,'Margarita, te voy a contar un cuento.']
    ]}
  };
  let timer=null;let t0=0;let pausedAt=0;
  const render=(k)=>{const p=poems[k];sourceLink.href=p.source;textEl.innerHTML=p.cues.map(c=>`<div class="line" data-t="${c[0]}">${c[1]}</div>`).join('');}
  if(select){render(select.value);select.addEventListener('change',()=>render(select.value));}
  const tick=()=>{const elapsed=(Date.now()-t0)/1000;const lines=[...textEl.querySelectorAll('.line')];let idx=-1;for(let i=0;i<lines.length;i++){const t=parseFloat(lines[i].dataset.t);if(elapsed>=t)idx=i;}lines.forEach((ln,i)=>ln.classList.toggle('active',i===idx));if(idx>=0){lines[idx].scrollIntoView({block:'center'});} }
  const kStart=document.getElementById('kStart');
  const kPause=document.getElementById('kPause');
  const kReset=document.getElementById('kReset');
  if(kStart)kStart.addEventListener('click',()=>{if(!timer){t0=Date.now()-pausedAt*1000;timer=setInterval(tick,300);}});
  if(kPause)kPause.addEventListener('click',()=>{if(timer){clearInterval(timer);timer=null;pausedAt=(Date.now()-t0)/1000;}});
  if(kReset)kReset.addEventListener('click',()=>{if(timer){clearInterval(timer);timer=null;}pausedAt=0;t0=Date.now();tick();});
});
