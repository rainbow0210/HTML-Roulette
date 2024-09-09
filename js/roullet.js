// 使うファイルのファイル名を事前に書いておく
const files = ['1.png', '2.png', '3.png'];

// キーが1度押されたかを判定する 0だと押されていない 1だと押されている
let key_judge = 0;

// 画像ファイルを切り替える配列の変化する数字として利用
let count = 1;

// モードを記録する
let cnt_hozon = 1;

// 音声出力の準備 audio play
let music = new Audio('./music/ドラムロール.mp3');
let second = 0;

const channel = new BroadcastChannel('Test');

// Wキーが押されたときに行う処理
window.addEventListener('keyup', function(event){
    if(event.key == 'w' && key_judge == 0){
        //console.log(event.key);
        key_judge = 1;

        music = new Audio('./music/ドラムロール.mp3');
        music.currentTime = 0;
        music.loop = true;
        music.play();
        second = 0;
    }
    else if(event.key == 'w'){ 
        key_judge = 0;
        
        music.pause();
        music.loop = false;
        music = new Audio('./music/ロールの閉め.mp3');
        music.currentTime = 0;
        music.play();
        second = 0;
    }
    setTimeout(function(){console.log("keypress")}, 1000);
    console.log(key_judge);
});

// 画像ファイルを切り替える処理
function ChangePicture(){
    // Wキーが押された状態のみ切り替えを実行する
    if(key_judge == 1){
        let pic_elm = document.getElementById('pic');
        pic_elm.setAttribute("src", './images/' + files[count]);
        //console.log(count);
        cnt_hozon = count;
        count++;

        // ここで切り替える画像が歳台まで行った時に初期値に戻す
        if(count == 3){
            count = 0;
        }
    }

    // 他ウィンドウへこのページのルーレット切り替え状況の情報送信が必要な場合に使用
    // ※同一ドメインもしくはアドレスのページのみ有効
    /*
    let obj = {mode : cnt_hozon, key_judge : key_judge}

    console.log(obj);

    channel.postMessage(obj);
    */

    // 次の実行まで少し時間を空ける
    setTimeout(ChangePicture, 50);
    //console.log('Test');
}
ChangePicture();

// jqueryで高さが変わったら自動で調整されるようにする
$(document).ready(function () {
    hsize = $(window).height();
    $(".picture_content").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $(".picture_content").css("height", hsize + "px");
});