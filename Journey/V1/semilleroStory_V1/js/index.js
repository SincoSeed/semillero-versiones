const sliderImages = document.querySelectorAll('.slide-in')
window.addEventListener('scroll', debounce(checkSlide))


function debounce(func, wait = 500, immediate = true) {
    var timeout
    return function() {
        debugger;
        var context = this,
            args = arguments
        var later = function() {

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
        debugger;
        const slideInAt = (this.scrollY + this.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = this.scrollY < imageBottom;
        (isHalfShown && isNotScrolledPast) ? sliderImage.classList.add('active'): sliderImage.classList.remove('active')
    })
}
0