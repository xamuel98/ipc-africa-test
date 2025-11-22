<template>
  <div class="mb-8">
    <h3 class="text-xl font-bold mb-4">Filters</h3>

    <!-- Shapes -->
    <div class="mb-6">
      <h4 class="text-blue-500 font-medium mb-2">Shapes</h4>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="shape in store.availableShapes"
          :key="shape"
          @click="store.toggleFilter('shape', shape)"
          :class="[
            'px-4 py-1 rounded-full border text-sm capitalize transition-colors',
            store.selectedShapes.includes(shape)
              ? 'bg-purple-100 border-purple-200 text-purple-900 font-medium'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50',
          ]"
        >
          {{ shape }}
        </button>
      </div>
    </div>

    <!-- Colors -->
    <div class="mb-6">
      <h4 class="text-blue-500 font-medium mb-2">Colors</h4>
      <div class="flex flex-wrap gap-6">
        <button
          v-for="color in store.availableColors"
          :key="color"
          @click="store.toggleFilter('color', color)"
          class="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none"
          :class="[
            store.selectedColors.includes(color)
              ? 'border-black/20 shadow-md scale-110 ring-2 ring-offset-2 ring-blue-400'
              : 'border-transparent opacity-70 hover:opacity-100',
          ]"
          :style="{ backgroundColor: color }"
          :aria-label="`Select ${color}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGridStore } from "~/stores/grid";

const store = useGridStore();
</script>
