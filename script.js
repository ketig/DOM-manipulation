function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((sec) => {
    sec.style.display = "none";
  });

  // Show the selected one
  document.getElementById(sectionId).style.display = "block";

  // Update tab active state
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Find the button that triggered and activate it
  const clickedBtn = Array.from(document.querySelectorAll(".nav-tab")).find(
    (btn) => btn.getAttribute("onclick")?.includes(sectionId)
  );
  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }
}

// Show the first section by default on page load
document.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector(".section");
  if (firstSection) {
    showSection(firstSection.id);
  }
});
