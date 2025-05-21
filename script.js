// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile nav if open
                if (navUl.classList.contains('nav-active')) {
                    navUl.classList.remove('nav-active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');
    if (navToggle && navUl) {
        navToggle.addEventListener('click', () => {
            navUl.classList.toggle('nav-active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Project Data
    const projects = [
        {
            id: 'steamdeck',
            title: 'DIY Handheld Gaming PC (SteamDeck-like)',
            category: 'electronics',
            image: 'assets/images/steamdeck_diy.jpg', // Main image for card
            shortDescription: 'Custom-built gaming handheld using a laptop motherboard, iPad display, and custom cooling.',
            fullDescription: `A passion project creating a portable gaming PC. It features a salvaged laptop motherboard, its battery, and trackpad. The display is an iPad 3 LCD with an eDP to HDMI converter. The casing is acrylic, and it uses detachable Nintendo Switch-style controllers (Bluetooth) and 12 side buttons from a Razer MMO mouse (USB). Cooling is heavily modified with a second heatsink, increased TDP via software, overclocked RAM (BIOS exploit), and VRM heatsinks for maximum performance. The battery connector was salvaged and painstakingly re-soldered pin by pin for a compact design.`,
            media: [ // Can include multiple images/videos for modal
                { type: 'image', src: 'assets/images/steamdeck_diy.jpg' },
                // { type: 'image', src: 'assets/images/steamdeck_internals.jpg' }, // Add more images if you have them
                // { type: 'video', src: 'assets/videos/steamdeck_demo.mp4' }
            ],
            techStack: ['Laptop Modding', 'Soldering', 'Acrylic Fabrication', 'eDP Converters', 'Cooling Solutions', 'BIOS Modding'],
            link: null // No external link for this one
        },
        {
            id: 'external_1080p',
            title: '1080p External Laptop Display',
            category: 'electronics',
            image: 'assets/images/external_display_1080p.jpg',
            shortDescription: 'Portable 1080p monitor made from a salvaged laptop screen with a custom 5V to 12V power solution.',
            fullDescription: `Created from a faulty laptop's 1080p display. Uses an eDP to HDMI converter board (12V). To avoid a bulky 12V power brick, I built a step-up converter board to power it from a 5V USB-C phone charger. The stand is 3D printed. The backplate is cut from an aluminum TV box, MDF protects the board, and a clear acrylic sheet protects the screen. Perfect for a compact dual-monitor setup.`,
            media: [
                { type: 'image', src: 'assets/images/external_display_1080p.jpg' },
                { type: 'image', src: 'assets/images/step_up_converter.jpg' } // Image of your converter
            ],
            techStack: ['eDP Converters', 'Power Electronics', 'Step-Up Converter Design', '3D Printing', 'Laser Cutting', 'Metal & Wood Work'],
            link: null
        },
        {
            id: 'external_ipad',
            title: 'Compact iPad External Display',
            category: 'electronics',
            image: 'assets/images/external_ipad_display.jpg',
            shortDescription: 'Small external monitor using an iPad 3 display, powered via 5V USB.',
            fullDescription: `Another compact external display using an iPad 3 screen and an eDP to HDMI board (same as the DIY SteamDeck). This board is 5V powered, so any 2A USB charging brick works. It features a 3D printed stand, a salvaged TV box backplate, and a thin clear acrylic front (initially hoped for touch capability).`,
            media: [{ type: 'image', src: 'assets/images/external_ipad_display.jpg' }],
            techStack: ['eDP Converters', '3D Printing', 'Acrylic Cutting', 'Resourcefulness'],
            link: null
        },
        {
            id: 'laptop_cooling',
            title: 'Laptop Performance Cooling Mod',
            category: 'electronics',
            image: 'assets/images/laptop_cooling_mod.jpg',
            shortDescription: 'Enhanced laptop cooling with a custom secondary heatsink and an additional fan.',
            fullDescription: `To boost my laptop's performance, I crafted a small secondary heatsink from aluminum, connected via a heatpipe to the main heatsink. An additional fan, inspired by high-end laptop designs, pushes more air. This fan is powered by a step-down converter soldered to a USB port's 5V rails, outputting ~3V for a quiet yet effective constant airflow.`,
            media: [{ type: 'image', src: 'assets/images/laptop_cooling_mod.jpg' }],
            techStack: ['Heatsink Design', 'Thermal Management', 'Soldering', 'Power Regulation', 'Custom Fabrication'],
            link: null
        },
        {
            id: 'tiktok_bot',
            title: 'AI TikTok Content Automation Script',
            category: 'software',
            image: 'assets/images/ai_software_placeholder.png', // Create a placeholder or representative image
            shortDescription: 'Python script using multiple AIs (Gemini 2.5 Pro) to generate and assemble TikTok videos.',
            fullDescription: `A Python script (work-in-progress, console-based) that automates TikTok video creation. It uses Gemini 2.5 Pro for script generation (including image prompts), an AI image generator for visuals, and TTS for voiceover. The script syncs audio, images, and on-screen text, adds random transitions, and a background song. Includes automation for posting to YouTube, Twitter, Instagram, and TikTok.`,
            media: [/* Add screenshots or a short demo video if available */],
            techStack: ['Python', 'AI APIs (Gemini)', 'Image Generation AI', 'TTS AI', 'Video Editing Libraries', 'Social Media Automation'],
            link: null // Or link to GitHub if you plan to share it
        },
        {
            id: 'folder_organizer',
            title: 'Multi-Monitor Folder Organizer',
            category: 'software',
            image: 'assets/images/folder_organizer_visual.jpg',
            shortDescription: 'Python script (launched via batch file) to arrange frequently used folders across multiple displays.',
            fullDescription: `A practical Python script, run via a .bat file, that opens 8 of my frequently used folders and positions them across my multiple displays according to pre-set resolutions and positions. A daily timesaver!`,
            media: [/* Could show a diagram of monitor setup or code snippet */],
            techStack: ['Python', 'Batch Scripting', 'OS Automation', 'GUI Automation (implicitly)'],
            link: null
        },
        {
            id: 'crypto_notifier',
            title: 'Crypto Price Discord Notifier',
            category: 'software',
            image: 'assets/images/ai_software_placeholder.png',
            shortDescription: 'Python script providing hourly crypto price updates and alerts to a Discord server.',
            fullDescription: `Developed for a crypto trading firm, this Python script sends hourly price updates for major coins to their Discord server. It also sends "sudden rise alerts" for >1% changes. Hourly updates include a price/volume graph, current price, and $/ % change. A 24-hour summary with more data is also provided.`,
            media: [/* Screenshot of Discord notifications or graph */],
            techStack: ['Python', 'Discord API', 'Crypto APIs', 'Data Visualization (Graphing)'],
            link: null
        },
        {
            id: 'chronoflux',
            title: 'Chronoflux Media Website',
            category: 'web',
            image: 'assets/images/chronoflux_media.png',
            shortDescription: 'Website for a social media management and AI automation firm.',
            fullDescription: 'Developed the website for Chronoflux Media, focusing on showcasing their services in social media management and AI-driven automation solutions for businesses.',
            media: [{ type: 'image', src: 'assets/images/chronoflux_media.png' }],
            techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'], // Add specific frameworks if used
            link: 'YOUR_CHRONOFLUX_URL_HERE' // Replace with actual link
        },
        {
            id: 'nyx_realestate',
            title: 'NYX Nieruchomości Website',
            category: 'web',
            image: 'assets/images/nyx_nieruchomosci.png',
            shortDescription: 'Website for a Polish real estate and property management company.',
            fullDescription: 'Designed and developed the online presence for NYX Nieruchomości, a real estate company in Poland, to feature property listings and company information.',
            media: [{ type: 'image', src: 'assets/images/nyx_nieruchomosci.png' }],
            techStack: ['HTML', 'CSS', 'JavaScript'], // Add specific frameworks if used
            link: 'YOUR_NYX_URL_HERE'
        },
        {
            id: 'shakestop',
            title: 'Shakestop Dessert Stand Website',
            category: 'web',
            image: 'assets/images/shakestop.png',
            shortDescription: 'Website for Shakestop, a dessert stand in Merry Hill.',
            fullDescription: 'Created a vibrant and appealing website for Shakestop, showcasing their menu and location to attract customers to their dessert stand.',
            media: [{ type: 'image', src: 'assets/images/shakestop.png' }],
            techStack: ['HTML', 'CSS', 'JavaScript'], // Add specific frameworks if used
            link: 'YOUR_SHAKESTOP_URL_HERE'
        },
        {
            id: 'ai_keep_notes',
            title: 'AI-Enhanced Notes App (Keep Inspired)',
            category: 'web', // Or 'software' if it's more a desktop app concept
            image: 'assets/images/ai_keep_notes.png',
            shortDescription: 'Note-taking app with AI integration for enhancing and writing notes.',
            fullDescription: 'Inspired by Google Keep, this web application allows users to create, manage, and enhance their notes using integrated AI capabilities for summarization, expansion, or idea generation.',
            media: [{ type: 'image', src: 'assets/images/ai_keep_notes.png' }],
            techStack: ['HTML', 'CSS', 'JavaScript', 'AI API Integration'],
            link: 'YOUR_AI_NOTES_APP_URL_HERE' // If deployed
        },
        {
            id: 'ai_pokemon',
            title: 'AI-Generated Pokémon-like Game',
            category: 'web',
            image: 'assets/images/ai_pokemon_game.png',
            shortDescription: 'A game with fully AI-randomized sprites, attacks, and enemies on each refresh.',
            fullDescription: 'A Pokémon-inspired web game where all visual assets (sprites) and game elements (attacks, enemies) are generated by AI and randomized with each page refresh, offering a unique playthrough every time.',
            media: [{ type: 'image', src: 'assets/images/ai_pokemon_game.png' }],
            techStack: ['HTML', 'CSS', 'JavaScript', 'AI Image Generation API', 'Game Logic'],
            link: 'YOUR_AI_POKEMON_GAME_URL_HERE'
        },
        {
            id: 'ai_roguelike',
            title: 'AI-Generated 2D Rogue-like Game',
            category: 'web',
            image: 'assets/images/ai_roguelike_game.png',
            shortDescription: 'Top-down 2D rogue-like with AI-generated enemies, weapons, and attacks.',
            fullDescription: 'A 2D top-down rogue-like game where you play as a warrior. All enemies, weapons, and attack visuals are generated by an AI, ensuring a completely different experience on each playthrough.',
            media: [{ type: 'image', src: 'assets/images/ai_roguelike_game.png' }],
            techStack: ['HTML', 'CSS', 'JavaScript (Canvas API)', 'AI Image Generation API', 'Game Loop Design'],
            link: 'YOUR_AI_ROGUELIKE_URL_HERE'
        }
    ];

    const projectGrid = document.querySelector('.project-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMediaContainer = document.getElementById('modalMedia');
    const modalDescription = document.getElementById('modalDescription');
    const modalTechStack = document.getElementById('modalTechStack');
    const modalLink = document.getElementById('modalLink');
    const closeModalButton = document.querySelector('.close-button');

    function displayProjects(filter = 'all') {
        if (!projectGrid) return;
        projectGrid.innerHTML = ''; // Clear existing projects
        const filteredProjects = (filter === 'all') ? projects : projects.filter(p => p.category === filter);

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.dataset.category = project.category;
            
            // Determine image source, use placeholder if project.image is not defined
            const imageSrc = project.image || 'assets/images/default_project_placeholder.png'; // Make sure you have a default placeholder

            card.innerHTML = `
                <img src="${imageSrc}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                    <button class="btn-details" data-project-id="${project.id}">View Details</button>
                </div>
            `;
            projectGrid.appendChild(card);
        });

        // Add event listeners to new "View Details" buttons
        document.querySelectorAll('.btn-details').forEach(button => {
            button.addEventListener('click', () => openModal(button.dataset.projectId));
        });
    }

    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project || !modal) return;

        modalTitle.textContent = project.title;
        
        modalMediaContainer.innerHTML = ''; // Clear previous media
        if (project.media && project.media.length > 0) {
            project.media.forEach(item => {
                if (item.type === 'image') {
                    const img = document.createElement('img');
                    img.src = item.src;
                    img.alt = project.title;
                    modalMediaContainer.appendChild(img);
                } else if (item.type === 'video') {
                    const video = document.createElement('video');
                    video.src = item.src;
                    video.controls = true;
                    video.style.maxWidth = '100%'; // Ensure video is responsive
                    modalMediaContainer.appendChild(video);
                }
            });
        } else if (project.image) { // Fallback to main project image if no specific media
             const img = document.createElement('img');
             img.src = project.image;
             img.alt = project.title;
             modalMediaContainer.appendChild(img);
        }


        modalDescription.innerHTML = project.fullDescription.replace(/\n/g, '<br>'); // Preserve line breaks

        modalTechStack.innerHTML = '';
        project.techStack.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            modalTechStack.appendChild(li);
        });

        if (project.link && project.link !== '#') {
            modalLink.href = project.link;
            modalLink.style.display = 'inline-block';
            modalLink.textContent = 'Visit Project';
        } else {
            modalLink.style.display = 'none';
        }

        modal.style.display = 'block';
        modal.classList.remove('fade-out-animation');
        modal.querySelector('.modal-content').classList.remove('slide-out-animation');

        modal.classList.add('fade-in-animation');
        modal.querySelector('.modal-content').classList.add('slide-in-animation');
    }

    if (closeModalButton) {
        closeModalButton.onclick = function() {
            if (!modal) return;
            modal.classList.add('fade-out-animation');
            modal.querySelector('.modal-content').classList.add('slide-out-animation');
            setTimeout(() => {
                 modal.style.display = "none";
                 modal.classList.remove('fade-out-animation');
                 modal.querySelector('.modal-content').classList.remove('slide-out-animation');
            }, 280); // Match animation duration
        }
    }
    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.add('fade-out-animation');
                modal.querySelector('.modal-content').classList.add('slide-out-animation');
                 setTimeout(() => {
                     modal.style.display = "none";
                     modal.classList.remove('fade-out-animation');
                     modal.querySelector('.modal-content').classList.remove('slide-out-animation');
                }, 280); // Match animation duration
            }
        }
    }


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProjects(button.dataset.filter);
        });
    });

    // Initial display of all projects
    displayProjects();
});