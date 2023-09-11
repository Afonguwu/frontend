// Get references to the buttons of features and qa
const introButton = document.getElementById("introButton");
const qaButton = document.getElementById("qaButton");
const carouselSection = document.getElementById("carouselSection");
const qaSection = document.getElementById("qaSection");

// Add a click event listener to the features and qa buttons
introButton.addEventListener("click", () => {
  carouselSection.style.display = "block";
  qaSection.style.display = "none";
  introButton.classList.add("active");
  qaButton.classList.remove("active");
});
qaButton.addEventListener("click", () => {
  carouselSection.style.display = "none";
  qaSection.style.display = "block";
  qaButton.classList.add("active");
  introButton.classList.remove("active");
});

// Get references to the '.custom-indicator'
const customIndicators = document.querySelectorAll('.custom-indicator');
const myCarousel = document.querySelector('#myCarousel');

// Add auto hover
myCarousel.addEventListener('slide.bs.carousel', (event) => {
  customIndicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  customIndicators[event.to].classList.add('active');
});