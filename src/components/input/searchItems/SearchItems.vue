<script setup>
import {searchTerm} from "@/enums/searchTerm.js";
import {getLocation} from "@/composables/GetLocation.js";
</script>

<template>
  <div class="border-b border-b-slate-300 " v-for="place in searchTerm.results" :key="place.id">
    <button @click="getLocation(place.lat, place.lon, place.name)"
            class="px-3 my-2 hover:text-indigo-600 hover:font-bold w-full text-left"
    >
                <span>
                  {{ place.name }}, {{ place.country }}
                </span>
    </button>
  </div>
</template>

<style scoped>

</style>