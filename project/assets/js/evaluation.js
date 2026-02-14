document.addEventListener("DOMContentLoaded", function () {

  const stars = document.querySelectorAll(".star");
  const ratingText = document.getElementById("rating-text");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const currentRating = star.dataset.value;

      stars.forEach(s => {
        s.classList.toggle("active", s.dataset.value <= currentRating);
      });

      if (ratingText) {
        ratingText.innerText = `التقييم: ${currentRating} من 5`;
      }
    });
  });

});