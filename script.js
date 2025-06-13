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
        { // 1. DIY Handheld Gaming PC (SteamDeck-like)
            id: 'steamdeck',
            title: 'DIY Handheld Gaming PC (SteamDeck-like)',
            category: 'electronics',
            image: 'assets/images/steamdeck_diy.jpg',
            shortDescription: 'Custom-built gaming handheld using a laptop motherboard, iPad display, and custom cooling.',
            fullDescription: `A passion project creating a portable gaming PC. It features a salvaged laptop motherboard, its battery, and trackpad. The display is an iPad 3 LCD with an eDP to HDMI converter. The casing is acrylic, and it uses detachable Nintendo Switch-style controllers (Bluetooth) and 12 side buttons from a Razer MMO mouse (USB). Cooling is heavily modified with a second heatsink, increased TDP via software, overclocked RAM (BIOS exploit), and VRM heatsinks for maximum performance. The battery connector was salvaged and painstakingly re-soldered pin by pin for a compact design.`,
            media: [
                { type: 'image', src: 'assets/images/steamdeck_diy.jpg' },
                { type: 'image', src: 'assets/images/steamdeck_diy2.jpg' }, 
                { type: 'image', src: 'assets/images/steamdeck_diy3.jpg' } 
            ],
            techStack: ['Laptop Modding', 'Soldering', 'Acrylic Fabrication', 'eDP Converters', 'Cooling Solutions', 'BIOS Modding'],
            link: null
        },
        { // 2. AI-Enhanced Notes App (Google Keep Inspired)
            id: 'ai_keep_notes',
            title: 'AI-Enhanced Notes App (Google Keep Inspired)',
            category: 'web',
            image: 'assets/images/keep_notes.jpg',
            shortDescription: 'Note-taking app with AI integration for enhancing and writing notes.',
            fullDescription: 'Inspired by Google Keep, this web application allows users to create, manage, and enhance their notes using integrated AI capabilities for summarization, expansion, or idea generation. (For now made mainly for mobile devices and so desktop version is not fully functional)',
            media: [
                { type: 'image', src: 'assets/images/keep_notes.jpg' },
                { type: 'video', src: 'assets/videos/keep_notes_vid.mp4' },
                { type: 'video', src: 'assets/videos/keep_notes_vid2.mp4' },
                { type: 'image', src: 'assets/images/keep_notes2.jpg' },
                { type: 'image', src: 'assets/images/keep_notes3.jpg' }
            ],
            techStack: ['HTML', 'CSS', 'JavaScript', 'AI API Integration'],
            link: 'https://memogenie.netlify.app/'
        },
        { // 3. AI TikTok Content Automation Script
            id: 'tiktok_bot',
            title: 'AI TikTok Content Automation Script',
            category: 'software',
            image: 'assets/images/tiktok_videomaker.jpg',
            shortDescription: 'Python script using multiple different AIs to generate and assemble TikTok videos.',
            fullDescription: `A Python script (work-in-progress, console-based) that automates TikTok video creation. It uses Gemini 2.5 Pro for script generation (including image prompts), an AI image generator(Flux) for visuals, and TTS for voiceover. The script syncs audio, images, and on-screen text, adds random transitions, and a background song. Includes automation for posting to YouTube, Twitter, Instagram, and TikTok.`,
            media: [
                { type: 'image', src: 'assets/images/tiktok_videomaker.jpg' },
                { type: 'video', src: 'assets/videos/tiktok_video1.mp4' },
                { type: 'image', src: 'assets/images/tiktok_videomaker2.jpg' },
                { type: 'image', src: 'assets/images/tiktok_videomaker3.jpg' }
            ],
            techStack: ['Python', 'AI APIs (Gemini)', 'Image Generation AI', 'TTS AI', 'Video Editing Libraries', 'Social Media Automation'],
            link: null
        },
        { // 4. Laptop Performance Cooling Mod
            id: 'laptop_cooling',
            title: 'Laptop Performance Cooling Mod',
            category: 'electronics',
            image: 'assets/images/laptop_cooling_mod.jpg',
            shortDescription: 'Enhanced laptop cooling with a custom secondary heatsink and an additional fan.',
            fullDescription: `To boost my laptop's performance, I crafted a small secondary heatsink from aluminum, connected via a heatpipe to the main heatsink. An additional fan, inspired by high-end laptop designs, pushes more air. This fan is powered by a step-down converter soldered to a USB port's 5V rails, outputting ~3V for a quiet yet effective constant airflow.`,
            media: [
                { type: 'image', src: 'assets/images/laptop_cooling_mod.jpg' },
                { type: 'image', src: 'assets/images/laptop_cooling_mod2.jpg' },
                { type: 'image', src: 'assets/images/laptop_cooling_mod3.jpg' }
            ],
            techStack: ['Heatsink Design', 'Thermal Management', 'Soldering', 'Power Regulation', 'Custom Fabrication'],
            link: null
        },
        { // 5. 3D Printer/CNC Control Software
            id: 'printer_controller',
            title: '3D Printer/CNC Control Software',
            category: 'software',
            image: 'assets/images/3dcontroller4.jpg', 
            shortDescription: 'University FYP: G-code control software with real-time data, visualizers, and AI assistant.',
            fullDescription: `Developed for my final year project at Birmingham City University, this software offers comprehensive control for G-code based machines like 3D printers (e.g., Creality Ender 3 S1 Pro) and CNCs. It features COM port connectivity, status indicators, XYZ axis movement, direct G-code sending, real-time sensor data, a camera view for progress monitoring, 2D/3D G-code visualizers, an output log, and an AI bot knowledgeable about the Ender 3 S1 Pro for assistance with printing, CNC tasks, and G-code generation.`,
            media: [
                { type: 'image', src: 'assets/images/3dcontroller.jpg' },
                { type: 'image', src: 'assets/images/3dcontroller2.jpg' },
                { type: 'image', src: 'assets/images/3dcontroller3.jpg' },
                { type: 'image', src: 'assets/images/3dcontroller4.jpg' }
            ],
            techStack: ['Python', 'Tkinter (GUI)', 'G-code Parsing', 'Serial Communication (pySerial)', 'AI Chatbot API', 'Data Visualization', 'OpenCV (Camera)'],
            link: null
        },
        { // 6. AI-Generated Pokémon-like Game
            id: 'ai_pokemon',
            title: 'AI-Generated Pokémon-like Game',
            category: 'web',
            image: 'assets/images/pokemon_game.jpg',
            shortDescription: 'A game with fully AI-randomized sprites, attacks, and enemies on each refresh.',
            fullDescription: 'A Pokémon-inspired web game where all visual assets (sprites) and game elements (attacks, enemies) are generated by AI and randomized with each page refresh, offering a unique playthrough every time.',
            media: [
                { type: 'image', src: 'assets/images/pokemon_game.jpg' },
                { type: 'image', src: 'assets/images/pokemon_game2.jpg' },
                { type: 'image', src: 'assets/images/pokemon_game3.jpg' }
            ],
            techStack: ['HTML', 'CSS', 'JavaScript', 'AI Image Generation API', 'Game Logic'],
            link: 'YOUR_AI_POKEMON_GAME_URL_HERE'
        },
        { // 7. Compact iPad External Display (Moved Up)
            id: 'external_ipad',
            title: 'Compact iPad External Display',
            category: 'electronics',
            image: 'assets/images/external_ipad_display.jpg',
            shortDescription: 'Small external monitor using an iPad 3 display, powered via 5V USB.',
            fullDescription: `Another compact external display using an iPad 3 screen and an eDP to HDMI board (same as the DIY SteamDeck). This board is 5V powered, so any 2A USB charging brick works. It features a 3D printed stand, a salvaged TV box backplate, and a thin clear acrylic front (initially hoped for touch capability).`,
            media: [
                { type: 'image', src: 'assets/images/external_ipad_display.jpg' },
                { type: 'image', src: 'assets/images/external_ipad_display2.jpg' },
                { type: 'image', src: 'assets/images/external_ipad_display3.jpg' }
            ],
            techStack: ['eDP Converters', '3D Printing', 'Acrylic Cutting', 'Resourcefulness'],
            link: null
        },
        { // 8. NYX Nieruchomości Website
            id: 'nyx_realestate',
            title: 'NYX Nieruchomości Website',
            category: 'web',
            image: 'assets/images/nyx_nieruchomosci3.jpg',
            shortDescription: 'Website for a Polish real estate and property management company.',
            fullDescription: 'Designed and developed the online presence for NYX Nieruchomości, a real estate company in Poland, to feature property listings and company information.',
            media: [
                { type: 'image', src: 'assets/images/nyx_nieruchomosci3.jpg' },
                { type: 'image', src: 'assets/images/nyx_nieruchomosci.jpg' },
                { type: 'image', src: 'assets/images/nyx_nieruchomosci2.jpg' }
            ],
            techStack: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://nyxnieruchomosci.com/'
        },
        { // 9. Chronoflux Media Website (LINK UPDATED)
            id: 'chronoflux',
            title: 'Chronoflux Media Website',
            category: 'web',
            image: 'assets/images/chronoflux_website.jpg',
            shortDescription: 'Website for a social media management and AI automation firm.',
            fullDescription: 'Developed the website for Chronoflux Media, focusing on showcasing their services in social media management and AI-driven automation solutions for businesses.',
            media: [
                { type: 'image', src: 'assets/images/chronoflux_website.jpg' },
                { type: 'image', src: 'assets/images/chronoflux_website2.jpg' },
                { type: 'image', src: 'assets/images/chronoflux_website3.jpg' }
            ],
            techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            link: 'https://www.chronofluxmedia.com/'
        },
        { // 10. 1080p External Laptop Display (Moved Down)
            id: 'external_1080p',
            title: '1080p External Laptop Display',
            category: 'electronics',
            image: 'assets/images/external_display_1080p.jpg',
            shortDescription: 'Portable 1080p monitor made from a salvaged laptop screen with a custom 5V to 12V power solution.',
            fullDescription: `Created from a faulty laptop's 1080p display. Uses an eDP to HDMI converter board (12V). To avoid a bulky 12V power brick, I built a step-up converter board to power it from a 5V USB-C phone charger. The stand is 3D printed. The backplate is cut from an aluminum TV box, MDF protects the board, and a clear acrylic sheet protects the screen. Perfect for a compact dual-monitor setup.`,
            media: [
                { type: 'image', src: 'assets/images/external_display_1080p.jpg' },
                { type: 'image', src: 'assets/images/step_up_converter.jpg' },
                { type: 'image', src: 'assets/images/external_display_1080p2.jpg' }
            ],
            techStack: ['eDP Converters', 'Power Electronics', 'Step-Up Converter Design', '3D Printing', 'Laser Cutting', 'Metal & Wood Work'],
            link: null
        },
        { // 11. AI-Generated 2D Rogue-like Game (Moved Down)
            id: 'ai_roguelike',
            title: 'AI-Generated 2D Rogue-like Game',
            category: 'web',
            image: 'assets/images/roguelike_game.jpg',
            shortDescription: 'Top-down 2D rogue-like with AI-generated enemies, weapons, and attacks.',
            fullDescription: 'A 2D top-down rogue-like game where you play as a warrior. All enemies, weapons, and attack visuals are generated by an AI, ensuring a completely different experience on each playthrough.',
            media: [
                { type: 'image', src: 'assets/images/roguelike_game.jpg' },
                { type: 'image', src: 'assets/images/roguelike_game2.jpg' },
                { type: 'image', src: 'assets/images/roguelike_game3.jpg' }
            ],
            techStack: ['HTML', 'CSS', 'JavaScript (Canvas API)', 'AI Image Generation API', 'Game Loop Design'],
            link: 'YOUR_AI_ROGUELIKE_URL_HERE'
        },
        { // 12. Advanced Video Compression Script
            id: 'video_compressor',
            title: 'Advanced Video Compression Script',
            category: 'software',
            image: 'assets/images/video_compressor2.jpg',
            shortDescription: 'Python script reducing video file sizes up to 98% while retaining ~70% quality using ffmpeg.',
            fullDescription: `This Python script leverages ffmpeg to significantly reduce video file sizes (up to 98%) while aiming to maintain around 70% of the original visual quality. It employs techniques such as configurable CRF (Constant Rate Factor) for quality control, encoding presets (e.g., medium) for balancing speed and compression, resolution scaling (e.g., 1080p/720p), and audio bitrate adjustment. The script uses efficient codecs like H.264 for video and AAC for audio, targeting specific formats like TikTok (vertical) or YouTube (horizontal). It intelligently discards less noticeable data to achieve high compression ratios.`,
            media: [
                { type: 'image', src: 'assets/images/video_compressor2.jpg' },
                { type: 'image', src: 'assets/images/video_compressor3.jpg' },
                { type: 'image', src: 'assets/images/video_compressor.jpg' },
                { type: 'image', src: 'assets/images/video_compressor4.jpg' }
            ],
            techStack: ['Python', 'ffmpeg', 'Video Encoding (H.264)', 'Audio Encoding (AAC)', 'File Manipulation', 'Command Line Interface'],
            link: null
        },
        { // 13. Multi-Monitor Folder Organizer
            id: 'folder_organizer',
            title: 'Multi-Monitor Folder Organizer',
            category: 'software',
            image: 'assets/images/folder_organizer_visual.jpg',
            shortDescription: 'Python script (launched via batch file) to arrange frequently used folders across multiple displays.',
            fullDescription: `A practical Python script, run via a .bat file, that opens 8 of my frequently used folders and positions them across my multiple displays according to pre-set resolutions and positions. A daily timesaver!`,
            media: [
                { type: 'image', src: 'assets/images/folder_organizer_visual.jpg' },
                { type: 'video', src: 'assets/videos/folder_organizer_video.mp4' },
                { type: 'image', src: 'assets/images/folder_organizer_visual.jpg' }, 
                { type: 'image', src: 'assets/images/folder_organizer_visual.jpg' }
            ],
            techStack: ['Python', 'Batch Scripting', 'OS Automation', 'GUI Automation (implicitly)'],
            link: null
        },
        { // 14. Crypto Price Discord Notifier
            id: 'crypto_notifier',
            title: 'Crypto Price Discord Notifier',
            category: 'software',
            image: 'assets/images/crypto_price_notifier.jpg',
            shortDescription: 'Python script providing hourly crypto price updates and alerts to a Discord server.',
            fullDescription: `Developed for a crypto trading firm, this Python script sends hourly price updates for major coins to their Discord server. It also sends "sudden rise alerts" for >1% changes. Hourly updates include a price/volume graph, current price, and $/ % change. A 24-hour summary with more data is also provided.`,
            media: [
                { type: 'image', src: 'assets/images/crypto_price_notifier.jpg' },
                { type: 'image', src: 'assets/images/crypto_price_notifier2.jpg' },
                { type: 'image', src: 'assets/images/crypto_price_notifier3.jpg' }
            ],
            techStack: ['Python', 'Discord API', 'Crypto APIs', 'Data Visualization (Graphing)'],
            link: null
        },
        { // 15. Shakestop Dessert Stand Website
            id: 'shakestop',
            title: 'Shakestop Dessert Stand Website',
            category: 'web',
            image: 'assets/images/shakestop.jpg',
            shortDescription: 'Website for Shakestop, a dessert stand in Merry Hill.',
            fullDescription: 'Created a vibrant and appealing website for Shakestop, showcasing their menu and location to attract customers to their dessert stand.',
            media: [
                { type: 'image', src: 'assets/images/shakestop.jpg' },
                { type: 'image', src: 'assets/images/shakestop.jpg' },
                { type: 'image', src: 'assets/images/shakestop.jpg' }
            ],
            techStack: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://mymerryhill.co.uk/shops-and-attractions/shake-stop/'
        },
        { // 16. AI Image Generator Web App (MOVED TO END & UPDATED)
            id: 'ai_image_generator',
            title: 'AI Image Generator Web App',
            category: 'web',
            image: 'assets/images/ai_image_generator_gallery.jpg',
            shortDescription: 'Generate high-quality AI images with multiple models, resolutions, and a "Surprise Me" feature.',
            fullDescription: `A sophisticated AI image generation web app built with Next.js and React. Users can enter a descriptive prompt, choose between advanced AI models like Flux and Turbo, select various aspect ratios, and define custom resolutions. It includes a 'Surprise Me' button for random prompt generation, a gallery page to view previously created images, and a helpful chatbot.<br><br><strong>Disclaimer:</strong> This project utilizes free APIs for its image generation services. As such, the service may occasionally experience downtime or reach rate limits, which can prevent images from loading. The application's core functionality is working as demonstrated in the screenshots.`,
            media: [
                { type: 'image', src: 'assets/images/ai_image_generator_main.jpg' },
                { type: 'image', src: 'assets/images/ai_image_generator_gallery.jpg' },
                { type: 'image', src: 'assets/images/ai_image_generator_about.jpg' },
                { type: 'image', src: 'assets/images/ai_image_generator_chat.jpg' } // Add your new chatbot screenshot here
            ],
            techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Pollinations API'],
            link: 'https://mm-image-gen.netlify.app/'
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
        projectGrid.innerHTML = ''; 
        const filteredProjects = (filter === 'all') ? projects : projects.filter(p => p.category === filter);

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.dataset.category = project.category;
            
            const imageSrc = project.image || 'assets/images/default_project_placeholder.png';

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

        document.querySelectorAll('.btn-details').forEach(button => {
            button.addEventListener('click', () => openModal(button.dataset.projectId));
        });
    }

    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project || !modal) return;

        modalTitle.textContent = project.title;
        modalMediaContainer.innerHTML = ''; 

        let allMedia = [];
        if (project.media && Array.isArray(project.media) && project.media.length > 0) {
            allMedia = project.media;
        } else if (project.image) { 
             allMedia.push({ type: 'image', src: project.image });
        }


        if (allMedia.length > 0) {
            let currentMediaIndex = 0;
            const galleryWrapper = document.createElement('div');
            galleryWrapper.className = 'modal-media-gallery';

            const prevButton = document.createElement('button');
            prevButton.className = 'gallery-arrow prev-arrow';
            prevButton.setAttribute('aria-label', 'Previous media');
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            
            const mediaElementContainer = document.createElement('div');
            mediaElementContainer.className = 'gallery-media-item-container';


            const nextButton = document.createElement('button');
            nextButton.className = 'gallery-arrow next-arrow';
            nextButton.setAttribute('aria-label', 'Next media');
            nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            
            const mediaCounter = document.createElement('div');
            mediaCounter.className = 'gallery-counter';

            const updateGalleryMedia = () => {
                if(allMedia.length === 0) return;
                mediaElementContainer.innerHTML = ''; 

                const currentItem = allMedia[currentMediaIndex];
                let mediaElement;

                if (currentItem.type === 'image') {
                    mediaElement = document.createElement('img');
                    mediaElement.src = currentItem.src;
                    mediaElement.alt = `${project.title} - Media ${currentMediaIndex + 1} of ${allMedia.length}`;
                    mediaElement.className = 'gallery-media-item';
                } else if (currentItem.type === 'video') {
                    mediaElement = document.createElement('video');
                    mediaElement.src = currentItem.src;
                    mediaElement.controls = true;
                    mediaElement.className = 'gallery-media-item';
                    mediaElement.setAttribute('preload', 'metadata'); 
                }
                
                if (mediaElement) {
                    mediaElementContainer.appendChild(mediaElement);
                }
                mediaCounter.textContent = `${currentMediaIndex + 1} / ${allMedia.length}`;

                prevButton.style.display = allMedia.length > 1 ? 'flex' : 'none';
                nextButton.style.display = allMedia.length > 1 ? 'flex' : 'none';
                mediaCounter.style.display = allMedia.length > 1 ? 'block' : 'none';
            };

            prevButton.onclick = () => {
                currentMediaIndex = (currentMediaIndex - 1 + allMedia.length) % allMedia.length;
                updateGalleryMedia();
            };
            nextButton.onclick = () => {
                currentMediaIndex = (currentMediaIndex + 1) % allMedia.length;
                updateGalleryMedia();
            };
            
            galleryWrapper.appendChild(prevButton);
            galleryWrapper.appendChild(mediaElementContainer); 
            galleryWrapper.appendChild(nextButton);
            galleryWrapper.appendChild(mediaCounter);
            modalMediaContainer.appendChild(galleryWrapper);
            updateGalleryMedia(); 

        }


        modalDescription.innerHTML = project.fullDescription.replace(/\n/g, '<br>');

        modalTechStack.innerHTML = '';
        project.techStack.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            modalTechStack.appendChild(li);
        });

        const placeholderLinks = [
            'YOUR_CHRONOFLUX_URL_HERE',
            'YOUR_NYX_URL_HERE', 
            'YOUR_SHAKESTOP_URL_HERE', 
            'YOUR_AI_NOTES_APP_URL_HERE', 
            'YOUR_AI_POKEMON_GAME_URL_HERE',
            'YOUR_AI_ROGUELIKE_URL_HERE'
        ];

        if (project.link && project.link.trim() !== '' && project.link !== '#' && !placeholderLinks.includes(project.link.trim().toUpperCase())) { 
            modalLink.href = project.link;
            modalLink.style.display = 'inline-block';
            modalLink.textContent = 'Visit Project';
        } else {
            modalLink.style.display = 'none';
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
        modal.classList.remove('fade-out-animation');
        modal.querySelector('.modal-content').classList.remove('slide-out-animation');

        modal.classList.add('fade-in-animation');
        modal.querySelector('.modal-content').classList.add('slide-in-animation');
    }
    
    function closeModal() {
        if (!modal) return;
        modal.classList.add('fade-out-animation');
        modal.querySelector('.modal-content').classList.add('slide-out-animation');
        document.body.style.overflow = 'auto'; 
        
        const videoElement = modalMediaContainer.querySelector('video');
        if (videoElement) {
            videoElement.pause();
        }

        setTimeout(() => {
             modal.style.display = "none";
             modal.classList.remove('fade-out-animation');
             modal.querySelector('.modal-content').classList.remove('slide-out-animation');
        }, 280); 
    }


    if (closeModalButton) {
        closeModalButton.onclick = closeModal;
    }
    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }
        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProjects(button.dataset.filter);
        });
    });

    displayProjects();

    // --- CHATBOT LOGIC ---
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessagesEl = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');

    let isChatbotOpen = false;
    let isBotTyping = false;
    let chatHistory = []; 
    const MAX_HISTORY_TURNS = 3; 

    // ENHANCED SYSTEM PROMPT WITH PROJECT DETAILS AND GUIDANCE
    const MATEUSZ_PORTFOLIO_SYSTEM_PROMPT = `You are Mateusz Miskiewicz's AI Portfolio Assistant. Your goal is to be helpful, professional, and CONCISE. 
Provide brief, to-the-point answers. Avoid long, exhaustive explanations unless specifically asked for more detail. 
Your tone should be friendly and enthusiastic, reflecting Mateusz's personality.
You will be given the recent conversation history before the user's current query. Use this history to understand context and avoid repeating information or asking redundant questions.

Key Information about Mateusz Miskiewicz (for your knowledge, summarize briefly when asked):
- Name: Mateusz Miskiewicz
- Focus: Innovative Technologist & AI Enthusiast (AI, prompt engineering, web dev, hardware).
- Strengths: Adaptable, driven, problem-solver, quick learner (e.g., English fluency story), initiative.
- Languages: English & Polish.
- Contact: mateusz.miskiewicz04@gmail.com, Phone: 07465421513 (Mention these can be found in the "Contact" section).

Website Structure (for your knowledge, don't list all sections unless asked for a site tour):
- Main Sections: Home (intro), About (details & skills), Projects (categorized work), CV (full resume & PDF), Contact (direct links).
- Project Details: Users can click "View Details" on project cards for more info.
- CV Page: Contains the full CV and a download link for the PDF.

Notable Project Insights (for your knowledge, mention these if relevant to questions like "favorite project" or "challenging project"):
-   **DIY Handheld Gaming PC (SteamDeck-like):** This was a significant passion project involving salvaging parts (laptop motherboard, iPad display), custom fabrication (acrylic casing), intricate soldering (battery connector), and extensive software/hardware modding for performance (cooling, TDP, overclocking). It showcases resourcefulness, technical skill, and perseverance through complex challenges. If asked about a "hardest" or "most complex" project, this is a strong candidate due to the integration of many disparate components and problem-solving involved.
-   **AI-Enhanced Notes App (Google Keep Inspired):** This project demonstrates Mateusz's interest in practical AI applications and web development (HTML, CSS, JS, AI API). It shows his ability to take inspiration from existing popular tools and add innovative AI features.
-   **AI TikTok Content Automation Script:** Highlights skills in Python, AI API integration (Gemini for scripts, AI image generation, TTS), and automation. It's a good example of leveraging multiple AI technologies to create a functional tool. This could be mentioned if asked about innovative AI use.
-   **3D Printer/CNC Control Software (FYP):** This was his university final year project, demonstrating more formal software development skills (Python, Tkinter GUI), G-code parsing, serial communication, and even an integrated AI assistant for the machine. This is a good example of a comprehensive software project with practical application.
-   **Laptop Performance Cooling Mod / External Displays:** These smaller hardware projects showcase practical electronics skills, soldering, custom fabrication (heatsinks, 3D printing), and resourcefulness in improving existing tech or creating new tools from salvaged parts.

Interaction Guidelines:
1.  **Use Conversation History:** Pay close attention to the provided chat history. If the user just asked "who is he?" and you answered, and they follow up with "sure" (implying they want more info on what you just offered), continue that thread. Don't restart the conversation or ask "how can I help?" again.
2.  **Be Concise First:** Start with short answers. Offer more details if the user asks.
3.  **Answering "Favorite/Hardest Project":**
    - If asked about a "favorite" project, you could say something like: "Mateusz is passionate about all his projects, but the DIY Handheld Gaming PC was a particularly engaging one as it combined his love for hardware, problem-solving, and gaming. He also really enjoys projects that involve practical AI applications, like the AI-Enhanced Notes App." (Avoid claiming one is *the* favorite unless Mateusz explicitly states it).
    - If asked about a "hardest" or "most challenging" project: "The DIY Handheld Gaming PC was quite complex, involving integrating many different hardware components and overcoming unique cooling and power challenges. The 3D Printer/CNC Control Software for his university FYP was also a significant undertaking in terms of software architecture and features."
    - Always point out that more details about these and other projects are in the 'Projects' section.
4.  **Answering General Questions (e.g., "Who is Mateusz?"):**
    - Example good: "Mateusz is an Innovative Technologist and AI Enthusiast, passionate about AI, web development, and hardware. He's known for being adaptable and a strong problem-solver. Would you like to know more about his skills, background, or perhaps a specific project?"
5.  **Answering Recruiter-Style Questions:** (As before, keep concise)
6.  **Project Questions (General):** Refer to the project's main idea and its category. Encourage users to use "View Details" on the site for full info.
7.  **CV Questions:** Briefly answer from CV highlights. Guide them to the CV page for the full document.
8.  **Website Guidance ("Guide me through the website"):** (As before, keep concise)
9.  **Clarification:** (As before, keep concise)
10. **Unknown Information:** (As before)
11. Your Persona: You are an AI assistant for Mateusz Miskiewicz.
Remember: CONCISENESS and natural conversation, using the provided history, are key.
`;


    function toggleChatbot() {
        isChatbotOpen = !isChatbotOpen;
        if (isChatbotOpen) {
            chatbotContainer.classList.remove('hidden');
            chatbotContainer.classList.add('visible');
            chatbotToggleBtn.innerHTML = '<i class="fas fa-times"></i>';
            if (chatHistory.length === 0) { 
                const welcomeMsg = "Hi! I'm Mateusz's AI assistant. How can I help you explore his portfolio today?";
                addMessageToChat(welcomeMsg, 'ai');
                chatHistory.push({ role: 'ai', content: welcomeMsg });
            }
        } else {
            chatbotContainer.classList.remove('visible');
            setTimeout(() => {
                 chatbotContainer.classList.add('hidden');
            }, 300); 
            chatbotToggleBtn.innerHTML = '<i class="fas fa-comment-dots"></i>'; 
        }
    }

    function addMessageToChat(text, sender, isTyping = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', sender);
        if (isTyping) {
            messageDiv.classList.add('typing');
            messageDiv.setAttribute('id', 'typing-indicator');
        }
        messageDiv.textContent = text; 
        chatbotMessagesEl.appendChild(messageDiv);
        chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight; 
    }

    function formatChatHistoryForPrompt(history, maxTurns) {
        const recentHistory = history.slice(-maxTurns * 2);
        if (recentHistory.length === 0) return "";

        let historyString = "Recent conversation history:\n";
        recentHistory.forEach(msg => {
            const prefix = msg.role === 'user' ? "User" : "Assistant";
            historyString += `${prefix}: ${msg.content}\n`;
        });
        historyString += "Current User Query:\n"; 
        return historyString;
    }

    async function handleSendMessage() {
        const userInput = chatbotInput.value.trim();
        if (userInput === '' || isBotTyping) return;

        addMessageToChat(userInput, 'user');
        chatHistory.push({ role: 'user', content: userInput });
        chatbotInput.value = '';
        isBotTyping = true;
        chatbotSendBtn.disabled = true;
        addMessageToChat('Typing...', 'ai', true);

        const historyContext = formatChatHistoryForPrompt(chatHistory, MAX_HISTORY_TURNS);
        const fullPromptContent = historyContext + userInput; 

        try {
            const encodedFullPrompt = encodeURIComponent(fullPromptContent);
            const encodedSystemPrompt = encodeURIComponent(MATEUSZ_PORTFOLIO_SYSTEM_PROMPT);
            const apiUrl = `https://text.pollinations.ai/${encodedFullPrompt}?model=mistral&system=${encodedSystemPrompt}&private=true&referrer=MateuszPortfolioChatbotV4`; // V4 for new prompt
            
            const response = await fetch(apiUrl);
            
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorText || 'Failed to fetch response'}`);
            }
            
            const aiResponseText = await response.text();
            addMessageToChat(aiResponseText.trim(), 'ai');
            chatHistory.push({ role: 'ai', content: aiResponseText.trim() });

        } catch (error) {
            console.error("Chatbot API Error:", error);
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove(); 
            }
            const errorMsg = "Sorry, I'm having a little trouble connecting right now. Please try again in a moment.";
            addMessageToChat(errorMsg, 'ai');
        } finally {
            isBotTyping = false;
            chatbotSendBtn.disabled = false;
            chatbotInput.focus();
        }
    }

    if (chatbotToggleBtn && chatbotContainer && chatbotCloseBtn && chatbotMessagesEl && chatbotInput && chatbotSendBtn) {
        chatbotToggleBtn.addEventListener('click', toggleChatbot);
        chatbotCloseBtn.addEventListener('click', toggleChatbot);
        chatbotSendBtn.addEventListener('click', handleSendMessage);
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }
});