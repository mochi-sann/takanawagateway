let count = 0;
let textarea = document.getElementById("text");
function disp_random_takawana() {
    const takanawa=["高輪","ゲート","ウェイ"] ///ズンドコ風配列
    for(let i=1;i<4;i++){
        let random = Math.floor( Math.random() * takanawa.length );///ランダム
        textarea.innerHTML+=takanawa[random]///innerHTMLで挿入
        count++;
    }
    if(count>3){
       textarea.innerHTML='';
        count = 0;
    }
    if(textarea.textContent == '高輪ゲートウェイ') {
        alert('おめでとう！');
    }
    console.log(textarea.textContent);
    
}



setInterval(disp_random_takawana,1000);

