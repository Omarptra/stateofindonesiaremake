<template>
    <div class="section specs-section gap-16 px-32">
      <NuxtImg class="backdrop" src="backgrounds/bg_specs.png" />
      <div class="section-header flex flex-col gap-4">
        <h1>PC Hardware Requirements</h1>
        <hr>
      </div>
      <div class="specs-container flex gap-16">
        <div class="spec-wrapper flex flex-col gap-4">
            <div class="image-wrapper"></div>
            <div class="body flex flex-col gap-4">
                <h1 class="title">Minimum</h1>
                <hr>
                <div class="spec-list-wrapper flex flex-col gap-4">
                    <div class="spec-list cpu">
                        <h1>CPU</h1>
                        <div class="spec-item-wrapper">
                            <p>Intel Core 2 Q6600 @ 2.40GHz</p>
                            <p>AMD Phenom 9850 @ 2.5GHz</p>
                        </div>
                    </div>
                    <div class="spec-list gpu">
                        <h1>GPU</h1>
                        <div class="spec-item-wrapper">
                            <p>NVIDIA 9800 GT 1GB</p>
                            <p>AMD HD 4570 1GB</p>
                        </div>
                    </div>
                    <div class="spec-list ram">
                        <h1>RAM</h1>
                        <p>8GB (4 may work)</p>
                    </div>
                    <div class="spec-list hdd">
                        <h1>HDD</h1>
                        <p>72GB + ~4GB</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="spec-wrapper flex flex-col gap-4">
            <div class="image-wrapper"></div>
            <div class="body flex flex-col gap-4">
                <h1 class="title">Recommended</h1>
                <hr>
                <div class="spec-list-wrapper flex flex-col gap-4">
                    <div class="spec-list cpu">
                        <h1>CPU</h1>
                        <div class="spec-item-wrapper">
                            <p>Intel Core i5 3470 @ 3.2GHz</p>
                            <p>AMD X8 FX-8350 @ 4GHz</p>
                        </div>
                    </div>
                    <div class="spec-list gpu">
                        <h1>GPU</h1>
                        <div class="spec-item-wrapper">
                            <p>NVIDIA GTX 660 2GB</p>
                            <p>AMD HD 7870 2GB</p>
                        </div>
                    </div>
                    <div class="spec-list ram">
                        <h1>RAM</h1>
                        <p>16GB</p>
                    </div>
                    <div class="spec-list hdd">
                        <h1>HDD</h1>
                        <p>72GB + 8GB</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>