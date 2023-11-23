import "./style.css";

const element = document.createElement("div");
element.classList.add("free");

const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
element.style.backgroundColor = randomColor;

document.body.appendChild(element);

let bound = element.getBoundingClientRect();

console.log(bound.left);

const updatePosition = () => {
  const shape = {
    x: window.screenLeft,
    y: window.screenTop,
    w: window.innerWidth,
    h: window.innerHeight,
  };

  element.style.left = -shape.x + screen.availWidth / 2 + "px";
  element.style.top = -shape.y + screen.availHeight / 2 + "px";
};

const step = () => {
  updatePosition();
  window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);
