chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action === "like") {
        // let scroll = 5
        // for (let i = 1; i < scroll+1; i++) {
        //     window.scroll({ left: 0, top: 2000* i, behavior: "smooth" })
        //     await new Promise(r => setTimeout(r, 2000));

        // }
        // await new Promise(r => setTimeout(r, 5000));
        // for (let i = 0; i < (likeButton.length < scroll ? likeButton.length : scroll); i++) {
        //     await new Promise(r => setTimeout(r, 2000));
        //     likeButton[i].click()
        // }
        // const comment = document.querySelectorAll("form.comments-comment-box__form")
        // console.log(comment)
        let likes = 5
        var likeButton = document.querySelectorAll("button.react-button__trigger")
        while (likeButton.length < likes) {
            window.scroll({ left: 0, top: 2000 * likes, behavior: "smooth" })
            await new Promise(r => setTimeout(r, 2000));
            likeButton = document.querySelectorAll("button.react-button__trigger")
            console.log(likeButton.length)
        }
        for (let i = 0; i < (likeButton.length < likes ? likeButton.length : likes); i++) {
            await new Promise(r => setTimeout(r, 2000));
            likeButton[i].click()
        }
    }
    return true
})