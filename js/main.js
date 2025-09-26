/*dev_projects JS*/
// === Minimal Page Fade Transition Logic ===
// Applies only to same-site .html navigations to soften hard refresh blink.
(function() {
    const enableFade = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (enableFade) {
        // On initial load fade in once DOM is interactive
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => document.body.classList.add('page-ready'));
        });

        // Delegate link clicks
        document.addEventListener('click', (e) => {
            const a = e.target.closest('a');
            if (!a) return;
            // Ignore anchors meant to open modals, offcanvas, or JS-only actions
            if (a.hasAttribute('data-bs-toggle') || a.getAttribute('target') === '_blank') return;
            const href = a.getAttribute('href');
            if (!href || href.startsWith('#')) return; // in-page anchors
            // Only fade for same-directory .html files (simple static site nav)
            if (!/\.html(?:[?#].*)?$/.test(href)) return;
            e.preventDefault();
            // If already fading, block duplicate nav
            if (document.body.classList.contains('page-fade-out')) return;
            document.body.classList.add('page-fade-out');
            // Navigate after transition
            const delay = 300; // ms (should match CSS ~ .35s)
            setTimeout(() => { window.location.href = href; }, delay);
        }, true);
    } else {
        // If reduced motion preferred, show immediately
        document.addEventListener('DOMContentLoaded', () => document.body.classList.add('page-ready'));
    }
})();
// === End Page Fade Transition Logic ===
$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(function () {
    $(".main-header-link").click(function () {
        $(".main-header-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

$(".search-bar input")
    .focus(function () {
        $(".header").addClass("wide");
    })
    .blur(function () {
        $(".header").removeClass("wide");
    });

$(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        dd.removeClass("is-active");
    }
});

$(function () {
    $(".dropdown").on("click", function (e) {
        $(".content-wrapper").addClass("overlay");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropdown") === false) {
            $(".content-wrapper").removeClass("overlay");
        }
    });
});

$(function () {
    $(".status-button:not(.open)").on("click", function (e) {
        $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
        $(".overlay-app").removeClass("is-active");
    });
});

$(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
});
/*End of dav_projects.html*/

/*Bootstrap Utilities*/

/*Information Icon Hover*/

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
    new bootstrap.Tooltip(tooltipTriggerEl, {
        html: true,
        customClass: 'custom-tooltip',

    })
);


/*Icon Hover End*/

/* Light / Dark Mode with Persistence */
(function initTheme() {
    const STORAGE_KEY = 'portfolio_theme'; // values: 'light' | 'dark'

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-mode', isLight);
        // Normalize Bootstrap text utility classes used in menus/offcanvas
        const textElements = document.querySelectorAll('.text-light, .text-dark');
        textElements.forEach((el) => {
            if (isLight) {
                el.classList.add('text-dark');
                el.classList.remove('text-light');
            } else {
                el.classList.add('text-light');
                el.classList.remove('text-dark');
            }
        });
        // Optional: update toggle icon state (moon/sun), if you add a stateful icon later
    }

    function getStoredTheme() {
        try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
    }
    function storeTheme(theme) {
        try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
    }

    // Apply initial theme ASAP
    const saved = getStoredTheme();
    if (saved === 'light' || saved === 'dark') {
        applyTheme(saved);
    } else {
        // Default to dark (no body.light-mode) to match current design
        storeTheme('dark');
        applyTheme('dark');
    }

    // Wire up toggle if present on the page
    const toggleButton = document.querySelector('.dark-light');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const next = document.body.classList.contains('light-mode') ? 'dark' : 'light';
            storeTheme(next);
            applyTheme(next);
        });
    }
})();
/* End Light / Dark Mode */

//Onclick of nav link, change the app name
const appNameElem = document.getElementById('appName');
const navLinks = document.querySelectorAll('.nav-link');


//update data dev_projects.html with the card data
const cardData = {
    'Urban Air': [ // Changed 'Storm Track' to 'Urban Air'
        {
            "id": "one",
            "title": "1. Real-Time Air Quality Monitoring",
            "desc": "🚀 <strong>Real-Time Air Quality Monitoring with Sensor Data & API Integration</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Real-time data ingestion, processing, and API integration for environmental monitoring.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Integration with various air quality sensors (e.g., PM2.5, CO2, Ozone) and public APIs.<br>" +
                "• Display of real-time air quality index (AQI) data for urban areas.<br>" +
                "• Historical trends and predictive insights for pollution levels.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enhancements of public health awareness and environmental decision-making.<br>" +
                "• Support for Urban planning and policy development.<br>" +
                "• Demonstrates IoT data handling and environmental data analysis.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed a real-time urban air quality monitoring system, integrating sensor data and public APIs to provide actionable environmental insights.”",
            "skills": ["IoT Data Integration", "Real-time Data Processing", "API Integration (Environmental APIs)", "Data Streaming", "Backend Development (Node.js/Python)"]
        },
        {
            "id": "two",
            "title": "2. Automated Alerting & Health Advisories",
            "desc": "🔔 <strong>Automated Air Quality Alerts & Health Advisories</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "•Proactive notification systems for critical environmental conditions.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Sends immediate alerts to users based on predefined AQI thresholds or sudden pollution spikes.<br>" +
                "• Provides personalized health advisories and recommendations (e.g., 'limit outdoor activity').<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Improves public safety and well-being.<br>" +
                "• Enabling of timely preventive measures for sensitive groups.<br>" +
                "• Event-driven architecture and notification service integration.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented an automated air quality alert system, delivering real-time health advisories based on environmental data thresholds.”",
            "skills": ["Automated Alerting", "Event-Driven Architecture", "Notification Services (SMS/Email)", "Backend Logic", "Environmental Health Data"]
        },
        {
            "id": "three",
            "title": "3. Geospatial Visualization & Reporting",
            "desc": "📊 <strong>Interactive Geospatial Air Quality Visualization & Reporting</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Geospatial data visualization and comprehensive reporting for environmental insights.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Visualization of air quality data on interactive maps, showing pollution hotspots and trends.<br>" +
                "• Detailed reports on air quality metrics, sources of pollution, and compliance.<br>" +
                "• Supports custom data filtering and export options for research and policy.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Facilitates easy understanding of complex environmental data.<br>" +
                "• Supports urban planning and policy development.<br>" +
                "• Enhances data accessibility and actionable insights.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed interactive geospatial visualizations and comprehensive reporting tools for urban air quality data, supporting environmental analysis and policy.”",
            "skills": ["Geospatial Data Visualization (Mapbox/Leaflet)", "Data Analytics", "Reporting Tools", "Frontend Development (HTML/CSS/JS)", "Backend Data Processing", "Environmental Data Science"]
        }
    ],
    'Fleet Pulse': [
        {
            "id": "one",
            "title": "1. Real-Time Fleet & Driver Monitoring",
            "desc": "🚛 <strong>Live Vehicle and Driver Behavior Tracking</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Integration of GPS and telematics for fleet management.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Tracks vehicles' locations and trip details in real time.<br>" +
                "• Monitors driver behavior such as seatbelt use, speeding, and harsh braking.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enhances fleet safety and compliance.<br>" +
                "• Helps reduce accidents and improve driver accountability.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed real-time fleet tracking system integrating GPS and driver behavior analytics, improving safety metrics by 30%.”",
            "skills": ["GPS Integration (Google Maps API)", "Telematics Data Processing", "Real-time Data Streaming (MQTT/WebSockets)", "IoT Device Integration", "Geofencing"]
        },
        {
            "id": "two",
            "title": "2. Automated Maintenance & Alert System",
            "desc": "🔧 <strong>Proactive Vehicle Maintenance and Alerts</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Automated workflows for vehicle health monitoring.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Tracks vehicle maintenance schedules and service history.<br>" +
                "• Sends automated alerts for engine issues, service due dates, and critical alerts.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Minimizes downtime and repair costs.<br>" +
                "• Ensures vehicles operate efficiently and reliably.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented automated maintenance tracking and alert system reducing vehicle downtime by 25%.”",
            "skills": ["Automated Workflows (Cron Jobs/Azure Functions)", "Alerting Systems (Email/SMS via API)", "Database Management (SQL/NoSQL)", "Scheduled Tasks", "System Monitoring"]
        },
        {
            "id": "three",
            "title": "3. Data-Driven Reporting & Analytics",
            "desc": "📊 <strong>Comprehensive Fleet Performance and Fuel Analytics</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "•  Actionable business insights through data.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Provides detailed reports on fuel consumption, maintenance costs, and route efficiency.<br>" +
                "• Supports decision-making with fleet utilization and cost-effectiveness metrics.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Optimizes operational costs.<br>" +
                "• Enhances fleet productivity and sustainability.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Built comprehensive analytics dashboard enabling data-driven decisions for fleet optimization.”",
            "skills": ["Business Intelligence (BI Tools like Power BI/Custom)", "Data Analytics", "Dashboard Development (React/Angular/Vue.js)", "SQL/NoSQL Database Queries", "Performance Metrics Analysis"]
        }
    ],
    'Tech Ticketing System': [
        {
            "id": "one",
            "title": "1. Database Management & Seeding",
            "desc": "💾 <strong>Automated Database Seeding for Testing and Development</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Database management and automation.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Automatically populates the database with sample data for testing.<br>" +
                "• Includes both technical and client user roles with encrypted passwords.<br>" +
                "• Supports multiple profiles for different environments (e.g., production, testing).<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Simplifies testing and development workflows.<br>" +
                "• Ensures consistent data for debugging and demos.<br>" +
                "• Demonstrates backend proficiency.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed automated database seeding functionality to streamline testing and ensure consistent data environments.”",
            "skills": ["Database Management (MySQL)", "Data Seeding (Spring Data JPA)", "SQL", "Backend Development (Java/Spring Boot)", "Testing & QA", "Maven", "Visual Studio Code"]
        },
        {
            "id": "two",
            "title": "2. Secure User Authentication",
            "desc": "🔒 <strong>Secure User Authentication with Password Hashing</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Security in application development.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Utilizes a password encoder to securely hash user passwords.<br>" +
                "• Ensures sensitive data is never stored in plain text.<br>" +
                "• Compatible with modern authentication standards.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Protects user data from breaches.<br>" +
                "• Builds trust with secure authentication practices.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented secure password hashing mechanisms to enhance user data protection and comply with industry standards.”",
            "skills": ["Security Best Practices", "Password Hashing (BCrypt)", "Authentication (Spring Security)", "Data Protection", "Java Development (JDK 8)", "Git"]
        },
        {
            "id": "three",
            "title": "3. Role-Based Access Control & UI",
            "desc": "👥 <strong>Dynamic Role Management for Users with Responsive UI</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Flexible user role systems and design intuitive frontends.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Supports multiple user roles (e.g., Technician, Client).<br>" +
                "• Assigns permissions and access levels based on roles.<br>" +
                "• Frontend built with HTML, CSS, and Bootstrap for a responsive user experience.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enhances application scalability.<br>" +
                "• Improves user experience with tailored access.<br>" +
                "• Demonstrates advanced backend design and frontend development skills.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Designed and implemented a role-based access control system with a responsive front-end, enhancing user experience and system security.”",
            "skills": ["Role-Based Access Control (RBAC)", "User Management", "Authorization (Spring Security)", "Frontend Development (Thymeleaf, HTML, CSS, Bootstrap)", "UI/UX Design", "Java Development (Spring Boot)", "Git"]
        }
    ],
    'Shop Swift': [
        {
            "id": "one",
            "title": "1. Smart Inventory Management & Alerts",
            "desc": "📦 <strong>Real-Time Inventory Tracking with Predictive Restocking</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Management of backend inventory systems with real-time stock updates and smart alerting logic.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Tracks inventory levels across categories in real time.<br>" +
                "• Triggers low-stock alerts with predictive replenishment suggestions.<br>" +
                "• Supports role-based controls for Admins to adjust stock manually or import via batch uploads.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Prevents stockouts and over-ordering.<br>" +
                "• Streamlines warehouse and retail operations.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Built predictive inventory management with real-time alerting, reducing stockouts by 40% and improving operational efficiency.”",
            "skills": ["Inventory Management Systems", "Real-time Data Processing", "Predictive Analytics (Python/R)", "Backend Development (ASP.NET Core/Spring Boot)", "Database Integration (SQL/NoSQL)"]
        },
        {
            "id": "two",
            "title": "2. Customer Analytics & Personalized Insights",
            "desc": "🧠 <strong>Behavior-Driven Customer Intelligence Dashboard</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Gather, analyze, and visualize customer behavior data.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Captures customer purchase history, session activity, and product preferences.<br>" +
                "• Provides visual BI dashboards (Admin view) for sales trends, product popularity, and churn risk indicators.<br>" +
                "• Customer portal displays personalized suggestions and rewards.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enables smarter marketing and retention strategies.<br>" +
                "• Boosts repeat purchases and customer satisfaction.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed full-stack customer analytics dashboard integrating BI and behavior tracking to inform personalized marketing and product strategy.”",
            "skills": ["Customer Analytics", "Business Intelligence (BI)", "Data Modeling", "Dashboard Development (React/Vue.js)", "Personalization Algorithms"]
        },
        {
            "id": "three",
            "title": "3. Sales & KPI Performance Dashboard",
            "desc": "📈 <strong>Admin-Facing Business Intelligence for Sales & Operational Metrics</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Building BI solutions with clear KPIs for decision-makers.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Visualizes sales performance, order value, customer lifetime value (CLV), and conversion rates.<br>" +
                "• Supports filtering by date ranges, categories, locations, and campaigns.<br>" +
                "• Includes role-based access (e.g., Admins see gross profit, Customers see order history).<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Empowers stakeholders with actionable business data.<br>" +
                "• Informs marketing, operations, and finance strategies.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Created BI-powered KPI dashboard delivering real-time sales insights, increasing revenue visibility and supporting strategic decisions.”",
            "skills": ["KPI Tracking", "Sales Analytics", "Data Visualization (Chart.js/D3.js)", "Filtering & Sorting", "UI/UX Design"]
        }
    ],
    'ERP Operations': [
        {
            "id": "one",
            "title": "1. Predictive Financial Forecasting",
            "desc": "🔮 <strong>ML.NET-Powered Cash Flow & Cost Predictions</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Integrating machine learning (ML.NET) for business intelligence.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Leverages historical financial snapshots to forecast cash balance, material costs, and equipment costs.<br>" +
                "• Provides confidence intervals for predictions, indicating reliability.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enables proactive financial planning and risk mitigation.<br>" +
                "• Optimizes resource allocation and budget management.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed and integrated ML.NET models for predictive financial forecasting, improving budget accuracy by X% and reducing unexpected expenditures.”",
            "skills": ["Machine Learning (ML.NET)", "Time Series Analysis (SSA Algorithm)", "Financial Modeling", "C# Development (ASP.NET Core)", "Data Science", "SQL Server"]
        },
        {
            "id": "two",
            "title": "2. What-If Scenario Analysis",
            "desc": "📊 <strong>Interactive Cost Reduction Simulations</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Build of analytical tools for strategic decision-making.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Allows users to simulate the financial impact of cost reductions (e.g., material, equipment).<br>" +
                "• Instantly visualizes changes in net profit and cash balance under different scenarios.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Empowers stakeholders to explore financial strategies without real-world risk.<br>" +
                "• Facilitates data-driven decision-making for cost optimization.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented a dynamic 'What-If' scenario analyzer, enabling stakeholders to simulate financial impacts and optimize cost reduction strategies.”",
            "skills": ["Scenario Modeling", "Financial Analysis", "Interactive Dashboards (Razor Pages/JavaScript)", "Frontend Development (HTML/CSS/jQuery)", "Data Manipulation (C# Backend)"]
        },
        {
            "id": "three",
            "title": "3. Integrated Financial Dashboard",
            "desc": "📈 <strong>Comprehensive Overview of Key Financial Metrics</strong><br><br>" +
                "<u>Technical Highlights:</u><br>" +
                "• Creation of intuitive and data-rich user interfaces for complex financial data.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Displays real-time KPIs (Cash Balance, AR/AP, Discounts).<br>" +
                "• Presents interactive charts for cash flow, budget vs. actual, and AP aging.<br>" +
                "• Includes smart maximizers for AP discounts and AR collections.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Centralized financial insights for quick decision-making.<br>" +
                "• Improves financial transparency and operational efficiency.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Designed and developed an interactive financial management dashboard, consolidating key metrics and predictive insights for executive decision support.”",
            "skills": ["Dashboard Design (Razor Pages)", "Data Visualization (Chart.js)", "Frontend Development (HTML, Tailwind CSS, JavaScript)", "API Integration (ASP.NET Core RESTful APIs)", "UI/UX Principles", "SSRS (SQL Server Reporting Services) Integration"]
        }
    ]
};

function updateCards(appName) {
    const cards = cardData[appName];
    if (!cards) {
        document.getElementById("one").innerHTML = "<h4>No specific features to display.</h4><p>Click 'View Project' for more details.</p>";
        document.getElementById("two").innerHTML = "";
        document.getElementById("three").innerHTML = "";
        return;
    }
    cards.forEach(card => {
        const el = document.getElementById(card.id);
        if (el) {
            let skillsHtml = '';
            if (card.skills && card.skills.length > 0) {
                skillsHtml = '<p class="mt-3 text-sm text-gray-500"><strong>Skills Used:</strong> ' + card.skills.join(', ') + '</p>';
            }
            el.innerHTML = `<h4>${card.title}</h4><p>${card.desc}</p>${skillsHtml}`;
        }
    });
}

// Map project names to URLs
const projectUrls = {
    'Urban Air': 'https://express-weather-world.onrender.com', // Changed 'Storm Track' to 'Urban Air'
    'Fleet Pulse': '#', // Replace with actual URL
    'Tech Ticketing System': 'https://springdemo-43am.onrender.com',
    'Shop Swift': '#', // Replace with actual URL
    'ERP Operations': 'https://faithgarza-001-site1.rtempurl.com/', // Your ERP Operations dashboard URL
    'Additional Projects': 'developer_projects.html'
};

let selectedProject = 'Urban Air'; // Default project on load, changed from 'Storm Track'

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        selectedProject = this.textContent.trim();
        appNameElem.textContent = selectedProject;
        updateCards(selectedProject);

        const viewProjectButton = document.getElementById('viewProject');
        viewProjectButton.href = projectUrls[selectedProject] || '#'; // Set href from projectUrls

        // Lottie animation logic
        const canvases = [
            document.getElementById("canvas"),
            document.getElementById("canvasTwo"),
            document.getElementById("canvasThree"),
            document.getElementById("canvasFour")
        ];
        const lottieSources = [
            "https://lottie.host/3e24ec95-284e-43a1-abb8-342c449e7571/GlYuEWSKdC.lottie", // Urban Air placeholder (was Storm Track)
            "https://lottie.host/ef81b02d-b184-4b29-a4a5-b3a85061d778/vKmTGN9n9B.lottie", // Fleet Pulse placeholder
            "https://lottie.host/9cd1a629-019b-4e41-9d08-5b9212beab64/SqOxF0MRas.lottie", // Tech Ticketing placeholder
            "img/erp_animation.gif" // ERP Operations GIF" // ERP Operations placeholder
        ];

        function showCanvas(index) {
            canvases.forEach((c, i) => {
                c.style.display = i === index ? "block" : "none";
                c.style.position = "relative";
                c.style.left = "";
                c.style.top = "";
            });
            // Ensure DotLottie is loaded before trying to use it
            if (index === 3) {
                // Show GIF for ERP Operations
                canvases[index].innerHTML = `<img src="${lottieSources[index]}" alt="ERP Animation" style="width:100%;height:auto;">`;
            } else if (typeof DotLottie !== 'undefined') {
                new DotLottie({
                    autoplay: true,
                    loop: true,
                    canvas: canvases[index],
                    src: lottieSources[index]
                });
            } else {
                console.warn("DotLottie library not loaded. Cannot play Lottie animations.");
            }
        }

        switch (selectedProject) {
            case 'Urban Air': // Changed from 'Storm Track'
                showCanvas(0);
                break;
            case 'Fleet Pulse':
                showCanvas(1);
                break;
            case 'Tech Ticketing System':
                showCanvas(2);
                break;
            case 'Shop Swift':
                showCanvas(0); // Assign a canvas if applicable, or default
                break;
            case 'ERP Operations':
                showCanvas(3);
                break;
            default:
                // Hide all canvases if no specific project is selected or recognized
                canvases.forEach(c => c.style.display = "none");
                break;
        }
    });
});


// Set URL when "View Project" is clicked
const viewProjectElement = document.getElementById('viewProject');
if (viewProjectElement) {
    viewProjectElement.addEventListener('click', function (e) {
        // If a project preview modal exists on the page, do NOT open a new tab here.
        // Page-specific logic will handle showing the modal and full-screen actions.
        if (document.getElementById('projectPreviewModal')) {
            e.preventDefault();
            return;
        }

        // Only open in a new tab when this is an anchor with a valid href and no modal exists
        const isAnchor = this.tagName && this.tagName.toLowerCase() === 'a';
        const href = isAnchor ? this.getAttribute('href') : null;
        if (!isAnchor || !href || href === '#' || href === '') {
            e.preventDefault();
            console.warn('Project URL is not set or not applicable for this element.');
            return;
        }
        window.open(href, '_blank');
    });
}

// Optionally, initialize with the first app on page load
if (navLinks.length > 0) {
    // IMPORTANT: You'll also need to update the ID in dev_projects.html for this to work correctly on initial load.
    // Change <li id="stormTrack"...> to <li id="urbanAir"...>
    const defaultAppElement = document.getElementById('urbanAir') || navLinks[0]; // Changed from 'stormTrack'
    selectedProject = defaultAppElement.textContent.trim(); // Set selectedProject for initial load
    appNameElem.textContent = selectedProject;
    updateCards(selectedProject);

    const viewProjectButton = document.getElementById('viewProject');
    viewProjectButton.href = projectUrls[selectedProject] || '#';

    // Manually trigger the canvas display for the default project
    const canvases = [
        document.getElementById("canvas"),
        document.getElementById("canvasTwo"),
        document.getElementById("canvasThree"),
        document.getElementById("canvasFour")
    ];
    const lottieSources = [
        "https://lottie.host/3e24ec95-284e-43a1-abb8-342c449e7571/GlYuEWSKdC.lottie", // Urban Air placeholder (was Storm Track)
        "https://lottie.host/ef81b02d-b184-4b29-a4a5-b3a85061d778/vKmTGN9n9B.lottie", // Fleet Pulse placeholder
        "https://lottie.host/9cd1a629-019b-4e41-9d08-5b9212beab64/SqOxF0MRas.lottie", // Tech Ticketing placeholder
        "https://lottie.host/YOUR_ERP_OPERATIONS_LOTTIE_URL_HERE/animation.lottie" // ERP Operations placeholder
    ];

    function showCanvas(index) {
        canvases.forEach((c, i) => {
            c.style.display = i === index ? "block" : "none";
            c.style.position = "relative";
            c.style.left = "";
            c.style.top = "";
        });
        if (typeof DotLottie !== 'undefined') {
            new DotLottie({
                autoplay: true,
                loop: true,
                canvas: canvases[index],
                src: lottieSources[index]
            });
        } else {
            console.warn("DotLottie library not loaded. Cannot play Lottie animations.");
        }
    }

    switch (selectedProject) {
        case 'Urban Air': // Changed from 'Storm Track'
            showCanvas(0);
            break;
        case 'Fleet Pulse':
            showCanvas(1);
            break;
        case 'Tech Ticketing System':
            showCanvas(2);
            break;
        case 'Shop Swift':
            showCanvas(0); // Assign a canvas if applicable, or default
            break;
        case 'ERP Operations':
            showCanvas(3);
            break;
        default:
            canvases.forEach(c => c.style.display = "none");
            break;
    }
}
/*End Update Information*/

/**About me Page**/
$(function () {
    $(".status-button:not(.open)").on("click", function (e) {
        var popupType = $(this).data("popup");
       switch (popupType) {
           case "TTfinal":
               // Show TTfinal popup
               if ($("#TTfinal-pop").length === 0) {
                   $("body").append(`
                       <div id="TTfinal-pop" class="">
                           <div style="background:#fff;padding:2rem;border-radius:8px;max-width:90vw;max-height:90vh;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                               <button class="close" style="position:absolute;top:10px;right:10px;font-size:1.5rem;background:none;border:none;">&times;</button>
                               <img src="img/TTfinal.png" alt="TTfinal" style="max-width:100%;max-height:70vh;display:block;margin:0 auto;">
                           </div>
                       </div>
                   `);
                   $("#TTfinal-pop .close").on("click", function () {
                       $("#TTfinal-pop").remove();
                       $(".overlay-app").removeClass("is-active");
                   });
               }
               $(".overlay-app").addClass("is-active");
               break;
           case "studentReference":
                // Show aguirreReference popup
                if ($("#studentReference-pop").length === 0) {
                     $("body").append(`
                          <div id="studentReference-pop" class="">
                            <div style="background:#fff;padding:2rem;border-radius:8px;max-width:90vw;max-height:90vh;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                                 <button class="close" style="position:absolute;top:10px;right:10px;font-size:1.5rem;background:none;border:none;">&times;</button>
                                 <img src="img/studentReference.png" alt="student reference" style="max-width:100%;max-height:70vh;display:block;margin:0 auto;">
                            </div>
                          </div>
                     `);
                     $("#studentReference-pop .close").on("click", function () {
                          $("#studentReference-pop").remove();
                          $(".overlay-app").removeClass("is-active");
                     });
                     }
               // Add logic for aguirreReference popup here if needed
               $(".overlay-app").addClass("is-active");
               break;
           default:
               $(".overlay-app").addClass("is-active");
               break;
       }
    });
    $(".pop-up .close").click(function () {
        $(".overlay-app").removeClass("is-active");
        $(this).closest(".pop-up").remove();
    });
});


// Hide overlays on page load and on popstate (browser back/forward)
function hideOverlays() {
    document.getElementById('transition-overlay')?.classList.remove('active');
    document.querySelector('.overlay-app')?.classList.remove('active');
    // Or, if overlays use display/block:
    document.getElementById('transition-overlay')?.style.setProperty('display', 'none');
    document.querySelector('.overlay-app')?.style.setProperty('display', 'none');
}

window.addEventListener('DOMContentLoaded', hideOverlays);
window.addEventListener('popstate', hideOverlays);

document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function (e) {
        // Ignore project-title links; they now act as selectors only
        if (this.classList.contains('project-title')) return;
        const targetHref = this.getAttribute('data-href');
        if (targetHref) {
            e.preventDefault();
            document.getElementById('viewProject')?.setAttribute('href', targetHref);
            // Update the browser URL without leaving the page
            history.pushState({}, '', targetHref);
        }
    });
});



/*Multimedia Page Videos Cover Image Effect*/

$(document).ready(function() {
    // Other existing JavaScript code...

    // Handle click on the Coca-Cola ad card
    $('.coca-cola-ad-card').on('click', function() {
        const $card = $(this);
        const $video = $card.find('.video-trailer');

        // Toggle the 'reveal-video' class
        $card.toggleClass('reveal-video');

        if ($card.hasClass('reveal-video')) {
            // If revealing video, play it
            $video[0].play();
        } else {
            // If hiding video (e.g., clicking again to hide, though typically you wouldn't for a trailer)
            // Pause and reset video
            $video[0].pause();
            $video[0].currentTime = 0;
        }
    });

    // Optional: Pause video if it's playing and the user navigates away or clicks elsewhere
    // You might need more robust logic depending on your full page structure
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.coca-cola-ad-card').length) {
            $('.coca-cola-ad-card.reveal-video').each(function() {
                const $card = $(this);
                const $video = $card.find('.video-trailer');
                $card.removeClass('reveal-video');
                $video[0].pause();
                $video[0].currentTime = 0;
            });
        }
    });
});
