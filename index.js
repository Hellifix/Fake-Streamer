const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("951901657099305001", "jele")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("ПОРНХАБЕ, Я ТАМ МОДЕРАТОР <3")
        .setUrl("https://vk.com/henless")
        .setType("STREAMING")
        .setApplicationId("951901657099305001")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("https://vk.com/henless")
        .setDetails("мой VK")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})
