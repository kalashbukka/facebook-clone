// Step 1: Select ALL elements with the class "like-btn"
const likeButtons = document.querySelectorAll(".like-btn");

// Step 2: Loop through each like button and attach a click listener
likeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Toggle a CSS class called "liked" on this specific button
    button.classList.toggle("liked");

    // Check if it now has the "liked" class, and change text accordingly
    console.log("clicked!")
    if (button.classList.contains("liked")) {
      button.textContent = "👍 Liked";
    } else {
      button.textContent = "👍 Like";
    }
  });
});