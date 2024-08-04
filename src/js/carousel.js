const slidesContainer = document.getElementById("scroll-blocks");
const slide = document.querySelector(".partner-review");
const prevButton = document.getElementById("left-scroll");
const nextButton = document.getElementById("right-scroll");

nextButton.addEventListener("click", () => {
  const slideWidth = partner-review.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
