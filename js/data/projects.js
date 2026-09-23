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