(function(){
  const LANG_KEY='srp.lang', STATE_KEY='srp.state';
  const DEFAULT={outcome:'reportable',endorsement:'pending',packagePrepared:false,snapshot:false,receipt:false,utcAck:false,itAck:false,audit:[]};
  let state=load();
  function load(){try{return Object.assign({},DEFAULT,JSON.parse(localStorage.getItem(STATE_KEY))||{})}catch(e){return {...DEFAULT}}}
  function save(){localStorage.setItem(STATE_KEY,JSON.stringify(state))}
  function lang(){return localStorage.getItem(LANG_KEY)||'en'}
  function setLang(v){localStorage.setItem(LANG_KEY,v);document.documentElement.dataset.lang=v;document.querySelectorAll('[data-lang-target]').forEach(b=>b.classList.toggle('active',b.dataset.langTarget===v));render()}
  function txt(en,cn){return lang()==='cn'?(cn||en):en}
  function audit(en,cn,by='system'){state.audit.unshift({t:new Date().toISOString().slice(0,16).replace('T',' ')+'Z',en,cn,by});save();render()}
  function set(p){Object.assign(state,p);save();render()}
  function ok(req){return !req || (req==='endorment'&&state.endorsement==='endorsed') || (req==='endorsement'&&state.endorsement==='endorsed') || (req==='package'&&state.packagePrepared) || (req==='snapshot'&&state.snapshot) || (req==='receipt'&&state.receipt)}
  function toast(m){const el=document.querySelector('[data-toast]');if(!el)return;el.textContent=m;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2600)}
  function pill(el,kind,label){el.className='pill '+kind;el.textContent=label}
  function render(){
    document.documentElement.dataset.lang=lang();
    document.querySelectorAll('[data-lang-target]').forEach(b=>b.classList.toggle('active',b.dataset.langTarget===lang()));
    document.querySelectorAll('[data-endorsement-status]').forEach(el=>pill(el,state.endorsement==='endorsed'?'ok':'warn',state.endorsement));
    document.querySelectorAll('[data-package-status]').forEach(el=>pill(el,state.packagePrepared?'ok':'warn',state.packagePrepared?'prepared':'pending'));
    document.querySelectorAll('[data-snapshot-status]').forEach(el=>pill(el,state.snapshot?'ok':'warn',state.snapshot?'sealed':'pending'));
    document.querySelectorAll('[data-receipt-status]').forEach(el=>pill(el,state.receipt?'ok':'warn',state.receipt?'received_registered':'receipt pending'));
    document.querySelectorAll('[data-validation-status]').forEach(el=>pill(el,state.endorsement==='endorsed'?'ok':'danger',state.endorsement==='endorsed'?'validation_pass':'validation_pending'));
    document.querySelectorAll('[data-gap-utc]').forEach(el=>pill(el,state.utcAck?'warn':'danger',state.utcAck?'known_gap_ack':'gap_open'));
    document.querySelectorAll('[data-gap-it]').forEach(el=>pill(el,state.itAck?'warn':'danger',state.itAck?'known_gap_ack':'gap_open'));
    document.querySelectorAll('[data-readiness-score]').forEach(el=>el.textContent=state.receipt?'78%':(state.endorsement==='endorsed'?'68%':'42%'));
    document.querySelectorAll('[data-evidence-score]').forEach(el=>el.textContent=state.receipt?'74%':'61%');
    document.querySelectorAll('[data-footer-message]').forEach(el=>{el.innerHTML=txt('<span>Guard chain: P00 endorsement → P02 package → P03 snapshot → P04 receipt → P05/P06.</span>','<span>守卫链：P00 背书 → P02 报送包 → P03 快照 → P04 回执 → P05/P06。</span>')});
    document.querySelectorAll('[data-requires]').forEach(a=>{const locked=!ok(a.dataset.requires);a.classList.toggle('is-locked',locked);a.setAttribute('aria-disabled',locked?'true':'false')});
    document.querySelectorAll('[data-audit-list]').forEach(host=>{host.innerHTML=state.audit.length?state.audit.map(e=>`<div class="event"><time>${e.t}</time><div><h3>${lang()==='cn'?e.cn:e.en}</h3><p>actor: ${e.by}</p></div></div>`).join(''):`<div class="event"><time>—</time><div><h3>${txt('No audit transitions yet','尚无审计迁移')}</h3><p>${txt('Run the guard chain to populate immutable evidence.','运行守卫链以填充不可变证据。')}</p></div></div>`});
    document.querySelectorAll('[data-action-state]').forEach(el=>{el.textContent=JSON.stringify(state,null,2)});
    document.dispatchEvent(new CustomEvent('srp-render',{detail:state}));
  }
  document.addEventListener('DOMContentLoaded',()=>{
    setLang(lang());
    document.querySelectorAll('[data-lang-target]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.langTarget)));
    document.querySelectorAll('[data-reset-demo]').forEach(b=>b.addEventListener('click',()=>{state={...DEFAULT,audit:[]};save();render();toast(txt('Demo state reset.','演示状态已重置。'))}));
    document.querySelectorAll('[data-requires]').forEach(a=>a.addEventListener('click',e=>{if(!ok(a.dataset.requires)){e.preventDefault();a.classList.remove('guard-shake');void a.offsetWidth;a.classList.add('guard-shake');toast(txt('Locked: complete the previous guard first.','已锁定：先完成上一道守卫。'))}}));
    render();
  });
  window.SRP={get:()=>state,set,audit,toast,txt,ok,render};
})();
