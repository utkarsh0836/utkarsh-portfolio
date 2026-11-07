// Hover to reveal on desktop; tap to toggle on touch devices.
const menu=document.querySelector('.menu');
const drawer=document.getElementById('site-drawer');
const backdrop=document.getElementById('drawer-backdrop');
const closeBtn=document.querySelector('.drawer-close');
const edge=document.getElementById('edge-trigger');
const hoverCapable=window.matchMedia('(hover: hover) and (pointer: fine)');
let openedByClick=false;
let closeTimer;
function setDrawer(open, focusClose=false){
 if(!drawer||!menu||!backdrop)return;
 clearTimeout(closeTimer);
 drawer.classList.toggle('open',open);
 drawer.setAttribute('aria-hidden',String(!open));
 drawer.inert=!open;
 menu.setAttribute('aria-expanded',String(open));
 backdrop.hidden=!open;
 backdrop.classList.toggle('show',open);
 document.body.classList.toggle('drawer-open',open && !hoverCapable.matches);
 if(open && focusClose)closeBtn?.focus();
}
function hoverOpen(){if(hoverCapable.matches)setDrawer(true)}
function hoverClose(){if(hoverCapable.matches && !openedByClick){closeTimer=setTimeout(()=>setDrawer(false),180)}}
edge?.addEventListener('mouseenter',hoverOpen);
menu?.addEventListener('mouseenter',hoverOpen);
drawer?.addEventListener('mouseenter',()=>clearTimeout(closeTimer));
drawer?.addEventListener('mouseleave',hoverClose);
edge?.addEventListener('mouseleave',hoverClose);
menu?.addEventListener('mouseleave',hoverClose);
menu?.addEventListener('click',()=>{const next=!drawer.classList.contains('open');openedByClick=next;setDrawer(next,next)});
closeBtn?.addEventListener('click',()=>{openedByClick=false;setDrawer(false);menu?.focus()});
backdrop?.addEventListener('click',()=>{openedByClick=false;setDrawer(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && drawer?.classList.contains('open')){openedByClick=false;setDrawer(false);menu?.focus()}});
drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{openedByClick=false;setDrawer(false)}));
hoverCapable.addEventListener('change',()=>{openedByClick=false;setDrawer(false)});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();const copy=document.getElementById('copy-email');if(copy)copy.addEventListener('click',async()=>{const value=copy.dataset.email;try{await navigator.clipboard.writeText(value);copy.textContent='Copied ✓';}catch{const el=document.createElement('textarea');el.value=value;document.body.appendChild(el);el.select();try{document.execCommand('copy');copy.textContent='Copied ✓';}catch{copy.textContent=value;}el.remove();}});const form=document.getElementById('contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject='Portfolio contact: '+data.get('subject');const body='Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\n'+data.get('message');const link='mailto:utkarsh0836a@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);const status=document.getElementById('form-status');status.textContent='Your email application should open. Please press Send there. If it does not open, use the direct email link below.';window.location.href=link;});