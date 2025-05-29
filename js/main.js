/*dev_projects JS*/
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

$(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    //change text-light to text-dark
    const textElements = document.querySelectorAll('.text-light, .text-dark');
    textElements.forEach((element) => {
        element.classList.toggle('text-dark');
        element.classList.toggle('text-light');
    });

});
/*End of Light Dark Mode*/

//Onclick of nav link, change the app name
const appNameElem = document.getElementById('appName');
const navLinks = document.querySelectorAll('.nav-link');


//update data
const cardData = {
    'Storm Track': [

        {
            "id": "one",
            "title": "1. Real-Time Tracking",
            "desc": "🚀 <strong>API Caching with Redis for Weather Data</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• You understand backend optimization and API efficiency.<br><br>" +
                "<u>Feature:</u><br>" +
                "• When a user requests weather data for a location, check Redis first.<br>" +
                "• If cached, return data instantly (lightning-fast).<br>" +
                "• If not cached, call the API (e.g. OpenWeather), store the result in Redis with a TTL (Time To Live), and return it.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Faster response times.<br>" +
                "• Reduced API costs and throttling.<br>" +
                "• Production-level backend skill.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented server-side caching using Redis to reduce API calls by 80% and improve response times by 50%.”"
        },
        {
            "id": "two",
            "title": "2. Automated Alerts",
            "desc": "🔔 <strong>Instant Notifications for Critical Events</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• You can build real-time communication features and event handling.<br><br>" +
                "<u>Feature:</u><br>" +
                "• System monitors weather data continuously.<br>" +
                "• Sends immediate alerts to users about severe weather events and anomalies.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Timely user awareness.<br>" +
                "• Enables preventive action.<br>" +
                "• Improves user engagement and safety.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed automated alert system to notify users of critical weather changes, improving responsiveness and user safety.”"
        },
        {
            "id": "three",
            "title": "3. Comprehensive Reports",
            "desc": "📊 <strong>Generate Detailed Analytics and Export Custom Reports</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Your ability to create insightful data visualizations and reporting features.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Users can generate detailed weather reports with custom filters.<br>" +
                "• Export reports in multiple formats for further analysis.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Facilitates research and professional use.<br>" +
                "• Enhances user experience with actionable insights.<br>" +
                "• Simplifies data interpretation.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented comprehensive reporting tools, enabling users to generate and export customized weather analytics.”"
        }

    ],
    'Fleet Pulse': [
        {
            "id": "one",
            "title": "1. Real-Time Fleet & Driver Monitoring",
            "desc": "🚛 <strong>Live Vehicle and Driver Behavior Tracking</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Your expertise in integrating GPS and telematics for fleet management.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Tracks vehicles' locations and trip details in real time.<br>" +
                "• Monitors driver behavior such as seatbelt use, speeding, and harsh braking.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enhances fleet safety and compliance.<br>" +
                "• Helps reduce accidents and improve driver accountability.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed real-time fleet tracking system integrating GPS and driver behavior analytics, improving safety metrics by 30%.”"
        },
        {
            "id": "two",
            "title": "2. Automated Maintenance & Alert System",
            "desc": "🔧 <strong>Proactive Vehicle Maintenance and Alerts</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Ability to build automated workflows for vehicle health monitoring.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Tracks vehicle maintenance schedules and service history.<br>" +
                "• Sends automated alerts for engine issues, service due dates, and critical alerts.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Minimizes downtime and repair costs.<br>" +
                "• Ensures vehicles operate efficiently and reliably.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented automated maintenance tracking and alert system reducing vehicle downtime by 25%.”"
        },
        {
            "id": "three",
            "title": "3. Data-Driven Reporting & Analytics",
            "desc": "📊 <strong>Comprehensive Fleet Performance and Fuel Analytics</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Your ability to generate actionable business insights through data.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Provides detailed reports on fuel consumption, maintenance costs, and route efficiency.<br>" +
                "• Supports decision-making with fleet utilization and cost-effectiveness metrics.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Optimizes operational costs.<br>" +
                "• Enhances fleet productivity and sustainability.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Built comprehensive analytics dashboard enabling data-driven decisions for fleet optimization.”"
        }
    ],
    'Tech Ticketing System': [
        {
            "id": "one",
            "title": "1. Database Injection",
            "desc": "💾 <strong>Automated Database Seeding for Testing and Development</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• You understand database management and automation.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Automatically populates the database with sample data for testing.<br>" +
                "• Includes both technical and client user roles with encrypted passwords.<br>" +
                "• Supports multiple profiles for different environments (e.g., production, testing).<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Simplifies testing and development workflows.<br>" +
                "• Ensures consistent data for debugging and demos.<br>" +
                "• Demonstrates backend proficiency.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed automated database seeding functionality to streamline testing and ensure consistent data environments.”"
        },
        {
            "id": "two",
            "title": "2. Password Encryption",
            "desc": "🔒 <strong>Secure User Authentication with Password Hashing</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• You prioritize security in application development.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Utilizes a password encoder to securely hash user passwords.<br>" +
                "• Ensures sensitive data is never stored in plain text.<br>" +
                "• Compatible with modern authentication standards.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Protects user data from breaches.<br>" +
                "• Builds trust with secure authentication practices.<br>" +
                "• Demonstrates knowledge of security best practices.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Implemented secure password hashing mechanisms to enhance user data protection and comply with industry standards.”"
        },
        {
            "id": "three",
            "title": "3. Role-Based Profiles",
            "desc": "👥 <strong>Dynamic Role Management for Users</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• You can implement flexible user role systems.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Supports multiple user roles (e.g., Technician, Client).<br>" +
                "• Assigns permissions and access levels based on roles.<br>" +
                "• Easily extendable for future roles and features.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enhances application scalability.<br>" +
                "• Improves user experience with tailored access.<br>" +
                "• Demonstrates advanced backend design skills.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Designed and implemented a role-based access control system to manage user permissions dynamically.”"
        }
    ],
    'Shop Swift': [
        {
            "id": "one",
            "title": "1. Smart Inventory Management & Alerts",
            "desc": "📦 <strong>Real-Time Inventory Tracking with Predictive Restocking</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Your ability to manage backend inventory systems with real-time stock updates and smart alerting logic.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Tracks inventory levels across categories in real time.<br>" +
                "• Triggers low-stock alerts with predictive replenishment suggestions.<br>" +
                "• Supports role-based controls for Admins to adjust stock manually or import via batch uploads.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Prevents stockouts and over-ordering.<br>" +
                "• Streamlines warehouse and retail operations.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Built predictive inventory management with real-time alerting, reducing stockouts by 40% and improving operational efficiency.”"
        },
        {
            "id": "two",
            "title": "2. Customer Analytics & Personalized Insights",
            "desc": "🧠 <strong>Behavior-Driven Customer Intelligence Dashboard</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Your ability to gather, analyze, and visualize customer behavior data.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Captures customer purchase history, session activity, and product preferences.<br>" +
                "• Provides visual BI dashboards (Admin view) for sales trends, product popularity, and churn risk indicators.<br>" +
                "• Customer portal displays personalized suggestions and rewards.<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Enables smarter marketing and retention strategies.<br>" +
                "• Boosts repeat purchases and customer satisfaction.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Developed full-stack customer analytics dashboard integrating BI and behavior tracking to inform personalized marketing and product strategy.”"
        },
        {
            "id": "three",
            "title": "3. Sales & KPI Performance Dashboard",
            "desc": "📈 <strong>Admin-Facing Business Intelligence for Sales & Operational Metrics</strong><br><br>" +
                "<u>What it shows:</u><br>" +
                "• Your strength in building BI solutions with clear KPIs for decision-makers.<br><br>" +
                "<u>Feature:</u><br>" +
                "• Visualizes sales performance, order value, customer lifetime value (CLV), and conversion rates.<br>" +
                "• Supports filtering by date ranges, categories, locations, and campaigns.<br>" +
                "• Includes role-based access (e.g., Admins see gross profit, Customers see order history).<br><br>" +
                "<u>Benefits:</u><br>" +
                "• Empowers stakeholders with actionable business data.<br>" +
                "• Informs marketing, operations, and finance strategies.<br><br>" +
                "<u>Resume Highlight:</u><br>" +
                "“Created BI-powered KPI dashboard delivering real-time sales insights, increasing revenue visibility and supporting strategic decisions.”"
        }
    ]
};

function updateCards(appName) {
    const cards = cardData[appName];
    if (!cards) return;
    cards.forEach(card => {
        const el = document.getElementById(card.id);
        if (el) {
            el.innerHTML = `<h4>${card.title}</h4><p>${card.desc}</p>`;
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const selectedApp = this.textContent.trim();
        appNameElem.textContent = selectedApp;
        updateCards(selectedApp);
        // Set the href attribute to the button with id of viewProject based  on link id
        const viewProjectButton = document.getElementById('viewProject');
        //switch based on selected app
        switch (selectedApp) {
            case 'Urban Air':
                viewProjectButton.href = 'https://express-weather-world.onrender.com';
                break;
            case 'Fleet Pulse':
                viewProjectButton.href = '#';
                break;
            case 'Tech Ticketing System':
                viewProjectButton.href = 'https://springdemo-43am.onrender.com';
                break;
            case 'Shop Swift':
                viewProjectButton.href = '#';
                break;
            default:
                viewProjectButton.href = '#';
        }

    });
});

// Optionally, initialize with the first app
if (navLinks.length > 0) {
    const firstApp = navLinks[0].textContent.trim();
    appNameElem.textContent = firstApp;
    updateCards(firstApp);
}

