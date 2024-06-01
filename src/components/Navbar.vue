<script setup lang="ts">
import Menubar from 'primevue/menubar'

// Define the 'items' property
const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home' },
  { label: 'About', icon: 'pi pi-fw pi-info-circle' }
  // Add more items as needed
]
</script>

<template>
    <Menubar class="menubar" :model="items" />
</template>


<style scoped>
.menubar  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}
</style>
