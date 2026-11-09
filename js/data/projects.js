const B = "assets/projects/b-rush/";
const C = "assets/projects/coquette/";
const L = "assets/projects/lumen-life/";

const PROJECTS = [

    {
        id: "coquette",
        kind: "game",
        file: "coquette.exe",
        title: "COQUETTE",
        type: "Solo game · Academy project",
        tagline: "Cute colours, dumb enemies, cigarettes for weapons. A short and edgy bad trip in one feverish level.",
        cover: C + "copertina.png",
        preview: C + "weapon-wheel.mp4",
        meta: {
            Role: "Game design · Unity",
            Time: "46 days",
            Team: "Solo",
            Status: "Completed"
        },
        hero: { type: "video", src: C + "hero.mp4", autoplay: true, label: "gameplay.mp4" },
        links: [{ label: "Play on itch.io", url: "https://kissaleen.itch.io/coquette-first-person-smoker" }],

        sections: [
            {
                type: "features",
                title: "Mechanics",
                items: [
                    {
                        title: "Cigarette wheel",
                        text: "Four cigarettes, each with its own job: single hit, piercing shot, freeze area, lethal area.",
                        media: { type: "video", src: C + "weapon-wheel.mp4", autoplay: true }
                    },
                    {
                        title: "Knife vs smoke",
                        text: "Smoke enemies are immune to cigarettes. Cut them off.",
                        media: { type: "video", src: C + "knife.mp4", autoplay: true }
                    }
                ]
            },
            {
                type: "loadout",
                title: "Loadout",
                rows: [
                    ["Marlboro", "Single-target hit", "∞"],
                    ["Chesterfield", "Piercing line", "limited"],
                    ["Pink Black Devil", "Area · immobilises, no damage", "limited"],
                    ["Black Black Devil", "Area · lethal", "limited"]
                ]
            },
            {
                type: "compare",
                title: "Early → final",
                items: [
                    { label: "EARLY", caption: "Basic geometry and the early Unity scene.", media: { type: "image", src: C + "early.png", alt: "Early COQUETTE build in Unity." } },
                    { label: "FINAL", caption: "The finished level with HUD and art.", media: { type: "image", src: C + "level-view.png", alt: "Final COQUETTE level." } }
                ]
            },
            {
                type: "gallery",
                title: "Screens",
                items: [
                    { type: "image", src: C + "menu.png", alt: "COQUETTE main menu.", caption: "Main menu" },
                    { type: "image", src: C + "final-encounter.png", alt: "COQUETTE final encounter.", caption: "Final encounter: fight me myself and I." }
                ]
            }
        ],

        role: {
            tags: ["Weapon & enemy rules", "Level & checkpoints", "Unity prototyping", "UI & visual direction", "Low-poly assets"],
            note: "The code was written with AI help. I decided how everything should work, put it together in Unity and finished the game."
        }
    },

    {
        id: "lumen-life",
        kind: "game",
        file: "lumen_life.exe",
        title: "LUMEN LIFE",
        type: "Solo game · Academy project",
        tagline: "Carry your lantern or throw it to light up your way. A short puzzle-platformer.",
        cover: L + "cover.png",
        preview: L + "traversal.mp4",
        meta: {
            Role: "Game & level design",
            Time: "~6 weeks",
            Team: "Solo",
            Status: "Shown at Etna Comics 2026"
        },
        hero: { type: "video", src: L + "gameplay.mp4", poster: L + "gameplay-poster.jpg", autoplay: false, label: "playthrough_2m37.mp4" },
        links: [{ label: "Download on itch.io", url: "https://kissaleen.itch.io/lumen-life" }],

        sections: [
            {
                type: "compare",
                title: "Paper → playable",
                intro: "I planned six rooms on paper first. Dashed lines show where the lantern is thrown and where the player jumps.",
                items: [
                    { label: "PAPER", caption: "Room plans, 1 to 6.", media: { type: "image", src: L + "room-sketches-wide.jpg", alt: "Six hand-drawn room plans with totems, doors and jump trajectories.", zoom: true } },
                    { label: "UNITY", caption: "Room 1 in Unity: put the lantern on one totem, light the other with a match, and the door opens.", media: { type: "image", src: L + "first-room.jpg", alt: "Opening puzzle in Unity with two totems." } }
                ],
                extras: [
                    { label: "Mechanics sheet (IT)", url: L + "mechanics.jpg" },
                    { label: "Symbol legend (IT)", url: L + "legend.jpg" }
                ]
            },
            {
                type: "compare",
                title: "Test → level",
                items: [
                    { label: "WIP", caption: "First test of the throw on an empty plane.", media: { type: "video", src: L + "wip.mp4", poster: L + "wip-poster.jpg", autoplay: false } },
                    { label: "BUILD", caption: "The same throw inside a real level.", media: { type: "video", src: L + "traversal.mp4", autoplay: true } }
                ]
            },
            {
                type: "changes",
                title: "Playtest fixes",
                intro: "Players had trouble with the controls and with finding the totems. This is what I changed:",
                rows: [
                    ["Sprint", "Moved from double-tap W to Shift. It now stays on when you change direction."],
                    ["Totems", "Outlines are easier to see through walls."],
                    ["Camera", "Adjusted for small rooms."],
                    ["Lantern", "A line on the ground shows where it landed."],
                    ["Matches", "The lit totem shows how long the match will last."]
                ],
                outcome: "Players who tried again said the changes worked for them."
            },
            {
                type: "gallery",
                title: "Showcase",
                items: [
                    { type: "image", src: L + "showcase.jpg", alt: "Lumen Life playable at the Nautilus Academy stand.", caption: "Chosen by Nautilus Academy to be played at its stand at Etna Comics 2026.", layout: "portrait" }
                ]
            }
        ],

        role: {
            tags: ["Mechanics & puzzles", "Level planning & build", "Visuals & UI", "Unity integration", "Playtesting"],
            note: "The code was written with AI help. I decided how everything should work, put it together in Unity and finished the game."
        }
    },

    {
        id: "b-rush",
        kind: "prototype",
        file: "b-rush.wip",
        title: "B-RUSH",
        type: "Team prototype · early WIP",
        tagline: "A rogue-lite prototype where you draw sigils to fight enemies.",
        cover: B + "copertina.png",
        preview: B + "drawing.mp4",
        loop: ["HIT", "EARN INK", "SLOW TIME", "DRAW", "SIGIL"],
        wipNote: "What matters here is the mechanic. Art and 3D are placeholders.",
        meta: {
            Role: "Concept · game design · Unity",
            Time: "2 months",
            Team: "3 people",
            Status: "Early WIP"
        },
        links: [],

        sections: [
            {
                type: "pillars",
                title: "Concept",
                intro: "Fast combat like Risk of Rain 2, drawing as a control like Okami. Ink connects the two.",
                items: [
                    ["The brush", "is the weapon"],
                    ["The ink", "is the resource"],
                    ["Drawing", "is the input"]
                ]
            },
            {
                type: "compare",
                title: "Drawing mechanic",
                items: [
                    { label: "TEST", caption: "First test: does drawing and recognition work at all?", media: { type: "video", src: B + "drawing-early.mp4", autoplay: true } },
                    { label: "IN COMBAT", caption: "The same drawing inside a fight, with the ink bar.", media: { type: "video", src: B + "drawing.mp4", autoplay: true } }
                ]
            },
            {
                type: "features",
                title: "In the fight",
                items: [
                    {
                        title: "Sigils",
                        text: "Time slows down, you draw, then you're back in the fight.",
                        media: { type: "video", src: B + "bossfight - Trim.mp4", autoplay: true }
                    },
                    {
                        title: "Ink economy",
                        text: "Melee hits fill up the ink. Charged attacks and sigils use it up.",
                        media: { type: "image", src: B + "combat-view.png", alt: "B-Rush combat with ink HUD." }
                    }
                ]
            },
            {
                type: "flow",
                title: "How recognition works",
                steps: [
                    ["DRAW", "collect strokes"],
                    ["NORMALIZE", "resample, scale, center"],
                    ["COMPARE", "vs saved templates"],
                    ["SCORE", "≥ 0.70 to pass"],
                    ["EFFECT", "only if ink is enough"]
                ]
            },
            {
                type: "code",
                title: "PointCloudRecognizer.cs",
                summary: "C# excerpt",
                lines: [
                    "List<Point> normalizedInput = NormalizePointCloud(inputPoints, resampleCount);",
                    "float inputLength = CalculateNormalizedPathLength(normalizedInput);",
                    "",
                    "foreach (Template template in templates)",
                    "{",
                    "    if (inputStrokeCount < template.RequiredStrokes) continue;",
                    "",
                    "    List<Point> normalizedTemplate =",
                    "        NormalizePointCloud(template.Points, resampleCount);",
                    "    float templateLength =",
                    "        CalculateNormalizedPathLength(normalizedTemplate);",
                    "",
                    "    float distance = ComputeGreedyDistance(",
                    "        normalizedInput, normalizedTemplate);",
                    "    float score = Mathf.Clamp01(",
                    "        1f - (distance / (0.5f * Mathf.Sqrt(2f))));",
                    "",
                    "    float lengthDiff =",
                    "        Mathf.Abs(inputLength - templateLength) /",
                    "        Mathf.Max(inputLength, templateLength);",
                    "    float penalty =",
                    "        Mathf.Max(0f, lengthDiff - 0.15f) * 1.5f;",
                    "",
                    "    score = Mathf.Clamp01(score - penalty);",
                    "}"
                ]
            },
            {
                type: "gallery",
                title: "Visual dev",
                items: [
                    { type: "image", src: B + "map-top.png", alt: "Top-down view of the prototype level.", caption: "The prototype area from above" },
                    { type: "image", src: B + "hud.png", alt: "HUD study.", caption: "HUD study", layout: "contain" },
                    { type: "image", src: B + "narrative3.jpg", alt: "Evelyn character illustration.", caption: "Evelyn · illustration by Matilde Troncati", layout: "portrait" }
                ]
            }
        ],

        role: {
            tags: ["Concept", "Combat & ink rules", "Drawing interaction", "Unity integration", "Repo & docs"],
            note: "My teammates worked on story, art direction and illustrations."
        }
    }
];
