    // Variables
let box = document.querySelectorAll('.service-box');
let p = document.querySelectorAll('.service-box p');
let h2 = document.querySelectorAll('.service-box h2');
let container = document.querySelector('.services-container');
    // console.log(event.target.tagName)

//Good
    // box.forEach((box)=> {
    //     box.addEventListener('click', ()=> {
    //         box.childNodes[3].style.display='block';
    //         box.childNodes[1].style.paddingBottom='4%';
    //         box.style.background='#5A9FB5';
    //         box.style.color='#F0F0ED';
    //
    //         for(opacity = 1; opacity < 0; opacity = opacity - 0.1){
    //             setTimeout(()=>{box.style.opacity='opacity';}, 100);
    //         }
    //         box.nextSibling.nextSibling.style.width='100%'
    //         box.nextSibling.nextSibling.style.left='0'
    //         console.log(box.nextSibling.nextSibling)
    //     });
    // });
//End
box.forEach((box)=> {
    box.addEventListener('click', ()=> {
        box.style.animation = 'open 3s forwards'
        box.style.backgroundColor = '#5A9FB5'
        box.childNodes[3].style.opacity='1'
        box.childNodes[1].style.color='#F0F0ED'
    })
})

// box.childNodes[3].style.display='none';
// box.childNodes[1].style.paddingBottom='0';
// box.style.color='#5A9FB5';
// box.style.background='#F0F0ED';
