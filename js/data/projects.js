/*
=========================================================
PROJECT DATA
=========================================================

Tutti i contenuti dei progetti vengono definiti qui.

Il template della pagina viene costruito
automaticamente da project.js.
*/


const PROJECTS = [

    {

        /* =============================================
           BASIC INFORMATION
        ============================================= */

        id: "b-rush",

        title: "B-RUSH",

        type: "Action Roguelike Prototype",

        subtitle:
            "A third-person action roguelike prototype where melee combat generates the ink used for charged attacks and hand-drawn sigils.",


        /* =============================================
           HOMEPAGE COVER
        ============================================= */

        cover:
            "assets/projects/b-rush/copertina.png",


        /* =============================================
           HERO
        ============================================= */

        hero: {

            type: "video",

            src:
                "assets/projects/b-rush/hero.mp4",

            autoplay: true,

            loop: true,

            muted: true,

            controls: false

        },


        /* =============================================
           PROJECT INFO
        ============================================= */

        role:
            "Game Designer / Project Lead / Unity Prototyper",

        engine:
            "Unity",

        year:
            "2026",

        duration:
            "2 months",

        team:
            "3-person collaboration",

        status:
            "Long-term WIP / Playable Prototype",


        focus: [

            "Drawing / Sigil System",

            "Combat & Ink Economy",

            "Gameplay Direction"

        ],


        /* =============================================
           OVERVIEW
        ============================================= */

        overview:
            `B-Rush is a three-person third-person action roguelike prototype developed during a fixed two-month application deadline. It began as material to support a collaborator's Fine Arts Academy application; the project was included in her portfolio, and she was admitted with a score of 86/100.

I led the game design, gameplay direction and Unity production: defining systems, guiding scope and design choices, organizing the pipeline and documentation, managing the GitHub repository, integrating shaders, materials and URP renderer changes, and creating part of the 3D content. One collaborator focused mainly on narrative, worldbuilding and 3D modeling; another worked on illustration and selected textures.

The original concept was much larger than the first milestone could support, so the initial sprint focused on proving the combat, ink economy and drawing systems instead of completing the full roguelike structure. B-Rush remains a long-term work in progress. Mixamo clips were used as prototyping animation assets during this stage.`,


        /* =============================================
           VISION
        ============================================= */

        vision: {

            text:
                `The goal was to make painting more than an art direction. Risk of Rain 2 informed the fast third-person combat flow I wanted to explore, while Okami inspired the idea of turning drawing itself into an input. B-Rush connects those influences through a shared ink economy: fighting creates the resource that charged attacks and sigils spend.`,

            process: [

                {

                    title:
                        "Paint as Combat",

                    text:
                        `The giant brush is both the visual identity and the main melee weapon, with normal and charged attacks built around readable impact and movement.`

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


        /* =============================================
           GAMEPLAY
        ============================================= */

        gameplay: {

            note:
                "fight → earn ink → decide when to spend it //",

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
                            false

                    },

                    text:
                        `Entering the drawing phase slows time and lets the player sketch a sigil on screen. The recognized shape, its accuracy and the available ink determine whether the corresponding gameplay effect can be activated.`

                }

            ],

            loadout: []

        },


        /* =============================================
           DRAWING SYSTEM

           A B-Rush-specific technical-design section.
           The template ignores this field for projects
           that do not use it.
        ============================================= */

        drawingSystem: {

            note:
                "design first / code second //",

            intro:
                `The drawing mechanic was designed as a gameplay system, not as a coding showcase. I defined the interaction flow, template rules, accuracy threshold, ink cost and gameplay outcomes; the C# implementation was developed iteratively with AI assistance, then integrated, tested and tuned in Unity.`,

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
                    text: "Return a 0–1 recognition accuracy value."
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
                    text: "The gameplay layer requires at least 70% recognition accuracy before a sigil can activate."
                },

                {
                    title: "Gameplay Link",
                    text: "The recognition score is passed back into gameplay logic, where accuracy can influence effect strength and ink cost."
                }

            ],

            implementationNote:
                `This is an excerpt from the real PointCloudRecognizer.cs used by the prototype. It is intentionally shortened for presentation: the point is to show how the design flow reaches an implemented gameplay rule, not to present myself as a gameplay programmer.`,

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


        /* =============================================
           CORE LOOP
        ============================================= */

        coreLoop: [],


        /* =============================================
           BEFORE VS AFTER
        ============================================= */

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
                        false

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
                        false

                },

                description:
                    `The same idea integrated into the playable prototype with the character, environment, ink economy, HUD, post-processing and combat state around it.`

            }

        },


        /* =============================================
           MY WORK
        ============================================= */

        myWork: [

            {
                label: "Game Design",
                category: "design"
            },

            {
                label: "Gameplay Design",
                category: "gameplay"
            },

            {
                label: "Project Direction",
                category: "design"
            },

            {
                label: "Unity Prototyping",
                category: "gameplay"
            },

            {
                label: "System Integration",
                category: "gameplay"
            },

            {
                label: "Pipeline / Documentation",
                category: "design"
            },

            {
                label: "Low-poly 3D",
                category: "asset"
            },

            {
                label: "Visual Integration",
                category: "visual"
            }

        ],


        /* =============================================
           GALLERY
        ============================================= */

       /* =========================================================
   js/data/projects.js

   SOSTITUISCI SOLO L'ATTUALE BLOCCO "gallery" DI B-RUSH
========================================================= */

gallery: [

    

   

    {
        type: "image",

        src:
            "assets/projects/b-rush/narrative.jpg",

        alt:
            "Character illustration for B-Rush.",

        caption:
            "Evelyn#123",

        layout:
            "portrait"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/narrative2.jpg",

        alt:
            "Character illustration for B-Rush.",

        caption:
            "Evelyn#124",

        layout:
            "contain"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/narrative3.jpg",

        alt:
            "Character design illustration for B-Rush.",

        caption:
            "Evelyn#125",

        layout:
            "portrait"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/sketches.png",

        alt:
            "Character design sheet for B-Rush.",

        caption:
            "Evelyn#126",

        layout:
            "portrait"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/sketches1.png",

        alt:
            "Character design sheet for B-Rush.",

        caption:
            "Evelyn#127",

        layout:
            "portrait"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/narrative1.jpg",

        alt:
            "Creature development sketches showing different visual states.",

        caption:
            "Creature concept — transformation study",

        layout:
            "portrait"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/hud.png",

        alt:
            "B-Rush HUD graphic study.",

        caption:
            "HUD#123",

        layout:
            "contain"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/hud1.png",

        alt:
            "B-Rush HUD graphic study with green and red variants.",

        caption:
            "HUD#124",

        layout:
            "contain"
    },

    {
        type: "image",

        src:
            "assets/projects/b-rush/hud2.gif",

        alt:
            "Animated B-Rush loading screen.",

        caption:
            "HUD#125 — loading screen",

        layout:
            "portrait"
    },
    {
        type: "image",

        src:
            "assets/projects/b-rush/map-top.png",

        alt:
            "Top-down development view of the B-Rush prototype level.",

        caption:
            "Level layout — top-down development view"
    },
     {
        type: "image",

        src:
            "assets/projects/b-rush/scene-view1.png",

        alt:
            "B-Rush gameplay screenshot showing layered paint splash effects during combat.",

        caption:
            "Combat VFX — paint splash feedback during gameplay",

        layout:
            "wide"
    }

],


        /* =============================================
           LINKS
        ============================================= */

        links: []

    },


    {

        /* =============================================
           BASIC INFORMATION
        ============================================= */

        id: "coquette",

        title: "COQUETTE",

        type: "Videogame",

        subtitle:
            "A cute, saturated and grotesque low-poly bad trip built around cigarette-based combat.",


        /* =============================================
           HOMEPAGE COVER
        ============================================= */

        cover:
            "assets/projects/coquette/copertina.png",


        /* =============================================
           HERO
        ============================================= */

        hero: {

            type: "video",

            src:
                "assets/projects/coquette/hero.mp4",

            autoplay: true,

            loop: true,

            muted: true,

            controls: false

        },


        /* =============================================
           PROJECT INFO
        ============================================= */

        role:
    "Game Designer / Unity Prototyper",

        engine:
            "Unity",

        /*
        L'anno resta vuoto finché non vuoi
        inserirlo con certezza.
        */

        year:
            "",

        duration:
            "46 days",

        team:
            "Solo Project",

        status:
            "Completed Prototype",


        focus: [

            "Weapon / Tool Design",

            "Visual Direction",

            "Solo Prototyping"

        ],


        /* =============================================
           OVERVIEW
        ============================================= */

        overview:
            `COQUETTE is a short unity solo project, built around a dicotomy between cute and gross. Have you ever seen before a shooter where your weapons are cigarettes? now you have.`,


        /* =============================================
           VISION
        ============================================= */

        vision: {

            text:
                `I wanted the game to feel like and edgy fragment of early-2000s internet cuulture: cute, oversaturated and built around serious themes, intentionally using them in questionable ways; with addictions like cigarettes and drugs often being romanticized, COQUETTE wants to use them in a non-serious way.`,


            /*
            Piccola sottosezione.
            Non è un development diary:
            sono soltanto tre passaggi concettuali.
            */

            process: [

                {

                    title:
                        "The Look",

                    text:
                        'I wanted to use early-internet imagery and the contrast between cute colors and scary vibes. Look at "Creepy-chan"!, the main ispiration source.'

                },


                {

                    title:
                        "The Gimmick",

                    text:
                        `The cigarette theme as a weapon became a weapon wheel with four mechanically different effects. After all..."Smoking Kills", right?`

                },


                {

                    title:
                        "The Game",

                    text:
                        `I built a small but compact level, enemies, checkpoints, collectibles and a final encounter around that badtrip idea. A short but remarkable journey.`

                }

            ]

        },


        /* =============================================
           GAMEPLAY

           Sezione specifica per mostrare le meccaniche
           senza trasformarle in un feature list.
        ============================================= */

        gameplay: {

            note:
                "dont smoke people! //",


            intro:
                `Change your cigarette type to adapt to different situations, when enemies have smoked too much, CUT them off! Try to find all lighters and explore this little situation gooing inside your head.`,


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
                            false

                    },

                    text:
                        `The four cigarette types use different attack effects, area sizes and crowd-control behaviour.`

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
                            false

                    },

                    text:
                        `Enemies made of smoke are immune to cigarette attacks and can only be killed with the knife, cut away their bad breath.`

                }

            ],


            /* -----------------------------------------
               CIGARETTE ROLES
            ----------------------------------------- */

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
                        "Large no dmg smoke area + immobilize",

                    meta:
                        "Limited uses + feedback"

                },


                {

                    name:
                        "Black Black Devil",

                    effect:
                        "Large lethal smoke area ",

                    meta:
                        "Limited uses"

                }

            ]

        },


        /* =============================================
           CORE LOOP

           Per COQUETTE non è necessario:
           la sezione Gameplay comunica già abbastanza.
        ============================================= */

        coreLoop: [],


        /* =============================================
           BEFORE VS AFTER
        ============================================= */

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
                    `One of the only surviving image from the early development stage: a photo of the Unity scene with basic geometry, placeholder presentation and an early version of the character.`

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
                    `The final prototype combines the saturated environment, custom UI, gameplay systems, props and the finished visual language inside one compact level.`

            }

        },


        /* =============================================
           MY WORK
        ============================================= */

       myWork: [

    {
        label:
            "Game Design",

        category:
            "design"
    },


    {
        label:
            "Gameplay Design",

        category:
            "gameplay"
    },


    {
        label:
            "Unity Workflow",

        category:
            "gameplay"
    },


    {
        label:
            "Level / Scene Design",

        category:
            "design"
    },


    {
        label:
            "UI Design",

        category:
            "visual"
    },


    {
        label:
            "Art Direction",

        category:
            "visual"
    },


    {
        label:
            "Low-poly 3D",

        category:
            "asset"
    }

],


        /* =============================================
           GALLERY

           Weapon Wheel e Knife NON sono più qui:
           sono diventati contenuti della sezione Gameplay.
        ============================================= */

        gallery: [

            {

                type:
                    "image",

                src:
                    "assets/projects/coquette/menu.png",

                alt:
                    "COQUETTE main menu and UI.",

                caption:
                    "Main Menu / UI — designed manually in Canva"

            },


            {

                type:
                    "image",

                src:
                    "assets/projects/coquette/final-encounter.png",

                alt:
                    "Final encounter in COQUETTE.",

                caption:
                    "Final Encounter — fight your(many)self clones"

            }

        ],


        /* =============================================
           LINKS
        ============================================= */

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