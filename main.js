window.addEventListener("load", () => {
    let audio = [];

    const bar = {
        width: window.innerWidth / 128 - 8,
        height: 100,
        padding: 8,
    };

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth - 35;
    canvas.height = window.innerHeight - 35;

    document.body.appendChild(canvas);

    const listiner = (arr) => {
        audio = arr;
    };

    const draw = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (const [i, part] of audio.entries()) {
            const x = (i * bar.width) + ((i + 1) * bar.padding) - (bar.padding / 2);
            const y = 4;

            context.fillRect(x, y, bar.width, bar.height * part);
        }
        requestAnimationFrame(draw)
    };

    window.wallpaperRegisterAudioListener(listiner);

    draw();
});