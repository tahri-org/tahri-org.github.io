const navbar = document.querySelector('#main-navbar');
const target = document.querySelector('#main-content');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add('nav-scrolled')
    } else {
      navbar.classList.remove('nav-scrolled')
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
	rootMargin: "0px 0px -40%"
});

observer.observe(target);
