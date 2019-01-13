const Discord = require("discord.js");
const bot = new Discord.Client();
//const express = require('./express')
const reglesdiscord = require('./reglesdiscord')
const choixplateforme = require('./choixplateforme')
const ltfcommands = require('./ltfcommands')
const jeuxmobile = require('./jeuxmobile')
const jeuxpc = require('./jeuxpc')
const jeuxxbox = require('./jeuxxbox')
const jeuxps4 = require('./jeuxps4')
//Commande Avatar et activités du bot

bot.on('ready', function () {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Représente La Team Fraternel',
            type: "STREAMING",
            url: "https://twitch.tv/spykatra"
        }
    });
});

// Message de Bienvenue (Regles Discord)
bot.on('guildMemberAdd', member => {
    member.send({embed: {
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
            value: "Veuillez passer par le channel Présentation pour vous présenter"
          },
          {
            name: ":clock10:",
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
 });



bot.login(process.env.TOKEN);
