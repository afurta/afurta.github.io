const blocks = document.querySelectorAll(".portfolio__block");
const switchers = document.querySelectorAll(".portfolio__switch");

blocks.forEach(elem => {
  let block = elem.querySelector(".block__img-wrapper");
  let eye = elem.querySelector(".block__eye");
  elem.addEventListener("mouseover", event => {
    block.classList.add("block__img-wrapper_active");
    eye.classList.add("block__eye_active");
  });
  elem.addEventListener("mouseout", event => {
    block.classList.remove("block__img-wrapper_active");
    eye.classList.remove("block__eye_active");
  });
});

switchers.forEach(elem => {
  elem.addEventListener("click", event => {
    const activeSwitch = document
      .querySelector(".portfolio__switch_active")
      .classList.remove("portfolio__switch_active");
    const activeItem = document
      .querySelector(".portfolio__item_active")
      .classList.remove("portfolio__item_active");

    event.target.classList.add("portfolio__switch_active");
    let currentElem = event.target.getAttribute("data-name");
    document
      .querySelector(`.${currentElem}`)
      .classList.add("portfolio__item_active");
  });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
