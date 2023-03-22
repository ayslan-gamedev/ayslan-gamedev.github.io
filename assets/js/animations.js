const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
        }, wait);
    };
}

// elementos html com data animation
const targetAnimationElements = document.querySelectorAll('[data-animation]');

// classe do css
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.5) / 4);

    targetAnimationElements.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);    
        }
    })

}

animeScroll();

if(targetAnimationElements.length > 0){
    // verifica se mexeu o mouse 
    window.addEventListener('scroll',debounce(function(){
        animeScroll();
    },100))
}