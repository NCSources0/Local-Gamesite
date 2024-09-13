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

if (window.location.protocol == "file:")
  document.head.innerHTML += `<style>
.online {
  display: none;
}
</style>`;

function openGame(path) {
  window.location.href = `games/${path}`;
}

function cloak() {
  try {
    const aboutBlank = open();
    if (!aboutBlank) {
      throw new Error("Failed to open about:blank");
    }

    aboutBlank.document.open();
    aboutBlank.document.write(
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    ${document.querySelector("title").outerHTML}
  </head>
  <body>
    <iframe src="${location.href}"
      style="
        position:fixed;
        width:100vw;
        height:100vh;
        left:0;
        top:0;
        border:0;
      "></iframe>
    <button style="
      position:fixed;
      display:flex;
      width:5vh;
      height:5vh;
      right:1vh;
      top:1vh;
      background-color:#0008;
      border:1px #fff solid;
      border-radius:1vh;
      align-items:center;
      justify-content:center;
    " onclick="
    document.querySelector('iframe').src='${location.href}'
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3.75vh"
        viewBox="0 -960 960 960"
        width="5vh";
        fill="#e8eaed"
      >
        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
      </svg>
    </button>
  </body>
</html>`
    );
    aboutBlank.document.close();

    location.replace("http://google.co");
  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
