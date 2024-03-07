const button = document.querySelectorAll("button");
const audio = document.querySelectorAll("audio");

const aButton = button[0];
const sButton = button[1];
const dButton = button[2];
const fButton = button[3];
const gButton = button[4];
const hButton = button[5];
const jButton = button[6];
const kButton = button[7];
const lButton = button[8];

const aAudio = audio[0];
const sAudio = audio[1];
const dAudio = audio[2];
const fAudio = audio[3];
const gAudio = audio[4];
const hAudio = audio[5];
const jAudio = audio[6];
const kAudio = audio[7];
const lAudio = audio[8];

// ! how to play container remove button
const info = document.querySelector(".info");
const inputBtn = document.querySelector("input");
inputBtn.addEventListener("click", () => {
    jAudio.play(jAudio);
    info.classList.add("remove");
})

// ! when button clicked play audio
function buttonClick() {
    aButton.addEventListener("click", async () => {
        aButton.classList.add("white-active");
        aAudio.currentTime = 0;
        aAudio.play();
        // * after 100ms from the click remove white-active class
        await new Promise(resolve => setTimeout(resolve, 100));
        aButton.classList.remove("white-active");
    });
    sButton.addEventListener("click", async () => {
        sButton.classList.add("white-active");
        sAudio.currentTime = 0;
        sAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        sButton.classList.remove("white-active");
    });
    dButton.addEventListener("click", async () => {
        dButton.classList.add("black-active");
        dAudio.currentTime = 0;
        dAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        dButton.classList.remove("black-active");
    });
    fButton.addEventListener("click", async () => {
        fButton.classList.add("white-active");
        fAudio.currentTime = 0;
        fAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        fButton.classList.remove("white-active");
    });
    gButton.addEventListener("click", async () => {
        gButton.classList.add("white-active");
        gAudio.currentTime = 0;
        gAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        gButton.classList.remove("white-active");
    });
    hButton.addEventListener("click", async () => {
        hButton.classList.add("black-active");
        hAudio.currentTime = 0;
        hAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        hButton.classList.remove("black-active");
    });
    jButton.addEventListener("click", async () => {
        jButton.classList.add("white-active");
        jAudio.currentTime = 0;
        jAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        jButton.classList.remove("white-active");
    });
    kButton.addEventListener("click", async () => {
        kButton.classList.add("white-active");
        kAudio.currentTime = 0;
        kAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        kButton.classList.remove("white-active");
    });
    lButton.addEventListener("click", async () => {
        lButton.classList.add("black-active");
        lAudio.currentTime = 0;
        lAudio.play();
        await new Promise(resolve => setTimeout(resolve, 100));
        lButton.classList.remove("black-active");
    });
}
buttonClick();

//! when button key is down play audio
function playAudio() {
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "a":
                // * currentTime = 0 reset's audio time when key is pressed
                aAudio.currentTime = 0;
                aAudio.play();
                aButton.classList.add("white-active");
                break;
            case "s":
                sAudio.currentTime = 0;
                sAudio.play();
                sButton.classList.add("white-active");
                break;
            case "d":
                dAudio.currentTime = 0;
                dAudio.play();
                dButton.classList.add("black-active");
                break;
            case "f":
                fAudio.currentTime = 0;
                fAudio.play();
                fButton.classList.add("white-active");
                break;
            case "g":
                gAudio.currentTime = 0;
                gAudio.play();
                gButton.classList.add("white-active");
                break;
            case "h":
                hAudio.currentTime = 0;
                hAudio.play();
                hButton.classList.add("black-active");
                break;
            case "j":
                jAudio.currentTime = 0;
                jAudio.play();
                jButton.classList.add("white-active");
                break;
            case "k":
                kAudio.currentTime = 0;
                kAudio.play();
                kButton.classList.add("white-active");
                break;
            case "l":
                lAudio.currentTime = 0;
                lAudio.play();
                lButton.classList.add("black-active");
                break;
            default:
                // ! Do nothing for other keys
                break;
        }
    })

    // ! keyup removes classList white-active
    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "a":
                aButton.classList.remove("white-active");
                break;
            case "s":
                sButton.classList.remove("white-active");
                break;
            case "d":
                dButton.classList.remove("black-active");
                break;
            case "f":
                fButton.classList.remove("white-active");
                break;
            case "g":
                gButton.classList.remove("white-active");
                break;
            case "h":
                hButton.classList.remove("black-active");
                break;
            case "j":
                jButton.classList.remove("white-active");
                break;
            case "k":
                kButton.classList.remove("white-active");
                break;
            case "l":
                lButton.classList.remove("black-active");
                break;
            default:
                break;
        }
    })
}
playAudio();