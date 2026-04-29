const sections = [
  { id:'dates', title:'מועדי המבחן והיערכות', items:[
    {q:'באילו מועדים ניתן לקיים את מבחן המפמ״ר לשכבת ז׳?', a:['עקב המצב, הוגדל טווח התאריכים שבהם ניתן לקיים את מבחן המפמ״ר לשכבת ז׳.','ניתן לקיים את המבחן בטווח התאריכים:','12.05.2026 ועד 01.06.2026']},
    {q:'מה נדרש מבית הספר לעשות?', a:['בתי הספר מתבקשים לבחור יום מתאים מתוך טווח התאריכים שנקבע, ולשבץ את מבחן המפמ״ר בלוח הבחינות של בית הספר.']},
    {q:'האם יש חובת דיווח על מועדי הבחינה?', a:['הנושא בבדיקה.']},
    {q:'האם ניתן לקיים את המבחן בימים שונים?', a:['אם הכוונה היא לקיים את שני חלקי המבחן בימים שונים — התשובה היא לא.']}
  ]},
  { id:'structure', title:'מבנה המבחן', items:[
    {q:'מהו מבנה מבחן המפמ״ר?', a:['מבחן המפמ״ר מורכב משני חלקים: חלק א׳ וחלק ב׳.','חלק א׳ יינתן בסביבת הלמידה Moodle.\nבחלק א׳ יש לענות על שתי שאלות.','בחלק א׳ יופיעו שלוש שאלות:\n- שתי שאלות אורייניות\n- שאלה אחת המורכבת משאלות קצרות, חלקן בגישה אוריינית','מורים יבחרו שתי שאלות למבחן מתוך שלוש השאלות שמתאימות להספק הכיתות.','בחלק הזה עונים על השאלות ב־Moodle ומקבלים ציון על כל שאלה.','חלק ב׳ ייעשה בבחינה רגילה בכתב.\nלמורים יישלחו שלוש שאלות בקובץ PDF.\nמורים יוכלו לבחור שאלה אחת לפחות מתוך השאלות שיופיעו בקובץ.\nשאר השאלות של חלק זה ייכתבו על ידי המורים בהתאם להספק בפועל.','בחלק ב׳ יש לענות על שלוש שאלות.','משך המבחן לשני החלקים יחד הוא 90 דקות.']},
    {q:'מהו משך זמן הבחינה?', a:['90 דקות.']},
    {q:'האם תהיה אפשרות לתת הארכת זמן?', a:['כן, של חצי שעה.']},
    {q:'מתי המורים יוכלו לראות את השאלות ולבחור על פי ההספקים?', a:['הבחינה תיפתח כיומיים לפני ה־12.5 על מנת שמורה יוכל לבחור את השאלות המתאימות לבית ספרו על פי ההספקים.']},
    {q:'איפה יפורסם החלק השני של הבחינה — החלק שבכתב?', a:['החלק השני של הבחינה (חלק שתלמיד עונה עליו בכתב ידו), יפורסם גם הוא דרך המודל.']},
    {q:'איך נקבע הציון הסופי של המבחן?', a:['הציון הסופי של הבחינה הוא ממוצע של 5 שאלות:\n- שתי שאלות ב־Moodle\n- שלוש שאלות בכתב','ציוני שאלות חלק א׳ יופיעו ב־Moodle, עם ציון נפרד לכל שאלה.','בחלק ב׳ מומלץ לתת ציון על כל שאלה.']},
    {q:'האם יפורסם מחוון לחלק ב׳?', a:['כן. מחוון לחלק ב׳ יפורסם יחד עם הבחינה.']},
    {q:'האם מורים יכולים לבחור שאלות למבחן?', a:['כן. בבחירת השאלות למבחן, מורים יכולים לבחור שאלות על פי החומר שנלמד בפועל, בהתאם למבנה המבחן.','בחלק א׳, מורים יבחרו שתי שאלות למבחן מתוך שלוש השאלות שמתאימות להספק הכיתות.','בחלק ב׳, למורים יישלחו שלוש שאלות בקובץ PDF. מורים יוכלו לבחור שאלה אחת לפחות מתוך השאלות שיופיעו בקובץ. שאר השאלות של חלק זה ייכתבו על ידי המורים בהתאם להספק בפועל.']}
  ]},
  { id:'topics', title:'נושאי המבחן', items:[
    {q:'מהם הנושאים למבחן?', a:['נושאי המבחן מחולקים לשלושה תחומים: תחום מספרי, תחום אלגברי ותחום גאומטרי.','תחום מספרי:\nחוקי פעולות חשבון, סדר פעולות חשבון, חזקות, מספרים מכוונים, מערכת צירים, נקודות במישור, אורכי קטעים וחישוב שטחים.','תחום אלגברי:\nחוקיות והכללה של תופעות מספריות, ביטויים אלגבריים, הצבה, כינוס איברים דומים, חוק הפילוג, פתרון משוואות, שאלות מילוליות וקריאת גרפים.','תחום גאומטרי:\nתכונות של מלבן, סוגי משולשים, גובה במשולש, שטחים והיקפים של מלבן, משולש וצורות מורכבות, תיבה (חישוב נפח ושטח פנים), זוויות, זוויות צמודות, זוויות קודקודיות, חוצה זווית, סכום זוויות במשולש, שאלות אורייניות בכל הנושאים.']}
  ]},
  { id:'moodle', title:'Moodle ושאלות טכניות', items:[
    {q:'האם במבחן לכל התלמידים יהיו שאלות זהות?', a:['במבחן מפמ״ר במודל, כל התלמידים מקבלים את אותה שאלה, אך עם נתונים מספריים שונים, בדומה לתרגול במודל.']},
    {q:'האם ניתן לקיים את מבחן המפמ״ר גם באמצעות טלפון נייד?', a:['כן. ניתן לקיים את מבחן המפמ״ר במודל גם דרך הטלפון הנייד, אך הדבר פחות נוח.']},
    {q:'האם מותר להשתמש במחשבון בבחינת המפמ״ר?', a:['כן.']},
    {q:'האם יהיו טורים בקובץ המבחן?', a:['לא. הקובץ לא יכלול טורים.']},
    {q:'האם יהיו שני טורים למבחן המפמ״ר?', a:['בשלב זה לא נראה שיהיה טור שני.']},
    {q:'האם הקובץ שיישלח למורים יהיה קובץ Word שאפשר לערוך?', a:['לא. הקובץ יגיע כקובץ PDF.']},
    {q:'האם ביום המבחן במודל תהיה תמיכה?', a:['לא ידוע כרגע אם תהיה תמיכה.\nבודקים זאת.']}
  ]},
  { id:'makeup', title:'מועד ב׳ ועמ״ט', items:[
    {q:'האם תלמיד שלא נכח ביום הבחינה יכול להיבחן ביום אחר?', a:['תלמיד שלא נכח ביום הבחינה, יעשה אותה ביום אחר לכשיחזור, בטווח התאריכים של מועד הבחינה.']},
    {q:'מה עושים עם תלמידים שלא נבחנו?', a:['תלמיד שלא נכח ביום הבחינה, יעשה אותה ביום אחר לכשיחזור, בטווח התאריכים של מועד הבחינה.']},
    {q:'האם מבחן עמ״ט זהה למבחן של כיתות ז׳ שאינן עמ״ט?', a:['לא. המפמ״ר של כיתות ז׳ והמפמ״ר של כיתות עמ״ט הם מבחנים שונים.','בבתי ספר שבהם יש כיתות מעורבות, כל תלמיד צריך להיבחן לפי ההשתייכות שלו.']}
  ]},
  { id:'support', title:'סיוע ותמיכה', items:[
    {q:'איך ניתן לקבל סיוע בשימוש במרחבי הלמידה של Moodle?', a:['ניתן לקבל סיוע בשימוש במרחבי הלמידה של Moodle בכמה דרכים:','ניתן ליצור קשר עם מדריכי ישראל ריאלית:\nיניב רז — 052-3748115\nניצה יריב — 050-737-7563','ניתן להיכנס להדרכות כלליות שמתפרסמות.','ניתן לתאם סיוע פרטני עם המדריכים.']},
    {q:'איך יוצרים קשר עם מוקד הסיסמאות?', a:['ניתן ליצור קשר עם מוקד הסיסמאות של משרד החינוך בדרכים הבאות:\nחיוג ישיר: *6552\nWhatsApp: 050-622-9535','שעות הפעילות:\nימים א׳–ה׳: 7:30–17:00\nיום ו׳: 7:30–13:00']}
  ]}
];

const nav = document.getElementById('topicNav');
const content = document.getElementById('content');

const whatsappLinks = {
  '052-3748115': 'https://wa.me/972523748115',
  '050-737-7563': 'https://wa.me/972507377563'
};

function htmlText(text){
  return String(text)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('\n','<br>');
}

function linkifyWhatsApp(safeHtml){
  let out = safeHtml;
  Object.entries(whatsappLinks).forEach(([phone, url]) => {
    out = out.replaceAll(phone, `<a class="whatsapp-link" href="${url}" target="_blank" rel="noopener" aria-label="פתיחת WhatsApp למספר ${phone}">${phone}</a>`);
  });
  return out;
}

function renderP(text){
  const cls = text.includes('12.05.2026') || text.includes('90 דקות') ? ' class="highlight"' : '';
  return `<p${cls}>${linkifyWhatsApp(htmlText(text))}</p>`;
}

nav.innerHTML = `
  <button class="nav-arrow nav-arrow-right" type="button" aria-label="נושא קודם">→</button>
  <div class="topic-nav-scroll" id="topicNavScroll" tabindex="0" aria-label="כפתורי ניווט לפי נושאים">
    ${sections.map(s=>`<a href="#${s.id}" data-target="${s.id}">${s.title}</a>`).join('')}
  </div>
  <button class="nav-arrow nav-arrow-left" type="button" aria-label="נושא הבא">←</button>
`;

content.innerHTML = sections.map(section => `
<section class="topic-section" id="${section.id}" data-section-id="${section.id}">
  <h2>${section.title}</h2>
  ${section.items.map(item => `
    <article class="qa-card">
      <h3>שאלה:</h3>
      <p class="question">${htmlText(item.q)}</p>
      <h4>תשובה:</h4>
      <div class="answer">${item.a.map(renderP).join('')}</div>
    </article>`).join('')}
</section>`).join('');

const scrollBox = document.getElementById('topicNavScroll');
const navLinks = [...scrollBox.querySelectorAll('a[data-target]')];
const sectionsById = new Map(sections.map(s => [s.id, document.getElementById(s.id)]));
let activeIndex = 0;

function updateArrowState(){
  const right = document.querySelector('.nav-arrow-right');
  const left = document.querySelector('.nav-arrow-left');
  right.disabled = activeIndex <= 0;
  left.disabled = activeIndex >= sections.length - 1;
}

function setActive(index, scrollChip = true){
  activeIndex = Math.max(0, Math.min(index, navLinks.length - 1));
  navLinks.forEach((link, i) => {
    const isActive = i === activeIndex;
    link.classList.toggle('active', isActive);
    if(isActive){ link.setAttribute('aria-current', 'true'); }
    else { link.removeAttribute('aria-current'); }
  });
  if(scrollChip){
    navLinks[activeIndex].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  }
  updateArrowState();
}

function goToIndex(index){
  const nextIndex = Math.max(0, Math.min(index, navLinks.length - 1));
  const targetId = navLinks[nextIndex].dataset.target;
  const target = sectionsById.get(targetId);
  setActive(nextIndex);
  if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
}

navLinks.forEach((link, index) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    goToIndex(index);
  }, {passive:false});
});

document.querySelector('.nav-arrow-right').addEventListener('click', () => goToIndex(activeIndex - 1));
document.querySelector('.nav-arrow-left').addEventListener('click', () => goToIndex(activeIndex + 1));

if('IntersectionObserver' in window){
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a,b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
    if(!visible) return;
    const idx = sections.findIndex(s => s.id === visible.target.id);
    if(idx >= 0) setActive(idx, false);
  }, {root:null, rootMargin:'-35% 0px -55% 0px', threshold:0.01});
  sections.forEach(s => observer.observe(sectionsById.get(s.id)));
}

setActive(0, false);
