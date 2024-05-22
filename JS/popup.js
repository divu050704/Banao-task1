window.onload = () => {
    const button = document.getElementById("retrieve-title-button");
    button.addEventListener("click", async function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Get the title of the current tab
            var title = tabs[0].title;
            // Display the title in the popup
            document.getElementById('title').textContent = title;
        });
    })
}