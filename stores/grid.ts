import { defineStore } from "pinia";
import { ref, computed } from "vue";
import itemsData from "~/data/items.json";

export interface Item {
  id: number;
  color: string;
  shape: string;
}

export const useGridStore = defineStore("grid", () => {
  // Initial data
  const items = ref<Item[]>(itemsData);

  const availableColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "lightblue",
    "grey",
  ];
  const availableShapes = ["oval", "round", "triangle", "square", "rectangle"];

  const selectedColors = ref<string[]>([...availableColors]);
  const selectedShapes = ref<string[]>([...availableShapes]);

  const toggleFilter = (type: "color" | "shape", value: string) => {
    const target = type === "color" ? selectedColors : selectedShapes;
    const allOptions = type === "color" ? availableColors : availableShapes;

    if (target.value.includes(value)) {
      // If it's the last one, select all
      if (target.value.length === 1) {
        target.value = [...allOptions];
      } else {
        target.value = target.value.filter((item) => item !== value);
      }
    } else {
      target.value.push(value);
    }
  };

  const filteredItems = computed(() => {
    return items.value.filter(
      (item) =>
        selectedColors.value.includes(item.color) &&
        selectedShapes.value.includes(item.shape)
    );
  });

  const title = computed(() => {
    const allColorsSelected =
      selectedColors.value.length === availableColors.length;
    const allShapesSelected =
      selectedShapes.value.length === availableShapes.length;
    const multipleColors =
      selectedColors.value.length > 1 && !allColorsSelected;
    const multipleShapes =
      selectedShapes.value.length > 1 && !allShapesSelected;
    const singleColor = selectedColors.value.length === 1;
    const singleShape = selectedShapes.value.length === 1;

    // 1. All items
    if (allColorsSelected && allShapesSelected) return "All items:";

    // 2. Multiple items (all colors & multiple shapes OR all shapes & multiple colors)
    if (
      (allColorsSelected && multipleShapes) ||
      (allShapesSelected && multipleColors)
    )
      return "Multiple items:";

    // 3. All [color] items (all shapes & single color)
    if (allShapesSelected && singleColor)
      return `All ${selectedColors.value[0]} items:`;

    // 4. All [shape] items (all colors & single shape)
    if (allColorsSelected && singleShape)
      return `All ${selectedShapes.value[0]} items:`;

    // 5. Multiple [color] items (multiple shapes & single color)
    if (multipleShapes && singleColor)
      return `Multiple ${selectedColors.value[0]} items:`;

    // 6. Multiple [shape] items (multiple colors & single shape)
    if (multipleColors && singleShape)
      return `Multiple ${selectedShapes.value[0]} items:`;

    // 7. [Color] [shape] items (single color & single shape)
    if (singleColor && singleShape) {
      // Capitalize first letter
      const color =
        selectedColors.value[0].charAt(0).toUpperCase() +
        selectedColors.value[0].slice(1);
      const shape = selectedShapes.value[0];
      return `${color} ${shape} items:`;
    }

    return "Items:";
  });

  return {
    items,
    availableColors,
    availableShapes,
    selectedColors,
    selectedShapes,
    toggleFilter,
    filteredItems,
    title,
  };
});
