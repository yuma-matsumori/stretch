"use strict";
let MaxHeight = document.documentElement.clientHeight;
let MaxWidth = document.documentElement.clientWidth;
let mouseX = 0;
let mouseY = 0;
let WidthScale = 0;
let HeightScale = 0;
let TextWidth = 0;
const Textheight = 64;
let TextNum = (MaxHeight / Textheight).toFixed() * 3;
const TargetElement = document.getElementById("app");
let AppWidth = 0;

const GenerationText = (num) => {
    console.log("num: " + num);
    const base = 6;
    for (var j = 0; j < num; j++) {
        const group = document.createElement("div");
        group.classList.add("group");
        group.setAttribute("id", "G" + j);
        TargetElement.appendChild(group);
        for (var i = 0; i < base; i++) {
            const TextP = document.createElement("p");
            TextP.classList.add("text");
            TextP.textContent = "Bimyoo/YumaMatsumori/";
            group.appendChild(TextP);
            TextWidth = TextP.clientWidth;
        };
    };
};

const windowSizeCheck = () => {
    let width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight;
    return { width, height };
};

const HowManyToCreate = () => {
    return (
        (windowSizeCheck().height / Textheight).toFixed(0)
    )
};

const randomSpeed = () => {
    const max = 6,
        min = 4;
    return (Math.floor(Math.random() * (max - min) + min)) + "s";
}

window.addEventListener("resize", (ResizeHeight) => {
});

window.addEventListener("mousemove", (mousemove) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    WidthScale = (mouseX / MaxWidth + 0.5).toFixed(2);
    HeightScale = ((mouseY / MaxHeight) * 2).toFixed(2);
    let WidthScaleR = (((mouseX - MaxWidth) / -MaxWidth) * 2).toFixed(2);
    let HeightScaleR = (((mouseY - MaxHeight) / -MaxHeight) * 2).toFixed(2);
    document.getElementById("app").style.fontWeight = (mouseX / windowSizeCheck().width).toFixed(2) * 900;
});

GenerationText(HowManyToCreate());