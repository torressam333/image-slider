class ImageSlider {
  constructor() {
    this.slides = document.querySelectorAll(".slides");
    this.prevButton = document.querySelector("#prev-button");
    this.nextButton = document.querySelector("#next-button");
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  slideNext(num) {
    this.nextButton.addEventListener("click", () => {
      this.showSlides((this.slideIndex += num));
    });
  }

  slidePrev(num) {
    this.prevButton.addEventListener("click", () => {
      this.showSlides((this.slideIndex -= num));
    });
  }

  showSlides(n) {
    //Convert nodeList to array
    let slidesArray = Array.from(this.slides);

    //Start slideshow over
    if (n > this.slides.length) this.slideIndex = 1;

    if (n < 1) this.slideIndex = this.slides.length;

    //We don't want to modify the original array
    slidesArray.map((slide) => {
      slide.style.display = "none";
    });

    slidesArray[this.slideIndex - 1].style.display = "block";
  }
}

const slider = new ImageSlider();
slider.slideNext(1);
slider.slidePrev(-1);
