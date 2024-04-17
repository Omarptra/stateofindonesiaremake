<script setup>
    const props = defineProps(['title'])
</script>

<template>
    <div class="section-header flex flex-col gap-4">
        <h1>{{ props.title }}</h1>
        <hr>
    </div>
</template>