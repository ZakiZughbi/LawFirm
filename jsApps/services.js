// Variables
let box = document.querySelectorAll('.service-box');
let p = document.querySelectorAll('.service-box p');
let h2 = document.querySelectorAll('.service-box h2');


box.forEach((box)=>{
    // box.childNodes[3].style.display='none'
    // box.childNodes[1].style.paddingBottom='0'
    // box.style.color='#5A9FB5'
    // box.style.background='#F0F0ED'

    box.addEventListener('click', ()=> {
        box.childNodes[3].style.display='block'
        box.childNodes[1].style.paddingBottom='4%'
        box.style.color='#F0F0ED'
        box.style.background='#5A9FB5'
    })
})
