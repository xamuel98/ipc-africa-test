<template>
  <div>
    <h2 class="text-lg font-bold mb-4">
      <span class="capitalize">{{ store.title }}</span>
      <span class="text-gray-500 text-sm font-normal ml-2"
        >({{ store.filteredItems.length }})</span
      >
    </h2>

    <div
      v-if="store.filteredItems.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <GridItem
        v-for="item in store.filteredItems"
        :key="item.id"
        :color="item.color"
        :shape="item.shape"
      />
    </div>
    <div v-else class="text-center py-12 text-gray-500">
      No items match your selection.
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGridStore } from "~/stores/grid";

const store = useGridStore();
</script>
