
/*GSAP Animations*/


/*Gradient Animation*/
// Animation de la variable CSS --mask-gradient

gsap.set(".item_image", {
    "--mask-gradient":
        "linear-gradient( 0deg, rgba(0,0,0,1) 0% 0.3839%, rgba(255,255,255,0) 0.3839% 0.8816%, rgba(0,0,0,1) 0.8816% 1.2152%, rgba(255,255,255,0) 1.2152% 1.7633%, rgba(0,0,0,1) 1.7633% 2.0439%, rgba(255,255,255,0) 2.0439% 2.6476%, rgba(0,0,0,1) 2.6476% 2.8726%, rgba(255,255,255,0) 2.8726% 3.5292%, rgba(0,0,0,1) 3.5292% 3.7039%, rgba(255,255,255,0) 3.7039% 4.4108%, rgba(0,0,0,1) 4.4108% 4.5326%, rgba(255,255,255,0) 4.5326% 5.2951%, rgba(0,0,0,1) 5.2951% 5.3613%, rgba(255,255,255,0) 5.3613% 6.1768%, rgba(0,0,0,1) 6.1768% 6.1927%, rgba(255,255,255,0) 6.1927% 7.0584%, rgba(0,0,0,1) 7.0584% 7.0584%, rgba(255,255,255,0) 7.0584% 7.9427%, rgba(0,0,0,1) 7.9427% 7.9427%, rgba(255,255,255,0) 7.9427% 8.8243%, rgba(0,0,0,1) 8.8243% 8.8243%, rgba(255,255,255,0) 8.8243% 9.706%, rgba(0,0,0,1) 9.706% 9.706%, rgba(255,255,255,0) 9.706% 10.5903%, rgba(0,0,0,1) 10.5903% 10.5903%, rgba(255,255,255,0) 10.5903% 11.4719%, rgba(0,0,0,1) 11.4719% 11.4719%, rgba(255,255,255,0) 11.4719% 12.3535%, rgba(0,0,0,1) 12.3535% 12.3535%, rgba(255,255,255,0) 12.3535% 13.2378%, rgba(0,0,0,1) 13.2378% 13.2378%, rgba(255,255,255,0) 13.2378% 14.1195%, rgba(0,0,0,1) 14.1195% 14.1195%, rgba(255,255,255,0) 14.1195% 15.0011%, rgba(0,0,0,1) 15.0011% 15.0011%, rgba(255,255,255,0) 15.0011% 15.8854%, rgba(0,0,0,1) 15.8854% 15.8854%, rgba(255,255,255,0) 15.8854% 16.767%, rgba(0,0,0,1) 16.767% 16.767%, rgba(255,255,255,0) 16.767% 17.6487%, rgba(0,0,0,1) 17.6487% 17.6487%, rgba(255,255,255,0) 17.6487% 18.5329%, rgba(0,0,0,1) 18.5329% 18.5329%, rgba(255,255,255,0) 18.5329% 19.4146%, rgba(0,0,0,1) 19.4146% 19.4146%, rgba(255,255,255,0) 19.4146% 20.2962%, rgba(0,0,0,1) 20.2962% 20.2962%, rgba(255,255,255,0) 20.2962% 21.1805%, rgba(0,0,0,1) 21.1805% 21.1805%, rgba(255,255,255,0) 21.1805% 22.0622%, rgba(0,0,0,1) 22.0622% 22.0622%, rgba(255,255,255,0) 22.0622% 22.9438%, rgba(0,0,0,1) 22.9438% 22.9438%, rgba(255,255,255,0) 22.9438% 23.8281%, rgba(0,0,0,1) 23.8281% 23.8281%, rgba(255,255,255,0) 23.8281% 24.7097%, rgba(0,0,0,1) 24.7097% 24.7097%, rgba(255,255,255,0) 24.7097% 25.5914%, rgba(0,0,0,1) 25.5914% 25.5914%, rgba(255,255,255,0) 25.5914% 26.4756% )"
});

let firstgradient =
    "linear-gradient( 0deg, rgba(0,0,0,1) 0% 0.9433%, rgba(255,255,255,0) 0.9433% 2.1664%, rgba(0,0,0,1) 2.1664% 2.9861%, rgba(255,255,255,0) 2.9861% 4.3328%, rgba(0,0,0,1) 4.3328% 5.0224%, rgba(255,255,255,0) 5.0224% 6.5058%, rgba(0,0,0,1) 6.5058% 7.0587%, rgba(255,255,255,0) 7.0587% 8.6722%, rgba(0,0,0,1) 8.6722% 9.1016%, rgba(255,255,255,0) 9.1016% 10.8386%, rgba(0,0,0,1) 10.8386% 11.1379%, rgba(255,255,255,0) 11.1379% 13.0115%, rgba(0,0,0,1) 13.0115% 13.1742%, rgba(255,255,255,0) 13.1742% 15.1779%, rgba(0,0,0,1) 15.1779% 15.217%, rgba(255,255,255,0) 15.217% 17.3444%, rgba(0,0,0,1) 17.3444% 17.3444%, rgba(255,255,255,0) 17.3444% 19.5173%, rgba(0,0,0,1) 19.5173% 19.5173%, rgba(255,255,255,0) 19.5173% 21.6837%, rgba(0,0,0,1) 21.6837% 21.6837%, rgba(255,255,255,0) 21.6837% 23.8501%, rgba(0,0,0,1) 23.8501% 23.8501%, rgba(255,255,255,0) 23.8501% 26.023%, rgba(0,0,0,1) 26.023% 26.023%, rgba(255,255,255,0) 26.023% 28.1895%, rgba(0,0,0,1) 28.1895% 28.1895%, rgba(255,255,255,0) 28.1895% 30.3559%, rgba(0,0,0,1) 30.3559% 30.3559%, rgba(255,255,255,0) 30.3559% 32.5288%, rgba(0,0,0,1) 32.5288% 32.5288%, rgba(255,255,255,0) 32.5288% 34.6952%, rgba(0,0,0,1) 34.6952% 34.6952%, rgba(255,255,255,0) 34.6952% 36.8616%, rgba(0,0,0,1) 36.8616% 36.8616%, rgba(255,255,255,0) 36.8616% 39.0346%, rgba(0,0,0,1) 39.0346% 39.0346%, rgba(255,255,255,0) 39.0346% 41.201%, rgba(0,0,0,1) 41.201% 41.201%, rgba(255,255,255,0) 41.201% 43.3674%, rgba(0,0,0,1) 43.3674% 43.3674%, rgba(255,255,255,0) 43.3674% 45.5403%, rgba(0,0,0,1) 45.5403% 45.5403%, rgba(255,255,255,0) 45.5403% 47.7067%, rgba(0,0,0,1) 47.7067% 47.7067%, rgba(255,255,255,0) 47.7067% 49.8732%, rgba(0,0,0,1) 49.8732% 49.8732%, rgba(255,255,255,0) 49.8732% 52.0461%, rgba(0,0,0,1) 52.0461% 52.0461%, rgba(255,255,255,0) 52.0461% 54.2125%, rgba(0,0,0,1) 54.2125% 54.2125%, rgba(255,255,255,0) 54.2125% 56.3789%, rgba(0,0,0,1) 56.3789% 56.3789%, rgba(255,255,255,0) 56.3789% 58.5518%, rgba(0,0,0,1) 58.5518% 58.5518%, rgba(255,255,255,0) 58.5518% 60.7183%, rgba(0,0,0,1) 60.7183% 60.7183%, rgba(255,255,255,0) 60.7183% 62.8847%, rgba(0,0,0,1) 62.8847% 62.8847%, rgba(255,255,255,0) 62.8847% 65.0576% )";

let mindleGradient =
    "linear-gradient( 0deg, rgba(0,0,0,1) 0% 3.33%, rgba(255,255,255,0) 3.33% 3.33%, rgba(0,0,0,1) 3.33% 6.66%, rgba(255,255,255,0) 6.66% 6.66%, rgba(0,0,0,1) 6.66% 10%, rgba(255,255,255,0) 10% 10%, rgba(0,0,0,1) 10% 13.33%, rgba(255,255,255,0) 13.33% 13.33%, rgba(0,0,0,1) 13.33% 16.66%, rgba(255,255,255,0) 16.66% 16.66%, rgba(0,0,0,1) 16.66% 20%, rgba(255,255,255,0) 20% 20%, rgba(0,0,0,1) 20% 23.33%, rgba(255,255,255,0) 23.33% 23.33%, rgba(0,0,0,1) 23.33% 26.66%, rgba(255,255,255,0) 26.66% 26.66%, rgba(0,0,0,1) 26.66% 30%, rgba(255,255,255,0) 30% 30%, rgba(0,0,0,1) 30% 33.33%, rgba(255,255,255,0) 33.33% 33.33%, rgba(0,0,0,1) 33.33% 36.66%, rgba(255,255,255,0) 36.66% 36.66%, rgba(0,0,0,1) 36.66% 40%, rgba(255,255,255,0) 40% 40%, rgba(0,0,0,1) 40% 43.33%, rgba(255,255,255,0) 43.33% 43.33%, rgba(0,0,0,1) 43.33% 46.66%, rgba(255,255,255,0) 46.66% 46.66%, rgba(0,0,0,1) 46.66% 49.974%, rgba(255,255,255,0) 49.974% 50%, rgba(0,0,0,1) 50% 53.2423%, rgba(255,255,255,0) 53.2423% 53.33%, rgba(0,0,0,1) 53.33% 56.5073%, rgba(255,255,255,0) 56.5073% 56.66%, rgba(0,0,0,1) 56.66% 59.779%, rgba(255,255,255,0) 59.779% 60%, rgba(0,0,0,1) 60% 63.0473%, rgba(255,255,255,0) 63.0473% 63.33%, rgba(0,0,0,1) 63.33% 66.3123%, rgba(255,255,255,0) 66.3123% 66.66%, rgba(0,0,0,1) 66.66% 69.584%, rgba(255,255,255,0) 69.584% 70%, rgba(0,0,0,1) 70% 72.8523%, rgba(255,255,255,0) 72.8523% 73.33%, rgba(0,0,0,1) 73.33% 76.0296%, rgba(255,255,255,0) 76.0296% 76.66%, rgba(0,0,0,1) 76.66% 79.1596%, rgba(255,255,255,0) 79.1596% 80%, rgba(0,0,0,1) 80% 82.2928%, rgba(255,255,255,0) 82.2928% 83.33%, rgba(0,0,0,1) 83.33% 85.4296%, rgba(255,255,255,0) 85.4296% 86.66%, rgba(0,0,0,1) 86.66% 88.5596%, rgba(255,255,255,0) 88.5596% 90%, rgba(0,0,0,1) 90% 91.6928%, rgba(255,255,255,0) 91.6928% 93.33%, rgba(0,0,0,1) 93.33% 94.8296%, rgba(255,255,255,0) 94.8296% 96.66%, rgba(0,0,0,1) 96.66% 97.9596%, rgba(255,255,255,0) 97.9596% 100% )";

let finalGradient =
    "linear-gradient( 0deg, black 0% 3.33%, transparent 3.33% 3.33%, black 3.33% 6.66%, transparent 6.66% 6.66%, black 6.66% 10%, transparent 10% 10%, black 10% 13.33%, transparent 13.33% 13.33%, black 13.33% 16.66%, transparent 16.66% 16.66%, black 16.66% 20%, transparent 20% 20%, black 20% 23.33%, transparent 23.33% 23.33%, black 23.33% 26.66%, transparent 26.66% 26.66%, black 26.66% 30%, transparent 30% 30%, black 30% 33.33%, transparent 33.33% 33.33%, black 33.33% 36.66%, transparent 36.66% 36.66%, black 36.66% 40%, transparent 40% 40%, black 40% 43.33%, transparent 43.33% 43.33%, black 43.33% 46.66%, transparent 46.66% 46.66%, black 46.66% 50%, transparent 50% 50%, black 50% 53.33%, transparent 53.33% 53.33%, black 53.33% 56.66%, transparent 56.66% 56.66%, black 56.66% 60%, transparent 60% 60%, black 60% 63.33%, transparent 63.33% 63.33%, black 63.33% 66.66%, transparent 66.66% 66.66%, black 66.66% 70%, transparent 70% 70%, black 70% 73.33%, transparent 73.33% 73.33%, black 73.33% 76.66%, transparent 76.66% 76.66%, black 76.66% 80%, transparent 80% 80%, black 80% 83.33%, transparent 83.33% 83.33%, black 83.33% 86.66%, transparent 86.66% 86.66%, black 86.66% 90%, transparent 90% 90%, black 90% 93.33%, transparent 93.33% 93.33%, black 93.33% 96.66%, transparent 96.66% 96.66%, black 96.66% 100%, transparent 100% 100% )";
let tlGradient = gsap.timeline({


});

tlGradient.to(".item_image", {
    duration: 0.5,
    "--mask-gradient": firstgradient
});

tlGradient.to(".item_image", {
    duration: 1.2,
    "--mask-gradient": mindleGradient
});

tlGradient.to(".item_image", {
    duration: 0.5,
    "--mask-gradient": finalGradient
});
/*const imageUrls = [
    "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg",
    "https://images.pexels.com/photos/1581793/pexels-photo-1581793.jpeg",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
];*/
const  imageUrls  = [
    "<div class='content-box'><h2>Title 1</h2><p>Description for content 1.</p></div>",
    "<div class='content-box'><h2>Title 2</h2><p>Description for content 2.</p></div>",
    "<div class='content-box'><h2>Title 3</h2><p>Description for content 3.</p></div>"
];
let currentImageIndex = 0;

function transitionImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    const $img = $(".item_image img");

    gsap.to($img, {
        duration: 0.5,
        opacity: 0,

    });
}

/*Gradient End Animation*/

/*Slice Animation*/
// Number of slices for the animation
const NUM_SLICES = 12;

function createSlices(num) {
    const overlay = document.getElementById("transition-overlay");
    overlay.innerHTML = "";
    for (let i = 0; i < num; i++) {
        const slice = document.createElement("div");
        slice.classList.add("slice");
        overlay.appendChild(slice);
    }
}

function playSliceTransition(onComplete) {
    const slices = document.querySelectorAll(".slice");
    const tl = gsap.timeline({
        onComplete: () => {
            if (onComplete) onComplete();
        }
    });

    // Animate in (cover screen)
    tl.to(slices, {
        duration: 0.6,
        scaleY: 1,
        stagger: {
            amount: 0.5,
            from: "start"
        },
        ease: "power2.inOut"
    });

    // Animate out (reveal new page)
    tl.to(slices, {
        duration: 0.6,
        scaleY: 0,
        stagger: {
            amount: 0.5,
            from: "end"
        },
        ease: "power2.inOut"
    }, "+=0.4");
}

document.addEventListener("DOMContentLoaded", () => {
    createSlices(NUM_SLICES);

    const links = document.querySelectorAll("a.transition-link");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");

            // Play transition, then redirect
            playSliceTransition(() => {
                window.location.href = href;
            });
        });
    });
});
