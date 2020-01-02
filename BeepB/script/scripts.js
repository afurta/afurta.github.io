window.onload = function(e){
    /*slider*/
    const prevBtn = document.querySelector('.prev-nav'),
          nextBtn = document.querySelector('.next-nav');
    let   countSlide = document.querySelectorAll('.users-block_slide').length,
          slideNow = 1,
          wrapperSlider = document.querySelector('.users-block_arr');
          translateNow = 0;                
    
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    function nextSlide(){
        let wrapperSlide = document.querySelector('.users-block_slide');
        if (slideNow == countSlide || slideNow > countSlide || slideNow <= 0){
            wrapperSlider.style.cssText = `transform: translateX(${translateNow}px);
                                          transition: all 0.5s ease-out;
                                          `; 
            slideNow = 1;
        } else{
            let translateNow = wrapperSlide.offsetWidth * slideNow;
            wrapperSlider.style.cssText = `transform: translateX(-${translateNow}px);
                                          transition: all 0.5s ease-out;
                                          `; 
            slideNow++;
        }
    }

    function prevSlide(){
        let wrapperSlide = document.querySelector('.users-block_slide');
        if (slideNow == 1 || slideNow > countSlide || slideNow <= 0){
            wrapperSlider.style.cssText = `transform: translateX(${-wrapperSlider.offsetWidth + wrapperSlide.offsetWidth}px);
                                          transition: all 0.5s ease-out;
                                          `;
            slideNow = countSlide;
        } else{
            let translateNow = wrapperSlide.offsetWidth * (slideNow - 2);
            wrapperSlider.style.cssText = `transform: translateX(-${translateNow}px);
                                          transition: all 0.5s ease-out;
                                          `;
            slideNow--;
        }
    }
    /*end slider*/

    /*menu*/
    const   menuBtn = document.querySelector('.toggle-menu'),
            headerNav = document.querySelector('.header-nav'),
            menu = document.querySelector('.toggle-menu_active');
    let     count = 0;

    menuBtn.addEventListener('click', showMenu)

    function showMenu(){
        let translate = menuBtn.offsetWidth + headerNav.offsetWidth;
        if(count == 0){
            menu.style.transform = "translate(0,0)";  
            count++;
        } else{
            menu.style.transform = "translate(0,-"+ translate +"px)";  
            count--;
        }

    }

    /*end menu*/
}
