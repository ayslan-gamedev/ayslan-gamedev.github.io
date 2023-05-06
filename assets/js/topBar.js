const barObject = document.querySelectorAll('[navBar]');
const MenuObject = document.querySelectorAll('[navMenu]');
const menuButton = document.querySelectorAll('[menuButton]');

const animationBarClass = 'animeBar';
const animationMenuClass = 'animeMenu';

var lastWindowsTop = null;

if(barObject.length > 0){
    window.addEventListener('scroll', function(){AnimeBar()});
}

function AnimeBar(){
    const windowTop = window.pageYOffset;

    if(isActivad == true){
        MenuObject.forEach(function(element){
            element.classList.remove(animationMenuClass);
        })
        barObject.forEach(function(element){
            element.classList.remove(animationMenuClass);
        })
        isActivad = false;
    }

    barObject.forEach(function(element){
        if(windowTop < lastWindowsTop){ 
            element.classList.remove(animationBarClass);
        }
        else{
            element.classList.add(animationBarClass);

        }
    })
    
    lastWindowsTop = windowTop;
}

if(menuButton.length > 0){
    menuButton.forEach(function(element){element.addEventListener("click", function(){ShowMenu()})})
}

var isActivad = false;
function ShowMenu(){
    
    if(isActivad == true){
        MenuObject.forEach(function(element){
            element.classList.remove(animationMenuClass);
        })
        barObject.forEach(function(element){
            element.classList.remove(animationMenuClass);
        })
        isActivad = false;
    }
    else{
        MenuObject.forEach(function(element){
            element.classList.add(animationMenuClass);
        })
        barObject.forEach(function(element){
            element.classList.add(animationMenuClass);
        })
        isActivad = true;
    }
}


// const barObject = document.querySelectorAll('[navBar]');
// const animationClass = 'animeBar';
// var lastWindowsTop = null;

// function animeBar(){
//     const windowTop = window.pageYOffset;

//     barObject.forEach(function(element){
//         if(windowTop < lastWindowsTop) element.classList.remove(animationClass);
//         else element.classList.add(animationClass);
//     })
    
//     lastWindowsTop = windowTop;
// }

// if(barObject.length > 0){
//     window.addEventListener('scroll', function(){animeBar()});
// }

// const menuObject = document.querySelectorAll('[navMenu]');
// const animationMenuClass = 'animeMenu';

// const  = document.querySelectorAll('[navMenu]');


// function OpenMenu(){
//     menuObject.forEach(function(element){
//         element.classList.add(animationClass);
//         element.classList.remove(animationClass);
//     })
// }