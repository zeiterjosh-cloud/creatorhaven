async function loadTwitch(){

const res = await fetch("/twitch")

const data = await res.json()

document.getElementById("twitchData").textContent =
JSON.stringify(data,null,2)

}

async function loadYoutube(){

const res = await fetch("/youtube")

const data = await res.json()

document.getElementById("youtubeData").textContent =
JSON.stringify(data,null,2)

}
