document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Active State Handling
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // 2. Smooth Scrolling for internal anchor links (if you expand pages onto a single scrollable view)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Note: Currently set up as a multi-page routing concept via standard links,
            // but this helps if you build out the sections on the same page.
            if(targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if(targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Console greeting for fellow techies inspecting the page
    console.log("%cSystem Initialized. Welcome to the Espresso Terminal.", "color: #DAA520; font-size: 14px; font-weight: bold; background: #1C1615; padding: 5px;");
});