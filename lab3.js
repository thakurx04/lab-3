document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('ul[role="tablist"] li a');
    const panels = document.querySelectorAll('[role="tabpanel"]');

    // Function to activate a tab
    function activateTab(event) {
        event.preventDefault();

        // Remove active classes from all tabs and panels
        tabs.forEach(tab => tab.classList.remove("active"));
        panels.forEach(panel => panel.classList.remove("active"));

        // Add active class to the clicked tab
        const selectedTab = event.target;
        selectedTab.classList.add("active");

        // Show the associated panel
        const targetPanel = document.querySelector(selectedTab.getAttribute("href"));
        if (targetPanel) {
            targetPanel.classList.add("active");
        }
    }

    // Here attach click event listener to each tab
    tabs.forEach(tab => tab.addEventListener("click", activateTab));

    // Activate  first tab by default
    if (tabs.length > 0) {
        tabs[0].classList.add("active");
        panels[0].classList.add("active");
    }
});
//resources form youtube and google

