document.addEventListener('scroll', () => {
  document.getElementById('body').setAttribute('data-scroll', window.scrollY)
});

animateText()

const teamContainer = document.getElementById('teamContainer')
loadJSON('../config/team.json', (team) => {
  team.forEach(it => {
    const teamCard = getTeamCard(it.img, it.name, it.title)
    teamContainer.insertAdjacentHTML('beforeend', teamCard)
  });
})

function animateText() {
  const phrases = [
    "GITAM Visakhapatnam", "GITAM Hyderabad", "GITAM Bengaluru", "Best Gitam tech community", "Most active Gitam tech club"
  ]
  const elem = document.getElementById('mytext')
  elem.classList.add('animate-typed-out')
  setInterval(() => {
    elem.innerHTML = phrases[getRndInteger(0, phrases.length - 1)]
  }, 5000)
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && success) {
      success(JSON.parse(xhr.responseText))
    } else if (error) {
      error(xhr)
    }
  }
  xhr.open("GET", path, true);
  xhr.send()
}

function getTeamCard(img, name, title) {
  return `
  <div class="d-flex align-items-center flex-column text-center mx-1 my-3" style="width: 180px;">
      <img class="img-fluid rounded-circle mb-1" src="assets/team/${img}">
      <label class="mt-1" style="font-weight: 700;">${name}</label>
      <label>${title}</label>
  </div>
  `
}