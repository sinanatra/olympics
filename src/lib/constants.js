export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 40], text: "" },   // Blue gradient
    sport: { start: [45, 100, 60], end: [45, 100, 40], text: "moving between sport" },    // Yellow gradient
    city: { start: [139, 100, 40], end: [139, 100, 20], text: "moving between cities" },     // Green gradient
    height: { start: [0, 80, 60], end: [0, 80, 40], text: "grouped by height" },       // Red gradient
    noc: { start: [0, 0, 80], end: [0, 0, 40], text: "grouped by  nationalities" },            // White to black gradient
    team: { start: [210, 80, 70], end: [210, 80, 40], text: "moving between Olympic teams" },     // Light blue gradient
    weight: { start: [60, 80, 70], end: [60, 80, 40], text: "grouped by weight" },     // Lime green gradient
    year: { start: [30, 100, 60], end: [30, 100, 40], text: "moving between years" },     // Orange gradient
    age: { start: [194, 100, 47], end: [194, 100, 27], text: "grouped by age" },    // Purple gradient
    event: { start: [357, 100, 79], end: [357, 100, 69], text: "moving between Olympic events" },    // Pink gradient
    sex: { start: [0, 0, 80], end: [0, 0, 40], text: "grouped by a biased binary distinction" },            // White to black gradient
    medal: { start: [146, 100, 33], end: [146, 100, 23], text: "grouped by Olympic medals"  }   // Teal gradient
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name' &&  option !== 'noc');



