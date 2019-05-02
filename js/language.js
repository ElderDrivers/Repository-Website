"use strict";
function getCookieVal(offset) {
	var endstr=document.cookie.indexOf(";",offset);
	if (endstr==-1) {
		endstr=document.cookie.length;
	}
	return unescape(document.cookie.substring(offset,endstr));
}
function getCookie(name) {
	var arg=name+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen) {
		var j=i+alen;
		if (document.cookie.substring(i,j)==arg) {
			return getCookieVal(j);
		}
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) {
			break;
		}
	}
	return null;
}
function setCookie(name,value,expires) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expires);
	document.cookie=name+"="+escape(value)+((expires==null)?"":"; expires="+exdate.toGMTString());
}
function deleteCookie(name) {
	if (getCookie(name)) {
		document.cookie=name+ "=; expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}
}
function jsLoader(sUrl) {
	var _script=document.createElement('script');
	_script.setAttribute('src',sUrl);
	document.getElementsByTagName('head')[0].appendChild(_script);
}
function translate(key) {
	$(document).ready(function() {
		document.write(key);
	});
}
var TOAST_LANG_CHANGE="<Missing TOAST_LANG_CHANGE>";
var TOAST_BTN_REFRESH="<Missing TOAST_BTN_REFRESH>";
var lang;
var cookieLang=getCookie("mLang");
switch (cookieLang) {
	case "en-US":
		lang="en-US";
		break
	case "zh-rCN":
		lang="zh-rCN";
		break;
	default:
		lang=null;
		break;
}
if (!lang) {
	var currentLang=navigator.language;
	if (!currentLang) {
		currentLang=navigator.browserLanguage;
	}
	switch (currentLang) {
		case "zh-CN":
			lang="zh-rCN";
			break;
		default:
			lang="en-US";
			break;
	}
}
jsLoader("js/string/"+lang+".js");
