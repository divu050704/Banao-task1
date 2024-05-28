try {
    async function execute() {
        await new Promise(r => setTimeout(r, 5000));
        const Banaoname = document.querySelector("h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words")
        const Banaobioline = document.querySelector("div.text-body-medium.break-words")
        const BanaouserLocation = document.querySelector("span.text-body-small.inline.t-black--light.break-words")
        const BanaofollowersAndConnections = document.querySelectorAll("span.t-bold")
        const Banaofollowers = BanaofollowersAndConnections[0];
        const Banaoconnections = BanaofollowersAndConnections[1]
        console.log(Banaobioline)
    }
    execute()
}
catch (e) {
    console.log(e)
}
