// ==UserScript==
// @name        twitter volume control
// @namespace   https://github.com/mzhou/twitter_volume_control
// @include     https://twitter.com/i/videos/tweet/*
// @version     1
// @grant       none
// ==/UserScript==
(function () {
  function doFix() {
    var videos = document.querySelectorAll('video');
    var allControlss = document.querySelectorAll('.all-controls');
    var posterImageContainers = document.querySelectorAll('.poster-image-container');
    var posterPlayIcons = document.querySelectorAll('.poster-play-icon');
    if (videos.length > 0) {
      videos[0].setAttribute('controls', 'controls');
    }
    if (allControlss.length > 0) {
      allControlss[0].style.display = 'none';
    }
    if (posterImageContainers.length > 0) {
      posterImageContainers[0].style.display = 'none';
    }
    if (posterPlayIcons.length > 0) {
      posterPlayIcons[0].style.display = 'none';
    }
  }
  function loop() {
    doFix();
    timer();
  }
  function timer() {
    window.setTimeout(loop, 100);
  }
  timer();
}) ();
