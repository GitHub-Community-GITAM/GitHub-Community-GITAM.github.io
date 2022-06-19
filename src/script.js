const phrases = [
    "GITAM Visakhaptnam", "GITAM Hyderabad", "GITAM Bengaluru", "Best Gitam tech community"
]

animateText()

function animateText() {
    const elem = document.getElementById('mytext')
    elem.classList.add('animate-typed-out')
    setInterval(() => {
        elem.innerHTML = phrases[getRndInteger(0, phrases.length-1)]
    }, 5000);
}
console.log('sjchdb')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}