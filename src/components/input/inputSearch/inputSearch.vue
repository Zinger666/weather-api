<script setup>
import {searchTerm} from "@/enums/searchTerm.js";
import {handleSearch} from "@/composables/SearchFunc.js";
import {getCurrentLocation} from "@/composables/GetCurrentLocation.js";
</script>

<template>
  <label class="text-xl text-blue-200 w-full">Введите город</label>
  <div class="flex mt-3 flex-row w-full gap-5">
    <input v-model="searchTerm.query" @input="handleSearch()" class="border-b w-full border-b-slate-900 focus:outline-0 transition shadow-2xl bg-transparent text-white">
    <button @click="getCurrentLocation()" class="hover:text-white"><img class="w-12 fill-white" src="/location.svg" alt="location" /></button>
  </div>
</template>

<style scoped>

</style>