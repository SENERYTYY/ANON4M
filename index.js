
const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
var weather = require('weather-js');
const superagent = require('superagent');


bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)
    
    
           let státuszok = [
          "Készítő: SENERYTY",
          "!help",
          `${bot.guilds.cache.size} szerveren`
        
        
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]
       
        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message =>{
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `anonim`){
      message.channel.send("igen?");
    }

    if(cmd === `${prefix}hello`){
        message.channel.send("Szióka , hogysmint? Ha szeretnéd bogarázd át botuk parancsait!! 😃");
      }
      if(cmd === `${prefix}h`){
        message.channel.send("Ho- Ho- Ho- Ho, Szia Gentleman Kisapám, azért jöttem , hogy elmondjam mi a jövőd sorsa. Hát buzi leszel, na, de mind 1 majd holnap jövök hozzád 🎇");
      }
      




      if(cmd === `${prefix}help`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor("Én a mikulás vagyok , nekem miért lenne parancsom??")
        .setTimestamp(message.createdAt)
        .setFooter(bot.user.username)

        message.channel.send(TesztEmbed)
      }   


      if(cmd === `${prefix}anoniminfo`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setThumbnail(message.author.displayAvatarURL())
        .addField("ID:","907251669497184307")
        .addField("prefix","!")
        .addField("Név:", "ANON4M")
        .addField("bot discord neve:", " _Anon4m_#8475")
        .addField("státusz:", "_ONLINE_  📈 ")
        .addField("Készült:","2021 11 08")
        .addField("Készítő:", "SENERYTY")
        .addField("Készítő discord neve:", "SENERYTY#3904")
        .setTimestamp(message.createdAt)
        .setFooter(bot.user.username)
        

        message.channel.send(TesztEmbed)
      }   


      
      


      if(cmd == `${prefix}ping`) {
        message.channel.send(`Ping: **${bot.ws.ping}ms**`)
      }
      if(cmd === `${prefix}rendszergazda`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM") 
        .setDescription("```**FEJLESZTŐ: SENERYTY**```")
        message.channel.send(TesztEmbed)

      }
      

      if(cmd === `${prefix}hack`){
        //felhasználó lékérése
        const hack_usr = message.mentions.users.first();
        //ha nincs felhasználó
      if(!hack_usr){
        return message.reply('adj meg egy felhasználót, akit meg tudok hackelni!')
      }
      //felhasználó
      let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
      
      //embedek
      
       const embed_kezdes = new Discord.MessageEmbed().setDescription('A hack előkészül!');
       consthacked = new Discord.MessageEmbed().setDescription('HACKED.')
       consthacked2 = new Discord.MessageEmbed().setDescription('HACKED..')
       consthacked3 = new Discord.MessageEmbed().setDescription('HACKED...')
        const10 = new Discord.MessageEmbed().setDescription('HACKED.\n\nA hack állapota: 10%');
       const20 = new Discord.MessageEmbed().setDescription('HACKED..\n\nA hack állapota: 20%');
      const30 = new Discord.MessageEmbed().setDescription('HACKED...\n\nA hack állapota: 30%');
      constserver = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 46%`\n\nA hack állapota: 34%');
      constserver2 = new Discord.MessageEmbed().setDescription('HACKED..\n`Sever connections: 95%`\n\nA hack állapota: 39%');
      constserver3 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`')
      const40 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n\nA hack állapota: 40%');
      const50 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n\nA hack állapota: 50%');
      constfeldolgozas = new Discord.MessageEmbed() .setTitle("HACKED...\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 37%`');
      constfeldolgozas2 = new Discord.MessageEmbed() .setTitle("HACKED.\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 74%`');
      constfeldolgozas3 = new Discord.MessageEmbed() .setTitle("HACKED..\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 100%, kész!`');
      constfeldolgozas4 = new Discord.MessageEmbed() .setTitle(`HACKED...\nServer connections: 100%\n**Member username: ${hack_usr}**`);
      const60 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n\nA hack állapota: 60%');
      const70 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n\nA hack állapota: 70%');
      constconnections = new Discord.MessageEmbed().setDescription("HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 12%`\n\nA hack állapota: 72°%");
      constconnections2 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 39%`\n\nA hack állapota: 75%');
      constconnections3 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 51°%`\n\nA hack állapota: 78°%');
      constconnections4 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 86%`\n\nA hack állapota: 79%');
      constconnections5 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`')
      const80 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 80%');
      const90 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 90%');
      const100 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 100%!');
      constkesz = new Discord.MessageEmbed().setDescription('HACKED:**\nA hackelés befejeződött! Az eredmény:**\n\n\n\nA hack állapota: 100%!');
      consteredmeny = new Discord.MessageEmbed().setDescription(`HACKED:**\nA hackelés befejeződött! Az eredmény:**\n **USERNAME:** ${hack_usr}\n **TAG:** ${hack_usr.tag}\n **EMAIL-CÍM:** ${hack_usr}@gmail.com\n\n\n\nA hack állapota: 100%!`);
      //üzenet küldése
      message.channel.send({ embed: embed_kezdes }).then((msg) => {
          setTimeout(function () {
              msg.edit(consthacked);
              msg.edit(consthacked2);
              msg.edit(consthacked3);
              msg.edit(const10);
              msg.edit(const20);
              msg.edit(const30);
              msg.edit(constserver);
              msg.edit(constserver2);
              msg.edit(constserver3);
              msg.edit(const40);
              msg.edit(const50);
              msg.edit(constfeldolgozas);
              msg.edit(constfeldolgozas2);
              msg.edit(constfeldolgozas3);
              msg.edit(constfeldolgozas4);
              msg.edit(const60);
              msg.edit(const70);
              msg.edit(constconnections);
              msg.edit(constconnections2);
              msg.edit(constconnections3);
              msg.edit(constconnections4);
              msg.edit(constconnections5)
              msg.edit(const80);
              msg.edit(const90);
              msg.edit(const100);
              msg.edit(constkesz)
              msg.edit(consteredmeny);
          }, 5000)
      })
      }    

      const badwords = ["buzi", "fasz","pöcs","kurva","fos","anyád","geci","gec4","ge4i","bödös"]
    for(let i = 0; i < badwords.length; i++) {
        if(cmd == badwords[i]) {
            message.delete()
            message.reply("Ne káromkodj!");
        }
   
    }




{

         
      if (cmd === `${prefix}8b`) {
        if(!args[0]) return message.reply("Tegyél fel egy kérdést ")
        let replies = ["Igen", "Úgy néz ki, hogy Igen de nem biztos!", "Persze", "Soha", "Nem hiszem", "Jobb ha nem mondom most el", "Nem úgy néz ki", "Nem"]

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballEmbed = new Discord.MessageEmbed()
        .setAuthor(` ${message.author.username}`)
        .setColor("#ff1800")
        .addField("Kérdés", question)
        .addField("Válasz", replies[result])

        message.channel.send(ballEmbed).then(async msg => {
            await msg.react(":star_struck:")
            await msg.react(":pensive:")
        })
    }

} 
if(cmd === `${prefix}szavazás`){
  if(message.member.hasPermission("ADMINISTRATOR"))
  if(args[0]){
      let he_embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag + `|Szavazást indított!`)
      .setDescription(args.join(" "))
      .setColor("RANDOM")
      .setTimestamp(message.createdAt)
      .setFooter(bot.user.username)

          message.channel.send(he_embed).then(async msg => {
              await msg.react("✅")
              await msg.react("❌")
          })


  } else {
      message.reply("Kérlek add meg a szavazást!")
  }
  const figlet = require('figlet');

  
}




if(cmd === `${prefix}FI`) {
  let válaszArray = ["fej","fej", "írás","fej","írás","írás",];
  let válaszNum = Math.floor(Math.random() * válaszArray.length) + 1;
  if(MessageArray[1] === `fej` || MessageArray[1] === `írás` || MessageArray[1] === `írás`|| MessageArray[1] === `fej`) {

  message.reply(`Te: ${MessageArray[1]} : ${válaszArray[válaszNum]}`);
  } else message.reply("Kérlek adj meg egy tárgyat! pl fej, írás")


}
if (cmd === `${prefix}say`){
  if(message.member.hasPermission("CONNECT")){
      if(args[0]){
          let say_embed = new Discord.MessageEmbed()
          .setDescription(args.join(" "))
          .setColor("BLUE")
          .setTimestamp(message.createdAt)
          .setFooter(bot.user.username)

          message.channel.send(say_embed);
      } else {
          message.reply(`Használat: ${prefix}say <üzenet>`)
      }
  } else message.reply("Ehhez nincs jogod! (Kick_MEMBERS jogot igényel!)")
}


if(cmd === `${prefix}kick`){
  let kick_user = message.mentions.members.first();
  if(message.member.hasPermission("KICK_MEMBERS"))
  if(args[0] && kick_user){
    

      if(args[1]){

          let KickEmbed = new Discord.MessageEmbed()
          .setTitle("KICK")
          .setColor("BLUE")
          .setDescription(`**Kickelte:** ${message.author.tag}\n**Kickelve lett:** ${kick_user.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)

          message.channel.send(KickEmbed);

              kick_user.kick(args.slice(1).join(" "));


      } else {
      let parancsEmbed = new Discord.MessageEmbed()
          .setTitle("parancs használata")
          .addField(`${prefix}kick <@név> [indok]`, "ˇˇˇˇ")
          .setColor("RED")
          .setDescription("HIBA: Kérlek adj meg egy indokot!")

          message.channel.send(parancsEmbed);
      }
     
      
  } else {
      let parancsEmbed = new Discord.MessageEmbed()
      .setTitle("parancs használata")
      .addField(`${prefix}kick <@név> [indok]`, "ˇˇˇˇ")
      .setColor("RED")
      .setDescription("HIBA: Kérlek említs meg egy felhasználót!")

      message.channel.send(parancsEmbed);

  }
}




if(cmd === `${prefix}clear`){
  if(message.member.hasPermission("KICK_MEMBERS")){
      if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){

           if(args[0] && isNaN(args[0]) && args[0] <= 100 || 0 < args[0] && args[0] < 101){

              message.channel.send(`Törölve lett: ${Math.round(args[0])} üzenet!`)
              message.channel.bulkDelete(Math.round(args[0]))

           } else {
               message.reply(`Használat: ${prefix}clear <1-100>`)
           }


      } else message.reply("A botnak adminnak kell lennie a szerveren, hogy működjön a parancs!")


      

  } else message.reply("Ehhez a parancshoz nincs jogod!")
}



  if(cmd === `${prefix}avatar`){
    let TesztEmbed = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())


    message.channel.send(TesztEmbed)
  }

  if(cmd === `${prefix}idő`){
    let TesztEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp(message.createdAt)
    .setDescription("```**AZ IDŐ A BAL SAROKBA TALÁLHATÓ!**```")

    message.channel.send(TesztEmbed)
  }

  if(cmd === `${prefix}ölelés`){
 
    let hugged_user = message.mentions.members.first();
  
    if(!hugged_user){
    return message.reply("Említsd meg azt az embert akit meg szeretnél ölelni!")
    }
    

    let hug_gif = [

      // Ide berakhatsz olyan linket amilyen gifet szeretnél hogy mutasson

      'https://tenor.com/view/gato-cat-dog-love-gif-9061092',
      'https://giphy.com/gifs/lisa-vertudaches-cute-hug-empathy-3oEdv4hwWTzBhWvaU0',
      'https://giphy.com/gifs/love-hug-monkey-42YlR8u9gV5Cw',
      'https://giphy.com/gifs/hug-minions-love-QbkL9WuorOlgI',
      'https://giphy.com/gifs/love-disney-girl-EvYHHSntaIl5m',
      'https://giphy.com/gifs/namslam-hug-seal-xT0xemCvkpWyJlOG2Y',
      'https://giphy.com/gifs/hug-cat-love-NhjPhBQIIxdxm',
      'https://giphy.com/gifs/scoob-scooby-doo-hanna-barbera-JUZ8v4zWXX9bEZgBq8'
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
  
    
    message.channel.send(`${message.author} megölelte őt: ${hugged_user} :hugging:`)
    message.channel.send(hug_gif[random_hug_gif])

  }


  if(cmd === `${prefix}weather`){
    if(args[0]){
      weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if (err) message.reply(err);

        if(result.length === 0){
            message.reply("Kérlek adj meg egy létező település nevet!")
            return;
        }

        let current = result[0].current;
        let location = result[0].location;

        let WeatherEmbed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Időjárás itt: ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("#ff0000")
        .addField("Időzóna:", `UTC${location.timezone}`, true)
        .addField("Fokozat típusa:", `${location.degreetype}`, true)
        .addField("Hőfok", `${current.temperature}°C`, true)
        .addField("Hőérzet:", `${current.feelslike}°C`, true)
        .addField("Szél", `${current.winddisplay}`, true)
        .addField("Páratartalom:", `${current.humidity}%`, true)

        message.channel.send(WeatherEmbed);
    })

} else {
    message.reply("Kérlek adj meg egy település nevet!")
}
   

  }

  if(message.content.startsWith('!btc')){
    const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();
        let data = await CoinGeckoClient.simple.price({
            ids: ['bitcoin'],
            vs_currencies: ['huf', 'usd'],
        });
        console.log(data)
        let btcEmbed = new Discord.MessageEmbed()
        .setDescription(`Bitcoin Árfolyam`)
        .setColor("#ff1800")
        .setFooter(bot.user.username)
        .addField("Bitcoin jelenlegi árfolyama: " + data.data.bitcoin.huf + " HUF ", "Rengeteget ér most! Csekkold le!")
        .addField("Bitcoin jelenlegi árfolyama: " + data.data.bitcoin.usd + " USD ", "Rengeteget ér most! Csekkold le!")
        .setThumbnail("https://cdn.discordapp.com/attachments/720055841390198815/884817291114610748/bitcoin-icon-6219383_1280.png")

        message.channel.send(btcEmbed);
        

      






  }
  if(cmd === `${prefix}catmeme`){
 
    
    let hug_gif = [

     'https://tenor.com/view/cool-cat-gif-18199666' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])

  }

  {
  }
  if(cmd === `${prefix}dogmeme`){
 
    
    
    let hug_gif = [

      

     'https://tenor.com/view/what-dog-funny-whats-up-sup-gif-17916746' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
  
    
    
    message.channel.send(hug_gif[random_hug_gif])

  }


  {

    
    if(cmd === `${prefix}egérmeme`){
      
      let hug_gif = [

  
       'https://tenor.com/view/mouse-wiggle-nose-cute-animal-gif-5505721' 
      ]
      let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
      
      message.channel.send(hug_gif[random_hug_gif])
  
    }
    if(cmd === `${prefix}patkánymeme`){
      
      let hug_gif = [

  
       'https://tenor.com/view/rat-mouse-mice-exercise-workout-gif-18172436' 
      ]
      let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
      
      message.channel.send(hug_gif[random_hug_gif])
  
    }


  }
{

  if(cmd === `${prefix}music`){
      
    let hug_gif = [
      

     'https://youtu.be/m-drkLdwtuA' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}


}
if(cmd === `${prefix}insta`){
      
  let hug_gif = [


   'https://www.instagram.com/anon4_m/' 
  ]
  let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
  
  message.channel.send(hug_gif[random_hug_gif])
}


{

  if(cmd === `${prefix}micimackómeme`){
      
    let hug_gif = [
      

     'https://tenor.com/view/food-dance-happydance-winnie-the-pooh-pooh-gif-5277207' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}


{


  //////////////////////////kezdődik

  if(cmd === `${prefix}error`){
      
    let hug_gif = [
      

     'https://tenor.com/view/cat-error-computer-gif-23730966' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}


{


  if(cmd === `${prefix}box`){
      
    let hug_gif = [
      

     'https://tenor.com/view/cat-cute-adorable-punch-gif-17822730' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}


{


  if(cmd === `${prefix}spotify`){
      
    let hug_gif = [
      

     'https://open.spotify.com/playlist/3V6ZF0IXWB5homsLZmg87P?si=e0dffc8876724d38' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}








{


  if(cmd === `${prefix}sad`){
      
    let hug_gif = [
      

     'https://tenor.com/view/crying-gif-23831260' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}



{


  if(cmd === `${prefix}patrik`){
      
    let hug_gif = [
      

     'https://tenor.com/view/-gif-4470566' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}


{


  if(cmd === `${prefix}wow`){
      
    let hug_gif = [
      

     'https://tenor.com/view/oh-my-god-wow-oh-my-god-gif-20644120' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}

{
  if(cmd === `${prefix}musiccat`){
      
    let hug_gif = [
      

     'https://tenor.com/view/cute-cute-cat-cat-dance-dance-danse-gif-17603476' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  




}






{


  if(cmd === `${prefix}dance`){
      
    let hug_gif = [
      

     'https://tenor.com/view/pole-dance-pole-dancing-girl-gif-11085064' 
    ]
    let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
    
    message.channel.send(hug_gif[random_hug_gif])
}
  
}



{
  if(cmd === `${prefix}cica`) {
    let msg = await message.channel.send("Generálás...") 

 let {body} = await superagent
 .get(`http://aws.random.cat/meow`)
 //console.log(body.file) 
 if(!{body}) return message.channel.send("Nem sikerült a kép legenerálása!")

 let cEmbed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setAuthor('Anonim | Cica', message.guild.iconURL())
 .setImage(body.file)
 .setTimestamp()

 message.channel.send(cEmbed)

 msg.delete();
}
}








{
 
  if(cmd === `${prefix}kutya`) {
    let msg = await message.channel.send('Generálás... ')

var dog;

dog = await superagent
   .get("https://random.dog/woof.json");

while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {
   dog = await superagent
       .get("https://random.dog/woof.json");
   console.log(dog.body)
}
msg.delete()
var embed = new Discord.MessageEmbed()
   .setColor("#ff0000")
   .setTitle("Anonim | Kutya")
   .setImage(dog.body.url)
   .setTimestamp()
message.channel.send(embed);
}
}




{

  
  if(cmd === `${prefix}warn`){
    let warn_user = message.mentions.members.first();
    if(message.member.hasPermission("ADMINISTRATOR"))
    if(args[0] && warn_user){
      
  
        if(args[1]){
  
            let WarnEmbed = new Discord.MessageEmbed()
            .setTitle("WARN")
            .setColor("BLUE")
            .setDescription(`**Figyelmeztette:** ${message.author.tag}\n**Figyelmeztetve lett:** ${warn_user.user.tag}\n**Figyelmeztetés indoka:** ${args.slice(1).join(" ")}`)
  
            message.channel.send(WarnEmbed);
  
               
  
        } else {
        let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("parancs használata")
            .addField(`${prefix}warn <@név> [indok]`, "ˇˇˇˇ")
            .setColor("RED")
            .setDescription("HIBA: Kérlek adj meg egy indokot!")
  
            message.channel.send(parancsEmbed);
        }
       
        
    } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("parancs használata")
        .addField(`${prefix}warn <@név> [indok]`, "ˇˇˇˇ")
        .setColor("RED")
        .setDescription("HIBA: Kérlek említs meg egy felhasználót!")
  
        message.channel.send(parancsEmbed);



  
    }
  }
  
}

}
















  







      
 
})







  

bot.login(tokenfile.token);

