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
    clusterBy: 'sport',
    moveBy: 'name',
    queryValue: '',
    queryCategory: 'name',
});

export const curves = writable(true);
export const stroke = writable(6);
export const speed = writable(3);
export const process = writable(false);
export const fontLoaded = writable(false);

export const width = writable(0);
export const height = writable(0);

export const colorMap = {
    name: { start: [0, 0, 100], end: [0, 0, 40] },
    sport: { start: [30, 60, 80], end: [40, 80, 40] },
    city: { start: [150, 30, 70], end: [160, 50, 50] },
    height: { start: [60, 70, 80], end: [20, 40, 30] },
    noc: { start: [330, 50, 80], end: [340, 40, 50] },
    team: { start: [210, 60, 70], end: [270, 70, 60] },
    weight: { start: [240, 50, 60], end: [220, 30, 40] },
    year: { start: [20, 70, 60], end: [60, 50, 50] },
    age: { start: [180, 70, 70], end: [190, 40, 40] },
    event: { start: [350, 80, 70], end: [340, 30, 30] },
    medal: { start: [40, 30, 70], end: [50, 50, 30] },
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name');
