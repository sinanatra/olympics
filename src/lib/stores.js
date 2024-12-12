import { writable } from 'svelte/store';

export const data = writable([]);
export const entities = writable({});
export const clusters = writable([]);
export const clusterPositions = writable({});
export const highlightedEntities = writable([]);
export const overlappingEntitiesCount = writable({});
export const stationaryCounts = writable({});
export const randomizeClusters = writable(false);
export const config = writable({
    clusterBy: 'age',
    moveBy: 'name',
    queryValue: '',
    queryCategory: 'name',
});

export const curves = writable(true);
export const stroke = writable(3);
export const speed = writable(3);
export const process = writable(false);
export const fontLoaded = writable(false);

export const width = writable(0);
export const height = writable(0);
export const canvasStore = writable(null);
export const triggerRedraw = writable(false)
export const filters = writable([])
