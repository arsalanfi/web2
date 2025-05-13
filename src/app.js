document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector("#nazaratKabar ul");
  const arrowButtonRight = document.getElementById("rightClick");
  const arrowButtonLeft = document.getElementById("leftClick");

  arrowButtonLeft.addEventListener("click", () => {
  scrollContainer.scrollBy({
      left: 280,
      behavior: "smooth"
  });
  });

  arrowButtonRight.addEventListener("click", () => {
  scrollContainer.scrollBy({
      left: -280,
      behavior: "smooth"
  });
  });
});

