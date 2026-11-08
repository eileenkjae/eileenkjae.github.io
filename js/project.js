const page = document.getElementById("project-page");
const id = new URLSearchParams(location.search).get("id");
const project = PROJECTS.find(p => p.id === id);

const render = {

    features: s => `<div class="feat-grid">${s.items.map(f => `
        <figure class="feat">
            <div class="frame">${media(f.media)}</div>
            <figcaption><b>${esc(f.title)}</b> ${esc(f.text)}</figcaption>
        </figure>`).join("")}</div>`,

    compare: s => `<div class="compare">${s.items.map((c, i) => `
        <figure class="feat">
            <span class="label ${i ? "label--acid" : ""}">${esc(c.label)}</span>
            <div class="frame">${media(c.media)}</div>
            <figcaption>${esc(c.caption)}</figcaption>
        </figure>${i < s.items.length - 1 ? `<span class="compare-arrow" aria-hidden="true">→</span>` : ""}`).join("")}</div>
        ${s.extras ? `<p class="extras">${s.extras.map(x =>
            `<a href="${src(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)} ↗</a>`).join("")}</p>` : ""}`,

    gallery: s => `<div class="gallery">${s.items.map(g => `
        <figure class="feat gallery-item gallery-item--${esc(g.layout || "default")}">
            <div class="frame">${media(g)}</div>
            ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}
        </figure>`).join("")}</div>`,

    loadout: s => `<table class="table">
        ${s.rows.map(([name, effect, uses], i) => `<tr>
            <td class="mono">0${i + 1}</td><th>${esc(name)}</th><td>${esc(effect)}</td><td class="mono">${esc(uses)}</td>
        </tr>`).join("")}
    </table>`,

    changes: s => `<table class="table">
        ${s.rows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}
    </table>
    ${s.outcome ? `<p class="outcome">✔ ${esc(s.outcome)}</p>` : ""}`,

    flow: s => `<ol class="flow">${s.steps.map(([k, v]) => `
        <li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join("")}</ol>`,

    pillars: s => `<div class="pillars">${s.items.map(([a, b]) => `
        <div class="pillar"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("")}</div>`,

    code: s => `<details class="code">
        <summary>${esc(s.summary)}</summary>
        <pre><code>${s.lines.map((l, i) =>
            `<span class="ln">${String(i + 1).padStart(2, "0")}</span>${esc(l) || " "}`).join("\n")}</code></pre>
    </details>`
};

function section(s, n) {
    const title = s.type === "code" ? s.title : `${String(n).padStart(2, "0")} · ${s.title}`;
    return `<section class="win sec sec--${esc(s.type)}">
        ${winBar(title)}
        <div class="win-body">
            ${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ""}
            ${render[s.type](s)}
        </div>
    </section>`;
}

function build() {
    if (!project) {
        page.innerHTML = `<div class="win err">${winBar("Error", "×")}
            <div class="win-body dialog">
                <div class="dialog-icon" aria-hidden="true">✖</div>
                <div><p class="dialog-big">Project not found.</p></div>
                <div class="btn-row dialog-btns"><a class="btn btn--acid" href="index.html#Academy">OK</a></div>
            </div></div>`;
        return;
    }

    const p = project;
    const wip = p.kind === "prototype";
    document.title = `${p.title} - Eileen Boscaglia`;
    document.querySelector('meta[name="description"]').content = p.tagline;

    const meta = Object.entries(p.meta).map(([k, v]) =>
        `<span><small>${esc(k)}</small>${esc(v)}</span>`).join("");

    const links = p.links.map(l =>
        `<a class="btn btn--acid btn--big" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">▶ ${esc(l.label)} ↗</a>`).join("");

    let n = 0;
    const sections = p.sections.map(s => section(s, s.type === "code" ? n : ++n)).join("");

    page.innerHTML = `
        <a class="back" href="index.html#${wip ? "wip" : "Academy"}">← back to desktop</a>

        <header class="win head ${wip ? "head--wip" : ""}">
            ${winBar(`${p.file} - project file`)}
            ${wip ? `<div class="wip-tape" aria-hidden="true"></div>` : ""}
            <div class="win-body head-body">
                <div>
                    <p class="kicker">${esc(p.type)}</p>
                    <h1 class="glitch" data-text="${esc(p.title)}">${esc(p.title)}</h1>
                    <p class="tagline">${esc(p.tagline)}</p>
                    ${p.loop ? `<ol class="chips">${p.loop.map(s => `<li>${esc(s)}</li>`).join("")}</ol>` : ""}
                    ${p.wipNote ? `<p class="wip-note">⚠ ${esc(p.wipNote)}</p>` : ""}
                    ${links ? `<div class="btn-row">${links}</div>` : ""}
                </div>
                <img class="head-cover" src="${src(p.cover)}" alt="">
            </div>
            <div class="win-status meta">${meta}</div>
        </header>

        ${p.hero ? `<section class="win player">
            ${winBar(p.hero.label || "gameplay.mp4")}
            <div class="player-screen">${media({ ...p.hero, autoplay: p.hero.autoplay })}</div>
            ${p.hero.autoplay ? "" : `<div class="win-status"><span>▶ press play</span><span>${esc(p.title)}</span></div>`}
        </section>` : ""}

        ${sections}

        <section class="win sec">
            ${winBar("my_role.txt")}
            <div class="win-body">
                <ul class="tags">${p.role.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
                <p class="muted">${esc(p.role.note)}</p>
            </div>
        </section>

        <footer class="end">
            ${links}
            <a class="btn" href="index.html#${wip ? "wip" : "Academy"}">← back to desktop</a>
        </footer>`;
}

build();
