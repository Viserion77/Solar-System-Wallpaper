window.addEventListener("load", () => {
    let audio = [];

    const width = window.innerWidth;
    const height = window.innerHeight;

    const width2 = width / 2;
    const height2 = height / 2;

    const bar = {
        width: width / 128 - 8,
        height: 100,
        padding: 8,
    };

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    document.body.appendChild(canvas);

    const listiner = (arr) => {
        audio = arr;
    };

    const draw = () => {
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#1e1e36";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "#000000";

        for (const [i, part] of audio.entries()) {
            const x = (i * bar.width) + ((i + 1) * bar.padding) - (bar.padding / 2);
            const y = 4;

            context.fillRect(x, y, bar.width, bar.height * part);
        }

        const solarContext = context;

        solarContext.save();

        solarContext.translate(width2, height2);
        solarContext.fillStyle = "yellow";
        solarContext.beginPath();

        solarContext.arc(0, 0, 110, 0, Math.PI * 2, true);
        solarContext.fill();

        solarContext.strokeStyle = "black";
        solarContext.beginPath();

        solarContext.arc(0, 0, 150, 0, Math.PI * 2);
        solarContext.stroke();

        var now = new Date();
        var seconds = ((now.getSeconds() * 1000) + now.getMilliseconds()) / 1000;
        anglePerSecond = ((Math.PI * 2) / 60);

        solarContext.rotate(anglePerSecond * seconds);
        solarContext.translate(150, 0);

        solarContext.fillStyle = "green";
        solarContext.beginPath();
        solarContext.arc(0, -0, 3, 0, Math.PI * 2, true);
        solarContext.fill();

        solarContext.strokeStyle = "black";
        solarContext.beginPath();

        solarContext.arc(0, 0, 15, 0, Math.PI * 2);
        solarContext.stroke();

        anglePerSecond = 12 * ((Math.PI * 2) / 60);
        solarContext.rotate(anglePerSecond * seconds);
        solarContext.translate(0, 15);

        solarContext.fillStyle = "white";
        solarContext.beginPath();
        solarContext.arc(0, 0, .5, 0, Math.PI * 2, true);
        solarContext.fill();

        solarContext.restore();
        requestAnimationFrame(draw);
    };

    try {
        window.wallpaperRegisterAudioListener(listiner);
    } catch (error) {}

    draw();
});