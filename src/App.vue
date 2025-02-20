<script setup>
import {searchTerm} from "@/enums/searchTerm.js";
import {getLocation} from "@/composables/GetLocation.js";
import InputSearch from "@/components/input/inputSearch/inputSearch.vue";
import { checkWeather } from "@/composables/GetLocation.js";
import {computed} from "vue";
import SearchItems from "@/components/input/searchItems/SearchItems.vue";
import WeatherView from "@/components/input/weatherElements/WeatherView.vue";

const test = computed(()=>`bg-[url(/${checkWeather.value}.jpg)]`)

navigator.geolocation.getCurrentPosition(function (position){
  console.log(position.coords.latitude, position.coords.longitude)
});
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center bg-no-repeat bg-cover" :class="test">
      <div class="flex flex-col items-center w-1/4 p-5 mt-5 border border-slate-900 shadow-2xl bg-gradient-to-r from-sky-700 to-indigo-800 rounded-lg ">
      <input-search/>
        <div class="bg-white my-0.5 rounded-lg shadow-lg w-full ">
          <div v-if="searchTerm.query!==null">
            <search-items/>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-5 items-center w-full h-full justify-center" v-if="searchTerm.weather!==null && searchTerm.query==null">
        <weather-view/>
      </div>
    </div>
</template>

<style scoped>

</style>