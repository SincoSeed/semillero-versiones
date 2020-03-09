const sliderImages = document.querySelectorAll('.slide-in')
window.addEventListener('scroll', debounce(checkSlide))


function debounce(func, wait = 500, immediate = true) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {

            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args) //
    }
}

function checkSlide() {

    sliderImages.forEach(sliderImage => {
        const slideInAt = (this.scrollY + this.innerHeight) - sliderImage.height / 1.5;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = this.scrollY < imageBottom;
        (isHalfShown && isNotScrolledPast) ? sliderImage.classList.add('active') : sliderImage.classList.remove('active')
    })
}
// var audio = $("")[0];
// $("nav a").mouseenter(function() {
//     audio1.play();
//   });
var sound;
function reading(paragraph) {
    if (paragraph !== "stop") {
        sound = new Audio(`mp3/${paragraph}_paragraph.m4a`);
        sound.play();
    } else {
        sound.pause();
    }

}

const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);
paragraphs.forEach(element => {
    element.addEventListener('mouseenter', function () {
        option = this.classList[1];
        console.log(option)
        switch (option) {
            case 'p1':
                reading('1st');
                break;
            case 'p2':
                reading('2nd');
                break;
            case 'p3':
                reading('3rd');
                break;
            case 'p4':
                reading('4th');
                break;
            case 'p5':
                reading('5th');
                break;
            case 'p6':
                reading('6st');
                break;
            case 'p7':
                reading('7th');
                break;
            case 'p8':
                reading('8th');
                break;
            case 'p9':
                reading('9th');
                break;
            case 'p10':
                reading('10th');
                break;
            case 'p11':
                reading('11th');
                break;
            case 'p12':
                reading('12th');
                break;

            default:
                break;
        }
    });
});
paragraphs.forEach(element => {
    element.addEventListener('mouseleave', function () {
        reading("stop");
    });
});



