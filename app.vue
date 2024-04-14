<script setup>
  const home = ref(null)
  const about = ref(null)
  const features = ref(null)
  const homePos = ref(useElementBounding(home))
  const aboutPos = ref(useElementBounding(about))
  const featuresPos = ref(useElementBounding(features))

  const store = useMainStore()
  
</script>

<template>
  <div class="landing-page flex flex-col">
    <HomeSection id="home" />z
    <Transition name="fade">
      <Navbar class="hided-navbar" v-if="aboutPos.top < 100" />
    </Transition>
    <AboutSection ref="about" id="about" />
    <AboutSection ref="features" id="features" />
  </div>
</template>