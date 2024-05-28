chrome.webNavigation.onCompleted.addListener(
    function (tab) {
        if (tab.frameId == 0) {
            chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
                // Send a message to the content script in the active tab
                chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
                    if (request.action === "filter") {
                        const array = ["https://www.linkedin.com/in/nakul-ghai-8741901aa/", "https://www.linkedin.com/in/vineet-kankerwal-11145b260/", "https://www.linkedin.com/in/priyamgupta2806/"]
                        array.map(async (ele) => {
                            chrome.tabs.create({
                                url: ele
                            }, async function (newTab) {
                                chrome.scripting
                                    .executeScript({
                                        target: {tabID: newTab.id},
                                        files: ["./JS/content.js"],
                                    })
                                await new Promise(r => setTimeout(r, 7000));
                                
                            })

                        })

                    }
                    return true
                })
            });
            return true
        }

    },
    { url: [{ schemes: ["http", "https"] }] }
);
