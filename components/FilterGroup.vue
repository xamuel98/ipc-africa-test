<template>
  <div class="mb-6">
    <h4 class="text-blue-500 font-medium mb-2">{{ title }}</h4>
    <div :class="['flex flex-wrap', props.extraClass]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    extraClass?: string;
  }>(),
  {
    extraClass: "gap-2",
  }
);
</script>
