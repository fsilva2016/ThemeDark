const themaDark = document.querySelector('[data-js="themaDark"]');
const body = document.querySelector('[data-js="body"]');

sessionStorage.setItem("theme", "true");
let img = document.createElement('img');
themaDark.appendChild(img);
img.src = '/assets/imagens/undraw_moonlight_-5-ksn.svg';
img.classList.add('undrawMoonlight');


const ativaTheme = () => {
    body.classList.add('themeDark')
    sessionStorage.setItem("theme", "false");
    img.src = '/assets/imagens/undraw_dark_mode_2xam.svg';
    img.classList.remove('undrawMoonlight')
    img.classList.add('undrawDarkMode')

}
const removeTheme = () => {
  body.classList.remove('themeDark')
  sessionStorage.setItem("theme", "true");
  img.src = '/assets/imagens/undraw_moonlight_-5-ksn.svg';
    img.classList.remove('undrawDarkMode')
    img.classList.add('undrawMoonlight')
}


themaDark.addEventListener('click', function (e) {
  let trueDark = sessionStorage.getItem("theme");
  themaDark.classList.toggle('active')
  trueDark === 'true' ? ativaTheme() : removeTheme()

})




