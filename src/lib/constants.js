export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 90] },   // Blue gradient
    sport: { start: [45, 100, 60], end: [45, 100, 90] },    // Yellow gradient
    city: { start: [140, 80, 60], end: [140, 80, 90] },     // Green gradient
    height: { start: [0, 80, 60], end: [0, 80, 90] },       // Red gradient
    noc: { start: [0, 0, 80], end: [0, 0, 90] },            // White to black gradient
    team: { start: [210, 80, 70], end: [210, 80, 90] },     // Light blue gradient
    weight: { start: [60, 80, 70], end: [60, 80, 90] },     // Lime green gradient
    year: { start: [30, 100, 60], end: [30, 100, 90] },     // Orange gradient
    age: { start: [270, 100, 60], end: [270, 100, 90] },    // Purple gradient
    event: { start: [330, 80, 60], end: [330, 80, 90] },    // Pink gradient
    medal: { start: [120, 100, 60], end: [120, 100, 90] }   // Teal gradient
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name');
