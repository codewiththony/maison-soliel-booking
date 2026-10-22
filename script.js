const toggle = document.querySelector(".side-bar-header button");
const sidebar = document.querySelector(".side-bar");
const icon = toggle.querySelector("img");

function setMenu(open) {
    sidebar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
    icon.src = open ? "./images/icon-close.svg" : "./images/icon-menu.svg";
}
window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
});

toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});
const copyBtn = document.querySelector(".wifi-card button");
const password = document.querySelector(".wifi-card dl div:last-child dd").textContent.trim();

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(password);
        copyBtn.textContent = "Copied";
    } catch {
        copyBtn.textContent = "Failed";
    }
    setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
});

document.querySelector(".header-1").addEventListener("click", () => window.print());