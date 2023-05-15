const anim = document.querySelector('.animation');
const splitText = anim.textContent.split('');
anim.innerHTML = '';
i = 0;
setInterval(function(){    lettreSupp()}    , 60 );
function lettreSupp(){
  if(i < splitText.length){
    anim.innerHTML += splitText[i];
    i++;
  }
}