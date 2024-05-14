window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches }) => {
    if (matches) {
      $("body").removeClass("light");
      $(".change").text("ON");
    } else {
      $("body").addClass("light");
      $(".change").text("OFF");
    }
  });

$(".change").on("click", function () {
  if ($("body").hasClass("light")) {
    $("body").removeClass("light");
    $(".change").text("ON");
  } else {
    $("body").addClass("light");
    $(".change").text("OFF");
  }
});

// Get references to all elements with class "grid-item"
var gridItems = document.querySelectorAll(".grid-item");

// Add event listeners to each grid item
gridItems.forEach(function (gridItem) {
  gridItem.addEventListener("mouseover", function () {
    gridItem.style.backgroundSize = "110%";
  });

  gridItem.addEventListener("mouseout", function () {
    gridItem.style.backgroundSize = "100%";
  });
});
function openFile(filePath) {
  // Use window.location.href to redirect to the specified page
  window.location.href = filePath;
}
