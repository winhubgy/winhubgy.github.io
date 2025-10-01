// Open and close sidebar functionality
function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const openButton = document.querySelector(".open-btn");

    // Check if the click was outside of the sidebar or the open button
    if (!sidebar || (!sidebar.contains(event.target) && !(openButton && openButton.contains(event.target)))) {
        sidebar.classList.remove("open");
    }
});

// Theme toggle button functionality
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("theme-toggle");
    toggleButton.setAttribute("aria-label", "Switch to dark theme");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.textContent = "🌙"; // Initial icon for light theme

    document.body.appendChild(toggleButton);

    // Load the saved theme from localStorage, if it exists
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.body.classList.remove("light-mode","dark-mode");
        document.body.classList.add(savedTheme + "-mode");
        toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙"; // Set initial icon based on saved theme
        toggleButton.setAttribute("aria-label", `Switch to ${savedTheme === "dark" ? "light" : "dark"} theme`);
    }

    // Event listener for theme toggle button
    toggleButton.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";

        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        // keep legacy body classes for pages that style via body.light-mode / body.dark-mode
        document.body.classList.remove("light-mode","dark-mode");
        document.body.classList.add(newTheme + "-mode");


        // Update button icon and aria-label
        toggleButton.textContent = newTheme === "dark" ? "☀️" : "🌙";
        toggleButton.setAttribute("aria-label", `Switch to ${newTheme === "dark" ? "light" : "dark"} theme`);
        toggleButton.setAttribute("aria-expanded", newTheme === "dark");
    });
});


document.addEventListener("DOMContentLoaded", () => {
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }
});


// Bind sidebar open/close without relying on inline handlers (CSP-safe)
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open-btn");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.getElementById("sidebar");
  if (openBtn && sidebar) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.classList.add("open");
    });
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.classList.remove("open");
    });
  }
});



// Mark CTA paragraphs for cross-browser styling (avoids :has())
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".services p").forEach(p => {
    if (p.querySelector(".cta-button")) {
      p.classList.add("has-cta");
    }
  });
});

