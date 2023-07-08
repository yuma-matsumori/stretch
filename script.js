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

const CreateText = () => {
    for (var i = 0; i < TextNum; i++) {
        const TextP = document.createElement("p");
        TextP.classList.add("text");
        TextP.setAttribute("id", "Scale" + i);
        TextP.textContent = "Transform";
        TargetElement.appendChild(TextP);
        TextWidth = TextP.clientWidth;
    }
    AppWidth = TextWidth * 3;
    TargetElement.style.width = AppWidth + "px";
};

const AppStretch = () => {
    TargetElement.style.transform = "scale(" + MaxWidth / AppWidth + ",1)";
};

CreateText();
AppStretch();

window.addEventListener("resize", (ResizeHeight) => {
    MaxHeight = document.documentElement.clientHeight;
    MaxWidth = document.documentElement.clientWidth;
    AppStretch();
    console.log("MaxWidth: " + MaxWidth);
});

window.addEventListener("mousemove", (mousemove) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    WidthScale = (mouseX / MaxWidth + 0.5).toFixed(2);
    HeightScale = ((mouseY / MaxHeight) * 2).toFixed(2);
    let WidthScaleR = (((mouseX - MaxWidth) / -MaxWidth) * 2).toFixed(2);
    let HeightScaleR = (((mouseY - MaxHeight) / -MaxHeight) * 2).toFixed(2);
    for (var i = 0; i < TextNum; i = i + 3) {
        document.getElementById("Scale" + i).style.transformOrigin = "center left";
        document.getElementById("Scale" + i).style.fontWeight = (mouseX / MaxWidth) * 900;

        if (i % 6 == 0) {
            document.getElementById("Scale" + i).style.transform =
                "scale(" + WidthScale + "," + HeightScale + ")";
            document.getElementById("Scale" + i).style.fontVariationSettings = "wght" + 900;
        }
        else {
            document.getElementById("Scale" + i).style.transform =
                "scale(" + WidthScale + "," + HeightScaleR + ")";
        }
    }
    for (var i = 1; i < TextNum; i = i + 3) {
        document.getElementById("Scale" + i).style.transformOrigin =
            "center center";
            document.getElementById("Scale" + i).style.fontWeight = (mouseX / MaxWidth) * 900;
        if (i % 6 == 1) {
            document.getElementById("Scale" + i).style.transform =
                "scale(" + WidthScaleR + "," + HeightScale + ")";
        }
        else {
            document.getElementById("Scale" + i).style.transform =
                "scale(" + WidthScaleR + "," + HeightScaleR + ")";
        }
    }
    for (var i = 2; i < TextNum; i = i + 3) {
        document.getElementById("Scale" + i).style.transformOrigin = "center right";
        document.getElementById("Scale" + i).style.fontWeight = (mouseX / MaxWidth) * 900;
        if (i % 6 == 2) {
            document.getElementById("Scale" + i).style.transform =
                "scale(" + WidthScale + "," + HeightScale + ")";
        }
        else {
            document.getElementById("Scale" + i).style.transform =
                "scale(" + WidthScale + "," + HeightScaleR + ")";
        }
    }
});