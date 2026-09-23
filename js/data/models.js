/*
=========================================================
3D WORK DATA
=========================================================

CURRENT DISPLAY

ONE CARD = ONE 3D WORK

For now the models are NOT visually divided
by project or category.

Every model has its own folder:

assets/models/MODEL-ID/

Inside:

model.glb
copertina.png

Optional future files:

beauty.png
wireframe.png
uv.png
textures.png


ANIMATIONS

playAnimation:
    true  = play animation automatically
    false = static model

animationName:
    name of the animation clip inside the GLB

Only use animationName when necessary.
*/


const MODELS = [

    /* =====================================================
       PG B-RUSH
    ===================================================== */

    {
        id: "pg-brush",

        title: "PG B-Rush",

        type: "Low-poly Character",

        subtitle:
            "Stylized low-poly character created for B-Rush.",


        /* FUTURE GROUPING */

        groupMode: "single",

        groupId: "",

        groupLabel: "",


        /* FILES */

        file:
            "assets/models/pg-brush/model.glb",

        cover:
            "assets/models/pg-brush/copertina.png",

        alt:
            "Interactive low-poly character model created for B-Rush.",


        /* VIEWER */

        autoRotate: true,

        playAnimation: false,

        animationName: "",

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /* INFORMATION */

        fromProject:
            "B-Rush",

        created:
            "August 2026",

        software: [
            "Maya",
            "Substance Painter"
        ],

        polycount:
            "2,782 tris",

        textures:
            "5 embedded PNG / 2048 × 2048",

        status: "",


        /* DESCRIPTION */

        description:
            `A stylized low-poly character created for B-Rush.

The model uses separate geometry and materials for different parts of the character while keeping a compact stylized visual direction.`,


        /* BREAKDOWN */

        gallery: [],


        /* LINKS / CREDITS */

        links: [],

        credit: "",

        creditUrl: ""
    },


    /* =====================================================
       PG COQUETTE
    ===================================================== */

    {
        id: "pg-coquette",

        title: "PG Coquette",

        type: "Low-poly Character",

        subtitle:
            "Low-poly protagonist model created for COQUETTE.",


        /* FUTURE GROUPING */

        groupMode: "single",

        groupId: "",

        groupLabel: "",


        /* FILES */

        file:
            "assets/models/pg-coquette/model.glb",

        cover:
            "assets/models/pg-coquette/copertina.png",

        alt:
            "Interactive low-poly protagonist model created for COQUETTE.",


        /* VIEWER */

        autoRotate: true,

        playAnimation: false,

        animationName: "",

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /* INFORMATION */

        fromProject:
            "COQUETTE",

        created:
            "February 2025",

        software: [],

        polycount:
            "2,828 tris",

        textures: "",

        status: "",


        /* DESCRIPTION */

        description:
            `The protagonist model created for COQUETTE.

The character was built as a low-poly game asset and designed around the stylized visual direction of the project.`,


        /* BREAKDOWN */

        gallery: [],


        /* LINKS / CREDITS */

        links: [],

        credit: "",

        creditUrl: ""
    },


    /* =====================================================
       ACCENDINO
    ===================================================== */

    {
        id: "accendino",

        title: "Accendino",

        type: "Low-poly Prop",

        subtitle:
            "Stylized lighter prop created for COQUETTE.",


        /* FUTURE GROUPING */

        groupMode: "single",

        groupId: "",

        groupLabel: "",


        /* FILES */

        file:
            "assets/models/accendino/model.glb",

        cover:
            "assets/models/accendino/copertina.png",

        alt:
            "Interactive low-poly lighter model created for COQUETTE.",


        /* VIEWER */

        autoRotate: true,

        playAnimation: false,

        animationName: "",

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /* INFORMATION */

        fromProject:
            "COQUETTE",

        created:
            "January 2025",

        software: [],

        polycount:
            "7,017 tris",

        textures: "",

        status: "",


        /* DESCRIPTION */

        description:
            `A stylized low-poly lighter created for COQUETTE.

The prop was produced as one of the original 3D assets used to support the game's visual identity.`,


        /* BREAKDOWN */

        gallery: [],


        /* LINKS / CREDITS */

        links: [],

        credit: "",

        creditUrl: ""
    },


    /* =====================================================
       SPAZZATURA
    ===================================================== */

    {
        id: "spazzatura",

        title: "Spazzatura",

        type: "Low-poly Prop Set",

        subtitle:
            "Stylized environmental prop set created for a game project in development.",


        /* FUTURE GROUPING */

        groupMode: "single",

        groupId: "",

        groupLabel: "",


        /* FILES */

        file:
            "assets/models/spazzatura/model.glb",

        cover:
            "assets/models/spazzatura/copertina.png",

        alt:
            "Interactive low-poly trash and street prop set.",


        /* VIEWER */

        autoRotate: true,

        playAnimation: false,

        animationName: "",

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /* INFORMATION */

        fromProject:
            "Project in Development",

        created:
            "September 2026",

        software: [],

        polycount:
            "5,210 tris",

        textures:
            "9 embedded PNG / 2048 × 2048",

        status: "",


        /* DESCRIPTION */

        description:
            `A small set of stylized low-poly environmental props created for a game project currently in development.

The set combines multiple street and trash-related assets designed to work together inside the same environment.`,


        /* BREAKDOWN */

        gallery: [],


        /* LINKS / CREDITS */

        links: [],

        credit: "",

        creditUrl: ""
    },


    /* =====================================================
       CHIOSCO
    ===================================================== */

    {
        id: "chiosco",

        title: "Chiosco",

        type: "Low-poly Environment Prop",

        subtitle:
            "Stylized low-poly kiosk model.",


        /* FUTURE GROUPING */

        groupMode: "single",

        groupId: "",

        groupLabel: "",


        /* FILES */

        file:
            "assets/models/chiosco/model.glb",

        cover:
            "assets/models/chiosco/copertina.png",

        alt:
            "Interactive low-poly kiosk model.",


        /* VIEWER */

        autoRotate: true,

        playAnimation: false,

        animationName: "",

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /* INFORMATION */

        fromProject: "",

        created:
            "September 2026",

        software: [],

        polycount: "",

        textures: "",

        status: "",


        /* DESCRIPTION */

        description:
            `A stylized low-poly kiosk model created in September 2026.`,


        /* BREAKDOWN */

        gallery: [],


        /* LINKS / CREDITS */

        links: [],

        credit: "",

        creditUrl: ""
    },


    /* =====================================================
       BRACCIO ROBOT
    ===================================================== */

    {
        id: "bracciorobot",

        title: "Braccio Robot",

        type: "Rigging Exercise",

        subtitle:
            "Academic rigging exercise.",


        /* FUTURE GROUPING */

        groupMode: "single",

        groupId: "",

        groupLabel: "",


        /* FILES */

        file:
            "assets/models/bracciorobot/model.glb",

        cover:
            "assets/models/bracciorobot/copertina.png",

        alt:
            "Animated robotic arm created as an academic rigging exercise.",


        /* VIEWER */

        autoRotate: false,

        /*
        This GLB contains one animation:

        Take 001
        */

        playAnimation: true,

        animationName:
            "Take 001",

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /* INFORMATION */

        fromProject: "",

        created:
            "January 2025",

        software: [],

        polycount: "",

        textures: "",

        status: "",


        /* DESCRIPTION */

        description:
            `A rigging exercise created for my academy using a robotic arm model.

The exercise focused on creating and testing the rig through an animated movement.`,


        /* BREAKDOWN */

        gallery: [],


        /* LINKS / CREDITS */

        links: [],

        credit: "",

        creditUrl: ""
    }

];