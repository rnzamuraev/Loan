export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = "",
    animate,
    autoplay,
  } = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }

  /////////////////
  // constructor(page, btns) {
  //   this.page = document.querySelector(page);
  //   this.slides = this.page.children;
  //   this.btns = document.querySelectorAll(btns);
  //   this.slideIndex = 1;
  // }
  // showSlide(n) {
  //   if (n > this.slides.length) {
  //     this.slideIndex = 1;
  //   } else if (n < 1) {
  //     this.slideIndex = this.slides.length;
  //   }
  //   try {
  //     this.hanson.style.opacity = "0";
  //     if (n === 3) {
  //       this.hanson.classList.add("animated");
  //       setTimeout(() => {
  //         this.hanson.style.opacity = "1";
  //         this.hanson.classList.add("slideInUp");
  //       }, 3000);
  //     } else {
  //       this.hanson.classList.remove("slideInUp");
  //     }
  //   } catch (err) {}
  //   this.slides.forEach((slide) => {
  //     slide.style.display = "none";
  //   });
  //   this.slides[this.slideIndex - 1].style.display =
  //     "block";
  // }
  // plusSlide(n) {
  //   this.showSlide((this.slideIndex += n));
  // }
  // render() {
  //   try {
  //     this.hanson = document.querySelector(".hanson");
  //   } catch (err) {
  //     console.log("Этот блок сейчас не может быть показан");
  //   }
  //   this.btns.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       this.plusSlide(1);
  //     });
  //     btn.parentNode.previousElementSibling.addEventListener(
  //       "click",
  //       (e) => {
  //         e.preventDefault();
  //         this.slideIndex = 1;
  //         this.showSlide(this.slideIndex);
  //       }
  //     );
  //   });
  //   this.showSlide(this.slideIndex);
  // }
}
