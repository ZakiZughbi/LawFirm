let headerWindow = document.querySelector('.header2Window')
headerImg = headerWindow.childNodes[1]

window.onscroll = function(){headerImgDisapear();};


// Image Appear & Disapear Function
function headerImgDisapear(){
    if(document.body.scrollTop > 2000 || document.documentElement.scrollTop > 1000){
        headerImg.style.display='none';
    }else{
        headerImg.style.display='block';
    }
}
