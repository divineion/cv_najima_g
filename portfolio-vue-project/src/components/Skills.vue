<script setup>
import { onMounted } from "vue";

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
//animer les bars
function updateProgressBar() {
  const progressBars = document.querySelectorAll(".progress");
  const progressValues = [70, 60, 50, 50, 30, 30, 40];

  for (let i = 0; i < progressBars.length; i++) {
    const progressBar = progressBars[i];
    if (isInViewport(progressBar)) {
      progressBar.classList.add("visible");
      progressBar.style.width = `${progressValues[i]}%`;
    }
  }
}

onMounted(() => {
  updateProgressBar();
});
</script>

<template>
  <div id="competences" class="skills-container d-flex flex-column align-items-center">
    <h2>Compétences</h2>
    <div class="w-50 competences">
        <div class="currently w-100">
            <h3>Apprentissage en cours</h3>
            <div class="skills">
                <h4>HTML/CSS</h4>
                <div class="progress-bar">
                    <div class="progress html"></div>
                </div>
            </div>
            <div class="skills">
                <h4>JavaScript</h4>
                <div class="progress-bar">
                    <div class="progress javascript"></div>
                </div>
            </div>
            <div class="skills">
                <h4>PHP</h4>
                <div class="progress-bar">
                    <div class="progress php"></div>
                </div>
            </div>
            <div class="skills">
                <h4>MySQL</h4>
                <div class="progress-bar">
                    <div class="progress mysql"></div>
                </div>
            </div>
            <div class="skills">
                <h4>Figma</h4>
                <div class="progress-bar">
                    <div class="progress maquettage"></div>
                </div>
            </div>
            <div class="skills">
                <h4>Gestion de projet</h4>
                <div class="progress-bar">
                    <div class="progress gestion"></div>
                </div>
            </div>

            <div class="skills">
                <h4>Wordpress</h4>
                <div class="progress-bar">
                    <div class="progress seo"></div>
                </div>
            </div>
            <!-- <div class="skills">
                <h4>SEO</h4>
                <div class="progress-bar">
                    <div class="progress seo"></div>
                </div>    
            </div>
            <div class="skills">
                <h4>Node.js</h4>
                <div class="progress-bar">
                    <div class="progress php"></div>
                </div>
            </div> -->


            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>
