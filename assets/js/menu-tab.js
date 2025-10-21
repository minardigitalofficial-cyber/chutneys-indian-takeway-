const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active-tab", "text-white"));
    tab.classList.add("active-tab", "text-white");

    const target = tab.getAttribute("data-target");

    contents.forEach((content) => {
      if (content.classList.contains(target)) {
        // Show with fade-in
        content.classList.remove("hidden");
        setTimeout(() => {
          content.classList.add("opacity-100");
          content.classList.remove("opacity-0");
        }, 10);
      } else {
        // Fade-out then hide
        content.classList.add("opacity-0");
        content.classList.remove("opacity-100");
        setTimeout(() => content.classList.add("hidden"), 500);
      }
    });
  });
});
