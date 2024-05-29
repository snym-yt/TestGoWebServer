# VisualPMusic

## My Environment
- MacBook Air M2
  - RAM 16GB
  - Google Chrome ver.: 121.0.6167.139（Official Build） （arm64）

## 簡易説明スライド
ブラウザ上でのVisualPMusicの機能，動かし方を簡単に説明しているGoogleスライド

[VisualPMusic説明スライド](https://docs.google.com/presentation/d/e/2PACX-1vT1mbMEAce7wPtNiAS6GiqaizWgwW2jgFR0ZFaZSC2VrczMZ1R3cTQyUSI6W9nwaBuXxxajNl4Gl-xy/pub?start=false&loop=false&delayms=3000&slide=id.g26412e88182_1_0)

## ローカルサーバ
##### (1)ローカルサーバのインストール
最初にsever.jsのhttp-serverモジュールをグローバルにインストールする．
ターミナルまたはコマンドプロンプトを開き，以下のコマンドを実行する．
これにより`http-server`コマンドが使えるようになる．

```bash
npm install -g http-server
```

##### (2)プロジェクトディレクトリでサーバ起動
プロジェクトのディレクトリに移動し，以下のコマンドを実行してローカルサーバの起動．

```bash
http-server
```
デフォルトでポート8080が使用されるが，別のポートを使用したい場合は次のようにする．

```bash
http-server -p 3000
```

##### (3)ブラウザでアクセス
ローカルサーバは起動したらブラウザで  http://localhost:8080 にアクセスする．
ローカルサーバが起動している場合はプロジェクトのファイルに直接アクセスせずに指定したポートを使用すること．

##### expressインストール
https://expressjs.com/ja/starter/installing.html
このサイトに則って`express`をインストールする．

## JSのlexer & parser
JavaScriptで書いたlexer, parserの細かいコミットは次のリポジトリで参照可能．

[JSPMusic](https://github.com/snym-yt/JSPMusic)


### 構文

##### (1)変数束縛

`var x = 0;`

初期化だけでなく，代入の際にも`var`の文言が必要となっている．

JavaScriptの`var`を参照したが，PMusicでは宣言と代入の区別はない．
スコープは[関数スコープ](https://www.codegrid.net/articles/2017-js-scope-1/)

```
>> var x =12;
>> var x = "a";
>> x
a
>> x + 1;
Woops! Executing bytecode failed:
  unsupported types for binary operation: STRING INTEGER
>> x = "c";
no prefix parse function for = found
```

```
var x = 0;
while(x<3){ play(56+x, 0.5); var x=x+1; var y = 1; }
y + 1;

>> 2  // whileのブロックで宣言してもブロック外で使える
```

JavaScriptのvarについて: https://techplay.jp/column/1619
ただし, JavaScriptのものと完全に一致はしていない

*VSCodeのプレビューでindex.htmlを開くと，変数ブロックの作成ができないことに注意．

##### (2)return文

`return 10;`

##### (3)繰り返し

`while(x<3){ play(56+x, 0.5); var x=x+1; }`

`loop(3){ play(56, 0.5); }`

次のように入れ子構造にすることも可能．
（ここでは分かりやすくするために改行しているが，この書き方ではエラーが生じる．詳しくは下記に示す継続行の説明へ．）
```
loop(3){
  play(62, 0.3);
  loop(2){
    play(56, 0.2); play(68, 0.1);
  }
}
```
loop文は本文を書くところに変数束縛を使用するとエラーが発生して終了してしまっていることに注意．

また．本リポジトリでビジュアルプログラミング化する際にBlocklyに元から組み込まれているものを流用するため，"loop"は"repeat"として表されている．

##### (4)条件分岐
現状 else if の分岐は実装していない．

```
if( 3*5 > 10){
  return "OK";
} else{
  return "NG";
}
```
```
OK
```



###### 再帰

```
var countDown = fn(x){
  if (x == 0){
    return 0;
  }else {
    countDown(x-1);
  }
};
countDown(1);
```
```
0
```

##### (6)配列

配列の要素は型が一致していなくてもよい．

```
var Array = ["Name", 12, fn(x){ x * x }];
Array[2](2);  //　4
```

[Blocklyの配列のWiki](https://github.com/google/blockly/wiki/Lists)
「create empty list」，「create list with」，「length of」のみ実装．


##### 継続行：改行文字「\」
PMusicはインタプリタであるため，基本は1行で命令を完結させる．
しかし，これではif文やwhile文などは命令が長くなってしまい，可読性も低くなる．
そのため，命令を継続できる改行文字として「\」を採用し，複数行にまたがる入力を可能にしている．

文末に「\」を用いることで継続行にすることができる．
継続行となっているときは「..」と表示される．

```
>> var aa = 0;
>> aa;\
.. aa+1;
1
>> var aa = 2;
>> aa;
2
>> 
>> loop(3){\
..   play(62, 0.3);\
..   loop(2){\
..     play(56+aa, 0.2); play(68, 0.1);\
..   }\
.. }
res: 68
res: 68
res: 68
res: 68
68
```




### 組み込み関数(確率音楽)：確率音楽関数

##### (1)gauss

引数にとったパラメータから[ガウス分布](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)を作成し，そのガウス分布からランダムに音を生成する．

`gauss(”欲しい音の数”[int], ”ノートナンバー平均値”[int], ”分散”[float]);`

`gauss(5, 60, 0.89);`

##### (2)weibul

引数に取ったパラメータから[ワイブル分布](https://poncotty.com/2020/03/28/%E3%83%AF%E3%82%A4%E3%83%96%E3%83%AB%E5%88%86%E5%B8%83/)を作成し，そのワイブル分布からランダムに音を生成する．他の確率音楽関数と違って，一度に生成できる音の数は１のみ．引数が4つは多いと判断したため．

`weibul(”形状”[float], ”尺度”[int], ”位置”[int: 1...5]);`

`weibul(2.4, 70, 2);`

位置パラメータの値を1~5に制限しているのは，weibul関数の知識がない人が位置パラメータの値を大きく取り過ぎてノートナンバーが以上に高くなるのを防ぐため．

##### (3)randwalk

ガウス分布から音高の変化値を抽出し，現在の音高に加えていく．

`randwalk(”欲しい音の数”[int], ”開始ノートNo.”[int]);`

`randwalk(13, 67);`

### 組み込み関数(音生成)

##### (1)play

`play("MIDIノートナンバー[int], "音長"[float]);`

`play(60, 0.5);`



### 型付け

動的型付け

### データ型
- int型
- float型
- string型
- boolean型
- リスト型(配列)




### 開発における参考記事
- [スライダー入力](https://zenn.dev/tkyko13/articles/71e6b6cf3c2034)
- [インタプリタで継続行](https://www.javadrive.jp/python/ini/index3.html)
- [CodeGeneratorクラスのドキュメント](https://developers.google.com/blockly/reference/js/blockly.codegenerator_class?hl=ja)
- [Blocklyのブロック定義とMutatorの説明](https://qiita.com/riest817/items/441ce5d31fbed7de8d85)
- [Blocklyでブロックのセーブとロード](https://qiita.com/mvm43236/items/a5892f8e7a5037e37c1f)
- [タブの生成](https://web.monogusa-note.com/flexible-tabs-only-css)
- [ブラウザ/クライアントサイドでrequireは使えない](https://uraway.hatenablog.com/entry/2015/11/30/require_is_not_defined%E3%82%92%E8%A7%A3%E6%B6%88%E3%81%97%E3%81%A6require%E3%82%92%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B)
- [JSのimport/export](https://qiita.com/koeri3/items/314ac7b9b73fc8c80a2d)
- [textareaのheightを自動調整](https://web-dev.tech/front-end/javascript/textarea-auto-height/)