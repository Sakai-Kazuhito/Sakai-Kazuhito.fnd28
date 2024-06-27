// 基礎訓練
// 開始ボタンを押すと原画の絵をランダム出てきて、テキストボックスに数字を入力し、
// 回答ボタンを押すと、正解不正解のアラートがでてくる。

// idを変数化
// const basicInputImg =document.getElementById("input-start-img");
const basicStartButton = document.getElementById("basic-start-button");
const basicAnswerButton = document.getElementById("basic-answer-button");
const basicInputAns = document.getElementById("basic-input-answer");
const basicOutput = document.getElementById("basic-output");

// 原画画像の配列
const flagPngArr = [ "bs_flag_01.png", "bs_flag_02.png", "bs_flag_02b.png",
  "bs_flag_03.png", "bs_flag_04.png", "bs_flag_05.png",
  "bs_flag_06.png", "bs_flag_07.png", "bs_flag_08.png", "bs_flag_09.png",
  "bs_flag_10.png", "bs_flag_11.png", "bs_flag_12.png", "bs_flag_13.png",
  "bs_flag_14.png",];

// 原画画像とansのオブジェクトの配列
const flagOriginalObj = {
  "bs_flag_01.png":"1",
  "bs_flag_02.png":"2",
  "bs_flag_02b.png":"2r",
  "bs_flag_03.png":"3",
  "bs_flag_04.png":"4",
  "bs_flag_05.png":"5",
  "bs_flag_06.png":"6",
  "bs_flag_07.png":"7",
  "bs_flag_08.png":"8",
  "bs_flag_09.png":"9",
  "bs_flag_10.png":"10",
  "bs_flag_11.png":"11",
  "bs_flag_12.png":"12",
  "bs_flag_13.png":"13",
  "bs_flag_14.png":"14",
};

// 開始ボタンを押すとランダムに原画を選択し、選択された原画の絵を出す。
const basicImg = document.getElementById("basic-img");
// basicImg.src = "flag_bs_start.gif";
// basicImg.height = 150;
// basicInputImg.appendChild(basicImg);
let selectNum;

basicStartButton.addEventListener("click", function(){
  selectNum = Math.ceil(Math.random() * (flagPngArr.length - 1));
  console.log("selectNum; ", selectNum);
  basicImg.src = flagPngArr[selectNum];
  // basicImg.height = "150";
  console.log(basicImg);
  basicInputAns.value = "";
  basicOutput.innerText = "";
  // basicInputImg.appendChild(basicImg);
})
console.log(selectNum);


// 回答を入力し、正誤判定をする。
basicAnswerButton.addEventListener("click", function(){
  let basicInputValue = basicInputAns.value;
  let correct = flagOriginalObj[flagPngArr[selectNum]];
  console.log(flagPngArr[selectNum], correct);
  console.log(basicInputValue);
  if (basicInputValue === correct) {
    basicOutput.innerText = "正解！！";
  }else {
    basicOutput.innerText = `残念！ 正解は『 ${correct} 』です。`;
  }
});


// 中級訓練
// 基礎訓練のカタカナ文字バージョン
// カタカナ文字の配列
const arrOfKana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ",
  "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト",
  "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ",
  "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ",
  "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン",
  "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ",
  "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ",
  "パ", "ピ", "プ", "ペ", "ポ", "終信",]

// 手旗カタカナ文字のオブジェクト
const flagSignal = {
  ア:"9-3", イ:"3-2", ウ:"6-9", エ:"1-2r-1", オ:"1-2-3",
  カ:"8-3", キ:"6-2", ク:"11", ケ:"7-3", コ:"8-1",
  サ:"1-12", シ:"5-7", ス:"1-2-5", セ:"9-7", ソ:"5-3",
  タ:"11-5", チ:"7-2r", ツ:"12-3", テ:"6-3", ト:"2-5",
  ナ:"1-3", ニ:"6", ヌ:"9-4", ネ:"9-2-1", ノ:"3", 
  ハ:"10", ヒ:"1-7", フ:"9", ヘ:"4", ホ:"1-2-10",
  マ:"9-5", ミ:"6-1", ム:"7-5", メ:"3-5", モ:"6-7", 
  ヤ:"8-4", ユ:"9-1", ヨ:"8-6",
  ラ:"5-9", リ:"12", ル:"3-7", レ:"7", ロ:"7-8",
  ワ:"2-9", ヲ:"1-9", ン:"5-1",
  ガ:"8-3-13", ギ:"6-2-13", グ:"11-13", ゲ:"7-3-13", ゴ:"8-1-13",
  ザ:"1-12-13", ジ:"5-7-13", ズ:"1-2-5-13", ゼ:"9-7-13", ゾ:"5-3-13",
  ダ:"11-5-13", ヂ:"7-2r-13", ヅ:"12-3-13", デ:"6-3-13", ド:"2-5-13",
  バ:"10-13", ビ:"1-7-13", ブ:"9-13", ベ:"4-13", ボ:"1-2-10-13",
  パ:"10-14", ピ:"1-7-14", プ:"9-14", ペ:"4-14", ポ:"1-2-10-14",
  終信:"12",
}

// idを変数化
const advanceInput = document.getElementById("input-start-advance");
const advanceStartButton = document.getElementById("advance-start-button");
const advanceAnswerButton = document.getElementById("advance-answer-button");
const advanceInputAns = document.getElementById("advance-input-answer");
const advanceOutput = document.getElementById("advance-output");

// 開始ボタンを押すとランダムにカタカナ文字を出す。
let selectString;
advanceStartButton.addEventListener("click", function(){
  selectString = arrOfKana[Math.ceil(Math.random() * (arrOfKana.length - 1))];
  console.log("selectString; ", selectString);
  advanceInput.innerText = selectString;
  advanceInputAns.value = "";
  advanceOutput.innerText = "";
})

// 回答を入力し、正誤判定をする。
advanceAnswerButton.addEventListener("click", function(){
  let advanceInputValue = advanceInputAns.value;
  let correct = flagSignal[selectString];
  console.log(selectString, correct);
  console.log(advanceInputValue);
  if (advanceInputValue === correct) {
    advanceOutput.innerText = "正解！！";
  }else{
    advanceOutput.innerText = `残念！ 正解は『 ${correct} 』です。`;
  }
});

// カタカナ ⇒ 手旗信号変換
//  idを変数化
const tranceInputText = document.getElementById("kana-input")
const tranceInputButton = document.getElementById("text-trance");
const tranceOutput = document.getElementById("trance-output");


// カタカナ文字⇒手旗信号変換プログラム
tranceInputButton.addEventListener("click", function(){
  let tranceInputValue = tranceInputText.value;
  let keyArr = tranceInputValue.split("");
  let tranceString = "";
  for (const key of keyArr){
    tranceString = tranceString + `${key} : ${flagSignal[key]} ／ `
  }
  tranceOutput.innerText = tranceString;
})



