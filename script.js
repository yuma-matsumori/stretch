"use strict";
let mouseX = 0;
let mouseY = 0;
const split = 12;
const adjustFontSize =1.176470588235294;
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

const DefaultFontSize = () => {
    return(
        HowManyToCreate() * adjustFontSize
    )
};

const randomSpeed = () => {
    const max = 12000,
        min = 6000;
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
        document.getElementById("G" + j).style.fontSize = DefaultFontSize() + "px";
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
GenerationText();

window.addEventListener("resize", () => {
     for (var j = 0; j < split; j++) {
        document.getElementById("G" + j).style.fontSize = DefaultFontSize() + "px";
        }; 
});

window.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    TargetElement.style.fontWeight = (mouseX / windowSizeCheck().width).toFixed(2) * 900;
});


for (var j = 0; j < split; j++) {
document.querySelector('#G'+ j).addEventListener("mouseover", (event) => {
  console.log("over");
  console.log(event.currentTarget);
  event.currentTarget.style.fontSize = (DefaultFontSize() * 2) + "px";
});

document.querySelector('#G'+ j).addEventListener("mouseleave", (event) => {
    console.log("leave");
    console.log(event.currentTarget);
    event.currentTarget.style.fontSize = DefaultFontSize() + "px";
  });
}