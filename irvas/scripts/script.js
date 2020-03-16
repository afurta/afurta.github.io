// order
let typeInst = document.querySelectorAll(".type-of-repair li a");

for(i=0; i < typeInst.length; i++){
    typeInst[i].addEventListener('click', show);
}

function show(event){   
    let clickElement = this.getAttribute("data-text"),
        activeElement = document.querySelector(".installation__active"),
        nextElement = document.querySelector(`${clickElement}`);
    
    activeElement.classList.remove('installation__active');
    nextElement.classList.add('installation__active');

    event.preventDefault();
};
// order

// popup
let workBlock = document.querySelectorAll(".work-block"),
    activeImg = document.querySelector(".active-img"),
    closeBtn = document.querySelector('.close-block'),
    blockImg = document.querySelector('.block-img');

for(i=0; i < workBlock.length; i++){
    workBlock[i].addEventListener('mouseover', zoomOver);
    workBlock[i].addEventListener('mouseout', zoomOut);
}


function zoomOver(){
    let currentBlock = this,
        zoomImg = currentBlock.lastElementChild;

    zoomImg.classList.add('zoom-in_active');

    zoomImg.onclick = function() {
    let currentEl = this,
        parentEl = currentEl.parentElement.firstElementChild,
        currentSrc = parentEl.getAttribute('src')
        activeBlock = document.querySelector('.active-img'); 
         
    
    activeBlock.classList.add('active-block'); 
    blockImg.setAttribute('src', currentSrc);
    };

    closeBtn.addEventListener('click', function () {
        activeBlock.classList.remove('active-block');
    });
}

function zoomOut(){
    currentBlock = document.querySelector(".zoom-in_active");
    currentBlock.classList.remove('zoom-in_active');
}

// popup
