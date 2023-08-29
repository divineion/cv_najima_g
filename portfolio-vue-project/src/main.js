import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


// Animation des progressbars
//délimiter le viewport
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

