export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 40], text: "" },   // Blue gradient
    sport: { start: [45, 100, 60], end: [45, 100, 40], text: "moving through sport" },    // Yellow gradient
    city: { start: [139, 100, 40], end: [139, 100, 20], text: "moving through cities" },     // Green gradient
    height: { start: [0, 80, 60], end: [0, 80, 40], text: "moving through heighs" },       // Red gradient
    noc: { start: [0, 0, 80], end: [0, 0, 40], text: "moving through nationalities" },            // White to black gradient
    team: { start: [210, 80, 70], end: [210, 80, 40], text: "moving through teams" },     // Light blue gradient
    weight: { start: [60, 80, 70], end: [60, 80, 40], text: "moving through weights" },     // Lime green gradient
    year: { start: [30, 100, 60], end: [30, 100, 40], text: "moving through years" },     // Orange gradient
    age: { start: [194, 100, 47], end: [194, 100, 27], text: "moving through ages" },    // Purple gradient
    event: { start: [357, 100, 79], end: [357, 100, 69], text: "moving through events" },    // Pink gradient
    sex: { start: [0, 0, 80], end: [0, 0, 40], text: "sorted by an unfurtunate binary distinction" },            // White to black gradient
    medal: { start: [146, 100, 33], end: [146, 100, 23], text: "moving through medals"  }   // Teal gradient
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name' &&  option !== 'noc');



