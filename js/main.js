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
        alert('App loading')
    })


}
displayMessage()


