<script setup>
    const specs = [
        {
            class: "Minimum", reqlist: [
                { type: "CPU", requirement: ["Intel Core 2 Q6600 @ 2.40GHz", "AMD Phenom 9850 @ 2.5GHz"] },
                { type: "GPU", requirement: ["NVIDIA 9800 GT 1GB", "AMD HD 4570 1GB"] },
                { type: "RAM", requirement: ["8GB (4 may work)"] },
                { type: "HDD", requirement: ["72GB + ~4GB"] },
            ]
        },
        {
            class: "Recommended", reqlist: [
                { type: "CPU", requirement: ["Intel Core i5 3470 @ 3.2GHz", "AMD X8 FX-8350 @ 4GHz"] },
                { type: "GPU", requirement: ["NVIDIA GTX 660 2GB", "AMD HD 7870 2GB"] },
                { type: "RAM", requirement: ["16GB"] },
                { type: "HDD", requirement: ["72GB + 8GB"] },
            ]
        }
    ]

</script>

<template>
    <div class="section specs-section gap-16 px-32">
        <NuxtImg class="backdrop" src="backgrounds/bg_specs.png" />
        <SectionHeader title="PC Hardware Requirements" />

        <!-- Content -->
        <div class="specs-container flex gap-16">
            <div v-for="spec of specs" :key="spec.class" class="spec-wrapper flex flex-col gap-4">
                <div class="image-wrapper"></div>
                <div class="body flex flex-col gap-4">
                    <h1 class="title">{{ spec.class }}</h1>
                    <hr>
                    <div class="spec-list-wrapper flex flex-col gap-4">
                        <div v-for="req of spec.reqlist" :key="req" class="spec-list flex items-center gap-4">
                            <h1>{{ req.type }}</h1>
                            <div class="spec-item-wrapper flex flex-col gap-2">
                                <p v-for="reqdata of req.requirement" :key="reqdata">{{ reqdata }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>