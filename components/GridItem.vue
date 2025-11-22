<template>
  <div
    class="bg-white p-8 rounded shadow-sm flex items-center justify-center aspect-[4/2]"
  >
    <div
      :class="[shapeClasses]"
      :style="{ backgroundColor: color }"
      class="w-32 h-32 transition-all duration-300"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
  shape: string;
}>();

const shapeClasses = computed(() => {
  switch (props.shape) {
    case "oval":
      return "rounded-[50%]";
    case "round":
      return "rounded-full";
    case "triangle":
      return "clip-triangle";
    case "square":
      return "rounded-none";
    case "rectangle":
      return "rounded-none aspect-[5/2] w-full h-auto";
    default:
      return "";
  }
});
</script>

<style scoped>
.clip-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
