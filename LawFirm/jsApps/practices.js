let pracBoxes = document.querySelectorAll('.practiceBox');
let detail = document.querySelector('.expand');
pracBoxes.forEach((box)=> {
    let aTag = box.childNodes[3];
    let x = detail.childNodes[1];

    console.log(detail.childNodes[1]);
    console.log(detail[1]);


    aTag.addEventListener('click', ()=> {
        detail.style.height='100%';
        x.style.display='block';
        detail.childNodes[3].style.display='block';
        detail.childNodes[5].style.display='block';
    });
    x.addEventListener('click', ()=> {
        detail.style.height='3%';
        x.style.display='none';
        detail.childNodes[3].style.display='none';
        detail.childNodes[5].style.display='none';
    });

});


// if (detail == ){
//
// }
