// window.addEventListener('load', () => {
//   const body = document.querySelector('body');
//   const loader = document.querySelector('.loader');
//   body.replaceChildren(loader);
// })

const anim = document.querySelector('.animation');
const splitText = anim.textContent.split("");
anim.innerHTML = "";
i = 0;
setInterval(function () {
  lettreSupp();
}, 60);
function lettreSupp() {
  if (i < splitText.length) {
    anim.innerHTML += splitText[i];
    i++;
  }
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function updateProgressBar() {
  const progressBars = document.querySelectorAll(".progress");
  const progressValues = [70, 50, 30, 20, 20, 0, 0, 0, 0, 0];
  for (let i = 0; i < progressBars.length; i++) {
    const progressBar = progressBars[i];
    if (isInViewport(progressBar)) {
      progressBar.classList.add("visible");
      progressBar.style.width = `${progressValues[i]}%`;
    }
  }
}

window.addEventListener("scroll", function () {
  updateProgressBar();
});
