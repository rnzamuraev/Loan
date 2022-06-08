import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns);
  }

  showSlide(n) {
    try {
      if (n > this.slides.length) {
        this.slideIndex = 1;
      } else if (n < 1) {
        this.slideIndex = this.slides.length;
      }
    } catch (e) {}

    try {
      this.hanson.style.opacity = "0";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (err) {}

    try {
      this.slides.forEach((slide) => {
        slide.style.display = "none";
      });
      this.slides[this.slideIndex - 1].style.display =
        "block";
    } catch (e) {}
  }

  plusSlide(n) {
    this.showSlide((this.slideIndex += n));
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.plusSlide(1);
      });
      btn.parentNode.previousElementSibling.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          this.slideIndex = 1;
          this.showSlide(this.slideIndex);
        }
      );
    });

    document
      .querySelectorAll(".prevmodule")
      .forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.plusSlide(-1);
        });
      });

    document
      .querySelectorAll(".nextmodule")
      .forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.plusSlide(1);
        });
      });
  }

  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (err) {
      console.log("Этот блок сейчас не может быть показан");
    }

    this.showSlide(this.slideIndex);
    this.bindTriggers();
  }
}
