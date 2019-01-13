//Settings!
const yourID = (process.env.YOURID); //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "ltf!reglesbienvenue"
let initialMessage = `**Nous espérons que tu auras bien pris conscience des conditions d´utilisations ! **`;
const roles = ["Invité"];
const reactions = ["528650980053745677"];/*You'll have to set this yourself; read more
                     here https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token*/


//Load up the bot...
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push({embed: {
        color: 3447003,
        author: {
          name: 'SpyKatra',
          icon_url: ''
        },
        title: "Bienvenue parmi nous, te voilà ici chez toi en espérant que tu apprécies cette expérience discord.",
        url: "https://www.facebook.com/lateamfraternels/",
        description: "A lire attentivement.. Conditions d'utilisations du groupe discord La Team Fraternel",
        fields: [{
            name: ":clock1:",
            value: "Aucun spam ne sera toléré."
          },
          {
            name: ":clock2:",
            value: "Respect absolu des autres utilisateurs."
          },
          {
            name: ":clock3:",
            value: "Pas de discours de haine, harcèlement, racisme, etc....( sous quelques formes que se soit ne seront tolérés)."
          },
          {
            name: ":clock4:",
            value: "Utilisez les canaux adéquates."
          },
          {
            name: ":clock5:",
            value: "Veuillez utiliser le tag @ here avec modération. (une limitation peut être mise en place en cas d'abus)."
          },
          {
            name: ":clock6:",
            value: "La direction se réserve tout droit sur les publications, les sortis et entrées de tout utilisateurs."
          },
          {
            name: ":clock7:",
            value: "Soyez attentif aux messages épinglés (sur tel c'est les 3 petits points en haut à droite et sélectionnez messages épinglés pour les lires)"
          },
          {
            name: ":clock8:",
            value: "Pour toutes questions veuillez contacter les responsables discord"
          },
          {
            name: ":clock9:",
            value: "Un message privé vous a été envoyé avec ces  conditions d'utilisations pour pouvoir les relire si besoin."
          },
          {
            name: ":clock10:",
            value: "Veuillez passer par le channel Présentation pour vous présenter"
          },
          {
            name: ":clock11:",
            value: "Passez aussi par le channel choix de plateforme pour choisir les plateformes sur lesquelles vous jouez"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: '',
          text: "© La Direction LTF"
        }
      }
    });
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Reagis ici pour avoir le role **"${role}"** et accéder au reste du Discord !`); //DONT CHANGE THIS
    return messages;
}


bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});
