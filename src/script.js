document.addEventListener('scroll', () => {
  document.getElementById('body').setAttribute('data-scroll', window.scrollY)
});

const phrases = [
  "GITAM Visakhapatnam", "GITAM Hyderabad", "GITAM Bengaluru", "Best Gitam tech community", "Most active Gitam tech club"
]

animateText()

function animateText() {
  const elem = document.getElementById('mytext')
  elem.classList.add('animate-typed-out')
  setInterval(() => {
    elem.innerHTML = phrases[getRndInteger(0, phrases.length - 1)]
  }, 5000);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

