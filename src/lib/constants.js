export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 40], text: "" },   // Blue gradient
    sport: { start: [45, 100, 60], end: [45, 100, 40], text: "The participants moving through sport" },    // Yellow gradient
    city: { start: [140, 80, 60], end: [140, 80, 40], text: "The participants moving through cities" },     // Green gradient
    height: { start: [0, 80, 60], end: [0, 80, 40], text: "The participants moving through heighs" },       // Red gradient
    noc: { start: [0, 0, 80], end: [0, 0, 40], text: "The participants moving through nationalities" },            // White to black gradient
    team: { start: [210, 80, 70], end: [210, 80, 40], text: "The participants moving through teams" },     // Light blue gradient
    weight: { start: [60, 80, 70], end: [60, 80, 40], text: "The participants moving through weights" },     // Lime green gradient
    year: { start: [30, 100, 60], end: [30, 100, 40], text: "The participants moving through years" },     // Orange gradient
    age: { start: [270, 100, 60], end: [270, 100, 40], text: "The participants moving through ages" },    // Purple gradient
    event: { start: [330, 80, 60], end: [330, 80, 40], text: "The participants moving through events" },    // Pink gradient
    medal: { start: [120, 100, 60], end: [120, 100, 40], text: "The participants moving through medals"  }   // Teal gradient
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name');
