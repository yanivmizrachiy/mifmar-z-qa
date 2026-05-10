const sections = [
  {
    id: 'overview',
    title: 'מבנה המבחן בקצרה',
    blocks: [
      {
        title: 'הרכב המבחן',
        lines: [
          'המבחן מורכב משני חלקים: חלק מתוקשב בסביבת Moodle וחלק בכתב.',
          'בחלק המתוקשב התלמיד עונה על 2 שאלות.',
          'בחלק הכתוב התלמיד עונה על 3 שאלות.',
          'בסך הכול התלמיד עונה על 5 שאלות במבחן כולו.'
        ]
      },
      {
        title: 'משך זמן וניקוד',
        lines: [
          'משך זמן המבחן לשני החלקים יחד הוא 90 דקות.',
          'ניתן להאריך את המבחן, בהתאם לצורך, לכל היותר ב־30 דקות.',
          'כל אחת מ־5 השאלות מקבלת ציון מתוך 100 נקודות.',
          'ציון המבחן הוא ממוצע הציונים של 5 השאלות.'
        ]
      },
      {
        title: 'בדיקה ומתן ציונים',
        lines: [
          'בחלק המתוקשב השאלות נבדקות אוטומטית ב־Moodle, ועל כל שאלה ניתן ציון נפרד.',
          'בחלק הכתוב השאלות נבדקות על ידי המורה באמצעות מחוון שיצורף לקובץ.',
          'השימוש במחשבון מותר.'
        ]
      }
    ]
  },
  {
    id: 'moodle',
    title: 'חלק ראשון — Moodle',
    blocks: [
      {
        title: 'הכנת הרכיב במרחב הלמידה',
        lines: [
          'יש לגרור ממשבצת העדכונים את הרכיב: מבחן מפמ״ר כיתה ז׳ תשפ״ו — חלק ראשון (Moodle).',
          'המבחן מוסתר בפני התלמידים עד שהמורה מאפשר אחרת.',
          'לפני פתיחת המבחן לתלמידים יש לבחור את השאלות המתאימות ולהכין את המרחב.'
        ]
      },
      {
        title: 'בחירת השאלות בחלק המתוקשב',
        lines: [
          'בחלק הראשון מופיעות 4 שאלות בסביבת Moodle.',
          'המורה בוחר 2 שאלות מתוך 4 השאלות, בהתאם להספק הקבוצה.',
          'את השאלות שלא נבחרו יש למחוק.',
          'התלמיד עונה רק על שתי השאלות שנבחרו.'
        ]
      },
      {
        title: 'פעולות לבחירת השאלות ב־Moodle',
        lines: [
          'לוחצים על המבחן בסביבת Moodle.',
          'על המסך מופיע עמוד הכניסה למבחן.',
          'לוחצים על "שאלות".',
          'על המסך יופיעו 4 שאלות המבחן.',
          'בוחרים רק שתיים מהשאלות ומוחקים את השאלות שלא נבחרו.',
          'לאחר מכן לוחצים על "בוחן".'
        ]
      },
      {
        title: 'ניקוד ושחזור שאלה שנמחקה',
        lines: [
          'אין צורך לשנות את ניקוד השאלות לאחר המחיקה.',
          'הניקוד יחושב אוטומטית מתוך 100, גם לאחר מחיקת השאלות שלא נבחרו.',
          'אם שאלה נמחקה בטעות, לוחצים בתחתית מסך השאלות על "הוספה" ובוחרים "ממאגר השאלות".',
          'בחלון מאגר השאלות אפשר לבחור את השאלה שנמחקה או להוסיף את כל השאלות חזרה.'
        ]
      },
      {
        title: 'פתיחת המבחן לתלמידים',
        lines: [
          'מפעילים את המרחב לעריכה באמצעות כפתור "מצב עריכה" מצד שמאל למעלה.',
          'לוחצים על שלוש הנקודות לצד המבחן ובוחרים "זמינות".',
          'מבין האפשרויות בוחרים את האפשרות המתאימה.',
          'כאשר בוחרים "מוצג בעמוד הקורס", התלמידים יראו את המבחן במרחב הלמידה ויוכלו לפתור אותו.'
        ]
      },
      {
        title: 'הגשה וניסיון מענה',
        lines: [
          'בסיום המענה על שתי השאלות התלמיד לוחץ על כפתור ומגיש את המשימה.',
          'לפני ההגשה התלמיד יכול עדיין לחזור ולתקן.',
          'לאחר לחיצה על "שמירה וסיום" אין אפשרות לחזור למבחן.',
          'המשימה מוגדרת לניסיון מענה אחד בלבד.',
          'לאחר הגשת המשימה התלמיד לא יוכל להיכנס ולבצע אותה שוב.',
          'התלמיד לא מקבל ציון מיד עם הגשת המשימה; המורה רואה את ציוני התלמידים במרחב Moodle.'
        ]
      },
      {
        title: 'אמצעי קצה',
        lines: [
          'למען טוהר הבחינות, השימוש בטלפון נייד בעייתי.',
          'לכן יש להיערך לביצוע החלק המתוקשב במחשב, ככל שהדבר אפשרי.'
        ]
      }
    ]
  },
  {
    id: 'written',
    title: 'חלק שני — שאלות בכתב',
    blocks: [
      {
        title: 'מיקום הקבצים',
        lines: [
          'קובץ השאלות וקובץ המחוון נמצאים ברכיב ששמו: מבחן מפמ״ר לכיתה ז׳ — חלק שני — שאלות בכתב.',
          'הרכיב נמצא במשבצת העדכונים במרחב הלמידה של המורה.'
        ]
      },
      {
        title: 'פורמטים והדפסה',
        lines: [
          'שאלות החלק השני מצורפות בקובץ PDF ובקובץ Word.',
          'קובץ ה־PDF מיועד להדפסה.',
          'כדי להדפיס את המבחן, על המורה לגרור את הרכיב ממשבצת העדכונים למרחב הלמידה הכיתתי.',
          'לאחר מכן יש להשתמש בקובץ ה־PDF להדפסה.'
        ]
      },
      {
        title: 'הסתרת הרכיב מהתלמידים',
        lines: [
          'יש להשאיר את רכיב החלק השני מוסתר בפני התלמידים.',
          'החלק השני מיועד להדפסה ולביצוע בכתב, ולא לפתיחה לתלמידים כרכיב גלוי במרחב.'
        ]
      },
      {
        title: 'בחירת שאלות וביצוע החלק הכתוב',
        lines: [
          'בקובץ ה־PDF כתובות 4 שאלות.',
          'על המורה לבחור לפחות שאלה אחת מתוך 4 השאלות.',
          'יש להוסיף לחלק המבחן בכתב שאלות נוספות לבחירת המורה — מתוך הקובץ או שאלות אחרות שנכתבו בהתאם להספק הלימודי בפועל.',
          'בסך הכול התלמיד עונה על 3 שאלות בחלק זה.'
        ]
      },
      {
        title: 'בדיקה וניקוד',
        lines: [
          'החלק השני נבדק על ידי המורה.',
          'הבדיקה נעשית באמצעות המחוון שיצורף לקובץ.',
          'הניקוד לכל שאלה הוא בין 0 ל־100.'
        ]
      }
    ]
  },
  {
    id: 'special',
    title: 'פיצול, חינוך מיוחד ודחיית מועד',
    blocks: [
      {
        title: 'פיצול המבחן',
        lines: [
          'אפשר לפצל את המבחן ליומיים.',
          'ביום אחד יתקיים המבחן בכתב, וביום אחר יתקיים המבחן המתוקשב.',
          'בכל מקרה, שני החלקים יתקיימו בבית הספר.'
        ]
      },
      {
        title: 'תלמידי חינוך מיוחד',
        lines: [
          'תלמידי חנ״מ המשולבים בכיתות הרגילות צריכים להיבחן במבחן המפמ״ר.',
          'תלמידי כיתות חינוך מיוחד קטנות, כאשר החינוך המיוחד מוגדר ככיתה, אינם מחויבים להיבחן.'
        ]
      },
      {
        title: 'דחיית מועד מעבר ל־01.06.2026',
        lines: [
          'פנייה לדחיית מועד הבחינה מעבר ל־01.06.2026 נעשית אל הדס אייזנבך, מדריכה ארצית למתמטיקה בחטיבת הביניים.',
          'כתובת הדוא״ל מופיעה בפרטי הקשר בקישור:',
          'https://meyda.education.gov.il/files/Pop/0files/matmatika/Chativat-Beynayim/tashpav/contact.pdf'
        ]
      }
    ]
  },
  {
    id: 'support',
    title: 'סיוע ותמיכה',
    blocks: [
      {
        title: 'סיוע בתוכן',
        lines: [
          'בכל בעיה הקשורה לתוכן אפשר לפנות למדריך הבית ספרי או למדריך המחוזי.'
        ]
      },
      {
        title: 'סיוע טכני',
        lines: [
          'בכל בעיה טכנית אפשר לפנות לתמיכה הטכנית.'
        ]
      },
      {
        title: 'אנשי קשר ארצי חט״ב',
        lines: [
          'פרטי אנשי הקשר הארציים לחטיבת הביניים מופיעים בקישור הבא:',
          'https://meyda.education.gov.il/files/Pop/0files/matmatika/Chativat-Beynayim/tashpav/contact.pdf'
        ]
      }
    ]
  }
];

const nav = document.getElementById('topicNav');
const content = document.getElementById('content');

function htmlText(text){
  return String(text)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('\n','<br>');
}

function linkifyUrls(safeHtml){
  return safeHtml.replace(/https:\/\/[^\s<]+/g, url => `<span class="qa-link-actions"><a class="resource-link" href="${url}" target="_blank" rel="noopener">פתיחת קישור</a><button class="copy-link-btn" type="button" data-copy-url="${url}">העתק קישור</button></span>`);
}

function renderLine(text){
  const terms = ['90 דקות','30 דקות','5 שאלות','2 שאלות מתוך 4','PDF ובקובץ Word','אפשר לפצל','01.06.2026'];
  const cls = terms.some(t => text.includes(t)) ? ' class="info-line is-highlight"' : ' class="info-line"';
  return `<li${cls}>${linkifyUrls(htmlText(text))}</li>`;
}

nav.innerHTML = `<button class="nav-arrow nav-arrow-right" type="button" aria-label="נושא קודם">→</button><div class="topic-nav-scroll" id="topicNavScroll" tabindex="0" aria-label="ניווט לפי נושאים">${sections.map(s => `<a href="#${s.id}" data-target="${s.id}">${s.title}</a>`).join('')}</div><button class="nav-arrow nav-arrow-left" type="button" aria-label="נושא הבא">←</button>`;

content.innerHTML = sections.map(section => `
  <section class="topic-section info-section" id="${section.id}" data-section-id="${section.id}">
    <h2>${section.title}</h2>
    <div class="info-grid">
      ${section.blocks.map(block => `
        <article class="info-card">
          <h3 class="info-card-title">${htmlText(block.title)}</h3>
          <ul class="info-list">${block.lines.map(renderLine).join('')}</ul>
        </article>
      `).join('')}
    </div>
  </section>
`).join('');

const scrollBox = document.getElementById('topicNavScroll');
const navLinks = [...scrollBox.querySelectorAll('a[data-target]')];
const sectionsById = new Map(sections.map(s => [s.id, document.getElementById(s.id)]));
let activeIndex = 0;

function updateArrowState(){
  document.querySelector('.nav-arrow-right').disabled = activeIndex <= 0;
  document.querySelector('.nav-arrow-left').disabled = activeIndex >= sections.length - 1;
}
function setActive(index, scrollChip = true){
  activeIndex = Math.max(0, Math.min(index, navLinks.length - 1));
  navLinks.forEach((link, i) => {
    const on = i === activeIndex;
    link.classList.toggle('active', on);
    if(on) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  if(scrollChip) navLinks[activeIndex].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  updateArrowState();
}
function goToIndex(index){
  const nextIndex = Math.max(0, Math.min(index, navLinks.length - 1));
  const target = sectionsById.get(navLinks[nextIndex].dataset.target);
  setActive(nextIndex);
  if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
}

navLinks.forEach((link, index) => link.addEventListener('click', e => {
  e.preventDefault();
  goToIndex(index);
}, {passive:false}));
document.querySelector('.nav-arrow-right').addEventListener('click', () => goToIndex(activeIndex - 1));
document.querySelector('.nav-arrow-left').addEventListener('click', () => goToIndex(activeIndex + 1));

document.addEventListener('click', async e => {
  const btn = e.target.closest('[data-copy-url]');
  if(!btn) return;
  try{
    await navigator.clipboard.writeText(btn.dataset.copyUrl);
    btn.textContent = 'הועתק';
    setTimeout(() => btn.textContent = 'העתק קישור', 1400);
  }catch(err){
    btn.textContent = 'לא הועתק';
    setTimeout(() => btn.textContent = 'העתק קישור', 1400);
  }
});

if('IntersectionObserver' in window){
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a,b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
    if(!visible) return;
    const idx = sections.findIndex(s => s.id === visible.target.id);
    if(idx >= 0) setActive(idx, false);
  }, {root:null, rootMargin:'-35% 0px -55% 0px', threshold:.01});
  sections.forEach(s => observer.observe(sectionsById.get(s.id)));
}
setActive(0, false);
