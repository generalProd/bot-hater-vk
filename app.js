// kontentnikoff //

const { VK, keyboard } = require('vk-io');
const vk = new VK();
const rq = require("prequest");
const { api } = vk;
const fs = require("fs");
const acc = require("./base/acc.json");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var ls_arr = fs.readFileSync('ls.txt').toString().split("\n");



vk.setOptions({ token: 'ff6c3a80df6aa6421146fc0d508370f76fdaa8cc4062d49756c87821ac2fbadf05e203b76caebd8eb2214'}); // Токен стр вк
const { updates, snippets } = vk;

updates.startPolling();


console.log(`BOT HATER by kontentnikoff v1.7 | Big IQ Update | @vktrash\n`)

console.log(`LOG | ls.txt are full`)
console.log(`LOG | Starting...\n`)


rl.question('INPUT | Введите айди жертвы > ', (value) => {
    let idpidor = value
    console.log(`LOG | Слежка за сообщениями пользователя ` + idpidor + ` установлена\n`);
    

updates.on('message', async (message) => {
	if(message.senderId == 581661789) return;
	var a = message.senderId;
		if(a == idpidor)
		{
				acc.ls++;
	console.log('LOG | Message sended');
	return message.reply(ls_arr[acc.ls%ls_arr.length]);

}
});

setInterval(function(){
	fs.writeFileSync("./base/acc.json", JSON.stringify(acc, null, "\t")) 
}, 3500);
rl.close();
});

// kontentnikoff //
