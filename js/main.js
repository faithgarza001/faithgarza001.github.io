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

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
