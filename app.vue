<script setup>
  const about = ref(null)
  const features = ref(null)
  const aboutPos = ref(useElementBounding(about))
</script>

<template>
  <div class="landing-page flex flex-col">
    <HomeSection id="home" />
    <Transition name="fade">
      <Navbar class="hided-navbar" v-if="aboutPos.top < 100" />
    </Transition>
    <AboutSection ref="about" id="about" />
    <FeaturesSection ref="features" id="features" />
  </div>
</template>