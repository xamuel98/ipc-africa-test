<template>
  <div
    class="bg-white p-8 rounded shadow-sm flex items-center justify-center aspect-[4/2]"
  >
    <div
      :class="[shapeClasses]"
      :style="{ backgroundColor: color }"
      class="transition-all duration-300"
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
      return "rounded-[50%] w-32 h-20 md:w-48 md:h-32";
    case "round":
      return "rounded-full w-24 h-24 md:w-32 md:h-32";
    case "triangle":
      return "clip-triangle w-24 h-24 md:w-32 md:h-32";
    case "square":
      return "rounded-none w-24 h-24 md:w-32 md:h-32";
    case "rectangle":
      return "rounded-none aspect-[5/2] w-full h-auto";
    default:
      return "w-24 h-24 md:w-32 md:h-32";
  }
});
</script>

<style scoped>
.clip-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
