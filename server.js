const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.static("public"))

const TWITCH_CLIENT_ID = "YOUR_TWITCH_CLIENT_ID"
const TWITCH_TOKEN = "YOUR_TWITCH_ACCESS_TOKEN"

const YOUTUBE_KEY = "YOUR_YOUTUBE_API_KEY"

app.get("/twitch", async (req,res)=>{

 try{

 const response = await axios.get(
 "https://api.twitch.tv/helix/streams",
 {
 headers:{
 "Client-ID":TWITCH_CLIENT_ID,
 "Authorization":"Bearer "+TWITCH_TOKEN
 }
 }
 )

 res.json(response.data)

 }catch(err){
 res.send("Error getting Twitch data")
 }

})

app.get("/youtube", async (req,res)=>{

 try{

 const response = await axios.get(
 `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=YOUR_CHANNEL_ID&key=${YOUTUBE_KEY}`
 )

 res.json(response.data)

 }catch(err){
 res.send("Error getting YouTube data")
 }

})

app.listen(3000,()=>{
 console.log("Dashboard running on http://localhost:3000")
})
