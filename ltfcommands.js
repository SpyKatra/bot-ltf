const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on('message', function (message){
    if (message.content === 'ltf!Facebook') {
        message.channel.send('Salut, je suis le nouveau bot de LTF, je suis le bot officiel d‘ailleurs !  Ne m’en voulez pas je suis encore en développement, mais j‘éspère être à jour rapidement !   **Lache un j´aime, https://www.facebook.com/lateamfraternels** @here')
    }
})

bot.on('message', function (message){
    if (message.content === 'ltf!Web') {
        message.channel.send('**Hey les petits amis !Voila notre site web !** https://lateamfraternel.wixsite.com/website?fbclid=IwAR0HiQzDJleKs4JjOrNNgCvcHZSmGwX2rTiPccIsi1tS6pIe49sC438Fhcc @here')
    }
})
