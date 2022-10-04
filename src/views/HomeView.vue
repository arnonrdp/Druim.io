<template>
  <div class="home">
    <h1>EXCEPTIONAL PROFESSIONALS, BUILDING RELIABLE OPEN SOURCE SOLUTIONS.</h1>
    <img src="@/assets/circle.svg" alt="" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

h1 {
  font-family: 'Goldman', Arial, sans-serif;
  font-size: 3.25rem;
  font-weight: 400;
  line-height: 0.97;
  margin: 11.25rem 0 0;
  max-width: 400px;
  position: relative;
  text-transform: uppercase;
  word-spacing: 0.2em;
}

img {
  background: center center no-repeat;
  background-size: contain;
  left: 45%;
  pointer-events: none;
  position: absolute;
  opacity: 0.655008;
  top: -30%;
  transform: translate(4.06802%, -0.0286551%) rotate(0deg) scale(0.928094);
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  transition-timing-function: linear;
  transition-duration: 2000ms;
  will-change: transform, opacity;
  z-index: -1;
}
</style>
