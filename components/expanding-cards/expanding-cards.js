const cards = document.querySelectorAll('.card');

cards.forEach((element)=>{
    element.addEventListener('click', ()=>{ 
        removeActiveClass();
        element.classList.add("active");
    });
});

function removeActiveClass(){
    cards.forEach((element)=>{
        element.classList.remove('active');
    });
};
