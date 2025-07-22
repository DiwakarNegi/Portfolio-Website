// Content Loader - Dynamically loads section content
class ContentLoader {
    constructor() {
        this.loadedSections = new Set();
        this.init();
    }

    async init() {
        // Show loading screen
        this.showLoadingScreen();
        
        // Load all sections
        await this.loadAllSections();
        
        // Hide loading screen
        this.hideLoadingScreen();
        
        // Initialize AOS after content is loaded
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
        }
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }

    async loadAllSections() {
        const sections = [
            { id: 'about-content', file: 'sections/about.html' },
            { id: 'skills-content', file: 'sections/skills.html' },
            { id: 'projects-content', file: 'sections/projects.html' },
            { id: 'contact-content', file: 'sections/contact.html' }
        ];

        // Load all sections in parallel
        const loadPromises = sections.map(section => this.loadSection(section.id, section.file));
        await Promise.all(loadPromises);
    }

    async loadSection(containerId, filePath) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                console.warn(`Container ${containerId} not found`);
                return;
            }

            // Show loading state
            container.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-spinner fa-spin"></i> Loading ${containerId.replace('-content', '')} content...
                </div>
            `;

            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.status}`);
            }

            const content = await response.text();
            
            // Add fade-in animation
            container.style.opacity = '0';
            container.innerHTML = content;
            
            // Animate content in
            setTimeout(() => {
                container.style.transition = 'opacity 0.5s ease-in-out';
                container.style.opacity = '1';
            }, 100);

            this.loadedSections.add(containerId);
            console.log(`✅ Loaded ${filePath} into ${containerId}`);

            // Trigger animations for skill bars if this is the skills section
            if (containerId === 'skills-content') {
                this.animateSkillBars();
            }

        } catch (error) {
            console.error(`❌ Error loading ${filePath}:`, error);
            
            // Show fallback content
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `
                    <div class="error-placeholder">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Content temporarily unavailable</p>
                        <p>Please refresh the page</p>
                    </div>
                `;
            }
        }
    }

    animateSkillBars() {
        setTimeout(() => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    bar.style.width = width + '%';
                }
            });
        }, 500);
    }

    // Method to reload a specific section
    async reloadSection(containerId, filePath) {
        await this.loadSection(containerId, filePath);
    }

    // Check if all sections are loaded
    isAllContentLoaded() {
        const expectedSections = ['about-content', 'skills-content', 'projects-content', 'contact-content'];
        return expectedSections.every(section => this.loadedSections.has(section));
    }
}

// Initialize content loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.contentLoader = new ContentLoader();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentLoader;
}