/**Sitcky Navbar*/

let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $(".section-2").offset().top-window.innerHeight;
    if($(window).scrollTop()> oTop){
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky")
    }
});


//Designer Logo

const logo = document.querySelectorAll("#logo path");

for(let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)

}

const displayMessage = () => {
    const weatherButton = document.getElementById('trial')
    weatherButton.addEventListener('click', event => {
        alert('App loading this could take a few minutes please be patient, click ok.')
    })


}
displayMessage()

function generateLinksHtml(links) {
    return links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('<br>');
}

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        // Initialize the tooltip
        var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

        // Check if the tooltip has the 'links' class
        if (tooltipTriggerEl.classList.contains('links')) {
            // Define the links for each card
            var links = [
                { url: "https://faithgarza001.atlassian.net/wiki/x/BYF4?atlOrigin=eyJpIjoiYjkzOTExMmZmY2U4NDFiMDhkODBhNDEwYmNjNWNhMTYiLCJwIjoiYyJ9", text: "UrbanAir Planning" },
                { url: "https://example2.com", text: "UI|UX Web Design" },
                { url: "https://example2.com", text: "Github Repository" }
            ];

            // Generate the links HTML
            var linksHtml = generateLinksHtml(links);
            tooltipTriggerEl.setAttribute('data-links', linksHtml);
        }

        // Check if the tooltip has the 'title' class
        if (tooltipTriggerEl.classList.contains('title')) {
            var title = "This project uses Node.js for data exchange and jQuery for dynamic front-end interactivity. Click links below to view more.";
            tooltipTriggerEl.setAttribute('data-title', title);
        }

        // Combine title and links if both are present
        var title = tooltipTriggerEl.getAttribute('data-title') || '';
        var linksHtml = tooltipTriggerEl.getAttribute('data-links') || '';
        var tooltipContent = title + (title && linksHtml ? '<br>' : '') + linksHtml;

        // Initialize the tooltip again to support HTML content
        tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
            html: true,  // Allow HTML in the tooltip
            title: tooltipContent,  // Set the HTML content as the tooltip's title
            delay: { "show": 0, "hide": 8000 }  // Delay before hiding the tooltip (5000ms = 5 seconds)

        });

        return tooltip;
    });
});
