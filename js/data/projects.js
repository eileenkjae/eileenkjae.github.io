/*
=========================================================
PROJECT DATA
=========================================================

Qui vengono definiti tutti i progetti reali
mostrati nel portfolio.

I testi narrativi di COQUETTE sono volutamente
ancora vuoti: verranno scritti dall'autrice.
*/


const PROJECTS = [

    {

        /* =============================================
           BASIC INFORMATION
        ============================================= */

        id: "coquette",

        title: "COQUETTE",

        type: "Game Design / Gameplay Prototype",

        subtitle: "",


        /* =============================================
           HOMEPAGE COVER

           La homepage vuole un'immagine statica.
        ============================================= */

        cover:
            "assets/projects/coquette/copertina.png",


        /* =============================================
           HERO

           Video principale della pagina progetto.
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

        role: [
            "Game Design",
            "Gameplay Design",
            "Unity Implementation"
        ],

        engine: "Unity",

        year: "",

        duration: "",

        team: "Solo Project",

        status: "Prototype",


        /*
        Le aree principali verranno definite
        meglio quando completeremo i testi.
        */

        focus: [],


        /* =============================================
           OVERVIEW

           Verrà scritto da te.
        ============================================= */

        overview: "",


        /* =============================================
           VISION

           Verrà scritto da te.

           process sarà una breve sottosezione
           "From Idea to Playable".
        ============================================= */

        vision: {

            text: "",

            process: []

        },


        /* =============================================
           CORE LOOP

           Decideremo se tenerlo dopo aver visto
           la pagina completa.
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

                    type: "image",

                    src:
                        "assets/projects/coquette/early.png",

                    alt:
                        "Early development photo of COQUETTE running in Unity."

                },

                description: ""

            },


            after: {

                label:
                    "Final Prototype",

                media: {

                    type: "image",

                    src:
                        "assets/projects/coquette/level-view.png",

                    alt:
                        "COQUETTE final prototype environment."

                },

                description: ""

            }

        },


        /* =============================================
           MY WORK
        ============================================= */

        myWork: [

            "Game Design",

            "Gameplay Design",

            "Unity Implementation",

            "Level / Scene Design",

            "UI Design",

            "Low-poly 3D"

        ],


        /* =============================================
           GALLERY

           Per ora soltanto materiale già pronto.

           Il menu verrà aggiunto dopo aver convertito
           la GIF in un formato più leggero.
        ============================================= */

        gallery: [

             {

        type: "image",

        src:
            "assets/projects/coquette/menu.png",

        alt:
            "COQUETTE main menu and UI design.",

        caption:
            "Main Menu / UI"

    },

    {

        type: "video",

        src:
            "assets/projects/coquette/weapon-wheel.mp4",

        autoplay: true,

        loop: true,

        muted: true,

        controls: false,

        caption:
            "Weapon Wheel"

    },


    {

        type: "video",

        src:
            "assets/projects/coquette/knife.mp4",

        autoplay: true,

        loop: true,

        muted: true,

        controls: false,

        caption:
            "Knife"

    },




    {

        type: "image",

        src:
            "assets/projects/coquette/final-encounter.png",

        alt:
            "Final encounter in COQUETTE.",

        caption:
            "Final Encounter"

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