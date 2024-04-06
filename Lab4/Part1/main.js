<div class="img-gallery">
  <div class="displayed-img"></div>
  <div class="thumb-bar"></div>
  <button class="dark">Darken</button>
  <div class="overlay"></div>
</div>var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

function thumbnailLoop() {
  for (var i = 0; i < 5; i++) {
    var newImage = document.createElement('img');
    newImage.src = "images/pic" + (i+1) + ".jpg";
    thumbBar.appendChild(newImage);
  }
}
<!--
	Name: Aryankumar Patel
	File: main.js
	Date: 04-05-24
    This is the .html file for my fourth assignment part 1 web development fundamentals it is a java script file supporting my part1 of assignemnt.
 -->
thumbnailLoop();

thumbBar.addEventListener('click', (e) => {
  if(e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
  }
});

btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.className = 'light';
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.className = 'dark';
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});