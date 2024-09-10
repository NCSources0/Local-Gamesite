const gridItems = document.querySelectorAll("#grid-item");

gridItems.forEach(function (gridItem) {
  gridItem.addEventListener("mouseover", function () {
    gridItem.style.backgroundSize = "104%";
    gridItem.style.borderRadius = "0.25vw";
  });

  gridItem.addEventListener("mouseout", function () {
    gridItem.style.backgroundSize = "100%";
    gridItem.style.borderRadius = "1vw";
  });
});

if (window.location.protocol == "file:") document.head.innerHTML += `<style>
.online {
  display: none;
}
</style>`;

function openGame(path) {
  window.location.href = `games/${path}`;
}
