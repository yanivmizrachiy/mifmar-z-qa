const sections=[
{id:'overview',title:'הרכב המבחן והציון',items:[
{q:'ממה מורכב מבחן המפמ״ר במתמטיקה לכיתה ז׳ תשפ״ו?',a:['המבחן מורכב משני חלקים:','חלק ראשון — שאלות מתוקשבות בסביבת Moodle.','חלק שני — שאלות בכתב, המצורפות בקובץ PDF ובקובץ Word.','בשני החלקים יחד התלמיד עונה על 5 שאלות.']},
{q:'כמה שאלות התלמיד מבצע בכל חלק?',a:['בחלק הראשון התלמיד מבצע 2 שאלות.','בחלק השני התלמיד מבצע 3 שאלות.','בסך הכל התלמיד מבצע 5 שאלות במבחן כולו.']},
{q:'איך נקבע הציון הסופי של המבחן?',a:['הציון של כל שאלה מחושב מתוך 100 נקודות.','בחלק הראשון השאלות נבדקות אוטומטית ב־Moodle, ועל כל שאלה ניתן ציון נפרד.','בחלק השני השאלות נבדקות על ידי המורה באמצעות מחוון שיצורף לקובץ.','ציון המבחן הוא ממוצע הציונים של 5 השאלות.']},
{q:'מהו משך זמן המבחן?',a:['משך זמן המבחן לשני החלקים יחד הוא 90 דקות.','ניתן להאריך את המבחן, בהתאם לצורך, לכל היותר ב־30 דקות.']},
{q:'האם מותר להשתמש במחשבון?',a:['כן. לפי השאלות והתשובות במייל, השימוש במחשבון מותר.']}
]},
{id:'moodle',title:'חלק ראשון — שאלות מתוקשבות ב־Moodle',items:[
{q:'איזה רכיב צריך לגרור למרחב הלמידה עבור החלק הראשון?',a:['יש לגרור ממשבצת העדכונים את הרכיב:','מבחן מפמ״ר כיתה ז׳ תשפ״ו — חלק ראשון (Moodle).','במייל צוין שקיים סרטון הסבר לגרירה של משימה למרחב, אך לא נמסר כאן URL של הסרטון.']},
{q:'האם המבחן גלוי לתלמידים מיד לאחר גרירת הרכיב?',a:['לא. המבחן מוסתר בפני התלמידים עד שהמורה מאפשר אחרת.','לכן יש לבחור את השאלות ולהכין את המבחן לפני פתיחתו לתלמידים.']},
{q:'כמה שאלות מופיעות בחלק הראשון וכמה מהן בוחרים?',a:['בחלק הראשון מופיעות 4 שאלות ב־Moodle.','המורה בוחר 2 שאלות מתוך 4 השאלות, על פי הספק הקבוצה.','התלמיד מבצע רק את שתי השאלות שנבחרו.']},
{q:'איך בוחרים את השאלות בחלק הראשון?',a:['לוחצים על המבחן בסביבת Moodle.','על המסך מופיע עמוד הכניסה למבחן.','לוחצים על "שאלות".','על המסך יופיעו 4 שאלות המבחן.','יש לבחור רק שתיים מהשאלות הללו.','את השאלות שלא נבחרו יש למחוק.','לאחר מכן לוחצים על "בוחן".']},
{q:'האם צריך לשנות את ניקוד המבחן ב־Moodle לאחר מחיקת שאלות?',a:['לא. אין צורך לשנות את ניקוד השאלות.','הניקוד יחושב אוטומטית מתוך 100, גם לאחר מחיקת השאלות שלא נבחרו.']},
{q:'אם מחקתי שאלה בטעות מהמשימה ב־Moodle, האם אפשר להחזיר אותה?',a:['כן. בתחתית מסך השאלות, מצד שמאל, לוחצים על "הוספה".','לאחר מכן בוחרים באפשרות האמצעית: "ממאגר השאלות".','בחלון מאגר השאלות אפשר לבחור את השאלה שנמחקה או להוסיף את כל השאלות חזרה.']},
{q:'איך פותחים את המבחן לצפייה ולפתרון של התלמידים?',a:['מפעילים את המרחב לעריכה באמצעות כפתור "מצב עריכה" מצד שמאל למעלה.','לוחצים על שלוש הנקודות לצד המבחן.','בוחרים "זמינות".','מבין האפשרויות בוחרים את האפשרות המתאימה.','כאשר בוחרים "מוצג בעמוד הקורס", התלמידים יראו את המבחן במרחב הלמידה ויוכלו לפתור אותו.']},
{q:'מה קורה בזמן ההגשה של החלק המתוקשב?',a:['בסיום המענה על שתי השאלות התלמיד לוחץ על כפתור ומגיש את המשימה.','לפני ההגשה התלמיד יכול עדיין לחזור ולתקן.','לאחר לחיצה על "שמירה וסיום" אין אפשרות לחזור למבחן.']},
{q:'כמה ניסיונות מענה יש לתלמיד בחלק המתוקשב?',a:['המשימה מוגדרת לניסיון מענה אחד בלבד.','לאחר הגשת המשימה, התלמיד לא יוכל להיכנס ולבצע אותה שוב.']},
{q:'האם התלמיד מקבל ציון מיד לאחר ההגשה ב־Moodle?',a:['לא. התלמיד לא מקבל ציון מיד עם הגשת המשימה.','המורה רואה את הציון של התלמידים במרחב.']},
{q:'האם חייבים מחשב בחלק המתוקשב?',a:['למען טוהר הבחינות, השימוש בטלפון נייד בעייתי.','לכן יש להיערך לביצוע החלק המתוקשב במחשב, ככל שהדבר אפשרי.']}
]},
{id:'written',title:'חלק שני — שאלות בכתב',items:[
{q:'איפה נמצאים קבצי החלק השני של המבחן?',a:['קובץ השאלות וקובץ המחוון נמצאים ברכיב ששמו:','מבחן מפמ״ר לכיתה ז׳ — חלק שני — שאלות בכתב.','הרכיב נמצא במשבצת העדכונים במרחב הלמידה של המורה.']},
{q:'באילו פורמטים מצורפות שאלות החלק השני?',a:['שאלות החלק השני מצורפות בקובץ PDF ובקובץ Word.','השאלות כתובות בקובץ PDF להדפסה.','מחוון הבדיקה מצורף לקובץ.']},
{q:'מה על המורה לעשות כדי להדפיס את החלק השני?',a:['כדי להדפיס את המבחן, על המורה לגרור את הרכיב ממשבצת העדכונים למרחב הלמידה הכיתתי.','לאחר מכן יש להשתמש בקובץ ה־PDF להדפסה.']},
{q:'האם צריך להציג את רכיב החלק השני לתלמידים במרחב Moodle?',a:['לא. יש להשאיר רכיב זה מוסתר בפני התלמידים.','החלק השני מיועד להדפסה ולביצוע בכתב, ולא לפתיחה לתלמידים כרכיב גלוי במרחב.']},
{q:'כמה שאלות מופיעות בקובץ החלק השני וכמה מהן התלמיד עונה?',a:['בקובץ ה־PDF כתובות 4 שאלות.','על המורה לבחור לפחות שאלה אחת מתוך 4 השאלות.','יש להוסיף לחלק המבחן בכתב שאלות נוספות לבחירת המורה — מתוך הקובץ או שאלות אחרות שנכתבו בהתאם להספק הלימודי בפועל.','בסך הכל התלמיד עונה על 3 שאלות בחלק זה.']},
{q:'מי בודק את החלק השני וכיצד הוא מנוקד?',a:['החלק השני נבדק על ידי המורה.','הבדיקה נעשית באמצעות מחוון שיצורף לקובץ.','הניקוד לכל שאלה הוא בין 0 ל־100.']}
]},
{id:'special',title:'פיצול, דחייה ותלמידי חנ״מ',items:[
{q:'האם אפשר לפצל את המבחן ליומיים?',a:['כן. אפשר לפצל כך שביום אחד יתקיים המבחן בכתב וביום אחר יתקיים המבחן המתוקשב.','בכל מקרה, שני החלקים יתקיימו בבית הספר.']},
{q:'האם תלמידי חנ״מ צריכים להיבחן במבחן המפמ״ר?',a:['תלמידי חנ״מ המשולבים בכיתות הרגילות צריכים להיבחן במבחן המפמ״ר.','תלמידי כיתות קטנות חנ״מ, כאשר החינוך המיוחד מוגדר ככיתה, אינם מחויבים להיבחן.']},
{q:'למי פונים בבקשה לדחיית מועד הבחינה מעבר ל־01.06.2026?',a:['הפנייה היא להדס אייזנבך, מדריכה ארצית מתמטיקה חט״ב.','כתובת המייל מופיעה בפרטי הקשר בקישור:','https://meyda.education.gov.il/files/Pop/0files/matmatika/Chativat-Beynayim/tashpav/contact.pdf']}
]},
{id:'support',title:'סיוע, תמיכה וקישורים',items:[
{q:'למי פונים בבעיה הקשורה לתוכן?',a:['בכל בעיה הקשורה לתוכן אפשר לפנות למדריך הבית ספרי או המחוזי.']},
{q:'למי פונים בבעיה טכנית?',a:['בכל בעיה טכנית אפשר לפנות לתמיכה הטכנית.','במייל צוין שקיימת תמיכה טכנית, אך לא נמסר כאן URL מדויק לתמיכה זו.']},
{q:'איפה נמצאים פרטי אנשי הקשר הארציים לחט״ב?',a:['במייל הופיע סעיף "אנשי קשר ארצי חט״ב".','הקישור שנמסר לפרטי הקשר הוא:','https://meyda.education.gov.il/files/Pop/0files/matmatika/Chativat-Beynayim/tashpav/contact.pdf']},
{q:'האם יש קישור לקבוצת WhatsApp של המודל?',a:['במייל צוין שיש קישור לקבוצת WhatsApp של המודל.','ה־URL המדויק של קבוצת ה־WhatsApp לא נמסר כאן, ולכן הוא לא הוכנס לאתר כקישור לחיץ.','כאשר יימסר הקישור המדויק, יש לשלב אותו בשאלה זו.']},
{q:'האם יש קישור לסרטון ההסבר לגרירת משימה למרחב?',a:['במייל צוין שיש סרטון הסבר לגרירה של משימה למרחב.','ה־URL המדויק של הסרטון לא נמסר כאן, ולכן הוא לא הוכנס לאתר כקישור לחיץ.','כאשר יימסר הקישור המדויק, יש לשלב אותו בשאלה זו או בשאלה על גרירת רכיב המבחן ב־Moodle.']}
]}
];

const nav=document.getElementById('topicNav');
const content=document.getElementById('content');

function htmlText(text){return String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\n','<br>')}
function linkifyUrls(safeHtml){return safeHtml.replace(/https:\/\/[^\s<]+/g,url=>`<span class="qa-link-actions"><a class="resource-link" href="${url}" target="_blank" rel="noopener">פתיחת קישור</a><button class="copy-link-btn" type="button" data-copy-url="${url}">העתק קישור</button></span>`)}
function renderP(text){const terms=['12.05.2026','01.06.2026','90 דקות','30 דקות','5 שאלות','2 שאלות מתוך 4','PDF ובקובץ Word','אפשר לפצל'];const cls=terms.some(t=>text.includes(t))?' class="highlight"':'';return `<p${cls}>${linkifyUrls(htmlText(text))}</p>`}

nav.innerHTML=`<button class="nav-arrow nav-arrow-right" type="button" aria-label="נושא קודם">→</button><div class="topic-nav-scroll" id="topicNavScroll" tabindex="0" aria-label="כפתורי ניווט לפי נושאים">${sections.map(s=>`<a href="#${s.id}" data-target="${s.id}">${s.title}</a>`).join('')}</div><button class="nav-arrow nav-arrow-left" type="button" aria-label="נושא הבא">←</button>`;
content.innerHTML=sections.map(section=>`<section class="topic-section" id="${section.id}" data-section-id="${section.id}"><h2>${section.title}</h2>${section.items.map(item=>`<article class="qa-card"><h3>שאלה:</h3><p class="question">${htmlText(item.q)}</p><h4>תשובה:</h4><div class="answer">${item.a.map(renderP).join('')}</div></article>`).join('')}</section>`).join('');

const scrollBox=document.getElementById('topicNavScroll');
const navLinks=[...scrollBox.querySelectorAll('a[data-target]')];
const sectionsById=new Map(sections.map(s=>[s.id,document.getElementById(s.id)]));
let activeIndex=0;

function updateArrowState(){document.querySelector('.nav-arrow-right').disabled=activeIndex<=0;document.querySelector('.nav-arrow-left').disabled=activeIndex>=sections.length-1}
function setActive(index,scrollChip=true){activeIndex=Math.max(0,Math.min(index,navLinks.length-1));navLinks.forEach((link,i)=>{const on=i===activeIndex;link.classList.toggle('active',on);if(on)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')});if(scrollChip)navLinks[activeIndex].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});updateArrowState()}
function goToIndex(index){const nextIndex=Math.max(0,Math.min(index,navLinks.length-1));const target=sectionsById.get(navLinks[nextIndex].dataset.target);setActive(nextIndex);if(target)target.scrollIntoView({behavior:'smooth',block:'start'})}

navLinks.forEach((link,index)=>link.addEventListener('click',e=>{e.preventDefault();goToIndex(index)},{passive:false}));
document.querySelector('.nav-arrow-right').addEventListener('click',()=>goToIndex(activeIndex-1));
document.querySelector('.nav-arrow-left').addEventListener('click',()=>goToIndex(activeIndex+1));

document.addEventListener('click',async e=>{
  const btn=e.target.closest('[data-copy-url]');
  if(!btn)return;
  try{
    await navigator.clipboard.writeText(btn.dataset.copyUrl);
    btn.textContent='הועתק';
    setTimeout(()=>btn.textContent='העתק קישור',1400);
  }catch(err){
    btn.textContent='לא הועתק';
    setTimeout(()=>btn.textContent='העתק קישור',1400);
  }
});

if('IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>Math.abs(a.boundingClientRect.top)-Math.abs(b.boundingClientRect.top))[0];
    if(!visible)return;
    const idx=sections.findIndex(s=>s.id===visible.target.id);
    if(idx>=0)setActive(idx,false);
  },{root:null,rootMargin:'-35% 0px -55% 0px',threshold:.01});
  sections.forEach(s=>observer.observe(sectionsById.get(s.id)));
}
setActive(0,false);
