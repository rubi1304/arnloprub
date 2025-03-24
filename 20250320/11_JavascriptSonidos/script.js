let audios = document.querySelectorAll("audio");

for (let audio of audios) {
    const newaudio = document.createElement('button')
    newaudio.innerText = audio.id;
    newaudio.classList.add("btn")
    buttons.appendChild(newaudio)
    newaudio.addEventListener("click", () => {
        for (let audio of audios)
            audio.pause();
        audio.currentTime = 0;
        audio.play();
    })
};

function playaudio() {

}