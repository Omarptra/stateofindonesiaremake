<template>
  <div class="section features-section gap-16 px-32">
    <NuxtImg class="backdrop" src="backgrounds/bg_features.png" />
    <SectionHeader title="Server Features" />

    <!-- Content -->
    <div class="features-container flex flex-wrap justify-center gap-12">
        <div v-for="i of 5" :key="i" class="feature-wrapper flex flex-col gap-4">
            <div class="image-wrapper"></div>
            <div class="body flex flex-col gap-4">
                <h1>Costumer Service</h1>
                <hr>
                <p>Customer service is the support you offer customers that helps them have an easy and enjoyable experience with you.</p>
            </div>
        </div>
    </div>
  </div>
</template>