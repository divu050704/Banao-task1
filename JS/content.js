chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action === "like") {
        let likes = request.likes
        let comments = request.comments
        let counter = 0
        var likeButton = document.querySelectorAll("button.react-button__trigger[aria-label*='post']")
        while (counter-1 < likes) {
            if (likeButton.length - 1 < counter) {
                window.scroll({ left: 0, top: 2000 * likes, behavior: "smooth" })
                await new Promise(r => setTimeout(r, 2000));
                likeButton = document.querySelectorAll("button.react-button__trigger[aria-label*='post']")

            }
            else {
                likeButton[counter].scrollIntoView({ behavior: "smooth" })
                await new Promise(r => setTimeout(r, 1000));

                likeButton[counter].click();
                counter++;
            }
        }
        counter = 0;
        var commentButton = document.querySelectorAll("button[id*='feed-shared-social-action-bar-comment']")
        var commentForms = document.querySelectorAll("form.comments-comment-box__form")
        while (counter < comments) {
            if (commentButton.length - 1 < counter) {
                window.scroll({ left: 0, top: 2000 * counter, behavior: "smooth" })
                await new Promise(r => setTimeout(r, 1000));
                commentButton = document.querySelectorAll("button[id*='feed-shared-social-action-bar-comment']")
               
            }
            
            if (commentForms.length - 1 < counter) {
                commentButton[counter].click()
                await new Promise(r => setTimeout(r, 1000));
                commentForms = document.querySelectorAll("form.comments-comment-box__form")
            }
            else {
                const commentText = commentForms[counter].querySelector("p")
                commentText.innerText = "CFBR"
                commentText.scrollIntoView({behavior: "smooth"})
                await new Promise(r => setTimeout(r, 2000));
                var submitButton = document.querySelectorAll("button.comments-comment-box__submit-button")[0]
                submitButton.click()
                console.log(submitButton)
                await new Promise(r => setTimeout(r, 3000));

                counter++;
            }

        }
    }
    return true
})