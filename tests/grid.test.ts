import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useGridStore } from "../stores/grid";

describe("Grid Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with all filters selected", () => {
    const store = useGridStore();
    expect(store.selectedColors.length).toBe(store.availableColors.length);
    expect(store.selectedShapes.length).toBe(store.availableShapes.length);
    expect(store.title).toBe("All items:");
  });

  it("deselecting the last filter selects all", () => {
    const store = useGridStore();
    // Deselect all but one color
    store.selectedColors = ["red"];

    // Toggle 'red' (the last one)
    store.toggleFilter("color", "red");

    // Should reset to all colors
    expect(store.selectedColors.length).toBe(store.availableColors.length);
  });

  it('generates correct title for "Multiple items:"', () => {
    const store = useGridStore();
    // All colors, multiple shapes
    store.selectedShapes = ["oval", "round"];
    expect(store.title).toBe("Multiple items:");

    // Reset
    store.selectedShapes = [...store.availableShapes];

    // All shapes, multiple colors
    store.selectedColors = ["red", "blue"];
    expect(store.title).toBe("Multiple items:");
  });

  it('generates correct title for "All [color] items:"', () => {
    const store = useGridStore();
    store.selectedColors = ["red"];
    expect(store.title).toBe("All red items:");
  });

  it('generates correct title for "All [shape] items:"', () => {
    const store = useGridStore();
    store.selectedShapes = ["oval"];
    expect(store.title).toBe("All oval items:");
  });

  it('generates correct title for "Multiple [color] items:"', () => {
    const store = useGridStore();
    store.selectedColors = ["red"];
    store.selectedShapes = ["oval", "round"];
    expect(store.title).toBe("Multiple red items:");
  });

  it('generates correct title for "Multiple [shape] items:"', () => {
    const store = useGridStore();
    store.selectedShapes = ["oval"];
    store.selectedColors = ["red", "blue"];
    expect(store.title).toBe("Multiple oval items:");
  });

  it('generates correct title for "[Color] [Shape] items:"', () => {
    const store = useGridStore();
    store.selectedShapes = ["oval"];
    store.selectedColors = ["red"];
    // Expect "Red oval items:" based on code
    expect(store.title).toBe("Red oval items:");
  });
});
