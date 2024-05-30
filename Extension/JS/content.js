try {
    async function execute() {
        await new Promise(r => setTimeout(r, 5000));
        // Fetch details of user with class names
        const Banaoname = document.querySelector("h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words").innerHTML
        const Banaobioline = document.querySelector("div.text-body-medium.break-words").innerHTML.replace(/^\s+|\s+$/g, '')
        const BanaouserLocation = document.querySelector("span.text-body-small.inline.t-black--light.break-words").innerHTML.replace(/^\s+|\s+$/g, '')
        const BanaofollowersAndConnections = document.querySelectorAll("span.t-bold") // There are multiple elements with this class name
        const Banaofollowers = BanaofollowersAndConnections[0].innerHTML;// Fetch the first element
        const Banaoconnections = BanaofollowersAndConnections[1].innerHTML // Fetch the second element 
        // About section's class name has multiple instances
        // About section is at 17th index
        // Clean strings before saving
        const about = document.querySelectorAll("span[aria-hidden='true']")[17].innerHTML.replace(/<!---->/g, '')

        const requestOptions = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ name: Banaoname, bioline: Banaobioline, l_ocation: BanaouserLocation, followers: Banaofollowers, c_onnections: Banaoconnections, about: about }),
        }
        fetch("http://localhost:8080/api/post", requestOptions)
    }
    
    window.onload = () => {
        execute()
    }
}
catch (e) {
    console.log(e)
}
