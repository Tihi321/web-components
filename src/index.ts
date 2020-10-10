function init() {
  const loopElement = document.querySelector('.loop-one');

  if (loopElement) {
    loopElement.setAttribute("props", JSON.stringify([
      {name: "Marko", title: "Firefighter", quote: "I fight everything with fire"},
      {name: "Pero", title: "Jongler", quote: "Life is one big juggle"}
    ]));
  }
}

init();