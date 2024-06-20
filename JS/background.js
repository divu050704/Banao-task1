chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action === "start") {
        chrome.desktopCapture.chooseDesktopMedia(['screen', 'tab', 'window'], request.tab, function (streamID) {
            if (streamID === null) {
                return
            }
            chrome.tabs.sendMessage(request.tab.id, { action: "info", streamID: streamID});
            
        })
    }
    return true
})