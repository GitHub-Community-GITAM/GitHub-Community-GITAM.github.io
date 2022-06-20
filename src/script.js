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


$(document).ready(function(){
    $('.items').slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
          });
