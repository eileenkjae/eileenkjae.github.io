/*
=========================================================
PROJECT PAGE
=========================================================

STRUTTURA:

HERO + INFO
OVERVIEW
VISION
    └── PROCESS / FROM IDEA TO PLAYABLE
CORE LOOP
BEFORE VS AFTER
MY WORK
GALLERY
LINKS

Le sezioni sono opzionali.
Se un dato non esiste, la relativa sezione non appare.
*/


const projectPage =
    document.querySelector("#project-page");


/* =====================================================
   GET PROJECT ID FROM URL
===================================================== */

const urlParameters =
    new URLSearchParams(
        window.location.search
    );

const projectId =
    urlParameters.get("id");


/* =====================================================
   FIND PROJECT
===================================================== */

const currentProject =
    typeof PROJECTS !== "undefined"
        ? PROJECTS.find(
            project =>
                project.id === projectId
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
   MEDIA
===================================================== */

function createMedia(
    media,
    extraClass = ""
) {

    if (
        !media
        ||
        !media.src
    ) {

        return `
            <div
                class="
                    project-media-placeholder
                    ${extraClass}
                "
            >
                MEDIA / TO BE ADDED
            </div>
        `;
    }


    /* VIDEO */

    if (media.type === "video") {

        const poster =
            media.poster
                ? `poster="${escapeHTML(media.poster)}"`
                : "";

        const autoplay =
            media.autoplay
                ? "autoplay"
                : "";

        const loop =
            media.loop
                ? "loop"
                : "";

        const muted =
            media.muted !== false
                ? "muted"
                : "";

        const controls =
            media.controls === false
                ? ""
                : "controls";


        return `
            <video
                class="
                    project-media
                    ${extraClass}
                "

                src="${escapeHTML(media.src)}"

                ${poster}
                ${controls}
                ${autoplay}
                ${loop}
                ${muted}

                playsinline
                preload="metadata"
            >
                Your browser does not support HTML video.
            </video>
        `;
    }


    /* IMAGE / GIF */

    return `
        <img
            class="
                project-media
                ${extraClass}
            "

            src="${escapeHTML(media.src)}"

            alt="${escapeHTML(
                media.alt ||
                currentProject.title
            )}"

            loading="lazy"
        >
    `;
}


/* =====================================================
   SIMPLE LIST
===================================================== */

function createSimpleList(items) {

    if (
        !items
        ||
        items.length === 0
    ) {
        return "";
    }

    return `
        <ul class="project-simple-list">

            ${items
                .map(
                    item => `
                        <li>
                            ${escapeHTML(item)}
                        </li>
                    `
                )
                .join("")
            }

        </ul>
    `;
}


/* =====================================================
   META FIELD
===================================================== */

function createMetaField(
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
        <div class="project-meta-item">

            <span class="project-meta-label">
                ${escapeHTML(label)}
            </span>

            <p>
                ${content}
            </p>

        </div>
    `;
}


/* =====================================================
   GENERIC TEXT SECTION
===================================================== */

function createTextSection(
    number,
    title,
    text,
    note = ""
) {

    if (!text) {
        return "";
    }

    return `
        <section class="project-section">

            <div class="project-section-side">

                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>

            </div>


            <div class="project-section-content">

                <header class="project-section-header">

                    <h2>
                        ${escapeHTML(title)}
                    </h2>

                    ${
                        note
                            ? `
                                <span class="punk-note">
                                    ${escapeHTML(note)}
                                </span>
                            `
                            : ""
                    }

                </header>


                <div class="project-text">

                    ${createParagraphs(text)}

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   VISION

   Contiene:
   - testo principale
   - eventuale PROCESS come sottosezione
===================================================== */

function createVisionSection(
    number,
    vision
) {

    if (
        !vision
        ||
        (
            !vision.text
            &&
            (
                !vision.process
                ||
                vision.process.length === 0
            )
        )
    ) {
        return "";
    }


    const processHTML =
        vision.process
        &&
        vision.process.length > 0

            ? `
                <div class="vision-process">

                    <div class="vision-process-heading">

                        <span>
                            FROM IDEA
                            <br>
                            TO PLAYABLE
                        </span>

                        <span
                            class="vision-process-arrow"
                            aria-hidden="true"
                        >
                            ↓
                        </span>

                    </div>


                    <div class="vision-process-grid">

                        ${vision.process
                            .map(
                                (item, index) => `
                                    <article class="vision-process-item">

                                        <span class="vision-process-index">
                                            ${String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>


                                        ${
                                            item.title
                                                ? `
                                                    <h3>
                                                        ${escapeHTML(
                                                            item.title
                                                        )}
                                                    </h3>
                                                `
                                                : ""
                                        }


                                        ${
                                            item.text
                                                ? `
                                                    <div class="vision-process-text">

                                                        ${createParagraphs(
                                                            item.text
                                                        )}

                                                    </div>
                                                `
                                                : ""
                                        }

                                    </article>
                                `
                            )
                            .join("")
                        }

                    </div>

                </div>
            `

            : "";


    return `
        <section class="project-section vision-section">

            <div class="project-section-side">

                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>

            </div>


            <div class="project-section-content">

                <header class="project-section-header">

                    <h2>
                        Vision
                    </h2>

                    <span class="punk-note">
                        what did I want this to be?
                    </span>

                </header>


                ${
                    vision.text
                        ? `
                            <div class="project-text vision-text">

                                ${createParagraphs(
                                    vision.text
                                )}

                            </div>
                        `
                        : ""
                }


                ${processHTML}

            </div>

        </section>
    `;
}


/* =====================================================
   CORE LOOP
===================================================== */

function createCoreLoopSection(
    number,
    items
) {

    if (
        !items
        ||
        items.length === 0
    ) {
        return "";
    }


    const loopItems =
        items
            .map(
                (item, index) => {

                    const arrow =
                        index <
                        items.length - 1

                            ? `
                                <span
                                    class="loop-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            `

                            : "";


                    return `
                        <div class="loop-step">

                            <span>
                                ${escapeHTML(item)}
                            </span>

                            ${arrow}

                        </div>
                    `;
                }
            )
            .join("");


    return `
        <section class="project-section">

            <div class="project-section-side">

                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>

            </div>


            <div class="project-section-content">

                <header class="project-section-header">

                    <h2>
                        Core Loop
                    </h2>

                </header>


                <div class="core-loop">

                    ${loopItems}

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   BEFORE VS AFTER
===================================================== */

function createComparisonSide(
    side,
    defaultLabel
) {

    if (!side) {
        return "";
    }


    return `
        <article class="comparison-side">

            <div class="comparison-label-row">

                <span class="comparison-label">
                    ${escapeHTML(
                        side.label ||
                        defaultLabel
                    )}
                </span>

            </div>


            <div class="comparison-media">

                ${createMedia(
                    side.media,
                    "comparison-image"
                )}

            </div>


            ${
                side.description
                    ? `
                        <div class="comparison-description">

                            ${createParagraphs(
                                side.description
                            )}

                        </div>
                    `
                    : ""
            }

        </article>
    `;
}


function createBeforeAfterSection(
    number,
    comparison
) {

    if (
        !comparison
        ||
        (
            !comparison.before
            &&
            !comparison.after
        )
    ) {
        return "";
    }


    return `
        <section class="project-section comparison-section">

            <div class="project-section-side">

                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>

            </div>


            <div class="project-section-content">

                <header class="project-section-header">

                    <h2>
                        Before
                        <br>
                        vs After
                    </h2>

                    <span class="punk-note">
                        same idea / different state
                    </span>

                </header>


                <div class="comparison-grid">

                    ${createComparisonSide(
                        comparison.before,
                        "Before"
                    )}

                    ${createComparisonSide(
                        comparison.after,
                        "After"
                    )}

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   MY WORK
===================================================== */

function createWorkSection(
    number,
    items
) {

    if (
        !items
        ||
        items.length === 0
    ) {
        return "";
    }


    return `
        <section class="project-section">

            <div class="project-section-side">

                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>

            </div>


            <div class="project-section-content">

                <header class="project-section-header">

                    <h2>
                        My Work
                    </h2>

                </header>


                <div class="project-work-list">

                    ${items
                        .map(
                            item => `
                                <span>
                                    ${escapeHTML(item)}
                                </span>
                            `
                        )
                        .join("")
                    }

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   GALLERY
===================================================== */

function createGallerySection(
    number,
    gallery
) {

    if (
        !gallery
        ||
        gallery.length === 0
    ) {
        return "";
    }


    return `
        <section class="project-section">

            <div class="project-section-side">

                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>

            </div>


            <div class="project-section-content">

                <header class="project-section-header">

                    <h2>
                        Gallery
                    </h2>

                </header>


                <div class="project-gallery">

                    ${gallery
                        .map(
                            item => `
                                <figure class="gallery-item">

                                    ${createMedia(
                                        item,
                                        "gallery-media"
                                    )}

                                    ${
                                        item.caption
                                            ? `
                                                <figcaption>
                                                    ${escapeHTML(
                                                        item.caption
                                                    )}
                                                </figcaption>
                                            `
                                            : ""
                                    }

                                </figure>
                            `
                        )
                        .join("")
                    }

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   LINKS
===================================================== */

function createLinksSection(links) {

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
                PLAY / WATCH / MORE
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
   ERROR PAGE
===================================================== */

function showProjectNotFound() {

    document.title =
        "Project not found — Eileen Portfolio";


    projectPage.innerHTML = `

        <section class="project-error">

            <span class="project-error-mark">
                ×
            </span>

            <p>
                404 / PROJECT
            </p>

            <h1>
                Project
                <br>
                not found.
            </h1>

            <a
                href="index.html#projects"
                class="rough-button"
            >
                ← Back to projects
            </a>

        </section>
    `;
}


/* =====================================================
   BUILD PAGE
===================================================== */

function buildProject() {

    if (
        !projectPage
        ||
        !currentProject
    ) {

        showProjectNotFound();

        return;
    }


    document.title =
        `${currentProject.title} — Eileen Portfolio`;


    /* HERO MEDIA */

    const heroMedia =
        currentProject.hero

            ? createMedia(
                currentProject.hero,
                "project-hero-media"
            )

            : `
                <div
                    class="
                        project-media-placeholder
                        project-hero-media
                    "
                >
                    HERO MEDIA / TO BE ADDED
                </div>
            `;


    /* META */

    const metaHTML = `

        ${createMetaField(
            "Role",
            currentProject.role
        )}

        ${createMetaField(
            "Engine",
            currentProject.engine
        )}

        ${createMetaField(
            "Year",
            currentProject.year
        )}

        ${createMetaField(
            "Duration",
            currentProject.duration
        )}

        ${createMetaField(
            "Team",
            currentProject.team
        )}

        ${createMetaField(
            "Status",
            currentProject.status
        )}

    `;


    /* OPTIONAL SECTIONS */

    let sectionNumber = 1;

    const sections = [];


    function addSection(
        condition,
        builder
    ) {

        if (!condition) {
            return;
        }

        const number =
            String(
                sectionNumber
            ).padStart(
                2,
                "0"
            );

        sections.push(
            builder(number)
        );

        sectionNumber++;
    }


    /* OVERVIEW */

    addSection(
        currentProject.overview,

        number =>
            createTextSection(
                number,
                "Overview",
                currentProject.overview
            )
    );


    /* VISION */

    addSection(
        currentProject.vision
        &&
        (
            currentProject.vision.text
            ||
            (
                currentProject.vision.process
                &&
                currentProject.vision.process.length
            )
        ),

        number =>
            createVisionSection(
                number,
                currentProject.vision
            )
    );


    /* CORE LOOP */

    addSection(
        currentProject.coreLoop
        &&
        currentProject.coreLoop.length,

        number =>
            createCoreLoopSection(
                number,
                currentProject.coreLoop
            )
    );


    /* BEFORE VS AFTER */

    addSection(
        currentProject.beforeAfter
        &&
        (
            currentProject.beforeAfter.before
            ||
            currentProject.beforeAfter.after
        ),

        number =>
            createBeforeAfterSection(
                number,
                currentProject.beforeAfter
            )
    );


    /* MY WORK */

    addSection(
        currentProject.myWork
        &&
        currentProject.myWork.length,

        number =>
            createWorkSection(
                number,
                currentProject.myWork
            )
    );


    /* GALLERY */

    addSection(
        currentProject.gallery
        &&
        currentProject.gallery.length,

        number =>
            createGallerySection(
                number,
                currentProject.gallery
            )
    );


    /* BUILD */

    projectPage.innerHTML = `

        <article class="project-hero">

            <div class="project-back-row">

                <a
                    href="index.html#projects"
                    class="project-back"
                >
                    ← ALL PROJECTS
                </a>


                <span class="project-stamp">
                    PROJECT FILE
                </span>

            </div>


            <header class="project-title-area">

                ${
                    currentProject.type
                        ? `
                            <p class="project-kicker">
                                ${escapeHTML(
                                    currentProject.type
                                )}
                            </p>
                        `
                        : ""
                }


                <h1>
                    ${escapeHTML(
                        currentProject.title
                    )}
                </h1>


                ${
                    currentProject.subtitle
                        ? `
                            <p class="project-subtitle">
                                ${escapeHTML(
                                    currentProject.subtitle
                                )}
                            </p>
                        `
                        : ""
                }


                <span
                    class="project-title-mark"
                    aria-hidden="true"
                >
                    /
                </span>

            </header>


            <div class="project-hero-visual">

                ${heroMedia}

                <span class="project-media-label">
                    GAMEPLAY / VISUAL
                </span>

            </div>


            ${
                metaHTML.trim()
                    ? `
                        <div class="project-meta">

                            ${metaHTML}

                        </div>
                    `
                    : ""
            }


            ${
                currentProject.focus
                &&
                currentProject.focus.length

                    ? `
                        <div class="project-focus">

                            <span class="project-focus-title">
                                FOCUS /
                            </span>

                            ${createSimpleList(
                                currentProject.focus
                            )}

                        </div>
                    `

                    : ""
            }

        </article>


        <div class="project-content">

            ${sections.join("")}

        </div>


        ${createLinksSection(
            currentProject.links
        )}


        <section class="project-end">

            <span class="punk-note">
                end of file ///
            </span>

            <a href="index.html#projects">
                ← Back to projects
            </a>

        </section>
    `;
}


buildProject();