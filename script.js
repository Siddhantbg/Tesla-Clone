gsap.registerPlugin(ScrollTrigger);

const headers = gsap.utils.toArray("header");

// Hide all headers except the first one
headers.forEach((header, index) => {
    if (index !== 0) {
        header.style.visibility = "hidden";
    }
});

headers.forEach((header, index) => {
    ScrollTrigger.create({
        trigger: `#section${index + 1}`,
        start: "top top",
        end: "bottom top",
        onToggle: self => {
            if (self.isActive) {
                headers.forEach(h => {
                    if (h !== header) {
                        h.style.visibility = "hidden";
                    }
                });
                header.style.visibility = "visible";
            }
        }
    });
});
gsap.registerPlugin(ScrollTrigger);

const hideSections = ["#section2", "#section3", "#section4", "#section5", "#section6", "#section7", "#section8", "#section9"];

hideSections.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onToggle: self => {
            const nav = document.querySelector(".nav");
            if (self.isActive) {
                nav.classList.add("hide-nav");
            } else {
                nav.classList.remove("hide-nav");
            }
        }
    });
});



