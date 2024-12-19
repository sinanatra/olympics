export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 40], text: "" },
    sport: { start: [45, 100, 60], end: [45, 100, 40], text: "moving between sports" },
    city: { start: [139, 80, 40], end: [139, 80, 20], text: "moving between cities" },
    height: { start: [0, 80, 60], end: [0, 80, 40], text: "grouped by height" },
    noc: { start: [0, 0, 80], end: [0, 0, 40], text: "grouped by  nationalities" },
    // team: { start: [210, 80, 70], end: [210, 80, 40], text: "moving between Olympic teams" },
    // weight: { start: [60, 80, 70], end: [60, 80, 40], text: "grouped by weight" },
    year: { start: [30, 100, 60], end: [30, 100, 40], text: "moving between years" },
    team: { start: [230, 54, 72], end: [230, 54, 62], text: "moving between Olympic teams" }, // Muted Blue
    weight: { start: [97, 42, 68], end: [97, 42, 58], text: "grouped by weight" }, // Light Green
    // year: { start: [40, 66, 62], end: [40, 66, 52], text: "moving between years" }, // Muted Yellow
    age: { start: [194, 100, 47], end: [194, 100, 27], text: "grouped by age" },
    event: { start: [357, 100, 79], end: [357, 100, 69], text: "moving between Olympic events" },
    sex: { start: [0, 0, 80], end: [0, 0, 40], text: "grouped by a biased binary distinction" },
    medal: { start: [47, 58, 48], end: [47, 58, 38], text: "grouped by Olympic medals" } // Pale Yellow
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name' && option !== 'noc');



