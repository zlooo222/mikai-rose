window.addEventListener('load', () => {
  if (!sessionStorage.getItem('welcomeShown')) {
    alert('Welcome to the University of Rizal System - Morong!');
    sessionStorage.setItem('welcomeShown', 'true');
  }
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.main-nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});

document.querySelectorAll('.main-nav a').forEach(link => {
  const currentPath = window.location.pathname.split('/').pop();
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }

 function toggleCourses() {
  const container = document.getElementById("course-offerings");
  container.classList.toggle("visible");
}

document.querySelectorAll('.program-card a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.style.backgroundColor = '#ffd700';
    link.innerText = 'Loading...';
    setTimeout(() => {
      link.style.backgroundColor = '#ffd700';
      link.innerText = 'Learn more';
      window.location.href = link.href;
    }, 1000);
  });
});

document.querySelectorAll('.main-nav a').forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    tab.style.color = '#e5c100'; // hover color
    tab.style.textDecoration = 'underline';
  });
  tab.addEventListener('mouseleave', () => {
    if (!tab.classList.contains('active')) {
      tab.style.color = '#7ABBFF'; // original color
    }
    tab.style.textDecoration = 'none';
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('autoReply').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    document.getElementById('autoReply').classList.add('hidden');
  }, 4000);
});

