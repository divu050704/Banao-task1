window.onload = () => {
    const button = document.getElementById("retrieve-title-button");
    button.addEventListener("click", async function () {
        await chrome.runtime.sendMessage({action: "filter"})
    })
}