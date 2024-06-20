// Listen for messages from the extension.
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    // Check if the action in the request is "record".
    if (request.action === "record") {
        const overlay = document.createElement("div")
        overlay.style.position = "fixed"
        overlay.style.height = "30%"
        overlay.style.width = "30%"
        overlay.style.bottom = 0
        overlay.style.right = 0
        overlay.style.zIndex = 2
        overlay.style.backgroundColor = "white"
        const button = document.createElement("button")
        button.innerHTML = "Start"
        button.style.backgroundColor = "#0051CB"
        button.style.width = "100%"
        button.style.height = "3rem"
        button.style.cursor = "pointer"
        button.id = "Banao-button"
        button.onclick = async () => {
            request = await chrome.runtime.sendMessage({ action: "start", tab: request.tab })
            if (button.innerHTML === "Start") {
                button.innerHTML = "Stop"

            }

        }
        overlay.id = "banao-overlay"
        overlay.appendChild(button)
        document.body.appendChild(overlay)
    }


    if (request.action === "info") {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: request.streamID,
                }
            }
        }).then(stream => {
            mediaRecorder = new MediaRecorder(stream);

            chunks = [];

            mediaRecorder.ondataavailable = function (e) {
                if (e.data.size > 0) {
                    chunks.push(e.data);
                }
            };

            async function stopRecording(e) {

                const blobFile = new Blob(chunks, { type: "video/webm" });
                if (blobFile.size > 0) {
                    const url = window.URL.createObjectURL(blobFile)
                    // Stop all tracks of stream
                    document.getElementById("Banao-button").innerHTML = "start"
                    const video = document.createElement("video")
                    const source = document.createElement("source")
                    video.controls = true
                    video.style.width = "100%"
                    video.style.height = "80%"
                    source.src = url
                    video.appendChild(source)
                    document.getElementById("banao-overlay").appendChild(video)
                }
                stream.getTracks().forEach(track => track.stop());



            }

            mediaRecorder.onstop = stopRecording
            document.getElementById("Banao-button").onclick = stopRecording
            mediaRecorder.start();

        })
    }

    

    // Return true to indicate that the response will be sent asynchronously.
    return true
})