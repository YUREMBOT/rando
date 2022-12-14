import cheerio from 'cheerio'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
let handler = m => m
handler.all = async function (m) {
	
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
  let emot = {
      agility: '๐คธโโ๏ธ Agilidad : Agility',
      arc: '๐น Arco : Arc',
      armor: '๐ฅผ Armadura : Armor',
      ayam: '๐ Pollo : Chicken',
      //armordurability: '๐คบ ',
      babi: '๐ Puerco : Pig',
      bank: '๐ฆ Banco : Bank',
      Jabali: '๐ Jabalรญ : Wild Boar',
      bibitanggur: '๐ Semilla de Uva : Grapeseed',
      bibitapel: '๐ Semilla de Manzana : Apple Seed',
      bibitjeruk: '๐ Semillas de naranja : Orange Seeds',
      bibitmangga: '๐ฅญ Semilla de Mango : Mango Seed',
      bibitpisang: '๐ Semillas de Plรกtano : Banana Seeds',
      bow: '๐น Super Arco : Super Bow',
      bull: '๐ Toro : Bull',    
      buaya: '๐ Cocodrilo : Alligator',    
      cat: '๐ Gato : Cat',      
      centaur: '๐ Centauro : Centaur',
      chicken: '๐ Pollo : Chicken',
      common: '๐ฆ Caja Comรบn : Common Box',
      cow: '๐ Vaca : Cow',
      crystal: '๐ฎ Cristal : Crystal',
      darkcrystal: 'โ ๏ธ Cristal Oscuro : Dark Glass',
      diamond: '๐+ Diamante+ : Diamond+',
      dog: '๐ Perro : Dog',
      dragon: '๐ Dragรณn : Dragon',
      elephant: '๐ Elefante : Elephant',
      emerald: '๐ Esmeralda : Emerald',
      exp: 'โก Experiencia : Exp',
      fishingrod: '๐ฃ Caรฑa de Pescar : Fishing Rod',
      fox: '๐ฆ Zorro : Fox',
      gems: '๐ Gemas : Gemas',
      giraffe: '๐ฆ Jirafa : Giraffe',
      griffin: '๐ฆ Ave : Griffin', //Mascota : Griffin',
      gold: '๐ Oro : Gold',
      health: 'โค๏ธ Salud : Health',
      horse: '๐ Caballo : Horse',
      intelligence: '๐ง  Inteligencia : Intelligence',
      iron: 'โ๏ธ Hierro : Iron',
      kambing: '๐ Cabra : Goat',
      keygold: '๐ Llave de Oro : Key Gold',
      keyiron: '๐๏ธ Llave de Hierro : Key Iron',
      kerbau: '๐ Bรบfalo : Buffalo',
      kyubi: '๐ Magia : Magic',
      knife: '๐ช Cuchillo : Knife',
      legendary: '๐ Caja Legendaria : Legendary Box',
      level: '๐งฌ Nivel : Level',
      limit: '๐ Diamante : Diamond',
      lion: '๐ฆ Leรณn : Lion',
      magicwand: 'โ๏ธ Varita Mรกgica : Magic Wand',
      mana: '๐ช Hechizo : Spell',
      dorracoins: '๐ช DORRATCOINS : BotCoins',
      monyet: '๐ Mono : Monkey',
      mythic: '๐ณ๏ธ Caja Mรญtica : Mythic Box',
      panda: '๐ผ Panda',
      pet: '๐ฑ Caja para Mascota : Pet Box',
      petFood: '๐ Alimento para Mascota : Pet Food',
      pickaxe: 'โ๏ธ Pico : Peak',
      pointxp: '๐ง Puntos Exp : Point Xp',
      potion: '๐ฅค Pociรณn : Potion',
      phonix: '๐๏ธ Fรฉnix : Phoenix',
      rhinoceros: '๐ฆ Rinoceronte : Rhinoceros',
      rock: '๐ชจ Roca : Rock',
      robo: '๐ Robo : Robo',
      snake: '๐ Serpiente : Snake',
      stamina: '๐ฆพ Aguante : Stamina',
      strength: '๐ฆนโ โ๏ธ Fuerza : Strength',
      string: '๐ธ๏ธ Cuerda : Cuerda',
      superior: '๐ผ Superior : Superior',
      sword: 'โ๏ธ Espada : Sword',
      tiger: '๐ Tigre : Tiger',
      joincount: '๐ช Token',
      trash: '๐ Basura : Trash',
      uncommon: '๐ฅก Caja Poco Comรบn : Uncommon',
      upgrader: '๐งฐ Aumentar Mejora : Upgrade',
      wolf: '๐บ Lobo : Wolf',
      wood: '๐ชต Madera : Wood'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      agility: '๐คธโโ๏ธ',
      arc: '๐น',
      armor: '๐ฅผ',
      ayam: '๐',
      //armordurability: '๐คบ ',
      babi: '๐',
      bank: '๐ฆ',
      Jabali: '๐',
      bibitanggur: '๐',
      bibitapel: '๐',
      bibitjeruk: '๐',
      bibitmangga: '๐ฅญ',
      bibitpisang: '๐',
      bow: '๐น',
      bull: '๐',
      buaya: '๐',  
      Bot: '๐ช',      
      centaur: '๐',
      chicken: '๐',
      common: '๐ฆ',
      cow: '๐',
      crystal: '๐ฎ',
      darkcrystal: 'โ ๏ธ',
      diamond: '๐+',
      dog: '๐',
      dragon: '๐',
      elephant: '๐',
      emerald: '๐',
      exp: 'โก',
      fishingrod: '๐ฃ',
      fox: '๐ฆ',
      gems: '๐',
      giraffe: '๐ฆ',
      griffin: '๐ฆ',
      gold: '๐',
      health: 'โค๏ธ',
      horse: '๐',
      intelligence: '๐ง ',
      iron: 'โ๏ธ',
      kambing: '๐',
      keygold: '๐',
      keyiron: '๐๏ธ',
      kerbau: '๐',
      kyubi: '๐',
      knife: '๐ช',
      legendary: '๐',
      level: '๐งฌ',
      limit: '๐',
      lion: '๐ฆ',
      magicwand: 'โ๏ธ',
      mana: '๐ช',
      dorracoins: '๐ช',
      monyet: '๐',
      mythic: '๐ณ๏ธ',
      panda: '๐ผ',
      pet: '๐ฑ',
      petFood: '๐',
      pickaxe: 'โ๏ธ',
      pointxp: '๐ง',
      potion: '๐ฅค',
      phonix: '๐๏ธ',
      rhinoceros: '๐ฆ',
      rock: '๐ชจ',
      robo: '๐',
      snake: '๐',
      stamina: '๐ฆพ',
      strength: '๐ฆนโ โ๏ธ',
      string: '๐ธ๏ธ',
      superior: '๐ผ',
      sword: 'โ๏ธ',
      tiger: '๐',
      joincount: '๐ช',
      trash: '๐',
      uncommon: '๐ฅก',
      upgrader: '๐งฐ',
      wolf: '๐บ',
      wood: '๐ชต'      
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: 'โก Experiencia : Exp',
      limit: '๐ Diamante : Diamond',
      diamond: '๐+ Diamante+ : Diamond+',
      joincount: '๐ช Token',
      emerald: '๐ Esmeralda : Emerald',
      berlian: 'โฆ๏ธ Joya : Ruby',
      kyubi: '๐ Magia : Magic',
      gold: '๐ Oro : Gold',
      dorracoins: '๐ช DorratCoins : BotCoins',
      tiketcoin: '๐ซ DORRAT Tickers',
            
      potion: '๐ฅค Pociรณn : Potion',
      aqua: '๐ง Agua : Water',
      trash: '๐ Basura : Trash',
      wood: '๐ชต Madera : Wood',
      rock: '๐ชจ Roca : Rock',
      batu: '๐ฅ Piedra : Stone',
      string: '๐ธ๏ธ Cuerda : Cuerda',
      iron: 'โ๏ธ Hierro : Iron',
      coal: 'โฑ๏ธ Carbรณn : Coal',
      botol: '๐ถ Botella : Bottle',
      kaleng: '๐ฅซ Lata : Can',
      kardus: '๐ชง Cartรณn : Paperboard',
      
      eleksirb: '๐ก Electricidad : Electricity',
      emasbatang: 'ใฝ๏ธ Barra de Oro : Gold bar',
      emasbiasa: '๐งญ Oro Comรบn : Common Gold',
      rubah: '๐ฆ๐ซ๏ธ Zorro Grande : Big Fox',
      sampah: '๐๐ซ๏ธ Super Basura : Big Trash',
      serigala: '๐บ๐ซ๏ธ Super Lobo : Big Wolf',
      kayu: '๐ท Super Madera : Super Wood',
      sword: 'โ๏ธ Espada : Sword',
      umpan: '๐ชฑ Carnada : Bait', 
      healtmonster: '๐บ Salud Maligna : Evil Health',
      pancingan: '๐ช Gancho : Hook',
       
      common: '๐ฆ Caja Comรบn : Common Box',
      uncommon: '๐ฅก Caja Poco Comรบn : Uncommon',
      mythic: '๐ณ๏ธ Caja Mรญtica : Mythic Box',
      pet: '๐ซ Caja de Mascotas : Pet Box',//?
      gardenboxs: '๐ Caja de Jardinerรญa : Garden boxs',//?
      legendary: '๐ Caja Legendaria : Legendary Box',
      
      anggur: '๐ Uva : Grape',
      apel: '๐ Manzana : Apple',
      jeruk: '๐ Naranja : Orange',
      mangga: '๐ฅญ Mango',
      pisang: '๐ Platano : Banana',
      
      bibitanggur: '๐พ๐ Semillas de uva : Grape Seeds',
      bibitapel: '๐พ๐ Semillas de manzana : Apple seeds',
      bibitjeruk: '๐พ๐ Semillas de naranja : Orange Seeds',
      bibitmangga: '๐พ๐ฅญ Semillas de Mango : Mango Seeds',
      bibitpisang: '๐พ๐ Semillas de plรกtano : Banana Seeds',
      
      centaur: '๐ Centauro : Centaur',
      griffin: '๐ฆ Ave : Griffin',
      kucing: '๐ Gato : Cat',
      naga: '๐ Dragรณn : Dragon',
      fox: '๐ฆ Zorro : Fox',
      kuda: '๐ Caballo : Horse',
      phonix: '๐๏ธ Fรฉnix : Phoenix',
      wolf: '๐บ Lobo : Wolf',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '๐ Alimento para Mascota : Pet Food', //?
      makanancentaur: '๐๐ฅฉ Comida de Centauro : Centauro Food',
      makanangriffin: '๐ฆ๐ฅฉ Comida de Ave : Griffin Food',
      makanankyubi: '๐๐ฅฉ Comida Mรกgica : Magic Food',
      makanannaga: '๐๐ฅฉ Comida de Dragรณn : Dragon Food',
      makananpet: '๐ฑ๐ฅฉ Alimentos de mascotas: Pet Food',
      makananphonix: '๐๏ธ๐ฅฉ Comida de Fรฉnix : Phoenix Food'  
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: 'โก',
      limit: '๐',
      diamond: '๐+',
      joincount: '๐ช',
      emerald: '๐',
      berlian: 'โฆ๏ธ',
      kyubi: '๐',
      gold: '๐',
      dorracoins: '๐ช',
      tiketcoin: '๐ซ',
            
      potion: '๐ฅค',
      aqua: '๐ง',
      trash: '๐',
      wood: '๐ชต',
      rock: '๐ชจ',
      batu: '๐ฅ',
      string: '๐ธ๏ธ',
      iron: 'โ๏ธ',
      coal: 'โฑ๏ธ',
      botol: '๐ถ',
      kaleng: '๐ฅซ',
      kardus: '๐ชง',
      
      eleksirb: '๐ก',
      emasbatang: 'ใฝ๏ธ',
      emasbiasa: '๐งญ',
      rubah: '๐ฆ๐ซ๏ธ',
      sampah: '๐๐ซ๏ธ',
      serigala: '๐บ๐ซ๏ธ',
      kayu: '๐ท',
      sword: 'โ๏ธ',
      umpan: '๐ชฑ', 
      healtmonster: '๐บ',
      pancingan: '๐ช',
       
      common: '๐ฆ',
      uncommon: '๐ฅก',
      mythic: '๐ณ๏ธ',
      pet: '๐ซ',//?
      gardenboxs: '๐',//?
      legendary: '๐',
      
      anggur: '๐',
      apel: '๐',
      jeruk: '๐',
      mangga: '๐ฅญ',
      pisang: '๐',
      
      bibitanggur: '๐พ๐',
      bibitapel: '๐พ๐',
      bibitjeruk: '๐พ๐',
      bibitmangga: '๐พ๐ฅญ',
      bibitpisang: '๐พ๐',
      
      centaur: '๐',
      griffin: '๐ฆ',
      kucing: '๐',
      naga: '๐',
      fox: '๐ฆ',
      kuda: '๐',
      phonix: '๐๏ธ',
      wolf: '๐บ',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '๐', //?
      makanancentaur: '๐๐ฅฉ',
      makanangriffin: '๐ฆ๐ฅฉ',
      makanankyubi: '๐๐ฅฉ',
      makanannaga: '๐๐ฅฉ',
      makananpet: '๐ฑ๐ฅฉ',
      makananphonix: '๐๏ธ๐ฅฉ'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}

export default handler
