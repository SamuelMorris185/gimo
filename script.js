// Mobile nav toggle + reveal on scroll
document.addEventListener('DOMContentLoaded', function(){
  // Year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', ()=>{
      navList.classList.toggle('show');
    });
    // Close on link click (mobile)
    navList.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      navList.classList.remove('show');
    }));
  }

  // Smooth reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold: 0.12});
  reveals.forEach(r=>io.observe(r));

  // small hover parallax for project cards
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${y*3}deg) rotateY(${x*3}deg)`;
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = '';
    });
  });
});