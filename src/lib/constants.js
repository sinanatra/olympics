export const colorMap = {
    name: { start: [210, 100, 50], end: [210, 100, 40], text: "" },
    sport: { start: [45, 100, 60], end: [45, 100, 40], text: "shown shifting from sport to sport" },
    city: { start: [139, 80, 40], end: [139, 80, 20], text: "shown moving from city to city" },
    height: { start: [0, 80, 60], end: [0, 80, 40], text: "shown with respect to changes in height" },
    noc: { start: [0, 0, 80], end: [0, 0, 40], text: "shown with respect to their nationalities" },
    // team: { start: [210, 80, 70], end: [210, 80, 40], text: "moving between Olympic teams" },
    // weight: { start: [60, 80, 70], end: [60, 80, 40], text: "grouped by weight" },
    year: { start: [30, 100, 60], end: [30, 100, 40], text: "shown in terms of their years of participation" },
    team: { start: [230, 54, 72], end: [230, 54, 62], text: "shown transferring from team to team" }, // Muted Blue
    weight: { start: [97, 42, 68], end: [97, 42, 58], text: "shown changing in weight" }, // Light Green
    // year: { start: [40, 66, 62], end: [40, 66, 52], text: "moving between years" }, // Muted Yellow
    age: { start: [194, 100, 47], end: [194, 100, 27], text: "shown changing in age" },
    event: { start: [357, 100, 79], end: [357, 100, 69], text: "shown shifting from one event to another" },
    sex: { start: [0, 0, 80], end: [0, 0, 40], text: "shown from the standpoint of their sex" },
    medal: { start: [47, 58, 48], end: [47, 58, 38], text: "shown with respect to the medals obtained" } // Pale Yellow
};

export const clusterOptions = Object.keys(colorMap);
export const filteredOptions = clusterOptions.filter((option) => option !== 'name' && option !== 'noc');



