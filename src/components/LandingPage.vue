<script setup lang="ts">
import InterestedButton from './InterestedButton.vue'
</script>

<template>
  <video autoplay muted loop id="backgroundVideo">
    <source src="../assets/underwater_loop_480.mp4" type="video/mp4" />
  </video>
  <div class="landing">
    <div class="card">
      <font-awesome-icon icon="fa-solid fa-lg fa-person-swimming" size="2x" />
      <h1>Welcome to SwimSpots</h1>
      Coming soon
    </div>

    <interested-button></interested-button>
  </div>
</template>

<style scoped>
#backgroundVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
}
.landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  color: blue;
  height: 15rem;
  width: 30rem;
  background-color: rgba(255, 255, 255, 0.878);
  border-radius: 30px;
  box-shadow: 0 3px 10px #8b8eaf;
}

@media only screen and (max-width: 900px) {
  .card {
    height: 15rem;
    width: 90vw;
    max-width: 30rem;
  }
}
</style>
