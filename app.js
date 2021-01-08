
// Variables
let sloganImg = document.getElementById('sloganImg');

// Getting Scroll Area
// var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

console.log(document.body.scrollTop);
console.log(document.documentElement.scrollTop);


// Calling Appear & Disapear Function
window.onscroll = function(){myFunction();};


// Image Appear & Disapear Function
function myFunction(){
    if(document.body.scrollTop > 4500 || document.documentElement.scrollTop > 3500){
        sloganImg.style.visibility='hidden';

    }else{
        sloganImg.style.visibility='visible';
    }
}
