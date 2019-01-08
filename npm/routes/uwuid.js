var words = ['Kawaii','Baka','Neko','Desu','Yo','Ne','Nani','itai','Oniichan','Oneechan','Senpai','Sensei','Nyan','Nyan','Nyan','Nya','Nyaaaaaan','kamisama','Hentai','Nyan','Nyan','Ecchi','Yaoi','Yuri','Shota','Loli','Usagi','Kuma','NekoChan','mahou','megane','Waifu','Husbando','Honda','Toyota','Hontou','owo','owo','Daisuki','Daijoubu','Suki','Arigatou','uwu','owo','owo','owo','UWU','OWO','OwO','owo','owo','owO','Owo','Uwu','uwU','0w0','bakaOniichan','Naruto','Sasuke','nyaaaaaa','YameteOniichan','Doushite','Nande','Dattebayo','Sushi','Ramen','UwUSenpaaai','HereIsYourLinkSenpai','Pantsu','Pantsu','Pantsu','Pantsu','Pantsu','Pantsu','Taiyaki','Rem','RemIsBestGirl','BestGirl','BestGrill'];
var randomNum = function() {
  return Math.floor(Math.random()*(words.length-1)+1);
}
var randomWord = function() {
  return words[Math.floor(Math.random()*words.length)];
}
var generate = function () { 
  var res = "";
  var num = randomNum(); 
  while(num) {
    var word = randomWord();
    res = res + word;
    num--;
  }
  return res;
}

module.exports.generate = generate;
