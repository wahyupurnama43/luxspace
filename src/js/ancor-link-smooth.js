const smoothScrollAnchor = document.querySelectorAll("a[href^='#'")
for (let index = 0; index < smoothScrollAnchor.length; index++) {
    const el = smoothScrollAnchor[index];

    el.addEventListener("click", function (ev) {
        ev.preventDefault();
        // cek apakah ada attribut href yg memiliki tanda #
        if (document.getElementById(this.getAttribute("href").replace('#', ""))) {
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        }
    })
    
}
