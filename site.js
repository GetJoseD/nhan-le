/* ==========================================================================
   HOW THE SITE WORKS
   ==========================================================================

   You should not need to edit this file at all.

   It does two jobs:
     1. remembers whether the reader chose English or Vietnamese
     2. builds the photo wall and the memory wall from the two list files

   To add photos, edit   assets/photos.js
   To add memories, edit assets/memories.js
   ========================================================================== */

(function () {
  'use strict';


  /* ------------------------------------------------------------------------
     PART 1 — THE LANGUAGE SWITCH
     ------------------------------------------------------------------------
     The reader's choice follows them from page to page. If their browser
     will not allow anything to be remembered, the site simply opens in
     English each time, which is fine.
     --------------------------------------------------------------------- */

  var STORE_KEY = 'nhan-memorial-language';

  function remember(lang) {
    try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* fine */ }
  }

  function recall() {
    try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }

  function setLanguage(lang) {
    if (lang !== 'vi') { lang = 'en'; }
    document.documentElement.setAttribute('data-lang', lang);
    // Tells screen readers which language the page is being read in.
    document.documentElement.setAttribute('lang', lang);
    remember(lang);
  }

  // Open in whichever language was chosen last. If nothing was chosen,
  // and the reader's device is set to Vietnamese, open in Vietnamese.
  var saved = recall();
  if (saved) {
    setLanguage(saved);
  } else if ((navigator.language || '').toLowerCase().indexOf('vi') === 0) {
    setLanguage('vi');
  } else {
    setLanguage('en');
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-set-lang]');
    if (button) { setLanguage(button.getAttribute('data-set-lang')); }
  });


  /* ------------------------------------------------------------------------
     A small safety helper.

     Everything people send in gets put on the page as plain text, never as
     code. That means a stray < or & in someone's message can never break
     the page, and nobody can slip anything harmful into a caption.
     --------------------------------------------------------------------- */

  function textNode(tag, className, value, language) {
    var el = document.createElement(tag);
    if (className) { el.className = className; }
    el.textContent = value;               // plain text only, on purpose
    if (language) { el.setAttribute('lang', language); }
    return el;
  }

  // Builds the English and Vietnamese version of one line of writing.
  function bilingual(parent, tag, className, english, vietnamese) {
    if (english) {
      var en = textNode(tag, className, english);
      en.setAttribute('data-lang-en', '');
      parent.appendChild(en);
    }
    if (vietnamese) {
      var vi = textNode(tag, className, vietnamese, 'vi');
      vi.setAttribute('data-lang-vi', '');
      parent.appendChild(vi);
    }
  }


  /* ------------------------------------------------------------------------
     PART 2 — THE PHOTO WALL
     --------------------------------------------------------------------- */

  var photoWall = document.getElementById('photo-wall');

  if (photoWall && typeof PHOTOS !== 'undefined') {
    PHOTOS.forEach(function (photo) {
      var figure = document.createElement('figure');
      figure.className = 'photo';

      if (photo.file) {
        var img = document.createElement('img');
        img.src = 'assets/photos/' + photo.file;
        img.loading = 'lazy';
        // The caption is right underneath, so the picture itself is marked
        // as decorative to avoid a screen reader saying everything twice.
        img.alt = photo.caption_en || '';
        figure.appendChild(img);
      } else {
        // No file named yet, so show a quiet placeholder tile instead.
        var blank = document.createElement('div');
        blank.className = 'photo-blank';
        blank.setAttribute('aria-hidden', 'true');
        blank.textContent = '\u273B';   // a small flower mark
        figure.appendChild(blank);
      }

      if (photo.caption_en || photo.caption_vi) {
        var caption = document.createElement('figcaption');
        bilingual(caption, 'span', null, photo.caption_en, photo.caption_vi);
        figure.appendChild(caption);
      }

      photoWall.appendChild(figure);
    });
  }


  /* ------------------------------------------------------------------------
     PART 3 — THE MEMORY WALL
     --------------------------------------------------------------------- */

  var memoryWall = document.getElementById('memory-wall');

  if (memoryWall && typeof MEMORIES !== 'undefined') {
    MEMORIES.forEach(function (memory) {
      var card = document.createElement('article');
      card.className = 'memory';
      // This is what gives each note its colour. See styles.css.
      card.setAttribute('data-circle', memory.circle || 'friend');

      bilingual(card, 'p', 'memory-relation', memory.relation_en, memory.relation_vi);
      bilingual(card, 'p', 'memory-text', memory.text_en, memory.text_vi);

      if (memory.name) {
        var name = textNode('p', 'memory-name', '\u2014 ' + memory.name);
        card.appendChild(name);
      }

      memoryWall.appendChild(card);
    });
  }

})();
