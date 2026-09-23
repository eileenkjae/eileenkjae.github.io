/* =========================================================
   PROJECT PAGE
   Sections are rendered only when their data exists.
========================================================= */

const projectPage = document.querySelector("#project-page");

const urlParameters = new URLSearchParams(window.location.search);
const projectId = urlParameters.get("id");

const currentProject =
    typeof PROJECTS !== "undefined"
        ? PROJECTS.find(project => project.id === projectId)
        : null;


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {
    if (value === undefined || value === null) {
        return "";
    }

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


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


function createMedia(media, extraClass = "") {
    if (!media || !media.src) {
        return `
            <div class="project-media-placeholder ${extraClass}">
                MEDIA / TO BE ADDED
            </div>
        `;
    }

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
                class="project-media ${extraClass}"
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

    return `
        <img
            class="project-media ${extraClass}"
            src="${escapeHTML(media.src)}"
            alt="${escapeHTML(
                media.alt ||
                (currentProject ? currentProject.title : "Project media")
            )}"
            loading="lazy"
        >
    `;
}


function createSimpleList(items) {
    if (!items || items.length === 0) {
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


function createMetaField(label, value) {
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
                .map(item => escapeHTML(item))
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


/* =========================================================
   GENERIC TEXT SECTION
========================================================= */

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


/* =========================================================
   VISION
========================================================= */

function createVisionSection(number, vision) {
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
                                            ${String(index + 1).padStart(2, "0")}
                                        </span>

                                        ${
                                            item.title
                                                ? `
                                                    <h3>
                                                        ${escapeHTML(item.title)}
                                                    </h3>
                                                `
                                                : ""
                                        }

                                        ${
                                            item.text
                                                ? `
                                                    <div class="vision-process-text">
                                                        ${createParagraphs(item.text)}
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
                        what I wanted this to be?//
                    </span>
                </header>

                ${
                    vision.text
                        ? `
                            <div class="project-text vision-text">
                                ${createParagraphs(vision.text)}
                            </div>
                        `
                        : ""
                }

                ${processHTML}
            </div>
        </section>
    `;
}


/* =========================================================
   GAMEPLAY
========================================================= */

function createGameplaySection(number, gameplay) {
    if (
        !gameplay
        ||
        (
            !gameplay.intro
            &&
            (
                !gameplay.features
                ||
                gameplay.features.length === 0
            )
            &&
            (
                !gameplay.loadout
                ||
                gameplay.loadout.length === 0
            )
        )
    ) {
        return "";
    }

    const featuresHTML =
        gameplay.features
        &&
        gameplay.features.length > 0
            ? `
                <div class="gameplay-features">
                    ${gameplay.features
                        .map(
                            (feature, index) => `
                                <article class="gameplay-feature">
                                    <div class="gameplay-feature-top">
                                        <span class="gameplay-feature-index">
                                            ${String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3>
                                            ${escapeHTML(
                                                feature.title ||
                                                "Gameplay"
                                            )}
                                        </h3>
                                    </div>

                                    ${
                                        feature.media
                                            ? `
                                                <div class="gameplay-feature-media">
                                                    ${createMedia(
                                                        feature.media,
                                                        "gameplay-media"
                                                    )}
                                                </div>
                                            `
                                            : ""
                                    }

                                    ${
                                        feature.text
                                            ? `
                                                <div class="gameplay-feature-text">
                                                    ${createParagraphs(feature.text)}
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
            `
            : "";

    const loadoutHTML =
        gameplay.loadout
        &&
        gameplay.loadout.length > 0
            ? `
                <div class="gameplay-loadout">
                    <div class="gameplay-loadout-heading">
                        <span>
                            LOADOUT /
                        </span>

                        <span>
                            04 CIGARETTES
                        </span>
                    </div>

                    <div class="gameplay-loadout-grid">
                        ${gameplay.loadout
                            .map(
                                (item, index) => `
                                    <article class="gameplay-loadout-item">
                                        <span class="gameplay-loadout-index">
                                            ${String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3>
                                            ${escapeHTML(item.name)}
                                        </h3>

                                        <p class="gameplay-loadout-effect">
                                            ${escapeHTML(item.effect)}
                                        </p>

                                        ${
                                            item.meta
                                                ? `
                                                    <p class="gameplay-loadout-meta">
                                                        ${escapeHTML(item.meta)}
                                                    </p>
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
        <section class="project-section gameplay-section">
            <div class="project-section-side">
                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>
            </div>

            <div class="project-section-content">
                <header class="project-section-header">
                    <h2>
                        Gameplay
                    </h2>

                    ${
                        gameplay.note
                            ? `
                                <span class="punk-note">
                                    ${escapeHTML(gameplay.note)}
                                </span>
                            `
                            : ""
                    }
                </header>

                ${
                    gameplay.intro
                        ? `
                            <div class="project-text gameplay-intro">
                                ${createParagraphs(gameplay.intro)}
                            </div>
                        `
                        : ""
                }

                ${featuresHTML}
                ${loadoutHTML}
            </div>
        </section>
    `;
}


/* =========================================================
   DRAWING SYSTEM
========================================================= */

function createDrawingSystemSection(
    number,
    drawingSystem
) {
    if (
        !drawingSystem
        ||
        (
            !drawingSystem.intro
            &&
            (
                !drawingSystem.steps
                ||
                drawingSystem.steps.length === 0
            )
            &&
            (
                !drawingSystem.code
                ||
                !drawingSystem.code.lines
                ||
                drawingSystem.code.lines.length === 0
            )
        )
    ) {
        return "";
    }

    const steps =
        Array.isArray(drawingSystem.steps)
            ? drawingSystem.steps
            : [];

    const notes =
        Array.isArray(drawingSystem.notes)
            ? drawingSystem.notes
            : [];

    const code =
        drawingSystem.code
            ? drawingSystem.code
            : null;

    const highlightedLines =
        code
        &&
        Array.isArray(code.highlightLines)
            ? code.highlightLines
            : [];

    const stepsHTML =
        steps.length > 0
            ? `
                <div class="drawing-flow">
                    ${steps
                        .map(
                            (step, index) => `
                                <article class="drawing-flow-step">
                                    <span class="drawing-flow-index">
                                        ${String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3>
                                        ${escapeHTML(step.label || "STEP")}
                                    </h3>

                                    ${
                                        step.text
                                            ? `
                                                <p>
                                                    ${escapeHTML(step.text)}
                                                </p>
                                            `
                                            : ""
                                    }
                                </article>

                                ${
                                    index < steps.length - 1
                                        ? `
                                            <span
                                                class="drawing-flow-arrow"
                                                aria-hidden="true"
                                            >
                                                →
                                            </span>
                                        `
                                        : ""
                                }
                            `
                        )
                        .join("")
                    }
                </div>
            `
            : "";

    const notesHTML =
        notes.length > 0
            ? `
                <div class="drawing-design-notes">
                    ${notes
                        .map(
                            (note, index) => `
                                <article class="drawing-design-note">
                                    <span class="drawing-design-note-index">
                                        ${String(index + 1).padStart(2, "0")}
                                    </span>

                                    ${
                                        note.title
                                            ? `
                                                <h3>
                                                    ${escapeHTML(note.title)}
                                                </h3>
                                            `
                                            : ""
                                    }

                                    ${
                                        note.text
                                            ? `
                                                <p>
                                                    ${escapeHTML(note.text)}
                                                </p>
                                            `
                                            : ""
                                    }
                                </article>
                            `
                        )
                        .join("")
                    }
                </div>
            `
            : "";

    let codeHTML = "";

    if (
        code
        &&
        Array.isArray(code.lines)
        &&
        code.lines.length > 0
    ) {
        const linesHTML =
            code.lines
                .map(
                    (line, index) => {
                        const lineNumber =
                            index + 1;

                        const highlighted =
                            highlightedLines.includes(lineNumber)
                                ? " is-highlighted"
                                : "";

                        const safeLine =
                            escapeHTML(line);

                        return `
                            <div class="code-line${highlighted}">
                                <span class="code-line-number">${String(lineNumber).padStart(2, "0")}</span>
                                <code>${safeLine || "&nbsp;"}</code>
                            </div>
                        `;
                    }
                )
                .join("");

        codeHTML = `
            <div class="drawing-code-window">
                <div class="drawing-code-toolbar">
                    <span>
                        ${escapeHTML(
                            code.label ||
                            "IMPLEMENTATION / C#"
                        )}
                    </span>

                    <span>
                        ${escapeHTML(
                            code.file ||
                            "project code"
                        )}
                    </span>

                    <span aria-hidden="true">
                        ×
                    </span>
                </div>

                <div class="drawing-code-body">
                    ${linesHTML}
                </div>
            </div>
        `;
    }

    return `
        <section class="project-section drawing-system-section">
            <div class="project-section-side">
                <span class="project-section-number">
                    ${escapeHTML(number)}
                </span>
            </div>

            <div class="project-section-content">
                <header class="project-section-header">
                    <h2>
                        Drawing System
                    </h2>

                    ${
                        drawingSystem.note
                            ? `
                                <span class="punk-note">
                                    ${escapeHTML(drawingSystem.note)}
                                </span>
                            `
                            : ""
                    }
                </header>

                ${
                    drawingSystem.intro
                        ? `
                            <div class="project-text drawing-system-intro">
                                ${createParagraphs(drawingSystem.intro)}
                            </div>
                        `
                        : ""
                }

                ${stepsHTML}

                <div class="drawing-system-main">
                    <div class="drawing-code-column">
                        ${codeHTML}

                        ${
                            drawingSystem.implementationNote
                                ? `
                                    <p class="drawing-implementation-note">
                                        ${escapeHTML(
                                            drawingSystem.implementationNote
                                        )}
                                    </p>
                                `
                                : ""
                        }
                    </div>

                    ${notesHTML}
                </div>
            </div>
        </section>
    `;
}


/* =========================================================
   CORE LOOP
========================================================= */

function createCoreLoopSection(number, items) {
    if (!items || items.length === 0) {
        return "";
    }

    const loopItems =
        items
            .map(
                (item, index) => {
                    const arrow =
                        index < items.length - 1
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


/* =========================================================
   BEFORE VS AFTER
========================================================= */

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
                            ${createParagraphs(side.description)}
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
                        do you see the vision? i clearly did
                        //
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


/* =========================================================
   MY WORK
========================================================= */

function createWorkSection(number, items) {
    if (!items || items.length === 0) {
        return "";
    }

    const workItems =
        items
            .map(
                item => {
                    const isObject =
                        typeof item === "object"
                        &&
                        item !== null;

                    const label =
                        isObject
                            ? item.label
                            : item;

                    const category =
                        isObject
                        &&
                        item.category
                            ? `work-${escapeHTML(item.category)}`
                            : "work-default";

                    return `
                        <span class="${category}">
                            ${escapeHTML(label)}
                        </span>
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
                        My Work
                    </h2>

                    <span class="punk-note">
                        what I actually did ///
                    </span>
                </header>

                <div class="project-work-list">
                    ${workItems}
                </div>
            </div>
        </section>
    `;
}


/* =========================================================
   GALLERY
========================================================= */

function createGallerySection(
    number,
    gallery
) {
    if (!gallery || gallery.length === 0) {
        return "";
    }

    const allowedLayouts = [
        "default",
        "wide",
        "portrait",
        "contain"
    ];

    const galleryHTML =
        gallery
            .map(
                item => {
                    const layout =
                        allowedLayouts.includes(item.layout)
                            ? item.layout
                            : "default";

                    const source =
                        String(item.src || "").toLowerCase();

                    const isGif =
                        source.endsWith(".gif");

                    const gifClass =
                        isGif
                            ? " gallery-item--gif"
                            : "";

                    return `
                        <figure class="gallery-item gallery-item--${layout}${gifClass}">
                            <div class="gallery-media-frame">
                                ${createMedia(
                                    item,
                                    "gallery-media"
                                )}
                            </div>

                            ${
                                item.caption
                                    ? `
                                        <figcaption>
                                            ${escapeHTML(item.caption)}
                                        </figcaption>
                                    `
                                    : ""
                            }
                        </figure>
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
                        Gallery
                    </h2>
                </header>

                <div class="project-gallery">
                    ${galleryHTML}
                </div>
            </div>
        </section>
    `;
}


/* =========================================================
   LINKS
========================================================= */

function createLinksSection(links) {
    if (!links || links.length === 0) {
        return "";
    }

    return `
        <section class="project-links-section">
            <p class="project-links-label">
                TRY IT NOW
            </p>

            <div class="project-links">
                ${links
                    .map(
                        link => `
                            <a
                                class="project-big-link"
                                href="${escapeHTML(link.url)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${escapeHTML(link.label)}

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


/* =========================================================
   ERROR PAGE
========================================================= */

function showProjectNotFound() {
    document.title =
        "Project not found — Eileen Portfolio";

    if (!projectPage) {
        return;
    }

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


/* =========================================================
   BUILD PAGE
========================================================= */

function buildProject() {
    if (!projectPage) {
        return;
    }

    if (!currentProject) {
        showProjectNotFound();
        return;
    }

    document.title =
        `${currentProject.title} — Eileen Portfolio`;

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
            String(sectionNumber).padStart(2, "0");

        const sectionHTML =
            builder(number);

        if (sectionHTML) {
            sections.push(sectionHTML);
            sectionNumber++;
        }
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


    /* GAMEPLAY */

    addSection(
        currentProject.gameplay
        &&
        (
            currentProject.gameplay.intro
            ||
            (
                currentProject.gameplay.features
                &&
                currentProject.gameplay.features.length
            )
            ||
            (
                currentProject.gameplay.loadout
                &&
                currentProject.gameplay.loadout.length
            )
        ),
        number =>
            createGameplaySection(
                number,
                currentProject.gameplay
            )
    );


    /* DRAWING SYSTEM */

    addSection(
        currentProject.drawingSystem
        &&
        (
            currentProject.drawingSystem.intro
            ||
            (
                currentProject.drawingSystem.steps
                &&
                currentProject.drawingSystem.steps.length
            )
            ||
            (
                currentProject.drawingSystem.code
                &&
                currentProject.drawingSystem.code.lines
                &&
                currentProject.drawingSystem.code.lines.length
            )
        ),
        number =>
            createDrawingSystemSection(
                number,
                currentProject.drawingSystem
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


    /* FINAL PAGE */

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
                                ${escapeHTML(currentProject.type)}
                            </p>
                        `
                        : ""
                }

                <h1>
                    ${escapeHTML(currentProject.title)}
                </h1>

                ${
                    currentProject.subtitle
                        ? `
                            <p class="project-subtitle">
                                ${escapeHTML(currentProject.subtitle)}
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