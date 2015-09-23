// 再生するファイルリスト
var fileList = [
    { name : 'シュガーソングとビターステップ', url :'test.mp3' },
    { name : '真っ赤な誓い', url : '真っ赤な誓い.mp3' },
    { name : 'HEART_OF_SWORD', url : 'HEART_OF_SWORD.mp3' },
    { name : '君に触れるだけで', url : '君に触れるだけで.mp3' },
    { name : 'シュガーソングとビターステップ', url : 'test.mp3' },
    { name : 'シュガーソングとビターステップ', url : 'test.mp3' },
];
// Audioオブジェクト
var audioObj = new Audio();
var playFlag = false;
// 再生するプレイリストを表示
var playList = '<ul>';
for(var i=0; i<fileList.length; i++){
    playList += '<li onclick=start_music("'+i+'")>';
    playList += fileList[i].name + '</li>';
}

var playCount = 0;
var playListModeFlag = true;


playList += '</ul>';

$("#content").append(playList);
// 再生開始
function start_music(fileNumber){
    audioObj.pause(); // これがないと以前の音楽は停止しない
    audioObj = document.getElementById('sp');
    var url = fileList[fileNumber].url;
    var name = fileList[fileNumber].name;
    playCount = fileNumber;
    audioObj.src = 'ms/' + url;
    audioObj.load();
    audioObj.play();
    playFlag = true;    // 再生フラグ：再生中にする
    document.getElementById("soundName").innerHTML=name;
}

function log(msg){
  cosole.log(msg);
}

function nextMusic(){
  if (playListModeFlag) {
      playCount += 1;
      // 値がプレイリストより大きくなったら初期化する
      if (fileList.length <= playCount) {
          playCount = 0;
      }
      var fileUrl = fileList[playCount].url;
      var fileName = fileList[playCount].name;
      var soundPlayer = document.getElementById('sp');
      soundPlayer.src = 'ms/' + fileUrl;
      document.getElementById("soundName").innerHTML=fileName;
      soundPlayer.load();
      soundPlayer.play();
  }
}
