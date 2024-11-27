export const colorMap = {
    name: { start: [210, 100, 50], end: [0, 0, 100] },   // Blue gradient
    sport: { start: [45, 100, 60], end: [0, 0, 100] },    // Yellow gradient
    city: { start: [140, 80, 60], end: [0, 0, 100] },     // Green gradient
    height: { start: [0, 80, 60], end: [0, 0, 100] },       // Red gradient
    noc: { start: [0, 0, 80], end: [0, 0, 80] },           // White to black gradient
    team: { start: [210, 80, 70], end: [0, 0, 100] },     // Light blue gradient (extended)
    weight: { start: [60, 80, 70], end: [0, 0, 100] },     // Lime green gradient (extended)
    year: { start: [30, 100, 60], end: [0, 0, 100] },     // Orange gradient (close to yellow)
    age: { start: [270, 100, 60], end: [0, 0, 100] },    // Purple gradient
    event: { start: [330, 80, 60], end: [0, 0, 100] },     // Pink gradient
    medal: { start: [120, 100, 60], end: [0, 0, 100] }  // Teal gradient
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name');
