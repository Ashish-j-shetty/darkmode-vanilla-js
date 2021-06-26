const toggleButton = document.querySelector(".theme-toggle-button");

const sumMoonContainer = document.querySelector(".sun-moon-container");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const currentRotation = parseInt(
    getComputedStyle(sumMoonContainer).getPropertyValue("--rotation")
  );

  console.log(currentRotation);
  sumMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
