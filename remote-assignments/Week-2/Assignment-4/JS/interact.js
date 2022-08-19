// Request 1: Click to Change Text.

const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a Good Time!";
});

// Request 2: Click to Show More Content Boxes.

const showMoreBtn = document.getElementById("show-more");
const section2 = document.getElementById("section-to-show-more");

showMoreBtn.addEventListener("click", () => {
  showMoreBtn.style.display = "none";
  section2.style.display = "block";
});
