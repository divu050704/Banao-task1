window.onload = () => {
    const button = document.getElementById("retrieve-title-button");
    button.addEventListener("click", async function () {
        const array = ["https://www.linkedin.com/in/nakul-ghai-8741901aa/", "https://www.linkedin.com/in/vineet-kankerwal-11145b260/", "https://www.linkedin.com/in/priyamgupta2806/"]
        array.map(async (ele) => {
            chrome.tabs.create({
                url: ele
            }, async function (newTab) {
                chrome.tabs.onUpdated.addListener(function listener(tabID, info) {
                    if (info.status === 'complete' && tabID === newTab.id) {
                        chrome.scripting
                            .executeScript({
                                target: { tabID: newTab.id },
                                files: ["./JS/content.js"],
                            })
                    }
                })


            })

        })
    })
}