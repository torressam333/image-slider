import ImageSlider from "../ImageSlide.js";

jest.mock("../ImageSlide.js");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  ImageSlider.mockClear();
});

it("We can check that the constructor was instantiated", () => {
  const slider = new ImageSlider();
  expect(ImageSlider).toHaveBeenCalledTimes(1);
});

it("We can check that the next slide method is called", () => {
  const slider = new ImageSlider();

  //Constructor should be called again with new call
  expect(ImageSlider).toHaveBeenCalledTimes(1);

  const slideNextNum = 1;
  const nextSlide = slider.slideNext(slideNextNum);
});
