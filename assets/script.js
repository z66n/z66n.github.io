document.addEventListener("DOMContentLoaded", function () {
const base = window.location.origin;
document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    const isRelative = href.startsWith('/') || href.startsWith('#');
    const isSameOrigin = href.startsWith(base);
    
    if (!isRelative && !isSameOrigin) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    }
});
});