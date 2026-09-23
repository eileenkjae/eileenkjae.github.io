/*
=========================================================
3D MODEL PAGE
=========================================================

Questo file:

1. legge l'ID del modello dall'URL;
2. cerca il modello dentro MODELS;
3. costruisce la pagina;
4. crea <model-viewer>;
5. supporta modelli statici e animati;
6. mostra le informazioni tecniche;
7. mostra il breakdown opzionale.

Esempio:

model.html?id=pg-brush
*/


const modelPage =
    document.querySelector("#model-page");


/* =====================================================
   GET MODEL ID FROM URL
===================================================== */

const urlParameters =
    new URLSearchParams(
        window.location.search
    );

const modelId =
    urlParameters.get("id");


/* =====================================================
   FIND MODEL
===================================================== */

const currentModel =
    typeof MODELS !== "undefined"
        ? MODELS.find(
            model =>
                model.id === modelId
        )
        : null;


/* =====================================================
   SAFE TEXT
===================================================== */

function escapeHTML(value) {

    if (
        value === undefined
        ||
        value === null
    ) {
        return "";
    }

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =====================================================
   TEXT → PARAGRAPHS
===================================================== */

function createParagraphs(text) {

    if (!text) {
        return "";
    }

    return String(text)
        .trim()
        .split(/\n\s*\n/)
        .map(
            paragraph => `
                <p>
                    ${escapeHTML(paragraph)}
                </p>
            `
        )
        .join("");
}


/* =====================================================
   INFO FIELD
===================================================== */

function createInfoField(
    label,
    value
) {

    if (
        value === undefined
        ||
        value === null
        ||
        value === ""
        ||
        (
            Array.isArray(value)
            &&
            value.length === 0
        )
    ) {
        return "";
    }


    const content =
        Array.isArray(value)
            ? value
                .map(
                    item =>
                        escapeHTML(item)
                )
                .join("<br>")
            : escapeHTML(value);


    return `
        <div class="model-info-item">

            <span class="model-info-label">
                ${escapeHTML(label)}
            </span>

            <p>
                ${content}
            </p>

        </div>
    `;
}


/* =====================================================
   INTERACTIVE VIEWER
===================================================== */

function createViewer(model) {

    if (!model.file) {

        return `
            <div class="model-viewer-placeholder">

                GLB / TO BE ADDED

            </div>
        `;
    }


    /*
    -----------------------------------------------------
    POSTER
    -----------------------------------------------------
    */

    const poster =
        model.poster
            ? `
                poster="${escapeHTML(
                    model.poster
                )}"
            `
            : "";


    /*
    -----------------------------------------------------
    AUTO ROTATE
    -----------------------------------------------------
    */

    const autoRotate =
        model.autoRotate === false
            ? ""
            : "auto-rotate";


    /*
    -----------------------------------------------------
    CAMERA
    -----------------------------------------------------
    */

    const cameraOrbit =
        model.cameraOrbit
            ? `
                camera-orbit="${escapeHTML(
                    model.cameraOrbit
                )}"
            `
            : "";


    const cameraTarget =
        model.cameraTarget
            ? `
                camera-target="${escapeHTML(
                    model.cameraTarget
                )}"
            `
            : "";


    const fieldOfView =
        model.fieldOfView
            ? `
                field-of-view="${escapeHTML(
                    model.fieldOfView
                )}"
            `
            : "";


    /*
    -----------------------------------------------------
    ANIMATION

    playAnimation: true
        → autoplay

    animationName:
        → chooses a specific animation clip
    -----------------------------------------------------
    */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const autoplay =
        model.playAnimation === true
        &&
        !prefersReducedMotion
            ? "autoplay"
            : "";


    const animationName =
        model.playAnimation === true
        &&
        model.animationName
            ? `
                animation-name="${escapeHTML(
                    model.animationName
                )}"
            `
            : "";


    /*
    -----------------------------------------------------
    MODEL VIEWER
    -----------------------------------------------------
    */

    return `
        <model-viewer

            class="portfolio-model-viewer"

            src="${escapeHTML(
                model.file
            )}"

            alt="${escapeHTML(
                model.alt ||
                model.title
            )}"

            ${poster}

            ${autoRotate}

            ${cameraOrbit}

            ${cameraTarget}

            ${fieldOfView}

            ${animationName}

            ${autoplay}

            camera-controls

            touch-action="pan-y"

            shadow-intensity="0.8"

            exposure="1"

            loading="eager"

        >

        </model-viewer>
    `;
}


/* =====================================================
   BREAKDOWN GALLERY
===================================================== */

function createBreakdown(
    items,
    sectionNumber
) {

    if (
        !items
        ||
        items.length === 0
    ) {
        return "";
    }


    const gallery =
        items
            .map(
                item => {

                    if (!item.src) {
                        return "";
                    }


                    return `
                        <figure class="model-breakdown-item">

                            <div class="model-breakdown-media">

                                <img
                                    src="${escapeHTML(
                                        item.src
                                    )}"

                                    alt="${escapeHTML(
                                        item.alt ||
                                        item.label ||
                                        currentModel.title
                                    )}"

                                    loading="lazy"
                                >

                            </div>


                            ${
                                item.label
                                    ? `
                                        <figcaption>

                                            <span>
                                                ${escapeHTML(
                                                    item.label
                                                )}
                                            </span>

                                        </figcaption>
                                    `
                                    : ""
                            }

                        </figure>
                    `;
                }
            )
            .join("");


    if (!gallery.trim()) {
        return "";
    }


    return `
        <section class="model-section">

            <div class="model-section-number">
                ${String(sectionNumber).padStart(2, "0")} /
            </div>


            <div class="model-section-content">

                <header class="model-section-header">

                    <h2>
                        Breakdown
                    </h2>

                    <span class="punk-note">
                        look closer ///
                    </span>

                </header>


                <div class="model-breakdown-grid">

                    ${gallery}

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   LINKS
===================================================== */

function createModelLinks(
    links
) {

    if (
        !links
        ||
        links.length === 0
    ) {
        return "";
    }


    return `
        <section class="project-links-section">

            <p class="project-links-label">
                MORE /
            </p>


            <div class="project-links">

                ${links
                    .map(
                        link => `
                            <a
                                class="project-big-link"

                                href="${escapeHTML(
                                    link.url
                                )}"

                                target="_blank"

                                rel="noopener noreferrer"
                            >

                                ${escapeHTML(
                                    link.label
                                )}

                                <span>
                                    ↗
                                </span>

                            </a>
                        `
                    )
                    .join("")
                }

            </div>

        </section>
    `;
}


/* =====================================================
   ERROR
===================================================== */

function showModelNotFound() {

    document.title =
        "Model not found — Eileen Portfolio";


    modelPage.innerHTML = `

        <section class="project-error">

            <span class="project-error-mark">
                ×
            </span>

            <p>
                404 / 3D MODEL
            </p>

            <h1>
                Model
                <br>
                not found.
            </h1>

            <a
                href="index.html#three-d"
                class="rough-button"
            >
                ← Back to 3D work
            </a>

        </section>
    `;
}


/* =====================================================
   BUILD MODEL PAGE
===================================================== */

function buildModelPage() {

    if (
        !modelPage
        ||
        !currentModel
    ) {

        showModelNotFound();

        return;
    }


    document.title =
        `${currentModel.title} — Eileen Portfolio`;


    /* -----------------------------------------
       INFO

       3D equivalent of the project metadata.

       Empty values are automatically hidden.
    ----------------------------------------- */

    const infoHTML = `

        ${createInfoField(
            "Asset Type",
            currentModel.type
        )}

        ${createInfoField(
            "From Project",
            currentModel.fromProject
        )}

        ${createInfoField(
            "Created",
            currentModel.created
        )}

        ${createInfoField(
            "Software",
            currentModel.software
        )}

        ${createInfoField(
            "Polycount",
            currentModel.polycount
        )}

        ${createInfoField(
            "Textures",
            currentModel.textures
        )}

        ${createInfoField(
            "Status",
            currentModel.status
        )}

    `;


    /* -----------------------------------------
       SECTION NUMBERS
    ----------------------------------------- */

    let nextSectionNumber = 1;

    let descriptionHTML = "";


    if (currentModel.description) {

        descriptionHTML = `

            <section class="model-section">

                <div class="model-section-number">
                    ${String(nextSectionNumber).padStart(2, "0")} /
                </div>


                <div class="model-section-content">

                    <header class="model-section-header">

                        <h2>
                            About
                        </h2>

                        <span class="punk-note">
                            model notes →
                        </span>

                    </header>


                    <div class="model-description">

                        ${createParagraphs(
                            currentModel.description
                        )}

                    </div>

                </div>

            </section>
        `;


        nextSectionNumber += 1;
    }


    const breakdownHTML =
        createBreakdown(
            currentModel.gallery,
            nextSectionNumber
        );


    /* -----------------------------------------
       VIEWER INSTRUCTION
    ----------------------------------------- */

    const viewerInstruction =
        currentModel.playAnimation === true
            ? "ANIMATION / DRAG / ROTATE / ZOOM"
            : "DRAG / ROTATE / ZOOM";


    /* -----------------------------------------
       PAGE
    ----------------------------------------- */

    modelPage.innerHTML = `

        <!-- =====================================
             HERO
        ====================================== -->

        <article class="model-hero">

            <div class="model-back-row">

                <a
                    href="index.html#three-d"
                    class="project-back"
                >
                    ← ALL 3D WORK
                </a>


                <span class="model-stamp">
                    3D / MODEL FILE
                </span>

            </div>


            <header class="model-title-area">

                ${
                    currentModel.type
                        ? `
                            <p class="project-kicker">
                                ${escapeHTML(
                                    currentModel.type
                                )}
                            </p>
                        `
                        : ""
                }


                <h1>
                    ${escapeHTML(
                        currentModel.title
                    )}
                </h1>


                ${
                    currentModel.subtitle
                        ? `
                            <p class="project-subtitle">
                                ${escapeHTML(
                                    currentModel.subtitle
                                )}
                            </p>
                        `
                        : ""
                }


                <span
                    class="model-title-mark"
                    aria-hidden="true"
                >
                    ×
                </span>

            </header>


            <!-- =================================
                 VIEWER
            ================================== -->

            <div class="model-viewer-frame">

                <div class="model-viewer-top">

                    <span>
                        INTERACTIVE MODEL
                    </span>

                    <span>
                        ${viewerInstruction}
                    </span>

                </div>


                <div class="model-viewer-wrapper">

                    ${createViewer(
                        currentModel
                    )}

                </div>


                <span
                    class="viewer-corner viewer-corner-one"
                    aria-hidden="true"
                >
                    +
                </span>

                <span
                    class="viewer-corner viewer-corner-two"
                    aria-hidden="true"
                >
                    +
                </span>

            </div>


            <!-- =================================
                 MODEL INFORMATION
            ================================== -->

            ${
                infoHTML.trim()
                    ? `
                        <div class="model-info-grid">

                            ${infoHTML}

                        </div>
                    `
                    : ""
            }


            <!-- =================================
                 CREDIT
            ================================== -->

            ${
                currentModel.credit
                    ? `
                        <div class="model-credit">

                            <span>
                                CREDIT /
                            </span>

                            ${
                                currentModel.creditUrl
                                    ? `
                                        <a
                                            href="${escapeHTML(
                                                currentModel.creditUrl
                                            )}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            ${escapeHTML(
                                                currentModel.credit
                                            )}
                                            ↗
                                        </a>
                                    `
                                    : `
                                        <p>
                                            ${escapeHTML(
                                                currentModel.credit
                                            )}
                                        </p>
                                    `
                            }

                        </div>
                    `
                    : ""
            }

        </article>


        <!-- =====================================
             ABOUT
        ====================================== -->

        ${descriptionHTML}


        <!-- =====================================
             BREAKDOWN
        ====================================== -->

        ${breakdownHTML}


        <!-- =====================================
             LINKS
        ====================================== -->

        ${createModelLinks(
            currentModel.links
        )}


        <!-- =====================================
             END
        ====================================== -->

        <section class="project-end">

            <span class="punk-note">
                end of model ///
            </span>

            <a href="index.html#three-d">
                ← Back to 3D work
            </a>

        </section>
    `;
}


buildModelPage();


/* =====================================================
   REDUCED MOTION
===================================================== */

const reducedMotionPreference =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


function updateModelMotionPreference() {

    const viewer =
        document.querySelector(
            ".portfolio-model-viewer"
        );


    if (!viewer) {
        return;
    }


    if (
        reducedMotionPreference.matches
    ) {

        viewer.removeAttribute(
            "auto-rotate"
        );

        viewer.removeAttribute(
            "autoplay"
        );

        /*
        If the animation has already started,
        pause it when the API is available.
        */

        if (
            typeof viewer.pause === "function"
        ) {

            viewer.pause();
        }

        return;
    }


    /*
    If reduced motion is disabled again,
    restart the animation only for models
    configured as animated.
    */

    if (
        currentModel
        &&
        currentModel.playAnimation === true
        &&
        typeof viewer.play === "function"
    ) {

        viewer.play();
    }
}


updateModelMotionPreference();


reducedMotionPreference.addEventListener(
    "change",
    updateModelMotionPreference
);