<template>
  <div class="video-bkg">
    <video id="video-header" width="100%" autoplay muted loop poster="./headers/gleb-albovsky-sbPI02mZqxs-unsplash.jpg">
      <source src="/big-header.mp4" type="video/mp4">
    </video>
    <div class="video-bkg-text d-flex justify-center align-center">
      <v-img src="/logo-full.svg" height="40vh" style="max-width: 80%; max-height: 40vh;" contain></v-img>
    </div>
    <div class="arrow-wrapper">
      <div class="arrow-up"></div>
    </div>
  </div>
</template>

<style>

#video-header {
  height: 100vh;
  object-fit: cover;
}

.video-bkg {
  position: relative;
  width: 100%;
  top: -64px;
}

.video-bkg::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  content: '';
  background-image: radial-gradient(
    circle at 50% 25%,
    rgba(32, 63, 106, 0.82),
    rgba(41, 85, 143, 0.62) 67%,
    rgba(39, 92, 158, 0)
  );
}

.video-bkg-text {
  position: absolute;
  z-index: 3;
  top: 0px;
  height: 100vh;
  width: 100vw;
}

.arrow-wrapper {
  position: absolute;
  z-index: 3;
  bottom: 0px;
  width: 100%;
}
.arrow-up {
  width: 0; 
  height: 0;
  margin: auto;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;  
  border-bottom: 3rem solid white;
}
</style>
