// Variables
let box = document.querySelectorAll('.service-box');
let footerSpace = document.querySelector('.aboveFooterSpace');


// Click Services for Details
box.forEach((box)=> {
    box.addEventListener('click', ()=> {
        // Services Details Box
        box.style.animation = 'open 3s forwards';
        box.style.backgroundColor = '#5A9FB5';
        // P tag
        box.childNodes[3].style.opacity='1';
        // H2 tag
        box.childNodes[1].style.color='#F0F0ED';
        // Border Animation
        let border = box.nextSibling.nextSibling.childNodes[1];
        setTimeout(()=>{border.style.animation = 'border 3s forwards';}, 2000);
    });
});

// Bottom of Services Container
box[4].addEventListener('click', ()=> {
    footerSpace.style.height = '0';
});
