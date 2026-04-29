/* ===========================
   script-gallery.js
   JavaScript for gallery.html (Multimedia Page)
   =========================== */

/* ---------------------------
   IMAGE GALLERY
   --------------------------- */
var images = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
];

var imgIdx = 0;

/**
 * Update the displayed image and the counter label.
 */
function updateImg() {
  document.getElementById('galleryImg').src = images[imgIdx];
  document.getElementById('imgNum').textContent   = imgIdx + 1;
  document.getElementById('imgTotal').textContent = images.length;
}

/** Show next image (wraps around). */
function nextImg() {
  imgIdx = (imgIdx + 1) % images.length;
  updateImg();
}

/** Show previous image (wraps around). */
function prevImg() {
  imgIdx = (imgIdx - 1 + images.length) % images.length;
  updateImg();
}

/** Alert with info about the current image. */
function infoImg() {
  alert(
    '📷 Galeri Foto\n\n' +
    'Foto ' + (imgIdx + 1) + ' dari ' + images.length + '\n\n' +
    'Klik tombol untuk berganti foto.\nSumber: Unsplash'
  );
}

// Initialise gallery on page load
updateImg();


/* ---------------------------
   VIDEO (YouTube iframe)
   --------------------------- */

/**
 * Swap the YouTube embed to a different video.
 * @param {string} id  - YouTube video ID
 */
function changeVideo(id) {
  document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + id;
}

/** Alert with info about the video section. */
function infoVideo() {
  alert(
    '▶ Video\n\n' +
    'Video dipilih sebagai konten inspirasi.\n' +
    'YouTube iframe embed.\n\n' +
    'Klik tombol untuk berganti video.'
  );
}


/* ---------------------------
   AUDIO PLAYER
   --------------------------- */
var audio = document.getElementById('audioPlayer');

/** Start audio playback. */
function playAudio() {
  audio.play();
}

/** Pause audio playback. */
function pauseAudio() {
  audio.pause();
}

/** Stop audio and rewind to the beginning. */
function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

/** Update the duration label once metadata has loaded. */
function updateDuration() {
  var mins = Math.floor(audio.duration / 60);
  var secs = Math.floor(audio.duration % 60);
  document.getElementById('duration').textContent =
    String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
}

/** Alert with info about the audio section. */
function infoAudio() {
  alert(
    '🎵 Pemutar Audio\n\n' +
    'Tag HTML5 <audio> dengan kontrol bawaan.\n' +
    'Tombol play, pause, stop.\n' +
    'Sumber: SoundHelix (free audio)'
  );
}
