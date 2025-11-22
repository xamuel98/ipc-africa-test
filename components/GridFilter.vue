<template>
  <div class="mb-8">
    <h3 class="text-xl font-bold mb-4">Filters</h3>

    <!-- Shapes -->
    <FilterGroup title="Shapes">
      <button
        v-for="shape in store.availableShapes"
        :key="shape"
        @click="store.toggleFilter('shape', shape)"
        :aria-pressed="store.selectedShapes.includes(shape)"
        :class="[
          'px-4 py-1 rounded-full border text-sm capitalize transition-colors',
          store.selectedShapes.includes(shape)
            ? 'bg-purple-100 border-purple-200 text-purple-900 font-medium'
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50',
        ]"
      >
        {{ shape }}
      </button>
    </FilterGroup>

    <!-- Colors -->
    <FilterGroup title="Colors" extraClass="gap-5 ml-2">
      <button
        v-for="color in store.availableColors"
        :key="color"
        @click="store.toggleFilter('color', color)"
        :aria-pressed="store.selectedColors.includes(color)"
        class="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none"
        :class="[
          store.selectedColors.includes(color)
            ? 'border-black/20 shadow-md scale-110 ring-2 ring-offset-2 ring-blue-400'
            : 'border-transparent opacity-70 hover:opacity-100',
        ]"
        :style="{ backgroundColor: color }"
        :aria-label="`Select ${color}`"
      ></button>
    </FilterGroup>
  </div>
</template>

<script setup lang="ts">
import { useGridStore } from "~/stores/grid";
import FilterGroup from "./FilterGroup.vue";

const store = useGridStore();
</script>
