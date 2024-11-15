export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 20] },   // Blue gradient
    sport: { start: [45, 100, 60], end: [45, 100, 30] },    // Yellow gradient
    city: { start: [140, 80, 60], end: [140, 80, 30] },     // Green gradient
    height: { start: [0, 80, 60], end: [0, 80, 30] },       // Red gradient
    noc: { start: [0, 0, 100], end: [0, 0, 40] },           // White to black gradient
    team: { start: [210, 80, 70], end: [210, 80, 40] },     // Light blue gradient (extended)
    weight: { start: [60, 80, 70], end: [60, 80, 40] },     // Lime green gradient (extended)
    year: { start: [30, 100, 60], end: [30, 100, 40] },     // Orange gradient (close to yellow)
    age: { start: [270, 100, 60], end: [270, 100, 40] },    // Purple gradient
    event: { start: [120, 100, 60], end: [120, 100, 40] },  // Teal gradient
    medal: { start: [330, 80, 60], end: [330, 80, 40] }     // Pink gradient
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name');
