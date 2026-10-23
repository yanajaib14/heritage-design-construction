// Page interactions ported from the approved homepage draft.
// initChrome wires the shared header and phone menu once; initPage wires whatever the current page contains
// and returns a cleanup for when the visitor navigates to another page.

export function initChrome() {
  if (window.__hdcChrome) return;
  window.__hdcChrome = true;
  var hdr=document.getElementById('hdr');
  function onScroll(){hdr.classList.toggle('solid',window.scrollY>30)}
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  // desktop dropdowns
  var menu=document.getElementById('menu');
  function closeAll(except){menu.querySelectorAll('li.open').forEach(function(li){if(li!==except){li.classList.remove('open');li.querySelector('button').setAttribute('aria-expanded','false');li.querySelector('.drop').hidden=true}})}
  menu.querySelectorAll('li > button').forEach(function(b){
    b.addEventListener('click',function(e){e.stopPropagation();var li=b.parentNode,o=!li.classList.contains('open');closeAll(li);li.classList.toggle('open',o);b.setAttribute('aria-expanded',o);li.querySelector('.drop').hidden=!o});
  });
  document.addEventListener('click',function(){closeAll()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();closeSheet()}});
  menu.addEventListener('click',function(e){if(e.target.closest('.drop a'))closeAll()});

  // phone sheet
  var sheet=document.getElementById('sheet'),burger=document.getElementById('burger');
  function closeSheet(){sheet.hidden=true;burger.setAttribute('aria-expanded','false')}
  burger.addEventListener('click',function(){sheet.hidden=false;burger.setAttribute('aria-expanded','true')});
  document.getElementById('closeSheet').addEventListener('click',closeSheet);
  sheet.querySelectorAll('li > button').forEach(function(b){b.addEventListener('click',function(){var s=b.nextElementSibling,o=s.hidden;s.hidden=!o;b.setAttribute('aria-expanded',o);b.parentNode.classList.toggle('open',o)})});
  sheet.addEventListener('click',function(e){if(e.target.closest('a'))closeSheet()});

}

export function initPage() {
  var cleanups = [];
  // estimator demo
  var steps=[
    {label:'Bathroom size',opts:['Powder','Hall bath','Primary suite'],pick:1},
    {label:'Project type',opts:['Tub-to-shower','Tub / shower replacement','Vanity & fixtures'],pick:0},
    {label:'Finish level',opts:['Classic','Elevated','Signature'],pick:1},
    {label:'Timing',opts:['As soon as possible','1–3 months','Just planning'],pick:1}
  ],cur=0,done=false;
  var body=document.getElementById('estBody'),next=document.getElementById('estNext');
  if(body&&next){
  function render(){
    if(done){
      document.getElementById('estStep').textContent='Your estimate';document.getElementById('estLabel').textContent='Preview';
      document.getElementById('estBar').style.width='100%';
      body.innerHTML='<div class="est-done"><strong>Estimated range: [$X,XXX – $X,XXX]</strong><span>The live estimator will show a ballpark price here once Fast Bath pricing is confirmed.</span></div>';
      next.textContent='Start over';return}
    var s=steps[cur];
    document.getElementById('estStep').textContent='Step '+(cur+1)+' of 4';
    document.getElementById('estLabel').textContent=s.label;
    document.getElementById('estBar').style.width=((cur+1)*25)+'%';
    body.innerHTML='<div class="opts">'+s.opts.map(function(o,i){return '<button type="button" class="opt" aria-pressed="'+(i===s.pick)+'" data-i="'+i+'">'+o+'</button>'}).join('')+'</div>';
    next.textContent=cur===3?'See my estimate →':'Continue →';
  }
  body.addEventListener('click',function(e){var b=e.target.closest('.opt');if(!b)return;steps[cur].pick=+b.dataset.i;render()});
  next.addEventListener('click',function(){if(done){done=false;cur=0}else if(cur<3)cur++;else done=true;render()});
  render();
  }

  // before/after sliders
  document.querySelectorAll('.ba').forEach(function(ba){var r=ba.querySelector('input');if(!r)return;
    r.addEventListener('input',function(){ba.style.setProperty('--p',r.value+'%')});
    // with a mouse, the divider simply follows the pointer: no dragging needed
    // (checked per event, so touch laptops and hybrid devices get it too)
    if(!matchMedia('(hover: none)').matches) ba.classList.add('ba-hover');
    ba.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'&&e.pointerType!=='pen')return;ba.classList.add('ba-hover');var b=ba.getBoundingClientRect(),v=Math.max(0,Math.min(100,(e.clientX-b.left)/b.width*100));ba.style.setProperty('--p',v+'%');r.value=Math.round(v)});
  });

  // services: hovered panel opens
  (function(){
    var row=document.getElementById('svcRow');if(!row)return;var ps=row.querySelectorAll('.svc2');
    ps.forEach(function(p){['mouseenter','focusin'].forEach(function(ev){p.addEventListener(ev,function(){ps.forEach(function(x){x.classList.toggle('on',x===p)})})})});
  })();

  // kitchen option cards: gentle tilt + light that follows the pointer
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(hover:hover)').matches)return;
    document.querySelectorAll('.kp').forEach(function(c){
      c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.setProperty('--ry',((x-.5)*6)+'deg');c.style.setProperty('--rx',((.5-y)*5)+'deg')});
      c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
    });
  })();

  // closing CTA: soft spotlight follows the pointer
  (function(){
    var c=document.getElementById('contact');if(!c||!matchMedia('(hover:hover)').matches)return;
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});
  })();

  // portfolio filter
  // portfolio categories: tabs swap the grid; /portfolio#bathrooms (or #kitchens, #whole-home) opens on that tab
  (function(){
    var fb=[].slice.call(document.querySelectorAll('.filters button')),pg=document.getElementById('pgrid'),tiles=pg?pg.querySelectorAll('.pf,.pf3'):[];
    if(!pg||!fb.length)return;
    function pick(f,animate){fb.forEach(function(x){x.setAttribute('aria-pressed',x.dataset.f===f)});
      function swap(){tiles.forEach(function(t){t.hidden=f!=='all'&&t.dataset.k!==f;t.classList.remove('rv-arm');t.classList.add('rv-go')});pg.classList.remove('fade')}
      if(!animate)return swap();pg.classList.add('fade');setTimeout(swap,220)}
    fb.forEach(function(b){b.addEventListener('click',function(){pick(b.dataset.f,true)})});
    var h={'#kitchens':'kitchen','#bathrooms':'bath','#whole-home':'whole'}[location.hash];if(h)pick(h,false);
  })();


  // service-area map (Google Maps style: zoom, drag to pan, pin drops on the city)
  (function(){
    var map=document.getElementById('areaMap');if(!map)return;
    var svg=map.querySelector('svg'),pin=document.getElementById('pin'),drop=pin.querySelector('.pin-drop'),note=document.getElementById('mapNote');
    var dots=map.querySelectorAll('.dot'),tags=document.querySelectorAll('#cityTags button'),pos={},cur='Lacey';
    dots.forEach(function(d){var m=/translate\(([\d.]+),([\d.]+)\)/.exec(d.getAttribute('transform'));pos[d.dataset.city]=[+m[1],+m[2]]});
    var W=600,H=700,vb={x:0,y:0,w:W},anim=null;
    function k(){return vb.w/W}
    function place(){var s=k();
      dots.forEach(function(d){var p=pos[d.dataset.city];d.setAttribute('transform','translate('+p[0]+','+p[1]+') scale('+s+')')});
      var p=pos[cur];pin.setAttribute('transform','translate('+p[0]+','+p[1]+') scale('+s+')');
      svg.setAttribute('viewBox',vb.x+' '+vb.y+' '+vb.w+' '+vb.w*H/W);svg.style.touchAction=vb.w<W-1?'none':'pan-y'}
    function clamp(v){v.w=Math.min(W,Math.max(W/4,v.w));v.x=Math.min(W-v.w,Math.max(0,v.x));v.y=Math.min(H-v.w*H/W,Math.max(0,v.y));return v}
    function go(t,ms){t=clamp(t);if(anim)cancelAnimationFrame(anim);
      if(matchMedia('(prefers-reduced-motion: reduce)').matches||!ms){vb=t;place();return}
      var a={x:vb.x,y:vb.y,w:vb.w},t0=null;
      (function step(ts){if(!t0)t0=ts;var e=Math.min(1,(ts-t0)/ms),q=1-Math.pow(1-e,3);
        vb={x:a.x+(t.x-a.x)*q,y:a.y+(t.y-a.y)*q,w:a.w+(t.w-a.w)*q};place();if(e<1)anim=requestAnimationFrame(step)})(performance.now());
}
    function zoom(f,cx,cy){if(cx==null){cx=pos[cur][0];cy=pos[cur][1]}var nw=Math.min(W,Math.max(W/4,vb.w*f)),r=nw/vb.w;go({x:cx-(cx-vb.x)*r,y:cy-(cy-vb.y)*r,w:nw},260)}
    function show(c){
      if(!pos[c]||c===cur)return;cur=c;var p=pos[c];place();
      drop.style.animation='none';void drop.getBBox();drop.style.animation='';
      var vh=vb.w*H/W;if(p[0]<vb.x+20||p[0]>vb.x+vb.w-20||p[1]<vb.y+30||p[1]>vb.y+vh-60)go({x:p[0]-vb.w/2,y:p[1]-vh/2,w:vb.w},350);
      note.innerHTML=c==='Lacey'?'<span><b>Lacey</b> · Home base and showroom</span><a href="https://www.google.com/maps/dir/?api=1&amp;destination=8695+Martin+Way+E+%23101+Lacey+WA+98516" target="_blank" rel="noopener">Directions</a>'
        :'<span><b>'+c+'</b> · We design, supply and build here</span><a href="#contact">Book a consult</a>';
      tags.forEach(function(t){t.classList.toggle('on',t.dataset.city===c)});
      dots.forEach(function(d){d.classList.toggle('on',d.dataset.city===c)});
    }
    tags.forEach(function(t){['mouseenter','focus','click'].forEach(function(ev){t.addEventListener(ev,function(){show(t.dataset.city)})})});
    dots.forEach(function(d){['mouseenter','click'].forEach(function(ev){d.addEventListener(ev,function(){show(d.dataset.city)})})});
    map.querySelector('[data-z="in"]').addEventListener('click',function(){zoom(.6)});
    map.querySelector('[data-z="out"]').addEventListener('click',function(){zoom(1/.6)});
    map.querySelector('.recenter').addEventListener('click',function(){go({x:0,y:0,w:W},350)});
    svg.addEventListener('dblclick',function(e){var r=svg.getBoundingClientRect(),s=vb.w/r.width;zoom(.6,vb.x+(e.clientX-r.left)*s,vb.y+(e.clientY-r.top)*s)});
    var drag=null;
    svg.addEventListener('pointerdown',function(e){if(e.target.closest('.dot'))return;drag={x:e.clientX,y:e.clientY,v:{x:vb.x,y:vb.y,w:vb.w}};svg.setPointerCapture(e.pointerId);svg.classList.add('drag')});
    svg.addEventListener('pointermove',function(e){if(!drag)return;var s=vb.w/svg.getBoundingClientRect().width;vb=clamp({x:drag.v.x-(e.clientX-drag.x)*s,y:drag.v.y-(e.clientY-drag.y)*s,w:drag.v.w});place()});
    ['pointerup','pointercancel'].forEach(function(ev){svg.addEventListener(ev,function(){drag=null;svg.classList.remove('drag')})});
    tags.forEach(function(t){t.classList.toggle('on',t.dataset.city==='Lacey')});
    dots.forEach(function(d){d.classList.toggle('on',d.dataset.city==='Lacey')});
    place();
    // a city page starts with the pin on that city, zoomed in a little
    var start=map.dataset.city;if(start&&pos[start]&&start!=='Lacey'){show(start);go({x:pos[start][0]-W*.35,y:pos[start][1]-H*.35,w:W*.7},0)}
  })();

  // homepage hero: a plain full-screen opener that scrolls away normally (Ben dropped the pinned walk-in, 2026-10-23)
  (function(){
    var hero=document.getElementById('hero');if(hero&&hero.classList.contains('walk'))hero.classList.add('still');
  })();

  // homepage story: a slim rail that tracks the current chapter
  (function(){
    if(!document.getElementById('hero'))return;
    var CH=[['services','What we do'],['programs','Signature programs'],['portfolio','Our work'],['why','Why Heritage'],['showroom','The showroom'],['areas','Where we build'],['contact','Begin']];
    var secs=[],rail=document.createElement('nav');rail.className='story-rail';rail.setAttribute('aria-label','Page chapters');
    CH.forEach(function(c,i){var s=document.getElementById(c[0]);if(!s)return;
      var a=document.createElement('a');a.href='#'+c[0];a.innerHTML='<span>'+c[1]+'</span>';rail.appendChild(a);secs.push([s,a])});
    document.body.appendChild(rail);
    var raf=0;
    function tick(){raf=0;var mid=innerHeight*.45,cur=null;
      secs.forEach(function(x){var r=x[0].getBoundingClientRect();if(r.top<=mid&&r.bottom>mid)cur=x});
      rail.classList.toggle('on',!!cur);secs.forEach(function(x){x[1].classList.toggle('on',x===cur)});
      // the rail sits over light and dark chapters, so it takes the colour of the one behind it
      rail.classList.toggle('dark',!!cur&&cur[0].classList.contains('bg-graph'))}
    function onScroll(){if(!raf)raf=requestAnimationFrame(tick)}
    addEventListener('scroll',onScroll,{passive:true});tick();
    cleanups.push(function(){removeEventListener('scroll',onScroll);if(raf)cancelAnimationFrame(raf);rail.remove()});
  })();

  // tag the building blocks of every page for a scroll reveal, staggered among siblings (homepage hero excluded).
  // Photos get a wipe ("img"), list rows slide in from the side ("row") and columns of cards pop up ("pop").
  (function(){
    var groups=[
      ['img','.split>.sphoto,.reasons-fig,.cta3-fig .fig-clip,.td-fit-fig,.fb-row figure,.cta2-fig,.fb-ba .ba,.fb .ba'],
      ['row',(matchMedia('(min-width: 861px)').matches?'':'.reasons-list li,')+'.cat-brands li,.idx li,.td-scope li,.terms details,.faq details,.td-cta-copy ol li,.fb-row-copy li,.split .rows li,.td-days li'],
      ['pop','.td-ben li,.td-price li,.wc,.steps li,.kp,.td-snap .wrap>div,.fin-lender .wrap>div,.blogo'],
      ['','#pgrid>.pf,#pgrid>.pf3,.stories>*,.sec-head,.pintro>*,.split>.copy>*:not(.rows),.split>.ph,.faq-group>div:first-child,.posts article,.city-grid li,.info>div,.cards>.ph,.res2>a,.art3>a,.form,.topics,.ed-head,.cat-head,.reasons-lead>*:not(.reasons-fig),.cta2-body>*,.cta3-body>*,.cta3-perks li,.cta4-panel>*,.cta4-visit>div,.cta2-visit>*,.td-fit-copy>*,.fb-row-copy>.rn,.fb-row-copy>h3,.fb-ba-copy>*,.fb-aside,.td-quote>*,.td-fine,.dbd-head>*,.td-cta-copy>.eyebrow,.td-cta-copy>h2,.td-cta-copy>p,.td-cta-form,.tenday .intro>*,.fb .copy>*,.fb .est,.areas>*,.b-head>*,.kpaths .head>*,.foot>*']
    ];
    groups.forEach(function(g){
      var kind=g[0],sel=g[1];
      document.querySelectorAll(sel).forEach(function(el){
        if(el.hasAttribute('data-rv')||el.closest('.hero,.walk,.phero,[data-rv]'))return;
        var sib=0,p=el.previousElementSibling;while(p){if(p.matches(sel))sib++;p=p.previousElementSibling}
        el.setAttribute('data-rv',kind);el.style.setProperty('--d',Math.min(sib*(kind==='row'?.06:.09),.54)+'s');
      });
    });
  })();

  // scroll reveal for [data-rv] blocks (visible by default; only armed when motion is allowed)
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    // blocks the visitor has already scrolled past (fast scroll before scripts loaded) stay visible
    var els=[].filter.call(document.querySelectorAll('[data-rv]'),function(e){return e.getBoundingClientRect().bottom>0});els.forEach(function(e){e.classList.add('rv-arm')});
    function show(el){el.classList.add('rv-go');el.classList.remove('rv-arm');io.unobserve(el)}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)show(e.target)})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(e){io.observe(e)});
    // safety net for very fast scrolling: anything that has reached the viewport is shown
    var raf=0;function sweep(){raf=0;els.forEach(function(e){if(e.classList.contains('rv-arm')&&e.getBoundingClientRect().top<innerHeight*.94)show(e)})}
    function onScroll(){if(!raf)raf=requestAnimationFrame(sweep)}
    addEventListener('scroll',onScroll,{passive:true});
    cleanups.push(function(){removeEventListener('scroll',onScroll);io.disconnect()});
  })();

  // services cards and Why Heritage play a short choreography as each piece scrolls in
  // (card wipes open, photo settles, text and chips rise in turn; reason panels slide in with their chrome edge drawing down)
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    var wide=matchMedia('(min-width: 861px)').matches;
    var els=[].slice.call(document.querySelectorAll('.svc2,.wr .wr-fig,.wr-why>.eyebrow,.wr-why>.h2,.wr-why li,.wr-why>.link,.wr-quotes'));
    els=els.filter(function(e){return e.getBoundingClientRect().top>innerHeight*.9});
    els.forEach(function(e){e.classList.add('mm')});
    [].forEach.call(document.querySelectorAll('.svc2'),function(c,k){if(wide)c.style.setProperty('--k',(k*.16)+'s')});
    [].forEach.call(document.querySelectorAll('.svc2 li'),function(li,i,all){var k=[].indexOf.call(li.parentNode.children,li);li.style.setProperty('--i',k)});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('mm-in');io.unobserve(e.target)}})},{threshold:.18});
    // a fully clipped card can't be seen by the observer, so on desktop the row stands in for its panels
    var row=document.getElementById('svcRow');
    els.forEach(function(e){if(!(wide&&e.classList.contains('svc2')))io.observe(e)});
    var rio=null;if(wide&&row){rio=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;rio.disconnect();[].forEach.call(row.querySelectorAll('.svc2.mm'),function(c){c.classList.add('mm-in')})},{threshold:.15});rio.observe(row)}
    // the service photos drift slightly against the scroll
    var bgs=wide?[]:[].slice.call(document.querySelectorAll('.svc2 .bgph.img')),raf=0;
    function drift(){raf=0;bgs.forEach(function(b){var r=b.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;var t=(r.top+r.height/2-innerHeight/2)/innerHeight;b.style.setProperty('--dy',(t*-36).toFixed(1)+'px')})}
    function on(){if(!raf)raf=requestAnimationFrame(drift)}
    addEventListener('scroll',on,{passive:true});drift();
    cleanups.push(function(){io.disconnect();if(rio)rio.disconnect();removeEventListener('scroll',on);els.forEach(function(e){e.classList.remove('mm','mm-in')})});
  })();

  // Why Heritage on desktop: the reason row passing the middle of the screen is lit, the others rest dimmed
  (function(){
    var wr=document.querySelector('.wr');if(!wr||!matchMedia('(min-width: 861px)').matches||!('IntersectionObserver' in window))return;
    var lis=[].slice.call(wr.querySelectorAll('.wr-why li'));if(!lis.length)return;
    wr.classList.add('lit');lis[0].classList.add('on');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)lis.forEach(function(l){l.classList.toggle('on',l===e.target)})})},{rootMargin:'-42% 0px -42% 0px'});
    lis.forEach(function(l){io.observe(l)});
    cleanups.push(function(){io.disconnect();wr.classList.remove('lit');lis.forEach(function(l){l.classList.remove('on')})});
  })();

  // scroll progress line across the top of the page
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var bar=document.createElement('div');bar.className='scroll-bar';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
    var raf=0;function upd(){raf=0;var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}
    function on(){if(!raf)raf=requestAnimationFrame(upd)}
    addEventListener('scroll',on,{passive:true});addEventListener('resize',on);upd();
    cleanups.push(function(){removeEventListener('scroll',on);removeEventListener('resize',on);bar.remove()});
  })();

  // reasons sections: the left column stays pinned while the numbered list scrolls; the row
  // passing the middle of the screen is lit, the others rest dimmed
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(min-width: 861px)').matches||!('IntersectionObserver' in window))return;
    [].slice.call(document.querySelectorAll('.reasons')).forEach(function(r){
      var lis=[].slice.call(r.querySelectorAll('.reasons-list>li'));if(!lis.length)return;
      r.classList.add('scrolly');lis[0].classList.add('on');
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){lis.forEach(function(l){l.classList.toggle('on',l===e.target)})}})},{rootMargin:'-45% 0px -45% 0px'});
      lis.forEach(function(l){io.observe(l)});
      cleanups.push(function(){io.disconnect();r.classList.remove('scrolly')});
    });
  })();

  // homepage portfolio carousel: arrows step through, a photo opens large in the viewer
  (function(){
    var g=document.getElementById('hpfGal');if(!g)return;
    var track=g.querySelector('.hpf3-track'),items=[].slice.call(track.querySelectorAll('button')),dlg=g.querySelector('dialog'),big=dlg.querySelector('img'),count=dlg.querySelector('.hpf3-count'),cur=0;
    function step(dir){var li=track.querySelector('li');track.scrollBy({left:dir*(li.offsetWidth+parseFloat(getComputedStyle(track).columnGap||0)),behavior:'smooth'})}
    function ends(){var max=track.scrollWidth-track.clientWidth-2;g.querySelector('.hpf3-prev').disabled=track.scrollLeft<=2;g.querySelector('.hpf3-next').disabled=track.scrollLeft>=max}
    g.querySelector('.hpf3-prev').addEventListener('click',function(){step(-1)});
    g.querySelector('.hpf3-next').addEventListener('click',function(){step(1)});
    track.addEventListener('scroll',ends,{passive:true});ends();
    function show(i){cur=(i+items.length)%items.length;var im=items[cur].querySelector('img');big.src=im.currentSrc||im.src;big.alt=im.alt;count.textContent=String(cur+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0')}
    items.forEach(function(b,i){b.addEventListener('click',function(){show(i);if(dlg.showModal)dlg.showModal()})});
    dlg.querySelector('.hpf3-x').addEventListener('click',function(){dlg.close()});
    dlg.querySelector('.hpf3-vp').addEventListener('click',function(){show(cur-1)});
    dlg.querySelector('.hpf3-vn').addEventListener('click',function(){show(cur+1)});
    dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
    dlg.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  })();

  // photo decks: top photo slides off and goes to the back of the stack
  document.querySelectorAll('.kdeck').forEach(function(d){
    var cards=[].slice.call(d.querySelectorAll('figure')),col=d.parentNode,n=col.querySelector('.kdeck-n'),
      order=cards.map(function(_,i){return i}),busy=false,timer=0,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
    function paint(){order.forEach(function(c,k){cards[c].style.setProperty('--k',k);cards[c].setAttribute('aria-hidden',k?'true':'false')});
      var top=order[0];n.textContent=String(top+1).padStart(2,'0')}
    function next(){if(busy)return;busy=true;var top=cards[order[0]];
      if(rm){order.push(order.shift());paint();busy=false;return}
      top.classList.add('out');setTimeout(function(){top.classList.add('back');top.classList.remove('out');order.push(order.shift());paint();
        requestAnimationFrame(function(){requestAnimationFrame(function(){top.classList.remove('back');busy=false})})},650)}
    function prev(){if(busy)return;order.unshift(order.pop());paint()}
    function auto(){clearInterval(timer);if(!rm)timer=setInterval(next,4200)}
    col.querySelector('.kdeck-next').addEventListener('click',function(){next();auto()});
    col.querySelector('.kdeck-prev').addEventListener('click',function(){prev();auto()});
    d.addEventListener('click',function(){next();auto()});
    d.addEventListener('pointerenter',function(){clearInterval(timer)});d.addEventListener('pointerleave',auto);
    paint();auto();cleanups.push(function(){clearInterval(timer)});
  });

  // 10-Day day-by-day: while the pinned section scrolls, step through the days
  (function(){
    var w=document.getElementById('dbd2');if(!w||!matchMedia('(min-width: 861px)').matches)return;
    var figs=w.querySelectorAll('.dbd2-media figure'),arts=w.querySelectorAll('.dbd2-copy article'),dash=w.querySelectorAll('.dbd2-dash b'),n=arts.length,cur=0,raf=0;
    function set(k){if(k===cur)return;cur=k;[figs,arts,dash].forEach(function(l){l.forEach(function(e,i){e.classList.toggle('on',i===k)})});
      arts.forEach(function(a,i){a.setAttribute('aria-hidden',i===k?'false':'true')})}
    function upd(){raf=0;var r=w.getBoundingClientRect(),span=w.offsetHeight-innerHeight,p=Math.min(1,Math.max(0,-r.top/Math.max(1,span)));
      w.style.setProperty('--p',p.toFixed(3));set(Math.min(n-1,Math.floor(p*n)))}
    function on(){if(!raf)raf=requestAnimationFrame(upd)}
    addEventListener('scroll',on,{passive:true});addEventListener('resize',on);upd();
    cleanups.push(function(){removeEventListener('scroll',on);removeEventListener('resize',on)});
  })();

  // 10-Day package pricing: choosing a size shows its sample kitchens
  (function(){
    var root=document.getElementById('pk');if(!root)return;
    var tiers=[].slice.call(root.querySelectorAll('.pk-tier')),imgs=[].slice.call(root.querySelectorAll('.pk-media img')),
        sets=[].slice.call(root.querySelectorAll('.pk-thumbs')),capN=root.querySelector('.pk-cap-n'),capP=root.querySelector('.pk-cap-p'),cur=0;
    function show(t,k){
      cur=t;
      tiers.forEach(function(b,i){b.classList.toggle('on',i===t)});
      sets.forEach(function(s,i){s.classList.toggle('on',i===t);[].forEach.call(s.querySelectorAll('button'),function(b,j){b.classList.toggle('on',j===k)})});
      imgs.forEach(function(im){im.classList.toggle('on',+im.dataset.t===t&&+im.dataset.k===k)});
      capN.textContent=tiers[t].querySelector('.pk-name').textContent;capP.textContent=tiers[t].querySelector('strong').textContent;
    }
    tiers.forEach(function(b,i){
      function go(){if(cur!==i)show(i,0)}
      b.addEventListener('mouseenter',go);b.addEventListener('focus',go);b.addEventListener('click',go);
    });
    sets.forEach(function(s,i){[].forEach.call(s.querySelectorAll('button'),function(b,j){b.addEventListener('click',function(){show(i,j)})})});
  })();

  // gentle parallax: photos drift a little slower than the page as it scrolls
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(min-width: 861px)').matches)return;
    var els=[].slice.call(document.querySelectorAll('.td-fit-fig img,.fb-row figure img,.cta2-fig img,.split>.sphoto'));
    if(!els.length)return;
    els.forEach(function(e){e.classList.add('par')});
    var raf=0;function upd(){raf=0;var vh=innerHeight;els.forEach(function(e){var r=e.getBoundingClientRect();if(r.bottom<-100||r.top>vh+100)return;
      var k=((r.top+r.height/2)-vh/2)/vh;e.style.setProperty('--py',(k*-36).toFixed(1)+'px')})}
    function on(){if(!raf)raf=requestAnimationFrame(upd)}
    addEventListener('scroll',on,{passive:true});addEventListener('resize',on);upd();
    cleanups.push(function(){removeEventListener('scroll',on);removeEventListener('resize',on)});
  })();

  // 10-Day figures: rise in once they scroll into view (final numbers only, no counting)
  (function(){
    var f=document.getElementById('figs');if(!f||matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    f.classList.add('arm');
    var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();f.classList.add('go')},{threshold:.4});
    io.observe(f);cleanups.push(function(){io.disconnect()});
  })();

  // 10-day overview timeline: the line draws in and phases appear when it scrolls into view
  (function(){
    var tl=document.getElementById('tl2');if(!tl)return;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){tl.classList.add('in');return}
    tl.classList.add('arm');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){tl.classList.add('in');io.disconnect()}})},{threshold:.35});
    io.observe(tl);cleanups.push(function(){io.disconnect()});
  })();
  // phones: the call / book bar steps aside while a form is on screen, and on the contact page itself
  (function(){
    var bar=document.querySelector('.mbar');if(!bar)return;
    var forms=document.querySelectorAll('form');
    if(!forms.length||!('IntersectionObserver' in window))return;
    var seen=new Set();
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)seen.add(e.target);else seen.delete(e.target)});bar.classList.toggle('off',seen.size>0)},{threshold:.05});
    forms.forEach(function(f){io.observe(f)});
    cleanups.push(function(){io.disconnect();bar.classList.remove('off')});
  })();

  // reviews: previous / next through the quotes rendered on the page
  document.querySelectorAll('.rq').forEach(function(rq){
    var figs=rq.querySelectorAll('figure'),n=rq.querySelector('.rq-n'),i=0;if(figs.length<2)return;
    function show(k){i=(k+figs.length)%figs.length;figs.forEach(function(f,j){f.hidden=j!==i;f.classList.toggle('on',j===i)});
      if(n)n.textContent=String(i+1).padStart(2,'0')+' / '+String(figs.length).padStart(2,'0')}
    rq.querySelector('.rq-prev').addEventListener('click',function(){show(i-1)});
    rq.querySelector('.rq-next').addEventListener('click',function(){show(i+1)});
  });

  return function () {
    cleanups.forEach(function (f) { f(); });
  };
}
