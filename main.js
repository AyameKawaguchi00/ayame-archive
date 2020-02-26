//******RANDOMIZE CHARACTER********//

//array with the pictures of the characters
let picsArray = [];

//elements of the array
let crash = "<img src='https://orig13.deviantart.net/8ea1/f/2014/024/1/3/crash_twinsanity_render__crash___png___3_by_jerimiahisaiah-d73kvxj.png' class='personaggio'>"
picsArray.push(crash);
let coco = "<img src='https://vignette.wikia.nocookie.net/crashban/images/9/92/Coco_Crash_Nitro_Kart.png/revision/latest?cb=20190423052911' class='personaggio'>";
picsArray.push(coco);
let cortex = "<img src='https://i.pinimg.com/originals/f8/b8/0b/f8b80b2ecd5059d9a7a7ca67994106a8.png' class='personaggio'>";
picsArray.push(cortex);
let nina = "<img src='https://vignette.wikia.nocookie.net/crashban/images/e/e9/Crash_Twinsanity_Nina_Cortex.png/revision/latest?cb=20160914050732' class='personaggio'>";
picsArray.push(nina);
let pura = "<img src='https://vignette.wikia.nocookie.net/p__/images/4/45/Pura_CB.png/revision/latest/scale-to-width-down/340?cb=20170605173246&path-prefix=protagonist' class='personaggio'>";
picsArray.push(pura);
let polar = "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c80e821-184f-4aca-9a79-ca8d020e510c/da1pytu-a68f4c33-d17e-4a0b-b039-f544a5b743d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljODBlODIxLTE4NGYtNGFjYS05YTc5LWNhOGQwMjBlNTEwY1wvZGExcHl0dS1hNjhmNGMzMy1kMTdlLTRhMGItYjAzOS1mNTQ0YTViNzQzZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TfUVH_ftwCU3IY_E-Ec7cIW7hSvUpQOsZSklO1IMCQM' class='personaggio'>";
picsArray.push(polar);
let ngin = "<img src='https://vignette.wikia.nocookie.net/crashban/images/0/0a/Crash_Bandicoot_2_Cortex_Strikes_Back_Doctor_N._Gin.png/revision/latest?cb=20170609224224' class='personaggio'>";
picsArray.push(ngin);
let nbrio = "<img src='https://vignette.wikia.nocookie.net/crash-bandicoot-games/images/2/2d/Crash_1_Nitrus_Brio.png/revision/latest?cb=20180131030750' class='personaggio'>";
picsArray.push(nbrio);
let dingodile = "<img src='https://i.imgur.com/z9g2QqE.png' class='personaggio'>";
picsArray.push(dingodile);
let tiny = "<img src='https://vignette.wikia.nocookie.net/crashban/images/5/51/Crash_2-CTR_Tiny_Tiger.png/revision/latest?cb=20160905103422' class='personaggio'>";
picsArray.push(tiny);
let kong = "<img src='https://vignette.wikia.nocookie.net/crashban/images/3/3d/Koala_Kong_Crash_1.png/revision/latest?cb=20160820211120' class='personaggio'>";
picsArray.push(kong);
let pasadena = "<img src='https://vignette.wikia.nocookie.net/crashban/images/7/74/PasadenaCTTRRender.png/revision/latest?cb=20190608184628' class='personaggio'>";
picsArray.push(pasadena);
let oxide = "<img src='https://vignette.wikia.nocookie.net/crashban/images/5/5c/Crash_Team_Racing_Nitros_Oxide_Podium.png/revision/latest?cb=20161222022206' class='personaggio'>";
picsArray.push(oxide);
let crunch = "<img src='https://vignette.wikia.nocookie.net/villains/images/f/fb/NFCrunch.png/revision/latest?cb=20190814184039' class='personaggio'>";
picsArray.push(crunch);
let roo = "<img src='https://www.pngkey.com/png/full/724-7240026_ripper-roo.png' class='personaggio'>";
picsArray.push(roo);
let ntropy = "<img src='https://i.imgur.com/h2hUkoC.png' class='personaggio'>";
picsArray.push(ntropy);
let pinstripe = "<img src='https://vignette.wikia.nocookie.net/crash-bandicoot-wiki/images/8/8e/Crash_1_Pinstripe.png/revision/latest?cb=20190426201506' class='personaggio'>";
picsArray.push(pinstripe);
let tawna = "<img src='https://vignette.wikia.nocookie.net/crashban/images/e/ef/Crash_1_Tawna.png/revision/latest?cb=20160820230611' class='personaggio'>";
picsArray.push(tawna);

//array which will contain the random image that comes out
let imgArrayUsciti = []; 


//function that takes a random image from the picsArray
function choosePic() {
	var randomNum = Math.floor(Math.random() * picsArray.length);
	document.getElementById("chara").src = picsArray[randomNum];
	imgArrayUsciti.push(document.getElementById("chara").src = picsArray[randomNum]);
	return document.getElementById("chara").src = picsArray[randomNum];
}


//function that makes the random picture appear in a div
const scopriImg = classeDiv => {
	let div = document.querySelector(classeDiv);
	let character = choosePic();
	div.innerHTML = character;
}

//function that is to be applied to the HTML code which unites the two previous functions
const generaImg = () => {
	return scopriImg('.chara');
}


//------------------------------------------------------------------------------------------


//*****RANDOM AREA*****//


let locationArray = [];

let loc1 = "<img class='luogo' src='https://i.pinimg.com/originals/95/cf/29/95cf2950aadbb3c6dd46572dfdd28ab7.jpg'>";
locationArray.push(loc1);
let loc2 = "<img class='luogo' src='https://i.pinimg.com/474x/19/05/25/1905251b7f80e3c0ca2db329226a39f3.jpg'>";
locationArray.push(loc2);
let loc3 = "<img class='luogo' src='https://i.pinimg.com/originals/57/7b/59/577b596a6d9f9fac77029286cdaa05b6.jpg'>";
locationArray.push(loc3);
let loc4 = "<img class='luogo' src='https://i.pinimg.com/originals/d4/f6/01/d4f60120e1dc64ac520aeefd19eef362.jpg'>";
locationArray.push(loc4);
let loc5 = "<img class='luogo' src='https://i.pinimg.com/originals/02/49/34/024934b06a3c0a453713d64187dcb940.jpg'>";
locationArray.push(loc5);
let loc6 = "<img class='luogo' src='https://lh3.googleusercontent.com/proxy/yVqhS7YJGGqmthyXbb_8Iq16CAQrPBPldE22DIYK_bh8ntCxiu8o2fzl1W5T4aau13Grr_cUqwmncbZ_8tLW3i4ah29QRWeWDPBp3beGQssJtLw'>";
locationArray.push(loc6);
let loc7 = "<img class='luogo' src='https://i.pinimg.com/originals/30/04/c7/3004c760c696ee018bb4992d86c0b26a.jpg'>";
locationArray.push(loc7);
let loc8 = "<img class='luogo' src='https://www.crashmania.net/images/games/crash-bandicoot-2-cortex-strikes-back/artwork/environments/concept-art-1-7.jpg'>";
locationArray.push(loc8);
let loc9 = "<img class='luogo' src='https://lh3.googleusercontent.com/proxy/aZQVBIsSl4wyFHuOvW5lr3Txyux8kT3jEw8slJAvdtAWeCQeTH2DF7Q_3RsZ7oqM04g7IZPnQoFYLGA1id847aSt5N2RfRSl9yd0KE8DBv-bsryEWG0F5w'>";
locationArray.push(loc9);
let loc10 = "<img class='luogo' src='https://www.crashmania.net/images/games/crash-bandicoot-2-cortex-strikes-back/artwork/environments/concept-art-1-6.jpg'>";
locationArray.push(loc10);
let loc11 = "<img class='luogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDgTdunQAZJ1725qIpf9zEp6wpX6OZYMGBUFsZ0eHMss7JoydA'>";
locationArray.push(loc11);
let loc12 = "<img class='luogo' src='https://lh3.googleusercontent.com/proxy/DeJCxDM0Ns_AuUnzOb4_NK9VfRSjdrkJPYh3CO6ira9XzqNIcy-zXShr55pZ0CKgqzAa754iAO9-MMTbCAlWpLvzhBVWH1vZ2EOL_yw'>";
locationArray.push(loc12);
let loc13 = "<img class='luogo' src='https://www.crashmania.net/images/games/crash-team-racing/artwork/environments/environments-1-4.jpg'>";
locationArray.push(loc13);
let loc14 = "<img class='luogo' src='https://cdn.staticneo.com/ca/crashracing_conceptart_953xB.jpg'>";
locationArray.push(loc14);
let loc15 = "<img class='luogo' src='https://lh3.googleusercontent.com/proxy/YVrayjKmlCR68x6IvYO1m4q8kg14b50Wpe6fus9cUgf8-Ydnng8b01kPYZNSiMhxW2b_WltvZYwaDfDtXjVQoCUFSZLTJ3SO-a9QCqffU49wZw'>";
locationArray.push(loc15);
let loc16 = "<img class='luogo' src='https://i.pinimg.com/originals/60/31/f4/6031f47324773936c1550c9a091f526e.jpg'>";
locationArray.push(loc16);
let loc17 = "<img class='luogo' src='https://www.crashmania.net/images/games/crash-bandicoot-warped/artwork/environments/concepts-1-5.jpg'>";
locationArray.push(loc17);

let locArrayUsciti = []; 


function chooseLoc() {
	var randomNum = Math.floor(Math.random() * locationArray.length);
	document.getElementById("location").src = locationArray[randomNum];
	locArrayUsciti.push(document.getElementById("location").src = locationArray[randomNum]);
	return document.getElementById("location").src = locationArray[randomNum];
}

const scopriLoc = classeDiv => {
	let div = document.querySelector(classeDiv);
	let location = chooseLoc();
	div.innerHTML = location;
}

const generaLoc = () => {
	return scopriLoc('.location');
}


//------------------------------------------------------------------------------------------


//*****RANDOM ENEMIES*****//

let enemiesArray = [];

let pianta = "<img src='https://vignette.wikia.nocookie.net/crashban/images/a/a2/Venus_Fly_Trap_Crash_Bandicoot_N._Sane_Trilogy.png/revision/latest?cb=20170313032524' class='nemico'>";
enemiesArray.push(pianta);
let armadillo = "<img src='https://vignette.wikia.nocookie.net/crashban/images/0/08/Crash_Bandicoot_2_Cortex_Strikes_Back_Armadillo.png/revision/latest?cb=20160928002343' class='nemico'>";
enemiesArray.push(armadillo);
let squalo = "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c592edf5-c11e-449c-8aa5-84cf1c6d9082/db164mq-54e10e46-5ad8-4309-9a56-3ed20523464c.png' class='nemico'>";
enemiesArray.push(squalo);
let tartaruga = "<img src='https://vignette.wikia.nocookie.net/crash/images/4/42/Tartaruga_cyborg_spinata_-_Crash_2.png/revision/latest?cb=20170604175753&path-prefix=it' class='nemico'>";
enemiesArray.push(tartaruga);
let nativo = "<img src='https://cra-log.com/wp-content/uploads/2017/09/Tribesman_Crash_Bandicoot.png' class='nemico'>";
enemiesArray.push(nativo);
let pinguino = "<img src='https://vignette.wikia.nocookie.net/crashban/images/7/7a/Crash_2_Penguin.png/revision/latest/top-crop/width/300/height/300?cb=20161003013542' class='nemico'>";
enemiesArray.push(pinguino);
let mummia = "<img src='https://vignette.wikia.nocookie.net/crashban/images/6/6a/Crash_Bandicoot_3_Warped_Spiked_Coffin_Mummy_Lab_Assistant.png/revision/latest?cb=20170127013914' class='nemico'>";
enemiesArray.push(mummia);
let martello = "<img src='https://vignette.wikia.nocookie.net/crashban/images/5/59/Crash_Bandicoot_2_Cortex_Strikes_Back_Lumberjack_Lab_Assistant.png/revision/latest?cb=20161009002456' class='nemico'>";
enemiesArray.push(martello);
let pozioni = "<img src='https://vignette.wikia.nocookie.net/parody/images/f/fe/Crash_Bandicoot_N._Sane_Trilogy_Beaker_Throwing_Lab_Assistant.png/revision/latest?cb=20190711070936' class='nemico'>";
enemiesArray.push(pozioni);
let spada = "<img src='https://vignette.wikia.nocookie.net/csydes-test/images/9/98/Crash_Bandicoot_3_Warped_Knight_Lab_Assistant.png/revision/latest?cb=20170114202339' class='nemico'>";
enemiesArray.push(spada);
let rana = "<img src='https://www.models-resource.com/resources/big_icons/22/21841.png' class='nemico'>";
enemiesArray.push(rana);
let cinghiale = "<img src='https://vignette.wikia.nocookie.net/crashban/images/b/b1/Crash_Bandicoot_Warthog.png/revision/latest/top-crop/width/300/height/300?cb=20190319230547' class='nemico'>";
enemiesArray.push(cinghiale);
let scimmia = "<img src='https://www.models-resource.com/resources/big_icons/27/26782.png' class='nemico'>";
enemiesArray.push(scimmia);
let crashpesce = "<img src='https://vignette.wikia.nocookie.net/crashban/images/6/6e/Bandifish_Crash_Bandicoot_3_Warped.png/revision/latest?cb=20170126003936' class='nemico'>";
enemiesArray.push(crashpesce);
let ratto = "<img src='https://vignette.wikia.nocookie.net/crashban/images/f/fe/Crash_Bandicoot_2_Cortex_Strikes_Back_Spiked_Rat.png/revision/latest/top-crop/width/300/height/300?cb=20161008020003' class='nemico'>";
enemiesArray.push(ratto);
let anguilla = "<img src='https://vignette.wikia.nocookie.net/crashban/images/2/2d/Crash_Bandicoot_N._Sane_Trilogy_Electric_Eel.png/revision/latest?cb=20170509074355' class='nemico'>";
enemiesArray.push(anguilla);
let pipistrello = "<img src='https://vignette.wikia.nocookie.net/crashban/images/5/54/Crash_Bandicoot_N._Sane_Trilogy_Bat.png/revision/latest?cb=20170430114321' class='nemico'>";
enemiesArray.push(pipistrello);
let ape = "<img src='https://vignette.wikia.nocookie.net/crashban/images/1/1c/Crash_Bandicoot_2_Cortex_Strikes_Back_Honeybee.png/revision/latest/scale-to-width-down/185?cb=20161003012513' class='nemico'>";
enemiesArray.push(ape);
let granchio = "<img src='https://vignette.wikia.nocookie.net/crashban/images/5/58/Crab_N._Sane_Trilogy.png/revision/latest?cb=20161218012711' class='nemico'>";
enemiesArray.push(granchio);
let vulture = "<img src='https://vignette.wikia.nocookie.net/crashban/images/8/8b/Eagle.png/revision/latest?cb=20160925111640' class='nemico'>";
enemiesArray.push(vulture);
let capra = "<img src='https://vignette.wikia.nocookie.net/crashban/images/a/ad/Goat_Crash_Bandicoot_3_Warped.png/revision/latest/scale-to-width-down/185?cb=20161008043215' class='nemico'>";
enemiesArray.push(capra);
let iguana = "<img src='https://vignette.wikia.nocookie.net/crashban/images/3/33/Crash_Bandicoot_Lizard.png/revision/latest?cb=20161229050522' class='nemico'>";
enemiesArray.push(iguana);
let leone = "<img src='https://vignette.wikia.nocookie.net/crashban/images/0/0d/CB3LionModel.png/revision/latest/scale-to-width-down/185?cb=20180829192952' class='nemico'>";
enemiesArray.push(leone);
let porcospino = "<img src='https://vignette.wikia.nocookie.net/crashban/images/6/61/Crash_Bandicoot_2_Cortex_Strikes_Back_Porcupine.png/revision/latest?cb=20161008023815' class='nemico'>";
enemiesArray.push(porcospino);
let scorpione = "<img src='https://vignette.wikia.nocookie.net/crashban/images/7/79/Crash_Bandicoot_3_Warped_Scorpion.png/revision/latest/scale-to-width-down/185?cb=20180729080415' class='nemico'>";
enemiesArray.push(scorpione);
let spugna = "<img src='https://vignette.wikia.nocookie.net/crashban/images/0/0e/Scrubber_Crash_Bandicoot_2_Cortex_Strikes_Back.png/revision/latest?cb=20161227013617' class='nemico'>";
enemiesArray.push(spugna);
let foca = "<img src='https://vignette.wikia.nocookie.net/crashban/images/0/0e/Seal_Crash_Bandicoot_2_Cortex_Strikes_Back.png/revision/latest/scale-to-width-down/185?cb=20161003011755' class='nemico'>";
enemiesArray.push(foca);

let enemiesArrayUsciti = []; 


const scopriEnemy1 = classeDiv => {
	let div = document.querySelector(classeDiv);
	let enemy = chooseEnemy1();
	div.innerHTML = enemy;
}
const scopriEnemy2 = classeDiv => {
	let div = document.querySelector(classeDiv);
	let enemy = chooseEnemy2();
	div.innerHTML = enemy;
}
const scopriEnemy3 = classeDiv => {
	let div = document.querySelector(classeDiv);
	let enemy = chooseEnemy3();
	div.innerHTML = enemy;
}

const generaEnemy1 = () => {
	return scopriEnemy1('.enemies1');
}
const generaEnemy2 = () => {
	return scopriEnemy2('.enemies2');
}
const generaEnemy3 = () => {
	return scopriEnemy3('.enemies3');
}


//------------------------------------------------------------------------------------------


//*****RANDOM GEM*****//


let gemArray = [];

let gem1 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/8/8f/Crash_Bandicoot_2_Cortex_Strikes_Back_Clear_Gem.png/revision/latest?cb=20161008005100'>";
gemArray.push(gem1);
let gem2 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/6/67/Crash_Bandicoot_Clear_Gem.png/revision/latest?cb=20170610003613'>";
gemArray.push(gem2);
let gem3 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/9/99/Crash_Bandicoot_Blue_Gem.png/revision/latest?cb=20170610001957'>";
gemArray.push(gem3);
let gem4 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/8/89/Crash_Bandicoot_Green_Gem.png/revision/latest?cb=20170610003415'>";
gemArray.push(gem4);
let gem5 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/f/ff/Orange_Gem_Crash_Bandicoot.png/revision/latest?cb=20170610003840'>";
gemArray.push(gem5);
let gem6 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/b/b0/Crash_Bandicoot_Purple_Gem.png/revision/latest?cb=20170610002000'>";
gemArray.push(gem6);
let gem7 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/f/fe/Crash_Bandicoot_Red_Gem.png/revision/latest?cb=20170610001954'>";
gemArray.push(gem7);
let gem8 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/c/cc/Crash_Bandicoot_Yellow_Gem.png/revision/latest?cb=20170610002003'>";
gemArray.push(gem8);
let gem9 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/9/97/Crash_Bandicoot_2_Cortex_Strikes_Back_Blue_Gem.png/revision/latest/scale-to-width-down/185?cb=20161008005055'>";
gemArray.push(gem9);
let gem10 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/3/3c/Crash_Bandicoot_2_Cortex_Strikes_Back_Green_Gem.png/revision/latest/scale-to-width-down/185?cb=20161008005104'>";
gemArray.push(gem10);
let gem11 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/3/30/Crash_Bandicoot_2_Cortex_Strikes_Back_Purple_Gem.png/revision/latest?cb=20161008005108'>";
gemArray.push(gem11);
let gem12 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/c/c3/Crash_Bandicoot_2_Cortex_Strikes_Back_Red_Gem.png/revision/latest?cb=20161008005111'>";
gemArray.push(gem12);
let gem13 = "<img class='gemma' src='https://vignette.wikia.nocookie.net/crashban/images/a/a4/Crash_Bandicoot_2_Cortex_Strikes_Back_Yellow_Gem.png/revision/latest/scale-to-width-down/185?cb=20161008005115'>";
gemArray.push(gem13);
/*let gem14 = "<img class='gemma' src=''>";
gemArray.push(gem14);
let gem15 = "<img class='gemma' src=''>";
gemArray.push(gem15);
let gem16 = "<img class='gemma' src=''>";
gemArray.push(gem16);
let gem17 = "<img class='gemma' src=''>";
gemArray.push(gem17);
let gem18 = "<img class='gemma' src=''>";
gemArray.push(gem18);*/

let gemArrayUsciti = []; 


function chooseGem() {
	var randomNum = Math.floor(Math.random() * gemArray.length);
	document.getElementById("gems").src = gemArray[randomNum];
	gemArrayUsciti.push(document.getElementById("gems").src = gemArray[randomNum]);
	return document.getElementById("gems").src = gemArray[randomNum];
}

const scopriGem = classeDiv => {
	let div = document.querySelector(classeDiv);
	let gem = chooseGem();
	div.innerHTML = gem;
}

const generaGem = () => {
	return scopriGem('.gems');
}
