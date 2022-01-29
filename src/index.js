class ImageSlider {
  constructor() {
    this.slides = document.querySelectorAll(".slides");
    this.prevButton = document.querySelector("#prev-button");
    this.nextButton = document.querySelector("#next-button");
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  slideNext(n) {
    this.nextButton.addEventListener("click", () => {
      this.showSlides((this.slideIndex += n));
    });
  }

  slidePrev(n) {
    this.prevButton.addEventListener("click", () => {
      this.showSlides((this.slideIndex -= n));
    });
  }

  showSlides(n) {
    let i;

    if (n > this.slides.length) this.slideIndex = 1;
    if (n < this.slides.length) this.slideIndex = this.slides.length;

    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    this.slides[this.slideIndex - 1].style.display = "block";
  }
}

const slider = new ImageSlider();
slider.showSlides(slider.slideIndex);
