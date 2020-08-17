const Discord = require(`discord.js`); // discord.js를 불러옴
const { prefix, TOKEN } = require('./Config.json');//Config.json을 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
client.on('ready', () => {
  console.log("디스코드 봇이 공산주의에 감화되었습니다");
});

var bron = false;
var brplayer = [];
function randomarray(a) { //배열값에서 랜덤으로 값 하나를 가져오는 함수
  return a[Math.floor(Math.random() * a.length)];
}
const ytdl = require('ytdl-core-discord');
client.on('message', async msg => {
  if (!msg.guild) return;

  if (msg.content.split(' ')[0] === '!유튜브') {
    // 봇의 보이스 채널 참가
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(await ytdl(msg.content.split(' ')[1]), { type: 'opus' });//유튜브 재생
      dispatcher.pause();
      dispatcher.resume();
      dispatcher.on('finish', () => {
        console.log('재생완료!');
        dispatcher.destroy();
      });
    } else {
      msg.reply('먼저 음성채널에 참여해야합니다.');
    }
  }
    if (msg.content == '!주사위') { var dice = ['⚀(1)','⚁(2)','⚂(3)','⚃(4)','⚄(5)','⚅(6)']; msg.channel.send(randomarray(dice)) } //주사위
    
    if (msg.content.split(' ')[0] == "!rsp" || msg.content.split(' ')[0] == prefix+"가위바위보"){ //가위바위보
        var 가위바위보 = ['가위','바위','보'];
        var 봇손 = randomarray(가위바위보);
        if(msg.content.split(' ')[1] == '가위'){
          if(봇손 == '가위'){
            msg.channel.send('Грегори [BOT](은)는 `가위`(을)를 냈다!\n무승부!');
          }
          else if(봇손 == '바위'){
            msg.channel.send('Грегори [BOT](은)는 `바위`(을)를 냈다!\n봇이 승리하였습니다!');
          }
          else if(봇손 == '보'){
            msg.channel.send('Грегори [BOT](은)는 `보`(을)를 냈다!\n축하드립니다 승리하셨습니다!');
          }
        }
        if(msg.content.split(' ')[1] == '바위' || msg.content.split(' ')[1] == '주먹'){
          if(봇손 == '가위'){
            msg.channel.send('Грегори [BOT](은)는 `가위`(을)를 냈다!\n축하드립니다 승리하셨습니다!');
          }
          else if(봇손 == '바위'){
            msg.channel.send('Грегори [BOT](은)는 `바위`(을)를 냈다!\n무승부!');
          }
          else if(봇손 == '보'){
            msg.channel.send('Грегори [BOT](은)는 `보`(을)를 냈다!\n봇이 승리하였습니다!');
          }
        }
        if(msg.content.split(' ')[1] == '보'){
          if(봇손 == '가위'){
            msg.channel.send('Грегори [BOT](은)는 `가위`(을)를 냈다!\n봇이 승리하였습니다!');
          }
          else if(봇손 == '바위'){
            msg.channel.send('Грегори [BOT](은)는 `바위`(을)를 냈다!\n축하드립니다 승리하셨습니다!');
          }
          else if(봇손 == '보'){
            msg.channel.send('Грегори [BOT](은)는 `보`(을)를 냈다!\n무승부!');
          }
      }
    }
  });

// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
client.login(process.env.TOKEN);