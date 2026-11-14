// Decorative, service-specific vector watermarks.
const serviceArt = [
 '<rect x="45" y="35" width="220" height="165" rx="12"/><path d="M45 75h220M45 115h220M45 155h220M115 35v165M195 35v165"/><path d="m130 95 12 5 17-16m-29 57 12 5 17-16"/>',
 '<path d="M40 200h240M55 200v-55h28v55m25 0V115h28v85m25 0V85h28v115m25 0V45h28v155"/><path d="m55 115 66-40 58 15 60-65"/><circle cx="121" cy="75" r="5"/><circle cx="179" cy="90" r="5"/>',
 '<path d="M75 30h120l40 40v150H75zM195 30v40h40M100 95h90M100 120h70M100 145h40"/><circle cx="215" cy="170" r="44"/><path d="m194 170 15 15 27-30"/>',
 '<path d="m155 25 90 35v75c0 48-90 85-90 85s-90-37-90-85V60z"/><circle cx="155" cy="115" r="48"/><path d="m133 133 44-40"/><circle cx="135" cy="99" r="8"/><circle cx="176" cy="133" r="8"/>',
 '<rect x="40" y="35" width="240" height="180" rx="12"/><path d="M40 80h240M95 80v135"/><circle cx="67" cy="110" r="10"/><circle cx="67" cy="152" r="10"/><circle cx="67" cy="191" r="10"/><path d="M115 110h75m-75 42h100m-100 39h55m45-81 8 8 12-15m-5 46 8 8 12-15"/>',
 '<path d="M40 200h240M45 195l55-45 50 10 55-65 65-55"/><path d="M225 40h45v45"/><circle cx="100" cy="150" r="8"/><circle cx="150" cy="160" r="8"/><circle cx="205" cy="95" r="8"/>'
];
function decorateServices(){document.querySelectorAll('.service').forEach((card,i)=>{const art=document.createElement('div');art.className='service-art';art.setAttribute('aria-hidden','true');art.innerHTML='<svg viewBox="0 0 320 240" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+serviceArt[i]+'</svg>';card.prepend(art);});}
decorateServices();
new MutationObserver(decorateServices).observe(document.getElementById('service-grid'),{childList:true});
