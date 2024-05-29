// ==============================================================================
// ================================== on Load ===================================
// ==============================================================================

var KEY = 'BlocklyStorage';

var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  trashcan: true
});

window.setTimeout(function () {
  console.log("setTimeout");
  if ('localStorage' in window && window.localStorage[KEY]) {
    restoreBlocks();
  } else {
    // Blockly.Xml.domToWorkspace(document.querySelector('#startBlocks'), workspace);
    var startBlocksText = document.getElementById('startBlocks').outerHTML;
    var xml = Blockly.Xml.textToDom(startBlocksText);
    Blockly.Xml.domToWorkspace(xml, workspace);
    myUpdateFunction();
  }
}, 0);


// ==============================================================================
// ====================== related to language settings ==========================
// ==============================================================================

function setEnglish() {
  console.log("set English.")
  const scripts = {
    en: [
      "CodeBlocks/English/blocks/js/play_block.js",
      "CodeBlocks/English/generators/play.js",
      "CodeBlocks/English/blocks/js/play_block2.js",
      "CodeBlocks/English/generators/play2.js",
      "CodeBlocks/English/blocks/js/gauss_block.js",
      "CodeBlocks/English/generators/gauss.js",
      "CodeBlocks/English/blocks/js/gauss_block2.js",
      "CodeBlocks/English/generators/gauss2.js",
      "CodeBlocks/English/blocks/js/weibul_block.js",
      "CodeBlocks/English/generators/weibul.js",
      "CodeBlocks/English/blocks/js/weibul_block2.js",
      "CodeBlocks/English/generators/weibul2.js",
      "CodeBlocks/English/blocks/js/randwalk_block1.js",
      "CodeBlocks/English/generators/randwalk1.js",
      "CodeBlocks/English/blocks/js/randwalk_block.js",
      "CodeBlocks/English/generators/randwalk.js"
    ]
  };

  // 言語別にスクリプトを読み込む
  const scriptList = scripts["en"];
  if (scriptList) {
    scriptList.forEach(script => {
      const scriptElement = document.createElement('script');
      scriptElement.src = script;
      document.body.appendChild(scriptElement);
    });
  }
}


$(function(){
	// クッキーをセットする
	function setSiteviewCookie() {
		$('.l-lang a').bind('click', function() {	//言語切り替えボタンを押下したときに発火
			$.cookie('siteview', $(this).data('siteview'), { path: '/' }); //siteviewという名前でcookieに値をセット
		});
	}
	setSiteviewCookie();

	// 日本語 or 英語を選んだ場合の処理
	if($.cookie('siteview') == 'en') {
		//英語が選択されている場合(coockieの値にenが設定されている時)
		$('.en').css('display', 'block'); //英語を表示
		$('.jp').css('display', 'none');	//日本語を非表示
		$('.l-lang .l-lang__en').addClass('is-active');	//言語切り替えボタンにクラスを振る処理
		$('.l-lang .l-lang__jp').removeClass('is-active');
	} else {
		//日本語が選択されている場合
		$('.jp').css('display', 'block'); //日本語を表示
		$('.en').css('display', 'none');	//英語を非表示
		$('.l-lang .l-lang__jp').addClass('is-active');
		$('.l-lang .l-lang__en').removeClass('is-active');
	}
})



// ==============================================================================
// ======================== translate JS into PMusic ============================
// ==============================================================================


function myUpdateFunction(event) {
  Blockly.JavaScript.INDENT = `    `
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('code').innerHTML = '<pre class="prettyprint lang-js" style="margin: 0px"><span style="font-size:1.1em">' + code + '</span></pre>';
  backupBlocks();
}
workspace.addChangeListener(myUpdateFunction);


// ==============================================================================
// =========================== save & load blocks ===============================
// ==============================================================================


function backupBlocks() {
  if (!'localStorage' in window) return;
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var text = Blockly.Xml.domToText(xml);  // XMLドキュメントをテキストに変換
  window.localStorage.setItem(KEY, text);
}

function restoreBlocks() {
  var xml = Blockly.Xml.textToDom(window.localStorage[KEY]);
    Blockly.Xml.domToWorkspace(xml, workspace);
}

var myBlockXml
function saveBlocks(){
  var xml = Blockly.Xml.workspaceToDom(workspace);
  myBlockXml = Blockly.Xml.domToText(xml); 
}

function loadBlocks(){
    // ブロック再構築
    var xml = Blockly.Xml.textToDom(myBlockXml);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xml, workspace);  
}


// ==============================================================================
// ======================= adjust height of textarea ============================
// ==============================================================================


window.addEventListener("DOMContentLoaded", () => {
  // textareaタグを全て取得
  const textareaEls = document.querySelectorAll("textarea");

  textareaEls.forEach((textareaEl) => {
    // デフォルト値としてスタイル属性を付与
    textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);
    // inputイベントが発生するたびに関数呼び出し
    textareaEl.addEventListener("input", setTextareaHeight);
  });

  // textareaの高さを計算して指定する関数
  function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
  }
});

// ==============================================================================
// ============================ script -> XML ===================================
// ==============================================================================

function changeBackSlashIntoSpace(scriptdata){
  var backslashRegex = /\\/g;
  scriptdata = scriptdata.replace(backslashRegex, ' ');
  return scriptdata;
}

function generateUniqueId(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[];:,.`|_-/';
  let id = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset[randomIndex];
  }
  return id;
}

var xml = "";
function makeAST(){
  var scriptdata = document.getElementById("codeInput").value;
  scriptdata = changeBackSlashIntoSpace(scriptdata);
  // console.log(scriptdata);
  const l = newLexer(scriptdata);
  const p = newParser(l);
  const program = p.parseProgram();

  console.log(typeof(program));
  console.log(program);

  const JSONobj = JSON.stringify(program)
  console.log(typeof(JSONobj));
  console.log(JSONobj);
  const JSONparse = JSON.parse(JSONobj)
  xml = makeXML(JSONparse);
  console.log(xml);
  return;
}
