<script setup>
  const socialImages = ["instagram.svg", "discord.svg", "tiktok.svg", "youtube.svg"]
</script>
<template>
    <div class="section home-section justify-between">
      <NuxtImg class="person absolute" src="person.png"/>
      <NuxtImg class="circles absolute" src="circle_group.svg"/>
      <div class="header flex justify-between px-32 py-9">
        <NuxtImg class="logo" src="fwlogo.png" width="100%" />
        <div class="social-wrapper flex gap-4">
          <NuxtImg class="socialmedia" v-for="image of socialImages" :key="image" :src="image" width="100%" />
        </div>
      </div>
      <div class="body-text py-24 px-32 mb-10">
        <div class="body-wrapper flex flex-col gap-6 relative">
          <NuxtImg class="shadow absolute" src="fw.svg"/>
          <div class="text-wrapper">
            <h1>Start Your Journey</h1>
            <h1>Right Now !</h1>
          </div>
          <hr>
          <div class="text-wrapper desc">
            <p>Join us right now and start your journey</p>
            <p>with <span>State Of Indonesia</span> Roleplay now.</p>
          </div>
          <button class="connect-button py-4 px-12">Begin to play</button>
        </div>
      </div>
      <Navbar class="main-navbar py-8" />
    </div>
</template>