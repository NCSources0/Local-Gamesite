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
if (window.location.protocol != "file:") {
  document.body.querySelector("header").innerHTML +=
    "<div class='download'onclick='window.location.href=`https://github.com/NCSources0/Local-Gamesite/archive/refs/heads/main.zip`'>Download</div>";
}
function openGame(path) {
  window.location.href = `games/${path}`;
}
