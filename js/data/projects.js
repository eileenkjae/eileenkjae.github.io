/* =========================================================
   PROJECT DATA
========================================================= */


const PROJECTS = [

    {

        /* =========================================================
           BASIC INFORMATION
        ========================================================= */

        id: "b-rush",

        title: "B-RUSH",

        type: "Team prototype / work in progress",

        subtitle:
            "A third-person action roguelike prototype where melee combat generates the ink used for hand-drawn sigils.",


        /* =========================================================
           HOMEPAGE COVER
        ========================================================= */

        cover:
            "assets/projects/b-rush/copertina.png",


        /* =========================================================
           HERO
        ========================================================= */

        hero: {

            type: "video",

            src:
                "assets/projects/b-rush/hero.mp4",

            autoplay: true,

            loop: true,

            muted: true,

            controls: true

        },


        /* =========================================================
           PROJECT INFO
        ========================================================= */

        role:
            "Game Design / Unity Prototyping",

        engine:
            "Unity",

        year:
            "2026",

        duration:
            "2 months",

        team:
            "3-person collaboration",

        status:
            "Playable prototype / work in progress",


        focus: [

            "Drawing / Sigil System",

            "Combat & Ink Economy",

            "Unity Integration"

        ],


        /* =========================================================
           OVERVIEW
        ========================================================= */

        overview:
            `B-Rush is a third-person action roguelike prototype made by a team of three over two months. Hit enemies, build up ink, then spend it on sigils you draw on screen or charged attacks.

The first milestone brings combat, the ink resource and drawing into one playable prototype. It is still a rough slice of a larger idea, not a finished roguelike.`,


        /* =========================================================
           VISION
        ========================================================= */

        vision: {

            text:
                `The goal was to make painting more than an art direction. Risk of Rain 2 informed the fast third-person combat flow I wanted to explore, while Okami inspired the idea of turning drawing itself into an input. B-Rush connects those influences through a shared ink economy: fighting creates the resource that charged attacks and sigils spend.`,

            process: [

                {

                    title:
                        "Paint as Combat",

                    text:
                        `The giant brush is both the visual identity and the main melee weapon, with normal and charged attacks that connect combat to the ink resource.`

                },

                {

                    title:
                        "Paint as a Resource",

                    text:
                        `Hitting enemies generates ink. Charged attacks and sigils spend it, while inkwells placed in the level create another way to recover the same resource.`

                },

                {

                    title:
                        "Paint as Input",

                    text:
                        `The player can slow time and draw directly on screen. Different recognized shapes become different gameplay outcomes instead of acting as a separate minigame.`

                }

            ]

        },


        /* =========================================================
           GAMEPLAY
        ========================================================= */

        gameplay: {

            note:
                "fight - earn ink - draw //",

            intro:
                `B-Rush ties its main combat decisions to one resource. Staying active in melee helps refill ink, while charged attacks and drawn sigils ask the player to spend it for stronger or more situational outcomes.`,

            features: [

                {

                    title:
                        "Melee / Ink Economy",

                    media: {

                        type:
                            "image",

                        src:
                            "assets/projects/b-rush/combat-view.png",

                        alt:
                            "B-Rush combat prototype showing the player, enemies and ink-based HUD."

                    },

                    text:
                        `The giant brush supports normal and charged attacks. Successful hits feed the ink economy, while the charged attack consumes ink and inkwells placed around the level provide an additional refill source.`

                },

                {

                    title:
                        "Drawn Sigils",

                    media: {

                        type:
                            "video",

                        src:
                            "assets/projects/b-rush/bossfight - Trim.mp4",

                        autoplay:
                            true,

                        loop:
                            true,

                        muted:
                            true,

                        controls:
                            true

                    },

                    text:
                        `Entering the drawing phase slows time and lets the player sketch a sigil on screen. The recognized shape, its accuracy and the available ink determine whether the corresponding gameplay effect can be activated.`

                }

            ],

            loadout: []

        },


        /* =========================================================
           DRAWING SYSTEM
        ========================================================= */

        drawingSystem: {

            note:
                "draw it / use it //",

            intro:
                `I wanted drawing to be part of combat: slow time, draw a sigil, then return to the fight. I defined the interaction flow, templates, recognition threshold, ink costs and effects. The C# implementation was AI-assisted; I integrated it and adjusted the rules in Unity.`,

            steps: [

                {
                    label: "DRAW",
                    text: "Collect the player's strokes on screen."
                },

                {
                    label: "NORMALIZE",
                    text: "Resample, scale and center the point cloud."
                },

                {
                    label: "COMPARE",
                    text: "Match the input against saved sigil templates."
                },

                {
                    label: "SCORE",
                    text: "Return a 0–1 similarity score."
                },

                {
                    label: "EFFECT",
                    text: "Use the result inside the ink and combat rules."
                }

            ],

            notes: [

                {
                    title: "Recognition",
                    text: "Normalizing the drawing makes recognition less dependent on where or how large the player draws the shape."
                },

                {
                    title: "Threshold",
                    text: "A sigil needs a recognition score of at least 0.70 to activate. This is a similarity threshold, not a probability that the drawing is correct."
                },

                {
                    title: "Gameplay Link",
                    text: "Recognition alone is not enough: the player also needs ink to activate the effect. The drawing input and the resource check belong to the same interaction."
                }

            ],

            implementationNote:
                `A shortened excerpt from the prototype’s PointCloudRecognizer.cs. It shows the comparison and scoring step of the AI-assisted implementation described above.`,

            code: {

                label:
                    "DRAWING RECOGNITION / C#",

                file:
                    "PointCloudRecognizer.cs / excerpt",

                highlightLines: [
                    1,
                    4,
                    8,
                    13,
                    15,
                    18,
                    24
                ],

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

            }

        },


        /* =========================================================
           CORE LOOP
        ========================================================= */

        coreLoop: [],


        /* =========================================================
           BEFORE VS AFTER
        ========================================================= */

        beforeAfter: {

            before: {

                label:
                    "Isolated System Test",

                media: {

                    type:
                        "video",

                    src:
                        "assets/projects/b-rush/drawing-early.mp4",

                    autoplay:
                        true,

                    loop:
                        true,

                    muted:
                        true,

                    controls:
                        true

                },

                description:
                    `An early drawing-mechanic test using primitive presentation and temporary UI. The goal here was simply to prove that the interaction and recognition loop could work.`

            },

            after: {

                label:
                    "Integrated Prototype",

                media: {

                    type:
                        "video",

                    src:
                        "assets/projects/b-rush/drawing.mp4",

                    autoplay:
                        true,

                    loop:
                        true,

                    muted:
                        true,

                    controls:
                        true

                },

                description:
                    `The drawing input inside the combat prototype, alongside the ink HUD, character and environment. This comparison shows integration progress rather than a measured playtest result.`

            }

        },


        /* =========================================================
           MY WORK
        ========================================================= */

        contributions:
            `I designed the combat and ink rules, the drawing interaction and the scope of the first prototype. In Unity, I assembled the scene, connected the systems and integrated materials, shaders and URP changes. I also managed the GitHub repository and project documentation.

One teammate worked mainly on narrative, worldbuilding and 3D models; another on illustration and selected textures. I made part of the 3D content. The animations shown here use Mixamo clips.`,

        myWork: [
            { label: "Combat & Ink Rules", category: "design" },
            { label: "Drawing Interaction", category: "gameplay" },
            { label: "Unity Integration", category: "gameplay" },
            { label: "Scope & Documentation", category: "design" }
        ],


        /* =========================================================
           GALLERY
        ========================================================= */


gallery: [
    {
        type: "image",
        src: "assets/projects/b-rush/map-top.png",
        alt: "Top-down development view of the B-Rush prototype level.",
        caption: "The prototype area from above — scene layout and Unity integration."
    },
    {
        type: "image",
        src: "assets/projects/b-rush/hud.png",
        alt: "B-Rush HUD graphic study.",
        caption: "HUD study for the prototype — part of the team's visual development.",
        layout: "contain"
    },
    {
        type: "image",
        src: "assets/projects/b-rush/narrative3.jpg",
        alt: "Evelyn character illustration for B-Rush.",
        caption: "Evelyn — illustration by a Matilde Troncati, included as visual context.",
        layout: "portrait"
    }
],


        /* =========================================================
           LINKS
        ========================================================= */

        links: []

    },


    {

        /* =========================================================
           BASIC INFORMATION
        ========================================================= */

        id: "coquette",

        title: "COQUETTE",

        type: "Solo game / completed prototype",

        subtitle:
            "A short bad trip experience: four cigarette weapons, smoke enemies and one sharp knife.",


        /* =========================================================
           HOMEPAGE COVER
        ========================================================= */

        cover:
            "assets/projects/coquette/copertina.png",


        /* =========================================================
           HERO
        ========================================================= */

        hero: {

            type: "video",

            src:
                "assets/projects/coquette/hero.mp4",

            autoplay: true,

            loop: true,

            muted: true,

            controls: true

        },


        /* =========================================================
           PROJECT INFO
        ========================================================= */

        role:
    "Game Designer / Unity Prototyper",

        engine:
            "Unity",


        year:
            "",

        duration:
            "46 days",

        team:
            "Solo Project",

        status:
            "Completed Prototype",


        focus: [

            "Weapon Roles",

            "Compact Level",

            "Solo Prototyping"

        ],


        /* =========================================================
           OVERVIEW
        ========================================================= */

        overview:
            `Cute colours, gross enemies, cigarettes for weapons. COQUETTE is a short solo Unity project I completed in 46 days.

I built a compact level around four cigarette types and a knife, with enemies, checkpoints, collectibles and a final encounter. The playable prototype is available on itch.io.`,


        /* =========================================================
           VISION
        ========================================================= */

        vision: {

            text:
                `I wanted a little piece of early-2000s internet weirdness: cute colours, oversaturation and something slightly wrong underneath. Cigarettes and drug imagery are part of that absurd, grotesque tone.`,


            process: [

                {

                    title:
                        "The Look",

                    text:
                        'Early-internet imagery, cute colours and unsettling faces. "Creepy-chan" was one of my main visual references.'

                },


                {

                    title:
                        "The Gimmick",

                    text:
                        `The cigarette joke became a weapon wheel with four different jobs: single-target damage, piercing, immobilising and area damage. "Smoking kills" became rather literal.`

                },


                {

                    title:
                        "The Game",

                    text:
                        `One compact level, collectible lighters and a final encounter. That was the size of the game I finished in 46 days.`

                }

            ]

        },


        /* =========================================================
           GAMEPLAY
        ========================================================= */

        gameplay: {

            note:
                "don't smoke, people! //",


            intro:
                `Switch cigarettes for different enemies and groups. The basic shot has unlimited uses; the other types are limited. Smoke enemies ignore all four, so it is time to bring out the knife. Collectible lighters give you something else to look for along the way.`,


            features: [

                {

                    title:
                        "Cigarette Wheel",

                    media: {

                        type:
                            "video",

                        src:
                            "assets/projects/coquette/weapon-wheel.mp4",

                        autoplay:
                            true,

                        loop:
                            true,

                        muted:
                            true,

                        controls:
                            true

                    },

                    text:
                        `Four slots, four jobs. The wheel lets the player switch between a direct hit, a piercing attack, a non-damaging immobilising area and a lethal area attack.`

                },


                {

                    title:
                        "Knife / Smoke Enemies",

                    media: {

                        type:
                            "video",

                        src:
                            "assets/projects/coquette/knife.mp4",

                        autoplay:
                            true,

                        loop:
                            true,

                        muted:
                            true,

                        controls:
                            true

                    },

                    text:
                        `Smoke enemies are immune to cigarette attacks and can only be killed with the knife. More smoke will not solve this one.`

                }

            ],


            /* =========================================================
               CIGARETTE ROLES
            ========================================================= */

            loadout: [

                {

                    name:
                        "Marlboro",

                    effect:
                        "Direct single-target hit",

                    meta:
                        "Unlimited"

                },


                {

                    name:
                        "Chesterfield",

                    effect:
                        "Piercing line of smoke",

                    meta:
                        "Limited uses"

                },


                {

                    name:
                        "Pink Black Devil",

                    effect:
                        "Large smoke area: immobilises, no damage",

                    meta:
                        "Limited uses"

                },


                {

                    name:
                        "Black Black Devil",

                    effect:
                        "Large lethal smoke area",

                    meta:
                        "Limited uses"

                }

            ]

        },


        /* =========================================================
           CORE LOOP
        ========================================================= */

        coreLoop: [],


        /* =========================================================
           BEFORE VS AFTER
        ========================================================= */

        beforeAfter: {

            before: {

                label:
                    "Early Development",

                media: {

                    type:
                        "image",

                    src:
                        "assets/projects/coquette/early.png",

                    alt:
                        "Early development photo of COQUETTE running in Unity."

                },

                description:
                    `One of the few images I kept from early development: a photo of the Unity scene with basic geometry and an early character. A rough record of where it started.`

            },


            after: {

                label:
                    "Final Prototype",

                media: {

                    type:
                        "image",

                    src:
                        "assets/projects/coquette/level-view.png",

                    alt:
                        "Final COQUETTE prototype environment."

                },

                description:
                    `The completed prototype: the environment, HUD and gameplay brought together in one compact level. These images show how the presentation changed during development.`

            }

        },


        /* =========================================================
           MY WORK
        ========================================================= */

        contributions:
            `I designed the weapon roles and level, built the gameplay in Unity, and put together the UI and visual direction. I also made low-poly assets for the project.

The programming was AI-assisted. My focus was defining the behaviour, integrating the pieces and getting a small game through to a finished prototype.`,

        myWork: [
            { label: "Weapon & Enemy Rules", category: "design" },
            { label: "Level & Checkpoints", category: "design" },
            { label: "Unity Prototyping", category: "gameplay" },
            { label: "UI & Visual Direction", category: "visual" }
        ],


        /* =========================================================
           GALLERY
        ========================================================= */

        gallery: [

            {

                type:
                    "image",

                src:
                    "assets/projects/coquette/menu.png",

                alt:
                    "COQUETTE main menu and UI.",

                caption:
                    "Main menu — carrying the game’s visual style into the UI"

            },


            {

                type:
                    "image",

                src:
                    "assets/projects/coquette/final-encounter.png",

                alt:
                    "Final encounter in COQUETTE.",

                caption:
                    "Final encounter — fighting yourself. Several times over."

            }

        ],


        /* =========================================================
           LINKS
        ========================================================= */

        links: [

            {

                label:
                    "Play COQUETTE on itch.io",

                url:
                    "https://kissaleen.itch.io/coquette-first-person-smoker"

            }

        ]

    }

];

// Lead with the completed project; keep the team prototype directly after it.
PROJECTS.sort((a, b) => Number(b.id === "coquette") - Number(a.id === "coquette"));
