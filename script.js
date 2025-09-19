// Typed.js for dynamic text in hero section
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: ["Turning Ideas into Reality with Code"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    };

    // Ensure that Typed.js initializes after DOM is loaded
    const typedElement = document.querySelector(".dynamic-text");
    if (typedElement) {
        new Typed(typedElement, options);
    }

    // Dark Mode Toggle Functionality
    const darkModeButton = document.querySelector(".dark-mode-toggle button");

    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Save the dark mode preference in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.removeItem("darkMode");
            }
        });
    }

    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Initialize Google Map on load (for Contact section map)
    if (document.getElementById("google-map")) {
        const map = new google.maps.Map(document.getElementById("google-map"), {
            zoom: 14,
            center: { lat: -25.344, lng: 131.036 }, // Example coordinates
            mapTypeId: "roadmap"
        });
        const marker = new google.maps.Marker({
            position: { lat: -25.344, lng: 131.036 },
            map: map,
            title: "Your Location"
        });
    }
});

// JavaScript to animate the progress bars
window.addEventListener("scroll", function () {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress-bar");
    const sectionPosition = skillsSection.getBoundingClientRect().top;

    if (sectionPosition < window.innerHeight - 50) {
        progressBars.forEach((bar) => {
            bar.style.transition = "width 2s ease-out";
        });
    } else {
        progressBars.forEach((bar) => {
            bar.style.transition = "none";
        });
    }
});
