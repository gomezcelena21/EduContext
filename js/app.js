// ═══════════════════════════════════════════════════
//   MENÚ HAMBURGUESA
// ═══════════════════════════════════════════════════

function openMenu() {
  document.getElementById('hamburger-menu').classList.add('open');
  document.getElementById('menu-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('hamburger-menu').classList.remove('open');
  document.getElementById('menu-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════
//   RENDER FUNCTIONS
// ═══════════════════════════════════════════════════

var activeCategoryFilter = null;

function renderProfilesPreview() {
  var container = document.getElementById('profiles-preview');
  if (!container) return;
  container.innerHTML = '';
  profiles.slice(0, 8).forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'profile-mini';
    div.dataset.profileId = p.id;
    div.innerHTML =
      '<div class="profile-mini-icon">' + p.emoji + '</div>' +
      '<div class="profile-mini-name">' + p.name + '</div>' +
      '<div class="profile-mini-desc">' + p.desc.substring(0, 70) + '...</div>';
    container.appendChild(div);
  });
}

function renderProfilesGrid(list) {
  var container = document.getElementById('profiles-grid');
  if (!container) return;
  container.innerHTML = '';

  var searchInput = document.getElementById('search-input');
  var isSearching = searchInput && searchInput.value.trim().length > 0;

  if (isSearching || !window.categories) {
    list.forEach(function(p) {
      container.appendChild(buildProfileCard(p));
    });
    return;
  }

  // Vista por categorías
  categories.forEach(function(cat) {
    // Si hay filtro activo, solo mostrar esa categoría
    if (activeCategoryFilter && cat.id !== activeCategoryFilter) return;

    var catProfiles = list.filter(function(p) {
      return cat.ids.includes(p.id);
    });
    if (catProfiles.length === 0) return;

    var section = document.createElement('div');
    section.className = 'category-section';

    var title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = cat.label + ' (' + catProfiles.length + ')';
    section.appendChild(title);

    var grid = document.createElement('div');
    grid.className = 'profiles-category-grid';
    catProfiles.forEach(function(p) {
      grid.appendChild(buildProfileCard(p));
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

function buildProfileCard(p) {
  var tagsHTML = p.tags.map(function(t) {
    return '<span class="tag">' + t + '</span>';
  }).join('');
  var div = document.createElement('div');
  div.className = 'profile-card';
  div.dataset.profileId = p.id;
  div.innerHTML =
    '<div class="profile-card-top">' +
      '<div class="profile-emoji">' + p.emoji + '</div>' +
      '<div><h3>' + p.name + '</h3><p>' + p.desc + '</p></div>' +
    '</div>' +
    '<div class="profile-tags">' + tagsHTML + '</div>' +
    '<span class="profile-arrow">&#8594;</span>';
  return div;
}

function filterProfiles(query) {
  var q = query.toLowerCase().trim();
  activeCategoryFilter = null;
  // Resetear botones de filtro
  document.querySelectorAll('.cat-filter').forEach(function(b) {
    b.classList.remove('active');
  });
  var allBtn = document.querySelector('.cat-filter');
  if (allBtn) allBtn.classList.add('active');

  var filtered = q.length === 0 ? profiles : profiles.filter(function(p) {
    return (
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some(function(t) { return t.toLowerCase().includes(q); }) ||
      (p.area && p.area.toLowerCase().includes(q))
    );
  });
  renderProfilesGrid(filtered);
}

function filterByCategory(btn, catId) {
  activeCategoryFilter = catId;
  var si = document.getElementById('search-input');
  if (si) si.value = '';
  document.querySelectorAll('.cat-filter').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  renderProfilesGrid(profiles);
  // Scroll arriba del grid
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Desde el landing: ir a perfiles filtrados por categoría
function showProfilesByCategory(catId) {
  activeCategoryFilter = catId;
  showProfiles();
  // Activar el botón de filtro correspondiente
  setTimeout(function() {
    var btns = document.querySelectorAll('.cat-filter');
    btns.forEach(function(b) { b.classList.remove('active'); });
    btns.forEach(function(b) {
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + catId + "'")) {
        b.classList.add('active');
      }
    });
    renderProfilesGrid(profiles);
  }, 100);
}

function renderTool(t) {
  var badgeMap = { free: 'badge-free', premium: 'badge-premium', ia: 'badge-ia' };
  var badgeClass = badgeMap[t.badge] || 'badge-free';
  var badgeLabel = t.badge === 'premium' ? 'Premium' : 'Gratis';
  var tagsHTML = t.tags.map(function(tg) {
    return '<span class="tool-tag">' + tg + '</span>';
  }).join('');
  return (
    '<div class="tool-card">' +
      '<div class="tool-header">' +
        '<div class="tool-icon-wrap">' + t.icon + '</div>' +
        '<span class="tool-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
      '</div>' +
      '<h4>' + t.name + '</h4>' +
      '<p>' + t.desc + '</p>' +
      '<div class="tool-tags">' + tagsHTML + '</div>' +
    '</div>'
  );
}

function renderPrompt(pr) {
  var safeBody = pr.body
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return (
    '<div class="prompt-card">' +
      '<div class="prompt-meta">' +
        '<span class="prompt-category">' + pr.cat + '</span>' +
        '<span class="prompt-level">Nivel: ' + pr.level + '</span>' +
      '</div>' +
      '<h4>' + pr.title + '</h4>' +
      '<div class="prompt-body">' + safeBody + '</div>' +
      '<button class="copy-btn" data-body="' + safeBody + '">&#128203; Copiar prompt</button>' +
    '</div>'
  );
}

function copyText(btn, encodedText) {
  var ta = document.createElement('textarea');
  ta.innerHTML = encodedText;
  var decoded = ta.value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(decoded).then(function() { markCopied(btn); }).catch(function() { fallbackCopy(decoded, btn); });
  } else {
    fallbackCopy(decoded, btn);
  }
}

function fallbackCopy(text, btn) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch(e) {}
  document.body.removeChild(ta);
  markCopied(btn);
}

function markCopied(btn) {
  btn.textContent = '✅ Copiado!';
  btn.classList.add('copied');
  setTimeout(function() {
    btn.innerHTML = '&#128203; Copiar prompt';
    btn.classList.remove('copied');
  }, 2000);
}

function enterProfile(id) {
  var p = profiles.find(function(x) { return x.id === id; });
  if (!p) return;

  document.getElementById('sb-emoji').textContent = p.emoji;
  document.getElementById('sb-name').textContent = p.name;
  document.getElementById('sb-area').textContent = p.area;

  document.getElementById('welcome-block').innerHTML =
    '<div class="welcome-panel anim">' +
      '<div class="welcome-emoji">' + p.emoji + '</div>' +
      '<div>' +
        '<h2>Bienvenido a ' + p.name + '</h2>' +
        '<p>' + p.welcome + '</p>' +
      '</div>' +
    '</div>';

  document.getElementById('overview-tools').innerHTML = p.tools.slice(0, 3).map(renderTool).join('');
  document.getElementById('overview-prompt').innerHTML = renderPrompt(p.prompts[0]);
  document.getElementById('all-tools').innerHTML = p.tools.map(renderTool).join('');
  document.getElementById('all-prompts').innerHTML = p.prompts.map(renderPrompt).join('');

  document.getElementById('all-resources').innerHTML =
    p.resources.map(function(r) {
      return '<div class="resource-card"><div class="resource-icon">' + r.icon + '</div><div><div class="resource-type">' + r.type + '</div><h4>' + r.name + '</h4><p>' + r.desc + '</p></div></div>';
    }).join('');

  document.getElementById('all-apps').innerHTML =
    p.apps.map(function(a) {
      return '<div class="app-card"><div class="app-label">Caso de uso</div><h4>' + a.title + '</h4><p>' + a.desc + '</p><div class="example">' + a.example + '</div></div>';
    }).join('');

  document.getElementById('all-tips').innerHTML =
    p.tips.map(function(t, i) {
      return '<div class="tip"><div class="tip-num">' + (i + 1) + '</div><p>' + t.text + '</p></div>';
    }).join('');

  document.querySelectorAll('.nav-item').forEach(function(el) { el.classList.remove('active'); });
  document.querySelectorAll('.nav-item')[0].classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(function(el) { el.classList.remove('active'); });
  document.getElementById('panel-overview').classList.add('active');

  showDashboard();
}

// ═══════════════════════════════════════════════════
//   NAVEGACIÓN
// ═══════════════════════════════════════════════════

function showLanding() {
  document.getElementById('landing').classList.add('active');
  document.getElementById('profiles').classList.remove('active');
  document.getElementById('dashboard').classList.remove('active');
  document.getElementById('dashboard').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProfiles() {
  document.getElementById('landing').classList.remove('active');
  document.getElementById('profiles').classList.add('active');
  document.getElementById('dashboard').classList.remove('active');
  document.getElementById('dashboard').style.display = 'none';
  var si = document.getElementById('search-input');
  if (si) si.value = '';
  renderProfilesGrid(profiles);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboard() {
  document.getElementById('landing').classList.remove('active');
  document.getElementById('profiles').classList.remove('active');
  document.getElementById('dashboard').classList.add('active');
  document.getElementById('dashboard').style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setNav(el, panel) {
  document.querySelectorAll('.nav-item').forEach(function(i) { i.classList.remove('active'); });
  el.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('panel-' + panel).classList.add('active');
  document.querySelector('.dash-main').scrollTop = 0;
}

// ═══════════════════════════════════════════════════
//   BOTÓN VOLVER ARRIBA
// ═══════════════════════════════════════════════════

function initScrollTop() {
  var btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════════════
//   EVENT DELEGATION
// ═══════════════════════════════════════════════════

document.addEventListener('click', function(e) {
  var mini = e.target.closest('.profile-mini');
  if (mini && mini.dataset.profileId) { enterProfile(mini.dataset.profileId); return; }

  var card = e.target.closest('.profile-card');
  if (card && card.dataset.profileId) { enterProfile(card.dataset.profileId); return; }

  var copyBtn = e.target.closest('.copy-btn');
  if (copyBtn && copyBtn.dataset.body) { copyText(copyBtn, copyBtn.dataset.body); return; }
});

// ═══════════════════════════════════════════════════
//   INIT
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  renderProfilesPreview();
  initScrollTop();
});
