document.addEventListener("DOMContentLoaded", () => {
  let selectedFlower = null;
  let selectedActivity = null;

  // Flower selection event
  document.querySelectorAll(".flower").forEach(flower => {
    flower.addEventListener("click", () => {
      selectedFlower = flower.dataset.flower;
      resetFlowerSelection();
      flower.style.border = "5px solid gold";
    });
  });

  // Activity selection event
  document.querySelectorAll(".activity-btn").forEach(button => {
    button.addEventListener("click", () => {
      selectedActivity = button.textContent;
      resetActivityButtons();
      button.style.backgroundColor = "#2980b9"; // Highlight selected activity
    });
  });

  // Submit button event
  document.getElementById("submit-btn").addEventListener("click", () => {
    const resultText = document.getElementById("result-text");

    if (selectedFlower && selectedActivity) {
      resultText.textContent = `You chose the ${selectedFlower} for a ${selectedActivity} date!`;
    } else {
      resultText.textContent = "Please select both a flower and an activity.";
    }
  });

  // Helper functions
  function resetFlowerSelection() {
    document.querySelectorAll(".flower").forEach(flower => {
      flower.style.border = "none";
    });
  }

  function resetActivityButtons() {
    document.querySelectorAll(".activity-btn").forEach(button => {
      button.style.backgroundColor = "#3498db"; // Reset background color
    });
  }
});
