window.addEventListener('DOMContentLoaded', ()=>{

    const slides = document.querySelectorAll('.name'),
        prev = document.querySelector('.arrow-l'),
        next = document.querySelector('.arrow-r');



    let SlideIndex = 0,

        SlideIndexz = 0;

    function slid(m){
        m.forEach(item=>item.style.display="none");
        m[SlideIndex].style.display="block";
    }
    





    function showSlides(n){
        if(n>slides.length-1){
            SlideIndex=0
        }
        if(n<0){
            SlideIndex=slides.length-1
        }
        slid(slides)
    }
    showSlides(SlideIndex)




    function plusSlide(n){
        showSlides(SlideIndex+=n)
    }
    next.addEventListener('click', ()=>{
        plusSlide(1)
    })
    prev.addEventListener('click', ()=>{
        plusSlide(-1)
    })









    const tabs = document.querySelectorAll('.tabContent'),
          tabContent = document.querySelectorAll('.tabb'),
          tabParent = document.querySelector('.tab-parent');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target.closest('.tabContent');
        if (target) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

})