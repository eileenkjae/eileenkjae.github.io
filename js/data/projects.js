/*
=========================================================
PROJECT DATA
=========================================================

PROGETTO TEMPORANEO DI TEST.

Serve solamente per testare
il template del portfolio.
*/


const PROJECTS = [

    {

        id: "test-project",

        title: "Project Test",

        type: "Gameplay Prototype",

        subtitle:
            "Temporary project used only to test the portfolio layout.",


        hero: null,


        role: [
            "Game Design",
            "Unity Implementation"
        ],

        engine: "Unity",

        year: "TEST",

        duration: "TEST",

        team: "TEST",

        status: "Prototype",


        focus: [
            "Gameplay",
            "Prototyping",
            "3D"
        ],


        /* =============================================
           OVERVIEW
        ============================================= */

        overview:
            `This is a temporary project.

This section briefly explains what the project is.`,


        /* =============================================
           VISION

           PROCESS è DENTRO Vision.
        ============================================= */

        vision: {

            text:
                `This section explains the idea behind the project and the experience I wanted to create.

It is about the intention and direction of the project, not a list of problems that were solved.`,


            process: [

                {

                    title:
                        "Idea",

                    text:
                        `Define the central gameplay idea and decide what the prototype needs to communicate.`

                },

                {

                    title:
                        "Prototype",

                    text:
                        `Translate the idea into a playable Unity scene using only the systems required for the concept.`

                },

                {

                    title:
                        "Refine",

                    text:
                        `Develop the presentation, gameplay and assets until the prototype represents the intended experience.`

                }

            ]

        },


        /* =============================================
           CORE LOOP
        ============================================= */

        coreLoop: [

            "Action",

            "Feedback",

            "Decision",

            "Repeat"

        ],


        /* =============================================
           BEFORE VS AFTER

           Qui metteremo foto, GIF o video veri.

           Tu deciderai sempre le descrizioni.
        ============================================= */

        beforeAfter: {

            before: {

                label:
                    "Before",

                media: null,

                description:
                    `Temporary description of the earlier version.`

            },


            after: {

                label:
                    "After",

                media: null,

                description:
                    `Temporary description of the later version.`

            }

        },


        /* =============================================
           MY WORK
        ============================================= */

        myWork: [

            "Game Design",

            "Gameplay Design",

            "Unity Prototyping",

            "3D / Scene Work"

        ],


        /* =============================================
           GALLERY
        ============================================= */

        gallery: [],


        /* =============================================
           LINKS
        ============================================= */

        links: [

            {

                label:
                    "Example Link",

                url:
                    "https://example.com"

            }

        ]

    }

];