function esc(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function src(path) {
    return esc(encodeURI(path));
}

function media(m, cls = "") {
    if (!m || !m.src) return "";

    if (m.type === "video") {
        const auto = m.autoplay !== false;
        return `<video class="media ${cls}" src="${src(m.src)}"
            ${m.poster ? `poster="${src(m.poster)}"` : ""}
            ${auto ? "autoplay loop" : "controls"} muted playsinline
            preload="${auto ? "metadata" : "none"}"
            ${m.alt ? `aria-label="${esc(m.alt)}"` : ""}></video>`;
    }

    const img = `<img class="media ${cls}" src="${src(m.src)}" alt="${esc(m.alt || "")}" loading="lazy">`;
    return m.zoom
        ? `<a href="${src(m.src)}" target="_blank" rel="noopener noreferrer" title="Open full size">${img}</a>`
        : img;
}

function winBar(title, btns = "_□×") {
    const icons = [...btns].map(b => `<i>${b}</i>`).join("");
    return `<div class="win-bar">
        <span class="win-title">${esc(title)}</span>
        <span class="win-btns" aria-hidden="true">${icons}</span>
    </div>`;
}

(function clock() {
    const el = document.getElementById("clock");
    if (!el) return;
    const tick = () => {
        el.textContent = new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    };
    tick();
    setInterval(tick, 20000);
})();
