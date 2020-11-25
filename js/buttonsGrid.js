document.body.onload = () => {
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "btns");
  let buttons;
  for (let index = 1; index < 10; index++) {
    buttons = document.createElement("button");
    buttons.setAttribute("id", `btn${index}`);
    buttons.innerHTML = `${index}`;
    mainDiv.appendChild(buttons);
  }
  document.body.appendChild(mainDiv);
  rotateButtons = document.querySelectorAll("#btns > button");
  document.getElementById("btn5").onclick = rotate;
};

var rotateButtons;

const rotate = () => {
  let temp = null;
  let gridLength = Math.sqrt(rotateButtons.length);
  rotateButtons.forEach((item, index, arr) => {
    if (!temp) {
      temp = [...arr].map((e) => e.innerHTML);
    }
    if (
      index == 0 ||
      (index % gridLength == 0 && index != gridLength * (gridLength - 1))
    ) {
      item.innerHTML = temp[index + gridLength];
    } else if (index < gridLength) {
      item.innerHTML = temp[index - 1];
    } else if ((index - gridLength) % gridLength == gridLength - 1) {
      item.innerHTML = temp[index - gridLength];
    } else if (
      index >= gridLength * (gridLength - 1) &&
      index < gridLength * gridLength - 1
    ) {
      item.innerHTML = temp[index + 1];
    }
  });
};
