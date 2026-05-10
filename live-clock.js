(function(){
  const el = document.getElementById('liveUpdatedClock');
  if(!el) return;

  const dateFormatter = new Intl.DateTimeFormat('he-IL', {
    timeZone: 'Asia/Jerusalem',
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const timeFormatter = new Intl.DateTimeFormat('he-IL', {
    timeZone: 'Asia/Jerusalem',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  function tick(){
    const now = new Date();
    el.textContent = `מעודכן לתאריך ${dateFormatter.format(now)} | ${timeFormatter.format(now)}`;
    el.setAttribute('datetime', now.toISOString());
  }

  tick();
  window.setInterval(tick, 1000);
})();
