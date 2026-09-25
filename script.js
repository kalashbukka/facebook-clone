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

// Step 1: Select the input box and the feed container
const postInput = document.getElementById("post-input");
const feed = document.querySelector(".feed");

// Step 2: Listen for keypresses inside the input box
postInput.addEventListener("keydown", function(event) {

  // Only run this code if the key pressed was "Enter"
  if (event.key === "Enter") {

    const postText = postInput.value.trim(); // get typed text, remove extra spaces

    // Don't create an empty post if the input is blank
    if (postText === "") {
      return;
    }

    // Step 3: Build the new post's HTML as a string
    const newPostHTML = `
      <div class="post">
        <div class="post-header">
          <div class="post-avatar"></div>
          <div>
            <p class="post-name">Kalash</p>
            <p class="post-time">Just now</p>
          </div>
        </div>

        <p class="post-text">${postText}</p>

        <div class="post-actions">
          <button class="like-btn">👍 Like</button>
          <button>💬 Comment</button>
          <button>↗️ Share</button>
        </div>
      </div>
    `;

    // Step 4: Insert it right after the create-post box (so it's the newest, topmost post)
    const createPostBox = document.querySelector(".create-post");
    createPostBox.insertAdjacentHTML("afterend", newPostHTML);

    // Step 5: Re-attach the Like button listener to this brand new post's button
    const allLikeButtons = document.querySelectorAll(".like-btn");
    const newestLikeButton = allLikeButtons[0]; // the one we just added is now first

    newestLikeButton.addEventListener("click", function() {
      newestLikeButton.classList.toggle("liked");
      if (newestLikeButton.classList.contains("liked")) {
        newestLikeButton.textContent = "👍 Liked";
      } else {
        newestLikeButton.textContent = "👍 Like";
      }
    });

    // Step 6: Clear the input box so it's ready for the next post
    postInput.value = "";
  }
});