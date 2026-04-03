
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("changeTextBtn");
    const text = document.getElementById("dynamicText");

    if (btn) {
        btn.addEventListener("click", () => {
            text.textContent = "Change Starts Today! Keep Pushing!";
            burstEmojis();
        });
    }
});


fetch("https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current_weather=true")
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").textContent =
            "Current temperature: " + data.current_weather.temperature + "°C";
    });


const acc = document.querySelector(".accordion");
if (acc) {
    acc.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
}


const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("formStatus").textContent = "Your message has been sent!";
    });
}


function burstEmojis() {
    const container = document.getElementById("emojiContainer");
    const emojiList = ["💪", "🔥", "🎉", "✨", "⚡", "🦸"];

    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];

        emoji.style.left = (Math.random() * 200 - 100) + "px";

        container.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 1200);
    }
}
function openVideo(videoFile) {
    document.getElementById("videoSource").src = videoFile;
    document.getElementById("exerciseVideo").load();
    document.getElementById("videoModal").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function() {
    const closeModal = document.getElementById("closeModal");
    const videoModal = document.getElementById("videoModal");
    
    if (closeModal) {
        closeModal.addEventListener("click", function(e) {
            e.stopPropagation();
            videoModal.style.display = "none";
            document.getElementById("exerciseVideo").pause();
        });
    }
    if (videoModal) {
        videoModal.addEventListener("click", function(e) {
            if (e.target === videoModal) {
                videoModal.style.display = "none";
                document.getElementById("exerciseVideo").pause();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const tipsModal = document.getElementById("tipsModal");
    const closeTips = document.getElementById("closeTips");
    
    if (tipsModal) {
        tipsModal.style.display = "flex";
    }
    
    if (closeTips) {
        closeTips.addEventListener("click", function(e) {
            e.stopPropagation();
            tipsModal.style.display = "none";
        });
    }
    if (tipsModal) {
        tipsModal.addEventListener("click", function(e) {
            if (e.target === tipsModal) {
                tipsModal.style.display = "none";
            }
        });
    }
});
