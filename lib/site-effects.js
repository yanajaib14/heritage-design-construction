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

  // fast bath before/after slider
  (function(){var ba=document.getElementById('ba');if(!ba)return;var r=ba.querySelector('input');
    r.addEventListener('input',function(){ba.style.setProperty('--p',r.value+'%')});})();

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
  var fb=document.querySelectorAll('.filters button'),pg=document.getElementById('pgrid'),tiles=pg?pg.querySelectorAll('.pf'):[];
  if(pg)fb.forEach(function(b){b.addEventListener('click',function(){fb.forEach(function(x){x.setAttribute('aria-pressed',x===b)});var f=b.dataset.f;
    pg.classList.add('fade');setTimeout(function(){tiles.forEach(function(t){t.hidden=f!=='all'&&t.dataset.k!==f});pg.classList.remove('fade')},220)})});


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

  // hero scroll story: text fades away, stats slide through one by one, then the full showroom photo is left
  (function(){
    var hero=document.getElementById('hero');if(!hero||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var st=hero.querySelector('.hero-sticky'),grid=hero.querySelector('.hero-grid'),band=hero.querySelector('.stats'),
        ss=hero.querySelectorAll('.ss'),cap=hero.querySelector('.hero-cap'),cue=hero.querySelector('.scroll-cue'),on=false,raf=0;
    function cl(v){return v<0?0:v>1?1:v}
    // the showroom photo drifts a few pixels with the pointer
    var ph=hero.querySelector('.hero-photo');
    if(ph&&matchMedia('(hover:hover)').matches){
      hero.addEventListener('pointermove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;ph.style.setProperty('--px',(-x*18).toFixed(1)+'px');ph.style.setProperty('--py',(-y*12).toFixed(1)+'px')});
      hero.addEventListener('pointerleave',function(){ph.style.setProperty('--px','0px');ph.style.setProperty('--py','0px')});
    }
    // offsetHeight ignores the opening animation's transforms, so the measurement is the same during and after the intro
    function fits(){var c=hero.querySelector('.hero-content');return innerWidth>=700&&c.offsetHeight+96<=innerHeight}
    function setup(){var want=fits();if(want===on)return;on=want;hero.classList.toggle('scrolly',on);
      if(!on){[grid,band,cap].forEach(function(e){if(e){e.style.opacity='';e.style.transform=''}})}frame()}
    function frame(){raf=0;if(!on)return;
      var r=hero.getBoundingClientRect(),p=cl(-r.top/(r.height-innerHeight));
      var a=cl(p/.16);grid.style.opacity=1-a;grid.style.transform='translateY('+(-70*a)+'px)';
      var b=cl((p-.06)/.14);band.style.opacity=1-b;band.style.transform='translateY('+(40*b)+'px)';
      cue.style.opacity=1-cl(p/.05);
      ss.forEach(function(el,i){var u=(p-(.2+i*.15))/.17,x,o;
        if(u<=0||u>=1){o=0;x=u<=0?40:-25}else if(u<.3){var e=u/.3;o=e;x=40*(1-e)*(1-e)}else if(u<.7){o=1;x=0}else{var f=(u-.7)/.3;o=1-f;x=-25*f*f}
        el.style.opacity=o;el.style.transform='translateX('+x+'vw)';
        var to=el.dataset.to;if(to){var fr=+el.dataset.from,k=cl(u/.3);el.firstElementChild.textContent=Math.round(fr+(to-fr)*(1-Math.pow(1-k,3)))+(el.dataset.suf||'')}});
      var c=cl((p-.84)/.08);if(cap){cap.style.opacity=c;cap.style.transform='translateY('+(16*(1-c))+'px)'}
      st.style.setProperty('--shade',1-cl((p-.72)/.18)*.82);
    }
    function onScroll(){if(!raf)raf=requestAnimationFrame(frame)}
    addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',setup);setup();
    var settle=setTimeout(setup,2800);
    cleanups.push(function(){clearTimeout(settle);removeEventListener('scroll',onScroll);removeEventListener('resize',setup);if(raf)cancelAnimationFrame(raf)});
  })();

  // stats: staggered rise + count-up (page shows final numbers if motion is reduced or scripts are slow)
  (function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var stats=document.querySelectorAll('.stat'),nums=document.querySelectorAll('.stats [data-count]');
    stats.forEach(function(s){s.classList.add('rise')});
    nums.forEach(function(el){
      var to=+el.dataset.count,from=+el.dataset.from,t0=null,dur=1600;
      function step(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=Math.round(from+(to-from)*e);if(k<1)requestAnimationFrame(step)}
      el.textContent=from;setTimeout(function(){requestAnimationFrame(step)},document.getElementById('hero')?2000:250);
    });
  })();

  // tag the building blocks of every page for a scroll reveal, staggered among siblings (homepage hero excluded).
  // Photos get a wipe ("img"), list rows slide in from the side ("row") and columns of cards pop up ("pop").
  (function(){
    var groups=[
      ['img','.split>.sphoto,.reasons-fig,.td-fit-fig,.fb-row figure,.cta2-fig,.fb-ba .ba,.fb .ba'],
      ['row',(matchMedia('(min-width: 861px)').matches?'':'.reasons-list li,')+'.cat-brands li,.idx li,.td-scope li,.terms details,.faq details,.td-cta-copy ol li,.fb-row-copy li,.split .rows li,.td-days li'],
      ['pop','.td-ben li,.td-price li,.wc,.steps li,.svc2,.kp,.td-snap .wrap>div,.fin-lender .wrap>div,.blogo'],
      ['','#pgrid>.pf,.stories>*,.sec-head,.pintro>*,.split>.copy>*:not(.rows),.split>.ph,.faq-group>div:first-child,.posts article,.city-grid li,.info>div,.cards>.ph,.res2>a,.art3>a,.form,.topics,.ed-head,.cat-head,.reasons-lead>*:not(.reasons-fig),.cta2-body>*,.cta2-visit>*,.td-fit-copy>*,.fb-row-copy>.rn,.fb-row-copy>h3,.fb-ba-copy>*,.fb-aside,.td-quote>*,.td-fine,.dbd-head>*,.td-cta-copy>.eyebrow,.td-cta-copy>h2,.td-cta-copy>p,.td-cta-form,.tenday .intro>*,.fb .copy>*,.fb .est,.areas>*,.b-head>*,.kpaths .head>*,.foot>*']
    ];
    groups.forEach(function(g){
      var kind=g[0],sel=g[1];
      document.querySelectorAll(sel).forEach(function(el){
        if(el.hasAttribute('data-rv')||el.closest('.hero,.phero,[data-rv]'))return;
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

  // 10-Day figures: rise in and count up once they scroll into view (final numbers are already in the HTML)
  (function(){
    var f=document.getElementById('figs');if(!f||matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    f.classList.add('arm');
    var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();f.classList.add('go');
      f.querySelectorAll('[data-to]').forEach(function(el,i){var to=+el.dataset.to,pre=el.dataset.pre||'',t0=null,dur=1500;
        el.textContent=pre+'0';
        setTimeout(function(){requestAnimationFrame(function step(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);
          el.textContent=pre+Math.round(to*e).toLocaleString('en-US');if(k<1)requestAnimationFrame(step)})},150+i*150)})},{threshold:.4});
    io.observe(f);
  })();

  // 10-day overview timeline: the line draws in and phases appear when it scrolls into view
  (function(){
    var tl=document.getElementById('tl2');if(!tl)return;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){tl.classList.add('in');return}
    tl.classList.add('arm');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){tl.classList.add('in');io.disconnect()}})},{threshold:.35});
    io.observe(tl);cleanups.push(function(){io.disconnect()});
  })();
  // reviews: one real review, two slots waiting for real ones
  var q=[
    {t:'Highly recommend. Very happy with the outcome of our kitchen.',w:'Cathy S. · Kitchen Remodel'},
    {t:'[Client review to add]',w:'[Name] · [Project type]'},
    {t:'[Client review to add]',w:'[Name] · [Project type]'}
  ],qi=0;
  if(document.getElementById('qText')){
  function showQ(){document.getElementById('qText').textContent=q[qi].t;document.getElementById('qWho').textContent=q[qi].w;document.getElementById('qCount').textContent='0'+(qi+1)+' / 0'+q.length}
  document.getElementById('qPrev').addEventListener('click',function(){qi=(qi+q.length-1)%q.length;showQ()});
  document.getElementById('qNext').addEventListener('click',function(){qi=(qi+1)%q.length;showQ()});
  showQ();
  }

  return function () {
    cleanups.forEach(function (f) { f(); });
  };
}
