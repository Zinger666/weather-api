<script setup>

import {searchTerm} from "@/enums/searchTerm.js";
</script>

<template>
  <p class="font-bold text-2xl">{{searchTerm.name}}</p>
  <div class="flex mt-2">
    <div class="flex items-center text-center">
      <p class="flex font-medium text-black text-6xl align-middle">{{Math.round(searchTerm.main.temp)}}℃</p>
    </div>
    <div>
      <img :src="`https://openweathermap.org/img/wn/${searchTerm.weather.icon}@4x.png`" class="w-16" alt="icon"/>
    </div>
  </div>
</template>

<style scoped>

</style>