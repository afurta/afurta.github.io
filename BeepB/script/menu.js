const menuBtn = document.querySelector('.toggle-menu'),
        headerNav = document.querySelector('.header-nav');
        menu = document.querySelector('.toggle-menu_active');

menuBtn.addEventListener('click', showMenu)

function showMenu(){
    let translatemenu = menu.clientHeight + headerNav.clientHeight;
    let a = menu.style.cssText.transform.translate;

    console.log(a);
    console.log(translatemenu);
    if(menu.style.cssText = `transform: translateX(0px`){
        menu.style.cssText = `transform: translateY(0px);
                            transition: all 0.5s ease-out;
                            `;
            
    }

}   