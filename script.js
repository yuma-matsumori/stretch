"use strict";
let mouseX = 0;
let mouseY = 0;
const split = 8;
const adjustFontSize =1.1764;
const TargetElement = document.getElementById("app");

const windowSizeCheck = () => {
    let width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight;
    return { width, height };
};

const HowManyToCreate = () => {
    return (
        Number((windowSizeCheck().height / split).toFixed(0))
    )
};

const randomSpeed = () => {
    const max = 8000,
        min = 4000;
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    return (
        randomNum
    )
}

const GenerationText = () => {
    console.log("windowHeight: " + windowSizeCheck().height);
    console.log("HowManyToCreate: " + HowManyToCreate());
    const base = 8;
    for (var j = 0; j < split; j++) {
        const group = document.createElement("div");
        group.classList.add("group");
        group.setAttribute("id", "G" + j);
        TargetElement.appendChild(group);
        document.getElementById("G" + j).style.fontSize = (HowManyToCreate() * adjustFontSize) + "px";
        //Animation
        document.getElementById("G" + j).animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-25%)' }
        ], {
            duration: randomSpeed(),
            iterations: Infinity
        });
        //text
        for (var i = 0; i < base; i++) {
            const TextP = document.createElement("p");
            TextP.classList.add("text");
            TextP.textContent = "Bimyoo/YumaMatsumori/";
            group.appendChild(TextP);
        };
    };
};

window.addEventListener("resize", () => {
     for (var j = 0; j < split; j++) {
        document.getElementById("G" + j).style.fontSize = (HowManyToCreate() * adjustFontSize) + "px";
        }; 
});

window.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    TargetElement.style.fontWeight = (mouseX / windowSizeCheck().width).toFixed(2) * 900;
});

GenerationText();

window.addEventListener("mouseover", (event) => {
    //console.log(event.target);
  });