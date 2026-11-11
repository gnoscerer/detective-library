(function () {
  'use strict';
  const D = window.SITE_DATA;
  const WORKS = D.WORKS;
  const byId = Object.fromEntries(WORKS.map(w => [w.id, w]));
  const SHELF_KEY = 'detective-library-shelf';
  let shelf = [];
  try { shelf = JSON.parse(localStorage.getItem(SHELF_KEY) || '[]'); } catch (e) { shelf = []; }
  const saveShelf = () => { try { localStorage.setItem(SHELF_KEY, JSON.stringify(shelf)); } catch (e) {} };

  const $ = id => document.getElementById(id);
  const areaOf = w => w.country === '日本' ? '日本' : (w.country === '中国' ? '中国' : '欧美');
  const pad = n => String(n).padStart(3, '0');
  const state = {q:'', school:'all', area:'all', sort:'year-asc', shelfOnly:false};
  let activeCollection = 0;
  let quiz = {index:0, scores:[0,0,0,0]};
  let toastTimer = null;

  function toast(msg){
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-on'), 1900);
  }

  /* ---------- 概览 ---------- */
  function renderStats(){
    const years = WORKS.map(w => w.year);
    $('stat-works').innerHTML = WORKS.length + '<small>部</small>';
    $('stat-detectives').innerHTML = D.DETECTIVES.length + '<small>位</small>';
    $('stat-tricks').innerHTML = D.TRICKS.length + '<small>类</small>';
    $('stat-years').innerHTML = (new Date().getFullYear() - Math.min.apply(null, years)) + '<small>年</small>';
    const w = WORKS[Math.floor(Math.random() * WORKS.length)];
    $('today-case').innerHTML = '<div class="k">Today\'s case / 今日一案</div>'
      + '<h3>《' + w.title + '》</h3>'
      + '<p>' + w.author + ' · ' + w.year + ' · ' + w.intro.slice(0, 30) + '…</p>'
      + '<div class="meta"><button class="text-btn" type="button" data-open="' + w.id + '">查看这张索引卡 →</button></div>';
  }

  /* ---------- 作品库 ---------- */
  function workCard(w, i){
    const on = shelf.indexOf(w.id) !== -1;
    const tags = [w.school, w.country].concat(w.tricks.slice(0, 2));
    return '<article class="work-card" data-open="' + w.id + '" tabindex="0" role="button" aria-label="查看《' + w.title + '》档案">'
      + '<div class="card-id"><span>NO. ' + pad(i + 1) + ' / ' + w.year + '</span>'
      + '<button class="card-shelf' + (on ? ' on' : '') + '" type="button" data-shelf="' + w.id + '" aria-label="加入或移出书架">'
      + (on ? '● 已收藏' : '○ 收藏') + '</button></div>'
      + '<h3>' + w.title + '</h3>'
      + '<p class="en">' + w.en + '</p>'
      + '<p class="byline">' + w.author + ' · ' + w.detective + '</p>'
      + '<p class="intro">' + w.intro + '</p>'
      + '<div class="tags">' + tags.map((t, k) => '<span class="tag' + (k === 0 ? ' red' : (k === 1 ? ' navy' : '')) + '">' + t + '</span>').join('') + '</div>'
      + '<div class="card-foot"><span>' + w.year + ' 年</span><span class="more">查看档案 →</span></div>'
      + '</article>';
  }

  function renderWorks(){
    const kw = state.q.trim().toLowerCase();
    let list = WORKS.filter(w => {
      if(state.school !== 'all' && w.school !== state.school) return false;
      if(state.area !== 'all' && areaOf(w) !== state.area) return false;
      if(state.shelfOnly && shelf.indexOf(w.id) === -1) return false;
      if(kw){
        const hay = [w.title,w.en,w.author,w.school,w.country,w.detective,w.intro,w.highlight]
          .concat(w.tricks).join(' ').toLowerCase();
        if(hay.indexOf(kw) === -1) return false;
      }
      return true;
    });
    list.sort((a,b) => {
      if(state.sort === 'title') return a.title.localeCompare(b.title,'zh-Hans-CN');
      return state.sort === 'year-desc' ? b.year - a.year : a.year - b.year;
    });
    $('work-grid').innerHTML = list.length
      ? list.map(workCard).join('')
      : '<div class="empty">没有找到匹配的作品。换个关键词，或点「清除筛选」。</div>';
    $('work-count').textContent = '共 ' + list.length + ' 部 · 全部 ' + WORKS.length + ' 部'
      + (state.shelfOnly ? ' · 仅显示我的书架' : '');
    $('shelf-toggle').textContent = state.shelfOnly ? '显示全部作品' : '只看我的书架';
    $('shelf-btn').classList.toggle('is-on', state.shelfOnly);
    $('shelf-count').textContent = shelf.length;
  }

  function initFilters(){
    const schools = Array.from(new Set(WORKS.map(w => w.school)));
    $('school').innerHTML = '<option value="all">全部流派</option>'
      + schools.map(s => '<option value="' + s + '">' + s + '</option>').join('');
    $('q').addEventListener('input', e => { state.q = e.target.value; renderWorks(); });
    ['school','area','sort'].forEach(id => $(id).addEventListener('change', e => { state[id] = e.target.value; renderWorks(); }));
    $('clear-filters').addEventListener('click', () => {
      state.q = ''; state.school = 'all'; state.area = 'all'; state.sort = 'year-asc'; state.shelfOnly = false;
      $('q').value = ''; $('school').value = 'all'; $('area').value = 'all'; $('sort').value = 'year-asc';
      renderWorks();
    });
    $('shelf-toggle').addEventListener('click', () => { state.shelfOnly = !state.shelfOnly; renderWorks(); });
    $('shelf-btn').addEventListener('click', () => {
      state.shelfOnly = true; renderWorks();
      document.getElementById('works').scrollIntoView({behavior:'smooth'});
    });
  }

  /* ---------- 名侦探 / 年表 / 诡计 ---------- */
  function renderDetectives(){
    $('detective-grid').innerHTML = D.DETECTIVES.map(d =>
      '<article class="det-card"><div class="det-head"><div class="avatar">' + d.name.charAt(0) + '</div>'
      + '<div><h3>' + d.name + '</h3><p class="en">' + d.en + '</p></div></div>'
      + '<p class="bio">' + d.bio + '</p>'
      + '<p class="style">破案方式：' + d.style + '</p>'
      + '<p class="det-meta">' + d.author + ' · ' + d.debut + ' 年登场 · 代表作《' + d.work + '》</p>'
      + '<div class="tags">' + d.tags.map(t => '<span class="tag">' + t + '</span>').join('') + '</div></article>').join('');
  }
  function renderTimeline(){
    $('timeline-list').innerHTML = D.TIMELINE.map(t =>
      '<li class="tl-item"><div class="tl-year">' + t.year + '</div><div class="tl-body"><h3>' + t.title
      + '</h3><p>' + t.desc + '</p></div></li>').join('');
  }
  function renderTricks(){
    $('trick-grid').innerHTML = D.TRICKS.map((t,i) =>
      '<article class="trick"><div class="no">' + pad(i + 1) + '</div><div><h3>' + t.name
      + '</h3><p class="en">' + t.en + '</p><p>' + t.desc + '</p>'
      + '<p class="works">代表作：' + t.works.map(w => '《' + w + '》').join('、') + '</p></div></article>').join('');
  }

  /* ---------- 主题书单 ---------- */
  function renderCollections(){
    $('collection-tabs').innerHTML = D.COLLECTIONS.map((c,i) =>
      '<button class="tab' + (i === activeCollection ? ' is-active' : '') + '" type="button" data-col="' + i + '">'
      + c.name + '</button>').join('');
    const c = D.COLLECTIONS[activeCollection];
    $('collection-panel').innerHTML = '<p class="lead">' + c.desc + ' · 共 ' + c.ids.length + ' 部</p>'
      + '<ul class="collection-list">' + c.ids.map((id,i) => {
        const w = byId[id];
        return w ? '<li><span class="idx">' + pad(i + 1) + '</span>'
          + '<button class="link-btn" type="button" data-open="' + id + '">《' + w.title + '》</button>'
          + '<span class="yr">' + w.author + ' · ' + w.year + '</span></li>' : '';
      }).join('') + '</ul>';
  }

  /* ---------- 小测验 ---------- */
  function renderQuiz(){
    const Q = D.QUIZ;
    if(quiz.index < Q.questions.length){
      const item = Q.questions[quiz.index];
      const pct = Math.round(quiz.index / Q.questions.length * 100);
      $('quiz-box').innerHTML = '<div class="quiz-progress">QUESTION ' + (quiz.index + 1) + ' / ' + Q.questions.length + '</div>'
        + '<div class="quiz-bar"><span style="width:' + pct + '%"></span></div>'
        + '<h3>' + item.q + '</h3><div class="quiz-options">'
        + item.options.map((o,i) => '<button class="quiz-option" type="button" data-opt="' + i + '">' + o + '</button>').join('')
        + '</div>';
      return;
    }
    const best = quiz.scores.indexOf(Math.max.apply(null, quiz.scores));
    const r = Q.results[best];
    const w = WORKS.find(x => x.title === r.work);
    $('quiz-box').innerHTML = '<div class="quiz-result"><div class="quiz-progress">RESULT / 档案已生成</div>'
      + '<div class="quiz-bar"><span style="width:100%"></span></div>'
      + '<div class="name">' + r.title + '</div><p>' + r.desc + '</p>'
      + '<p style="margin-top:14px">推荐从《' + r.work + '》开始'
      + (w ? ' <button class="text-btn" type="button" data-open="' + w.id + '">查看档案 →</button>' : '') + '</p>'
      + '<div style="margin-top:22px"><button class="btn ghost small" type="button" data-restart="1">再测一次</button></div></div>';
  }

  /* ---------- 详情抽屉 ---------- */
  function openDrawer(id){
    const w = byId[id];
    if(!w) return;
    const on = shelf.indexOf(w.id) !== -1;
    $('drawer-body').innerHTML = '<div class="d-id">INDEX CARD / NO. ' + pad(WORKS.indexOf(w) + 1) + '</div>'
      + '<h2>' + w.title + '</h2><p class="d-en">' + w.en + '</p>'
      + '<div class="d-meta">'
      + '<div><b>作者</b>' + w.author + '（' + w.country + '）</div>'
      + '<div><b>首版年份</b>' + w.year + ' 年</div>'
      + '<div><b>流派</b>' + w.school + '</div>'
      + '<div><b>登场侦探</b>' + w.detective + '</div>'
      + '</div>'
      + '<div class="d-block"><h4>案件梗概</h4><p>' + w.intro + '</p></div>'
      + '<div class="d-block"><h4>推理看点</h4><p>' + w.highlight + '</p></div>'
      + '<div class="d-block"><h4>诡计标签</h4><div class="tags">'
      + w.tricks.map(t => '<span class="tag red">' + t + '</span>').join('') + '</div></div>'
      + '<div class="d-actions">'
      + '<button class="btn small" type="button" data-shelf="' + w.id + '" id="drawer-shelf">' + (on ? '移出我的书架' : '加入我的书架') + '</button>'
      + '<a class="btn ghost small" target="_blank" rel="noopener noreferrer" href="https://www.gutenberg.org/ebooks/search/?query=' + encodeURIComponent(w.en) + '">查找英文原文</a>'
      + '<a class="btn ghost small" target="_blank" rel="noopener noreferrer" href="https://zh.wikisource.org/w/index.php?search=' + encodeURIComponent(w.title) + '">查找中文文本</a>'
      + '</div>';
    $('drawer').classList.add('is-open');
    $('drawer-overlay').classList.add('is-open');
    document.body.classList.add('drawer-open');
    $('drawer-close').focus();
  }
  function closeDrawer(){
    $('drawer').classList.remove('is-open');
    $('drawer-overlay').classList.remove('is-open');
    document.body.classList.remove('drawer-open');
  }
  function toggleShelf(id){
    const i = shelf.indexOf(id);
    if(i === -1){ shelf.push(id); toast('已加入我的书架'); }
    else { shelf.splice(i,1); toast('已移出我的书架'); }
    saveShelf();
    renderWorks();
    const btn = $('drawer-shelf');
    if(btn && btn.dataset.shelf === id){
      const on = shelf.indexOf(id) !== -1;
      btn.textContent = on ? '移出我的书架' : '加入我的书架';
    }
  }

  /* ---------- 全局事件 ---------- */
  document.addEventListener('click', e => {
    const sb = e.target.closest('[data-shelf]');
    if(sb){ toggleShelf(sb.dataset.shelf); return; }
    const opt = e.target.closest('[data-opt]');
    if(opt){ quiz.scores[Number(opt.dataset.opt)] += 1; quiz.index += 1; renderQuiz(); return; }
    if(e.target.closest('[data-restart]')){ quiz = {index:0,scores:[0,0,0,0]}; renderQuiz(); return; }
    const col = e.target.closest('[data-col]');
    if(col){ activeCollection = Number(col.dataset.col); renderCollections(); return; }
    const op = e.target.closest('[data-open]');
    if(op){ openDrawer(op.dataset.open); return; }
  });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') closeDrawer();
    if((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('work-card')){
      e.preventDefault(); openDrawer(e.target.dataset.open);
    }
  });
  $('drawer-close').addEventListener('click', closeDrawer);
  $('drawer-overlay').addEventListener('click', closeDrawer);
  $('random-btn').addEventListener('click', () => openDrawer(WORKS[Math.floor(Math.random()*WORKS.length)].id));

  /* ---------- 启动 ---------- */
  renderStats();
  initFilters();
  renderWorks();
  renderDetectives();
  renderTimeline();
  renderTricks();
  renderCollections();
  renderQuiz();
  const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if(en.isIntersecting) navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    },{rootMargin:'-84px 0px -70% 0px'});
    document.querySelectorAll('main section[id]').forEach(sec => obs.observe(sec));
  }
})();
