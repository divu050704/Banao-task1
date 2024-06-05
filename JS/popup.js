window.onload = () => {
    const button = document.getElementById("retrieve-title-button");
    button.addEventListener("click", async function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { action: "like" });
        });
    })
}