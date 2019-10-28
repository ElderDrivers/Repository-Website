"use strict";

function jsLoader(sUrl) {
    const _script = document.createElement('script');
    _script.setAttribute('src', sUrl);
    document.getElementsByTagName('head')[0].appendChild(_script);
}

function translate(key) {
    $(document).ready(function () {
        document.write(key);
    });
}

let TOAST_LANG_CHANGE = "<Missing TOAST_LANG_CHANGE>";
let TOAST_BTN_REFRESH = "<Missing TOAST_BTN_REFRESH>";
let lang;
const cookieLang = localStorage.getItem("mLang");
switch (cookieLang) {
    case "en-US":
        lang = "en-US";
        break;
    case "zh-rCN":
        lang = "zh-rCN";
        break;
    default:
        lang = null;
        break;
}
if (!lang) {
    let currentLang = navigator.language;
    if (!currentLang) {
        // noinspection JSUnresolvedVariable
        currentLang = navigator.browserLanguage;
    }
    // noinspection JSRedundantSwitchStatement
	switch (currentLang) {
        case "zh-CN":
            lang = "zh-rCN";
            break;
        default:
            lang = "en-US";
            break;
    }
}
jsLoader("js/string/" + lang + ".js");
