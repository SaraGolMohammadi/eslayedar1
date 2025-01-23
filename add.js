const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const thumbnails = document.querySelectorAll(".thumb");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
function showSlide(index) {
  const slideWidth = items[0].clientWidth;
  list.style.transform = `translateX(-${index * slideWidth}px)`;
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  thumbnails[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
showSlide(currentIndex);
