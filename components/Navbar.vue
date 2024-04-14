<script setup>
    const menus = [
        { name: "Home", href: "home" },
        { name: "About", href: "about" },
        { name: "Features", href: "features" },
        { name: "Specs", href: "specs" },
        { name: "Our Teams", href: "ourteams" },
        { name: "Gallery", href: "gallery" },
        { name: "FAQ", href: "faq" },
        { name: "Testimonials", href: "testimonials" }
    ]
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView()
    }
    const hoveredLink = ref(null)
</script>

<template>
    <div class="navbar-component flex gap-4 py-6 items-center justify-center">  
        <button class="link-wrapper flex flex-col items-center px-2 py-3" 
            v-for="menu of menus" 
            :key="menu.name" 
            @mouseenter="hoveredLink = menu.href" 
            @mouseleave="hoveredLink = null" 
            @click="scrollTo(menu.href)"
        >
            <span>{{ menu.name }}</span>
            <Transition name="slide">
                <NuxtImg class="chevron" v-if="hoveredLink === menu.href" src="chevron.svg" width="24px" />
            </Transition>
            
        </button>               
    </div>
</template>