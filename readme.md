#

- [](#)
  - [プロダクトの紹介](#プロダクトの紹介)
  - [こだわった](#こだわった)
    - [GAS](#gas)
  - [くるしい](#くるしい)
    - [Googleのトラップ？](#googleのトラップ)
    - [オウム返ししてくれない](#オウム返ししてくれない)
  - [勉強になりました](#勉強になりました)
    - [FirebaseでNode.jsを動かしてLINE BOTを作る](#firebaseでnodejsを動かしてline-botを作る)
  - [感想](#感想)

<br>

## プロダクトの紹介

Slackの特定のチャンネルにに自動で猫の画像を送る

Zennで記事を書いてみた。

https://zenn.dev/byanbyan/articles/20210520-slackgas


---

## こだわった
<br>
癒されますように
<br>
<br>

### GAS
- すぐ作れて良い
- JavaScriptと似てて理解しやすかった
- 実行後にログをすぐ確認できて作業しやすかった。APIの配列の構造を確認するためだけに使うのもアリかもしれない？

```
function autocat() {
  // APIの呼出し
  const url ='https://aws.random.cat/meow';
  const rescat = UrlFetchApp.fetch(url);

  Logger.log(rescat);// ログで確認
}

```
const url
<br>
に任意のURLを設定するとすぐ確認できる


---

## くるしい

### Googleのトラップ？
スクリプトの実行時の承認画面で青いボタン押しがち
<br>
https://paya02.com/it/google-apps/approval
<br>

### 配列の構造

画像のURLのとりかたで詰まったが、試行錯誤してたらできた。
なんとなく配列とオブジェクトが理解できた。


## 勉強になりました
<br>
Zenn参照

[Slackに自動で猫の画像を送る](https://zenn.dev/byanbyan/articles/20210520-slackgas)

---

## 感想
GAS側のトリガーで通知の頻度の設定できるのが楽だと思った
<br>
SlackもGASもほかのツールと組み合わせて色々作れそうだと思った。
<br>
Zennが使いやすかった。
