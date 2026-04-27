const shareBtn = document.getElementById("share-btn");
const authorInfo = document.querySelector(".author-info");
const authorAvatar = document.querySelector(".author-avatar");
const sharePanel = document.querySelector(".article-share-panel");
const shareContent = document.querySelector(".share-content");

function toggleHidden() {
    if (shareContent.classList.contains("hidden")) {
        shareContent.classList.remove("hidden");
        authorInfo.classList.add("hidden");
        authorAvatar.classList.add("hidden")
        sharePanel.style.backgroundColor = "hsl(217, 19%, 35%)";
    }

    else {
        shareContent.classList.add("hidden");
        authorInfo.classList.remove("hidden");
        authorAvatar.classList.remove("hidden")
        sharePanel.style.backgroundColor = "hsl(0, 0%, 100%)";
        
    }
}

shareBtn.addEventListener("click", toggleHidden);