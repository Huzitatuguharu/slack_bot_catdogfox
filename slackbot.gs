//犬

function autodog() {
  // 定期的に通知する内容を記載
  const url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"; //URL+cityID

  const resdog = UrlFetchApp.fetch(url);
  Logger.log(resdog);
  const dogimg = JSON.parse(resdog.getContentText());
  Logger.log(dogimg);

  const jsonData = {
    username: "ユーザ名てすと",
    icon_emoji: ":dog:",
    attachments: [
      {
        fields: [
          {
            title: "しば",
          },
        ],
        image_url: dogimg[0],
      },
    ],
  };
  const payload = JSON.stringify(jsonData);

  // リクエスト内容を整形
  const options = {
    method: "post",
    contentType: "application/json",
    payload: payload,
  };
  //投稿先
  UrlFetchApp.fetch(options);
}

//ねこ

function autocat() {
  // APIの呼出し
  const url = "https://aws.random.cat/meow";
  const rescat = UrlFetchApp.fetch(url);
  Logger.log(rescat);

  // JSON形式に変換
  catJSN = JSON.parse(rescat.getContentText());
  Logger.log(catJSN);

  // 画像のURLを取得
  catimg = catJSN.file;
  Logger.log(catimg);

  const jsonData = {
    username: "ユーザ名てすと",
    icon_emoji: ":dog:",
    attachments: [
      {
        fields: [
          {
            title: "ねこ",
            value: "ここは画像の説明を記述できます。",
          },
        ],
        image_url: catimg,
      },
    ],
  };
  const payload = JSON.stringify(jsonData);

  // リクエスト内容を整形
  const options = {
    method: "post",
    contentType: "application/json",
    payload: payload,
  };
  //投稿先
  UrlFetchApp.fetch(options);
}

//きつね

function autofox() {
  // 定期的に通知する内容を記載
  const url = "https://randomfox.ca/floof";

  const resfox = UrlFetchApp.fetch(url);
  Logger.log(resfox);
  foximg = JSON.parse(resfox.getContentText());
  Logger.log(foximg);
  foximg2 = foximg.image;

  Logger.log(foximg2);

  const jsonData = {
    username: "ユーザ名てすと",
    icon_emoji: ":dog:",
    attachments: [
      {
        fields: [
          {
            title: "きつね",
            value: "ここは画像の説明を記述できます。",
          },
        ],
        image_url: foximg2,
      },
    ],
  };
  const payload = JSON.stringify(jsonData);

  // リクエスト内容を整形
  const options = {
    method: "post",
    contentType: "application/json",
    payload: payload,
  };
  //投稿先
  UrlFetchApp.fetch(options);
}
