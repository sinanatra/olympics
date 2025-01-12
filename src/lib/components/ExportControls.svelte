<script>
    import { get } from "svelte/store";
    import {
        config,
        canvasStore,
        filters,
        syncRecording,
        highlightedEntities,
    } from "$lib/stores.js";
    import { colorMap } from "$lib/constants.js";
    import { markEntityLoopComplete } from "$lib/loopStatus";

    let recorder;
    let isRecording = false;
    let isAutoRecording = false;
    let isAdvancedAutoRecording = false;
    let currentStep = 0;
    let interval;

    const recordDuration = 20000;
    const advancedRecordDuration = 4000;

    $: {
        if ($syncRecording == true) {
            startRecording();
        } else {
            stopRecording();
        }
    }

    async function startRecording() {
        const canvas = get(canvasStore);
        if (canvas) {
            const { default: RecordRTC } = await import("recordrtc");

            const stream = canvas.captureStream(30);

            recorder = new RecordRTC(stream, {
                type: "video",
                mimeType: "video/webm",
                videoBitsPerSecond: 10000000,
            });

            recorder.startRecording();
            isRecording = true;
            console.log("Recording started");
        } else {
            console.error("Canvas not found");
        }
    }

    async function stopRecording() {
        if (recorder && isRecording) {
            recorder.stopRecording(() => {
                const blob = recorder.getBlob();

                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "canvas_recording.webm";
                link.click();

                console.log("Recording stopped and saved");
            });

            isRecording = false;
        } else {
            console.error("No active recording");
        }
    }

    function startAutoRecording() {
        if (isAutoRecording) return;

        isAutoRecording = true;
        const keys = Object.keys(colorMap).filter(
            (option) => option !== "name",
        );

        console.log("Auto-recording started");

        if (!isRecording) {
            startRecording();
        }

        const interval = setInterval(() => {
            if (currentStep >= keys.length) {
                console.log("All steps completed. Stopping auto-recording.");
                stopAutoRecording();
                return;
            }

            const clusterByKey = keys[currentStep];
            config.update((c) => ({ ...c, clusterBy: clusterByKey }));
            console.log(`Updated clusterBy to: ${clusterByKey}`);

            currentStep++;
        }, recordDuration);
    }

    async function stopAutoRecording() {
        if (isAutoRecording) {
            clearInterval(interval);
            isAutoRecording = false;
            currentStep = 0;

            await stopRecording();
            console.log("Auto-recording stopped");
        }
    }

    const predefinedQueries = [
        {
            clusterBy: "sport",
            values: [
                "Alpine Skiing",
                "Alpinism",
                "Biathlon",
                "Bobsleigh",
                "Cross Country Skiing",
                "Curling",
                "Figure Skating",
                "Freestyle Skiing",
                "Ice Hockey",
                "Luge",
                "Military Ski Patrol",
                "Nordic Combined",
                "Roller Skating",
                "Short Track Speed Skating",
                "Skeleton",
                "Ski Jumping",
                "Snowboarding",
                "Speed Skating",
                "Triathlon",
            ],
        },
        {
            clusterBy: "city",
            values: [
                "Albertville",
                "Beijing",
                "Calgary",
                "Chamonix",
                "Cortina d'Ampezzo",
                "Garmisch-Partenkirchen",
                "Grenoble",
                "Innsbruck",
                "Lake Placid",
                "Lillehammer",
                "Nagano",
                "Oslo",
                "PyeongChang",
                "Salt Lake City",
                "Sankt Moritz",
                "Sapporo",
                "Sarajevo",
                "Sochi",
                "Squaw Valley",
                "Torino",
                "Vancouver",
            ],
        },

        {
            clusterBy: "year",
            values: [
                "1924",
                "1928",
                "1932",
                "1936",
                "1948",
                "1952",
                "1956",
                "1960",
                "1964",
                "1968",
                "1972",
                "1976",
                "1980",
                "1984",
                "1988",
                "1992",
                "1994",
                "1998",
                "2002",
                "2006",
                "2010",
                "2014",
                "2018",
                "2022",
            ],
        },

        {
            clusterBy: "team",
            values: [
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Argentina",
                "Armenia",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Belarus",
                "Belgium",
                "Bermuda",
                "Bolivia",
                "Bosnia and Herzegovina",
                "Brazil",
                "British Virgin Islands",
                "Bulgaria",
                "Cameroon",
                "Canada",
                "Cayman Islands",
                "Chile",
                "China",
                "Chinese Taipei",
                "Colombia",
                "Costa Rica",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Czechia",
                "Czechoslovakia",
                "Democratic People's Republic of Korea",
                "Denmark",
                "Dominica",
                "East Germany",
                "Ecuador",
                "Egypt",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Fiji",
                "Finland",
                "France",
                "Georgia",
                "Germany",
                "Ghana",
                "Great Britain",
                "Greece",
                "Guam",
                "Guatemala",
                "Haiti",
                "Honduras",
                "Hong Kong, China",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "Independent Olympic Athletes",
                "India",
                "Individual Olympic Athletes",
                "Iran",
                "Ireland",
                "Islamic Republic of Iran",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Kazakhstan",
                "Kenya",
                "Kingdom of Saudi Arabia",
                "Korea Team",
                "Kosovo",
                "Kyrgyzstan",
                "Latvia",
                "Lebanon",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macedonia",
                "Madagascar",
                "Malaysia",
                "Malta",
                "Mexico",
                "Moldova",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Morocco",
                "Nepal",
                "Netherlands Antilles",
                "Netherlands",
                "New Zealand",
                "Nigeria",
                "North Korea",
                "North Macedonia",
                "Norway",
                "Pakistan",
                "Paraguay",
                "Peru",
                "Philippines",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "ROC",
                "Republic of Korea",
                "Republic of Moldova",
                "Romania",
                "Russia",
                "San Marino",
                "Senegal",
                "Serbia and Montenegro",
                "Serbia",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "South Africa",
                "South Korea",
                "Soviet Union",
                "Spain",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Tajikistan",
                "Thailand",
                "Timor Leste",
                "Timor",
                "Togo",
                "Tonga",
                "Trinidad and Tobago",
                "Turkey",
                "Ukraine",
                "Unified Team",
                "United States Virgin Islands",
                "United States",
                "Uruguay",
                "Uzbekistan",
                "Venezuela",
                "West Germany",
                "Yugoslavia",
                "Zimbabwe",
            ],
        },
        {
            clusterBy: "weight",
            values: [
                "32",
                "34",
                "35",
                "36",
                "38",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "49.5",
                "50",
                "51",
                "52",
                "52.5",
                "53",
                "53.5",
                "54",
                "54.5",
                "55",
                "55.5",
                "56",
                "56.5",
                "57",
                "58",
                "59",
                "59.5",
                "60",
                "61",
                "61.5",
                "62",
                "62.5",
                "63",
                "63.5",
                "64",
                "64.5",
                "65",
                "65.5",
                "66",
                "66.5",
                "67",
                "67.5",
                "68",
                "68.5",
                "69",
                "69.5",
                "70",
                "70.5",
                "71",
                "71.5",
                "72",
                "72.5",
                "73",
                "73.5",
                "74",
                "74.5",
                "75",
                "75.5",
                "76",
                "76.5",
                "77",
                "77.5",
                "78",
                "78.5",
                "79",
                "79.5",
                "80",
                "81",
                "81.5",
                "82",
                "82.5",
                "83",
                "83.5",
                "84",
                "84.5",
                "85",
                "86",
                "86.5",
                "87",
                "87.5",
                "88",
                "88.5",
                "89",
                "89.5",
                "90",
                "90.5",
                "91",
                "91.5",
                "92",
                "92.5",
                "93",
                "93.5",
                "94",
                "95",
                "96",
                "97",
                "97.5",
                "98",
                "99",
                "100",
                "101",
                "102",
                "103",
                "104",
                "105",
                "106",
                "107",
                "108",
                "109",
                "110",
                "111",
                "112",
                "113",
                "114",
                "115",
                "116",
                "123",
                "127",
                "130",
                "145",
            ],
        },
        {
            clusterBy: "age",
            values: [
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "61",
            ],
        },

        {
            clusterBy: "medal",
            values: ["Bronze", "Gold", "Silver"],
        },
        {
            clusterBy: "event",
            values: [
                "Alpine Skiing Men's Combined",
                "Alpine Skiing Men's Downhill",
                "Alpine Skiing Men's Giant Slalom",
                "Alpine Skiing Men's Slalom",
                "Alpine Skiing Men's Super G",
                "Alpine Skiing Mixed Team",
                "Alpine Skiing Women's Combined",
                "Alpine Skiing Women's Downhill",
                "Alpine Skiing Women's Giant Slalom",
                "Alpine Skiing Women's Slalom",
                "Alpine Skiing Women's Super G",
                "Alpinism Mixed Alpinism",
                "Biathlon Men's 10 kilometres Sprint",
                "Biathlon Men's 12.5 kilometres Pursuit",
                "Biathlon Men's 15 kilometres Mass Start",
                "Biathlon Men's 20 kilometres",
                "Biathlon Men's 4 x 7.5 kilometres Relay",
                "Biathlon Men's 4 × 7.5 kilometres Relay",
                "Biathlon Mixed 2 x 6 kilometres and 2 x 7.5 kilometres Relay",
                "Biathlon Mixed 2 × 6 kilometres and 2 × 7.5 kilometres Relay",
                "Biathlon Women's 10 kilometres Pursuit",
                "Biathlon Women's 12.5 kilometres Mass Start",
                "Biathlon Women's 15 kilometres",
                "Biathlon Women's 3 x 7.5 kilometres Relay",
                "Biathlon Women's 30 kilometres",
                "Biathlon Women's 4 x 6 kilometres Relay",
                "Biathlon Women's 4 x 7.5 kilometres Relay",
                "Biathlon Women's 4 × 5 kilometres Relay",
                "Biathlon Women's 4 × 6 kilometres Relay",
                "Biathlon Women's 7.5 kilometres Sprint",
                "Biathlon Women's Team Sprint",
                "Bobsleigh Men's Four",
                "Bobsleigh Men's Four/Five",
                "Bobsleigh Men's Two",
                "Bobsleigh Open Four",
                "Bobsleigh Women's Monobob",
                "Bobsleigh Women's Two",
                "Cross Country Skiing Men's 10 kilometres Sprint",
                "Cross Country Skiing Men's 10 kilometres",
                "Cross Country Skiing Men's 10/10 kilometres Pursuit",
                "Cross Country Skiing Men's 10/15 kilometres Pursuit",
                "Cross Country Skiing Men's 12.5 kilometres Pursuit",
                "Cross Country Skiing Men's 15 kilometres",
                "Cross Country Skiing Men's 18 kilometres",
                "Cross Country Skiing Men's 20 kilometres",
                "Cross Country Skiing Men's 30 kilometres Skiathlon",
                "Cross Country Skiing Men's 30 kilometres",
                "Cross Country Skiing Men's 30 km Skiathlon",
                "Cross Country Skiing Men's 4 x 10 kilometres Relay",
                "Cross Country Skiing Men's 4 × 10 kilometres Relay",
                "Cross Country Skiing Men's 4 × 7.5 kilometres Relay",
                "Cross Country Skiing Men's 50 kilometres",
                "Cross Country Skiing Men's Sprint",
                "Cross Country Skiing Men's Team Sprint",
                "Cross Country Skiing Women's 10 kilometres",
                "Cross Country Skiing Women's 15 kilometres Skiathlon",
                "Cross Country Skiing Women's 15 kilometres",
                "Cross Country Skiing Women's 15 km Skiathlon",
                "Cross Country Skiing Women's 20 kilometres",
                "Cross Country Skiing Women's 3 x 5 kilometres Relay",
                "Cross Country Skiing Women's 30 kilometres",
                "Cross Country Skiing Women's 4 x 5 kilometres Relay",
                "Cross Country Skiing Women's 4 × 5 kilometres Relay",
                "Cross Country Skiing Women's 5 kilometres",
                "Cross Country Skiing Women's 5/10 kilometres Pursuit",
                "Cross Country Skiing Women's 5/5 kilometres Pursuit",
                "Cross Country Skiing Women's Sprint",
                "Cross Country Skiing Women's Team Sprint",
                "Curling Men's Curling",
                "Curling Mixed Mixed Doubles",
                "Curling Women's Curling",
                "Figure Skating Men's Singles",
                "Figure Skating Mixed Ice Dancing",
                "Figure Skating Mixed Pairs",
                "Figure Skating Mixed Team",
                "Figure Skating Women's Singles",
                "Freestyle Skiing Men's Aerials",
                "Freestyle Skiing Men's Big Air",
                "Freestyle Skiing Men's Halfpipe",
                "Freestyle Skiing Men's Moguls",
                "Freestyle Skiing Men's Ski Cross",
                "Freestyle Skiing Men's Slopestyle",
                "Freestyle Skiing Mixed Team Aerials",
                "Freestyle Skiing Women's Aerials",
                "Freestyle Skiing Women's Big Air",
                "Freestyle Skiing Women's Halfpipe",
                "Freestyle Skiing Women's Moguls",
                "Freestyle Skiing Women's Ski Cross",
                "Freestyle Skiing Women's Slopestyle",
                "Ice Hockey Men's Ice Hockey",
                "Ice Hockey Women's Ice Hockey",
                "Luge Men's Singles",
                "Luge Mixed (Men)'s Doubles",
                "Luge Mixed Team Relay",
                "Luge Open Doubles",
                "Luge Women's Singles",
                "Military Ski Patrol Men's Military Ski Patrol",
                "Nordic Combined Men's Individual",
                "Nordic Combined Men's Large Hill / 10 km, Individual",
                "Nordic Combined Men's Large Hill, Team",
                "Nordic Combined Men's Normal Hill / 10 km, Individual",
                "Nordic Combined Men's Sprint",
                "Nordic Combined Men's Team",
                "Nordic Combined Mixed's Normal Hill, Team",
                "Roller Skating Boys Combined",
                "Roller Skating Men's 500 metres",
                "Short Track Speed Skating Men's 1,000 metres",
                "Short Track Speed Skating Men's 1,500 metres",
                "Short Track Speed Skating Men's 5,000 metres Relay",
                "Short Track Speed Skating Men's 500 metres",
                "Short Track Speed Skating Mixed 2,000 metres Relay",
                "Short Track Speed Skating Women's 1,000 metres",
                "Short Track Speed Skating Women's 1,500 metres",
                "Short Track Speed Skating Women's 3,000 metres Relay",
                "Short Track Speed Skating Women's 3,000 metres",
                "Short Track Speed Skating Women's 500 metres",
                "Short Track Speed Skating Women's Mass Start",
                "Short Track Speed Skating Women's Team Pursuit (6 laps)",
                "Skeleton Men's Skeleton",
                "Skeleton Women's Skeleton",
                "Ski Jumping Men's Large Hill, Individual",
                "Ski Jumping Men's Large Hill, Team",
                "Ski Jumping Men's Normal Hill, Individual",
                "Ski Jumping Mixed's Normal Hill, Team",
                "Ski Jumping Women's Normal Hill, Individual",
                "Snowboarding Men's Big Air",
                "Snowboarding Men's Boardercross",
                "Snowboarding Men's Cross",
                "Snowboarding Men's Giant Slalom",
                "Snowboarding Men's Halfpipe",
                "Snowboarding Men's Parallel Giant Slalom",
                "Snowboarding Men's Parallel Slalom",
                "Snowboarding Men's Slopestyle",
                "Snowboarding Mixed Team Cross",
                "Snowboarding Women's Big Air",
                "Snowboarding Women's Boardercross",
                "Snowboarding Women's Combined",
                "Snowboarding Women's Cross",
                "Snowboarding Women's Downhill",
                "Snowboarding Women's Giant Slalom",
                "Snowboarding Women's Halfpipe",
                "Snowboarding Women's Parallel Giant Slalom",
                "Snowboarding Women's Parallel Slalom",
                "Snowboarding Women's Slopestyle",
                "Snowboarding Women's Super G",
                "Speed Skating Men's 1,000 metres",
                "Speed Skating Men's 1,500 metres",
                "Speed Skating Men's 10,000 metres",
                "Speed Skating Men's 5,000 metres",
                "Speed Skating Men's 500 metres",
                "Speed Skating Men's Allround",
                "Speed Skating Men's Mass Start",
                "Speed Skating Men's Team Pursuit (8 laps)",
                "Speed Skating Women's 1,000 metres",
                "Speed Skating Women's 1,500 metres",
                "Speed Skating Women's 3,000 metres Relay",
                "Speed Skating Women's 3,000 metres",
                "Speed Skating Women's 5,000 metres",
                "Speed Skating Women's 500 metres",
                "Speed Skating Women's Mass Start",
                "Speed Skating Women's Team Pursuit (6 laps)",
                "Triathlon Girls Sprint",
                "Triathlon Mixed Youth Relay",
                "Triathlon Women's 10 kilometres",
                "Triathlon Women's Sprint",
            ],
        },
    ];

    async function startAdvancedAutoRecording() {
        if (isAdvancedAutoRecording) return;

        isAdvancedAutoRecording = true;

        console.log("Advanced auto-recording started");

        async function processFiltersForQuery(clusterByKey, values) {
            for (const specificValue of values) {
                console.log(
                    `Processing filter: ${specificValue} for ${clusterByKey}`,
                );

                if (!isRecording) {
                    await startRecording(); // Start recording here
                }

                config.update((c) => ({
                    ...c,
                    queryValue: "",
                    filters: {},
                }));

                highlightedEntities.set([]);

                config.update((c) => ({
                    ...c,
                    clusterBy: clusterByKey,
                    filters: {
                        [clusterByKey]: [specificValue],
                    },
                    speed: 2,
                    stroke: 8,
                }));

                await new Promise((resolve) => setTimeout(resolve, 500));
                await new Promise((resolve) => {
                    const unsubscribe = markEntityLoopComplete.subscribe(
                        (completed) => {
                            if (completed) {
                                markEntityLoopComplete.set(false);
                                resolve();
                            }
                        },
                    );
                });

                console.log(
                    `Completed filter: ${specificValue} for ${clusterByKey}`,
                );
            }
        }

        for (const { clusterBy, values } of predefinedQueries) {
            console.log(`Starting processing for clusterBy: ${clusterBy}`);

            config.update((c) => ({
                ...c,
                clusterBy,
                filters: {},
            }));

            await new Promise((resolve) => setTimeout(resolve, 2000));

            await processFiltersForQuery(clusterBy, values);

            currentStep++;

            if (currentStep >= predefinedQueries.length) {
                console.log("All predefined queries completed.");
                break;
            }
        }

        await stopAdvancedAutoRecording();
    }

    async function stopAdvancedAutoRecording() {
        if (isAdvancedAutoRecording) {
            isAdvancedAutoRecording = false;
            currentStep = 0;

            await stopRecording();
            console.log("Advanced auto-recording stopped");
        }
    }
</script>

<div>
    <button
        on:click={startRecording}
        disabled={isRecording || isAutoRecording || isAdvancedAutoRecording}
    >
        Start Manual Recording
    </button>
    <button
        on:click={stopRecording}
        disabled={!isRecording || isAutoRecording || isAdvancedAutoRecording}
    >
        Stop Manual Recording
    </button>
    <button
        on:click={startAutoRecording}
        disabled={isAutoRecording || isAdvancedAutoRecording}
    >
        Start Auto-Recording
    </button>
    <!-- <button on:click={stopAutoRecording} disabled={!isAutoRecording}>
        Stop Auto-Recording
    </button> -->
    <button
        on:click={startAdvancedAutoRecording}
        disabled={isAdvancedAutoRecording || isAutoRecording}
    >
        Start Advanced Auto-Recording
    </button>
    <!-- <button
        on:click={stopAdvancedAutoRecording}
        disabled={!isAdvancedAutoRecording}
    >
        Stop Advanced Auto-Recording
    </button> -->
</div>
