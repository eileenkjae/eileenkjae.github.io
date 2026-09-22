/*
=========================================================
HOME PAGE
=========================================================

Questo file:

1. legge PROJECTS;
2. crea automaticamente le card dei progetti;
3. legge MODELS;
4. crea automaticamente le card dei modelli 3D.

Non bisogna creare manualmente le card in index.html.
*/


/* =====================================================
   PROJECTS
===================================================== */

const projectsGrid =
    document.querySelector("#projects-grid");


if (projectsGrid) {

    if (
        typeof PROJECTS === "undefined"
        ||
        PROJECTS.length === 0
    ) {

        projectsGrid.innerHTML = `
            <div class="empty-state">
                Projects will appear here.
            </div>
        `;

    } else {

        PROJECTS.forEach(
            (project, index) => {

                const card =
                    document.createElement("a");

                card.className =
                    "work-card";

                card.href =
                    `project.html?id=${project.id}`;


                /* -----------------------------------------
                   COVER
                ----------------------------------------- */

                let mediaHTML;

                if (project.cover) {

                    mediaHTML = `
                        <img
                            src="${project.cover}"
                            alt="${project.title}"
                            loading="lazy"
                        >
                    `;

                } else {

                    mediaHTML = `
                        <div class="work-card-placeholder">
                            No cover yet
                        </div>
                    `;

                }


                /* -----------------------------------------
                   CARD CONTENT
                ----------------------------------------- */

                card.innerHTML = `

                    <div class="work-card-media">

                        <span class="work-card-index">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        ${mediaHTML}

                    </div>


                    <div class="work-card-info">

                        <div>

                            <h3 class="work-card-title">
                                ${project.title}
                            </h3>

                            <p class="work-card-type">
                                ${project.type || ""}
                            </p>

                        </div>

                        <span
                            class="work-card-arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>

                    </div>
                `;


                projectsGrid.appendChild(card);

            }
        );

    }

}


/* =====================================================
   3D MODELS
===================================================== */

const modelsGrid =
    document.querySelector("#models-grid");


if (modelsGrid) {

    if (
        typeof MODELS === "undefined"
        ||
        MODELS.length === 0
    ) {

        modelsGrid.innerHTML = `
            <div class="empty-state">
                3D models will appear here.
            </div>
        `;

    } else {

        MODELS.forEach(
            (model, index) => {

                const card =
                    document.createElement("a");

                card.className =
                    "work-card";

                card.href =
                    `model.html?id=${model.id}`;


                /* -----------------------------------------
                   COVER
                ----------------------------------------- */

                let mediaHTML;

                if (model.cover) {

                    mediaHTML = `
                        <img
                            src="${model.cover}"
                            alt="${model.title}"
                            loading="lazy"
                        >
                    `;

                } else {

                    mediaHTML = `
                        <div class="work-card-placeholder">
                            No cover yet
                        </div>
                    `;

                }


                /* -----------------------------------------
                   CARD CONTENT
                ----------------------------------------- */

                card.innerHTML = `

                    <div class="work-card-media">

                        <span class="work-card-index">
                            3D-${String(index + 1).padStart(2, "0")}
                        </span>

                        ${mediaHTML}

                    </div>


                    <div class="work-card-info">

                        <div>

                            <h3 class="work-card-title">
                                ${model.title}
                            </h3>

                            <p class="work-card-type">
                                ${model.type || "3D Model"}
                            </p>

                        </div>

                        <span
                            class="work-card-arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>

                    </div>
                `;


                modelsGrid.appendChild(card);

            }
        );

    }

}