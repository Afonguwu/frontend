// tag-container水平滑動
const tagContainer = document.querySelector('.tag-container');
const tagRow = document.querySelector('.tag-row');

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

// Mouse Events
tagContainer.addEventListener('mousedown', (e) => {
    startDragging(e.pageX, tagContainer.offsetLeft);
});
tagContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    moveDragging(e.pageX);
});
tagContainer.addEventListener('mouseup', stopDragging);
tagContainer.addEventListener('mouseleave', stopDragging);

// Touch Events
tagContainer.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startDragging(touch.pageX, tagContainer.offsetLeft);
});
tagContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    moveDragging(touch.pageX);
});
tagContainer.addEventListener('touchend', stopDragging);
tagContainer.addEventListener('touchcancel', stopDragging);

function startDragging(pageX, offsetLeft) {
    isDragging = true;
    startX = pageX - offsetLeft;
    scrollLeft = tagRow.scrollLeft;
    tagContainer.style.cursor = 'grabbing';
}
function moveDragging(pageX) {
    const x = pageX - tagContainer.offsetLeft;
    const walk = (x - startX) * 2;
    tagRow.scrollLeft = scrollLeft - walk;
}
function stopDragging() {
    isDragging = false;
    tagContainer.style.cursor = 'grab';
}