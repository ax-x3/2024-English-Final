function reload() {
    detectVisibility();
    resizeTitle();
    remouse();
}

function detectVisibility() {
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            document.title = "Reality"
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = 'realityICON.png';
        } else {
            document.title = "Appearance"
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = 'appearanceICON.png';
        }
     });
}

function resizeTitle() {
    let titleFontSize = window.innerWidth / 8 - 20;
    if (titleFontSize > 250) {
        titleFontSize = 250;
    }
    document.getElementById("movingTitle").style.fontSize = titleFontSize + "px";
    document.getElementById("movingTitle2").style.fontSize = titleFontSize + "px";
    document.getElementById("movingTitle2").style.textShadow = "0 0 " + titleFontSize/4.5 + "px #000";
}

function resizeSongTitles() {
    if (window.innerWidth < 1650) {
        const elements = document.querySelectorAll('.songDesc');
        elements.forEach(element => {
            element.style.display = 'block';
        });
    } else {
        const elements = document.querySelectorAll('.songDesc');
        elements.forEach(element => {
            element.style.display = 'inline-block';
        });
    }
}

function coordinate(event) {
    let x = event.clientX;
    let y = event.clientY;
        document.getElementById("movingTitle").style.left = "calc(0.075 * (" + x + "px - 50%) + 50%)";
        document.getElementById("movingTitle").style.top = "calc(0.075 * (" + y + "px - 50%) + 50%)";
        document.getElementById("movingTitle2").style.left = "calc(-0.075 * (" + x + "px - 50%) + 50%)";
        document.getElementById("movingTitle2").style.top = "calc(-0.075 * (" + y + "px - 50%) + 50%)";
}

function remouse() {
    setTimeout(() => {
        document.getElementById("movingTitle").style.transition = "none";
        document.getElementById("movingTitle2").style.transition = "none";
    }, 50);   
}

function recenter() {
    document.getElementById("movingTitle").style.transition = "cubic-bezier(0,.57,1,.71) 50ms";
    document.getElementById("movingTitle").style.left = "50%";
    document.getElementById("movingTitle").style.top = "45%";
    document.getElementById("movingTitle2").style.transition = "cubic-bezier(0,.57,1,.71) 50ms";
    document.getElementById("movingTitle2").style.left = "50%";
    document.getElementById("movingTitle2").style.top = "55%";
}

function focusFg(action) {
    if (action == "f") {
        document.body.style.background = "#666";
    } else {
        document.body.style.background = "#fff";
    }



    // if (action == "focus") {
    //     document.body.style.background = "#666";
    //     document.getElementsByClassName("focusableIframe").className = "focusedIframe";
    // } else {
    //     document.body.style.background = "#fff";
    //     document.getElementsByClassName("focusedIframe")[0].className = "focusableIframe";
    // }
}