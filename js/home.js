const games = PROJECTS.filter(p => p.kind === "game");
const prototypes = PROJECTS.filter(p => p.kind === "prototype");

const metaLine = p =>
    [p.meta.Team, p.meta.Time, "Unity"].filter(Boolean).join(" · ");

document.getElementById("desk-icons").innerHTML =
    PROJECTS.map(p => `
        <a class="desk-icon" href="project.html?id=${esc(p.id)}">
            <img src="${src(p.cover)}" alt="">
            <span>${esc(p.file)}</span>
        </a>`).join("") + `
        <a class="desk-icon" href="#about">
            <span class="desk-glyph" aria-hidden="true">📄</span>
            <span>readme.txt</span>
        </a>`;

document.getElementById("games-grid").innerHTML = games.map((p, i) => `
    <a class="win card" href="project.html?id=${esc(p.id)}">
        ${winBar(p.file)}
        <div class="card-media">
            <img src="${src(p.cover)}" alt="${esc(p.title)} cover" loading="lazy">
            ${p.preview ? `<video src="${src(p.preview)}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ""}
            <span class="card-num">0${i + 1}</span>
        </div>
        <div class="card-info">
            <h3 class="glitch-hover">${esc(p.title)}</h3>
            <p>${esc(p.tagline)}</p>
        </div>
        <div class="win-status">
            <span>${esc(metaLine(p))}</span>
            <span>${p.links.length ? "▶ playable" : ""}</span>
        </div>
    </a>`).join("");

document.getElementById("proto-list").innerHTML = prototypes.map(p => `
    <a class="win card card--wip" href="project.html?id=${esc(p.id)}">
        ${winBar(p.file + " - under construction")}
        <div class="wip-tape" aria-hidden="true"></div>
        <div class="wip-body">
            <div class="card-media">
                <img src="${src(p.cover)}" alt="${esc(p.title)} cover" loading="lazy">
                ${p.preview ? `<video src="${src(p.preview)}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ""}
            </div>
            <div class="card-info">
                <p class="kicker">${esc(p.type)}</p>
                <h3 class="glitch-hover">${esc(p.title)}</h3>
                <p>${esc(p.tagline)}</p>
                ${p.loop ? `<ol class="chips">${p.loop.map(s => `<li>${esc(s)}</li>`).join("")}</ol>` : ""}
                <span class="btn btn--small">Open file →</span>
            </div>
        </div>
        <div class="win-status">
            <span>${esc(metaLine(p))}</span>
            <span>⚠ concept prototype</span>
        </div>
    </a>`).join("");

document.querySelectorAll(".card").forEach(card => {
    const video = card.querySelector("video");
    if (!video) return;
    card.addEventListener("mouseenter", () => {
        card.classList.add("is-playing");
        video.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("is-playing");
        video.pause();
    });
});
