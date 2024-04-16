<script setup>
  const about = ref(null)
  const features = ref(null)
  const aboutPos = ref(useElementBounding(about))
</script>

<template>
  <div class="landing-page flex flex-col">
    <HomeSection id="home" />
    <Transition name="fade">
      <Navbar class="hided-navbar py-4" v-if="aboutPos.top < 100" />
    </Transition>
    <AboutSection ref="about" id="about" />
    <FeaturesSection ref="features" id="features" />
    <SpecSection ref="specs" id="specs" />
    <TeamSection ref="ourteams" id="ourteams" />
    <GallerySection ref="gallery" id="gallery" />
    <FaqSection ref="faq" id="faq" />
    <TestimonialSection ref="testimonials" id="testimonials" />
  </div>
</template>