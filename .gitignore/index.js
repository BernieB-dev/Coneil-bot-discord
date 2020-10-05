const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!c";

Client.on("ready", () => {
    console.log("bot op");
});
//commande pt
Client.on("message",message =>{
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    
    if(message.content == prefix + "ping"){
        message.channel.send ("pong")
    }

});


// JOIN
Client.on("guildMemberAdd",member => {
    member.guild.channels.cache.find(channel => channel.id === "761885302612295700").send(member.displayName + "est arrivé en Lacoste Tn  ! " + "nous sommes désormais "   +  member.guild.memberCount   ) 
    member.roles.add("761879770484965376").then(mbr => {
        console.log("rôle attribuer avec succés pour") + member.dispayName + ("GG")

    }).catch(() => {
        console.log ("Le rôle a pas pu être attribuer vérifie les perms du bot et la hierarchie")

    });
});
//LEAVE
Client.on("guildMemberRemove", member => {
    member.guild.channels.cache.find(channel => channel.id === "761897147074478090").send(member.displayName + " est patie en caleçon ") 
})




Client.login("NzYyMDk0MjgzNjA3NzY5MTA5.X3kJnA.rO-1P-fk42T-bLtHXHyo-ND4H8c")
