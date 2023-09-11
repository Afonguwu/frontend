const tagContainers = document.querySelectorAll('.tag-container');
const tagRows = document.querySelectorAll('.tag-row');

let isDragging = false;
let startX = 0;
let scrollLeft = 0;


let currentIndex; // Add a variable to keep track of the current index

// Loop through each tag container and add event listeners
tagContainers.forEach((tagContainer, index) => {
  tagContainer.addEventListener('mousedown', (e) => {
    startDragging(e.pageX, tagContainer.offsetLeft, index); // Pass the index as a parameter
  });
  tagContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    moveDragging(e.pageX, index); // Pass the index as a parameter
  });
  tagContainer.addEventListener('mouseup', stopDragging);
  tagContainer.addEventListener('mouseleave', stopDragging);

  // Touch Events for each tag container
  tagContainer.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startDragging(touch.pageX, tagContainer.offsetLeft, index); // Pass the index as a parameter
  });
  tagContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    moveDragging(touch.pageX, index); // Pass the index as a parameter
  });
  tagContainer.addEventListener('touchend', stopDragging);
  tagContainer.addEventListener('touchcancel', stopDragging);
});

function startDragging(pageX, offsetLeft, index) {
  isDragging = true;
  startX = pageX - offsetLeft;
  scrollLeft = tagRows[index].scrollLeft;
  currentIndex = index; // Set the current index
  tagContainers[index].style.cursor = 'grabbing';
}

function moveDragging(pageX, index) {
  const x = pageX - tagContainers[index].offsetLeft;
  const walk = (x - startX) * 2;
  tagRows[index].scrollLeft = scrollLeft - walk;
}

function stopDragging() {
  isDragging = false;
  tagContainers[currentIndex].style.cursor = 'grab'; // Use the currentIndex
}