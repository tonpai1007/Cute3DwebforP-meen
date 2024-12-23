document.addEventListener("DOMContentLoaded", () => {
  let chosenFlower = null;
  let chosenActivity = null;

  // Flower click event handlers
  document.getElementById("flower1").addEventListener("click", () => {
    chosenFlower = "Pink Flower";
    highlightFlower("flower1");
  });

  document.getElementById("flower2").addEventListener("click", () => {
    chosenFlower = "Blue Flower";
    highlightFlower("flower2");
  });

  document.getElementById("flower3").addEventListener("click", () => {
    chosenFlower = "Purple Flower";
    highlightFlower("flower3");
  });

  // Highlight the selected flower
  function highlightFlower(id) {
    document.querySelectorAll("#flowers svg").forEach((flower) => {
      flower.style.stroke = "none";
    });
    document.getElementById(id).style.stroke = "gold";
    document.getElementById(id).style.strokeWidth = "4px";
  }

  // Activity click event handlers
  const activityButtons = document.querySelectorAll(".date-option");
  activityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chosenActivity = button.dataset.option;
      highlightActivity(button);
    });
  });

  // Highlight the selected activity
  function highlightActivity(selectedButton) {
    activityButtons.forEach((button) => {
      button.classList.remove("selected");
    });
    selectedButton.classList.add("selected");
  }

  // Submit button handler
  document.getElementById("submit").addEventListener("click", () => {
    const result = document.getElementById("result");

    if (!chosenFlower) {
      result.textContent = "Please select a flower.";
    } else if (!chosenActivity) {
      result.textContent = "Please choose an activity for your date.";
    } else {
      result.textContent = `You chose the ${chosenFlower} and selected "${chosenActivity}" for your date!`;
    }
  });
});
