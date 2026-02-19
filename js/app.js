
const salas=['sala1','sala2','sala3','sala4','sala5','sala6'];
const nombres={
  sala1:'Sala 1: Metapa – El nacimiento del genio',
  sala2:'Sala 2: León – El niño prodigio',
  sala3:'Sala 3: Chile – El estallido modernista',
  sala4:'Sala 4: Madrid y París – El poeta diplomático',
  sala5:'Sala 5: Obras maestras',
  sala6:'Sala 6: Últimos años y legado'
};
function goTo(id){
  salas.forEach(s=>{
    const el=document.getElementById(s);
    if(el){ el.setAttribute('visible', s===id); }
  });
  const t=document.getElementById('salaTitulo');
  if(t&&nombres[id]) t.textContent=nombres[id];
}
window.goTo=goTo;
function openOverlay(){document.getElementById('playerOverlay').classList.remove('hidden');}
window.openOverlay=openOverlay;
