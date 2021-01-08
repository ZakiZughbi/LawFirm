// Variables
let sloganImg = document.getElementById('sloganImg');


// Calling Appear & Disapear Function
window.onscroll = function(){appearDisapear();};


// Image Appear & Disapear Function
function appearDisapear(){
    if(document.body.scrollTop > 4500 || document.documentElement.scrollTop > 3500){
        sloganImg.style.visibility='hidden';
    }else{
        sloganImg.style.visibility='visible';
    }
}
