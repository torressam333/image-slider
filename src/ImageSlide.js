export default class ImageSlide {
  constructor() {
    this.slides = document.querySelectorAll("slides");
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
    if (n > slidesArray.length) this.slideIndex = 1;

    if (n < 1) this.slideIndex = this.slidesArray.length;

    //We don't want to modify the original array
    slidesArray.map((slide) => {
      slide.style.display = "none";
    });

    slidesArray[this.slideIndex - 1].style.display = "block";
  }
}

//Commented out because it conflicts with JEST mocking
//To get the slider to work: uncomment the 3 lines below

// const slider = new ImageSlide();
// slider.slideNext(1);
// slider.slidePrev(-1);
