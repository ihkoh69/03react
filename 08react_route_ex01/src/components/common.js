let myLang = "KR"; // KR, EN, JP, CN
let URL_HEAD = "";

function setLanguage() {
  let LANG_KEY = "";
  if (myLang == "KR") {
    LANG_KEY = "KorService1";
  } else if (myLang == "EN") {
    LANG_KEY = "EngService1";
  } else if (myLang == "JP") {
    LANG_KEY = "JpnService1";
  } else if (myLang == "CN") {
    LANG_KEY = "ChsService1";
  } else {
    LANG_KEY = "KorService1";
  }
  URL_HEAD = `http://apis.data.go.kr/B551011/${LANG_KEY}`;
}
