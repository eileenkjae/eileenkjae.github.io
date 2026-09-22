/*
=========================================================
3D MODEL DATA
=========================================================

MODELLO TEMPORANEO DI TEST.

NON è un lavoro del portfolio.

Serve solamente per verificare che:
- <model-viewer> funzioni;
- mouse e zoom funzionino;
- la pagina dinamica funzioni.

Quando inseriremo i tuoi lavori reali,
questo modello verrà eliminato.
*/


const MODELS = [

    {

        id: "viewer-test",

        title: "3D Viewer Test",

        type: "Temporary Test",

        subtitle:
            "Temporary model used only to test the interactive 3D portfolio system.",


        /*
        -------------------------------------------------
        MODEL FILE

        Per ora utilizziamo un GLB remoto
        dagli esempi ufficiali di model-viewer.

        IN FUTURO:

        file:
            "assets/models/nome-modello/model.glb"
        -------------------------------------------------
        */

        file:
            "https://modelviewer.dev/shared-assets/models/Astronaut.glb",


        alt:
            "Temporary interactive 3D astronaut model used to test the portfolio viewer.",


        /*
        -------------------------------------------------
        COVER

        La homepage usa una normale immagine,
        NON il viewer interattivo.
        -------------------------------------------------
        */

        cover: "",


        /*
        -------------------------------------------------
        VIEWER OPTIONS
        -------------------------------------------------
        */

        autoRotate: true,

        poster: "",

        cameraOrbit: "",

        cameraTarget: "",

        fieldOfView: "",


        /*
        -------------------------------------------------
        INFORMATION
        -------------------------------------------------
        */

        software: [],

        year: "TEST",

        polycount: "",

        textures: "",

        status: "Temporary",


        /*
        -------------------------------------------------
        DESCRIPTION
        -------------------------------------------------
        */

        description:
            `This is temporary content used only to verify the interactive 3D viewer.

The final portfolio will use my own GLB files stored directly inside the GitHub repository.`,


        /*
        -------------------------------------------------
        BREAKDOWN

        In futuro:

        gallery: [

            {
                label: "Beauty",
                src: "assets/models/.../beauty.webp",
                alt: "..."
            },

            {
                label: "Wireframe",
                src: "assets/models/.../wireframe.webp",
                alt: "..."
            },

            {
                label: "UV",
                src: "assets/models/.../uv.webp",
                alt: "..."
            }

        ]
        -------------------------------------------------
        */

        gallery: [],


        links: [],


        /*
        -------------------------------------------------
        CREDIT DEL MODELLO TEMPORANEO

        Verrà eliminato insieme al test.
        -------------------------------------------------
        */

        credit:
            "Temporary test model: Astronaut by Poly, via the official model-viewer examples.",

        creditUrl:
            "https://modelviewer.dev/examples/stagingandcameras/"

    }

];