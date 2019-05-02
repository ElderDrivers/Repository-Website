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
var MENU_CLEAR_LANG_SETTINGS="&lt;Missing MENU_CLEAR_LANG_SETTINGS&gt;";
var SCROLL_TAB_HOME="&lt;Missing SCROLL_TAB_HOME&gt;";
var SCROLL_TAB_DIFF="&lt;Missing SCROLL_TAB_DIFF&gt;";
var SCROLL_TAB_INST="&lt;Missing SCROLL_TAB_INST&gt;";
var SCROLL_TAB_UNINST="&lt;Missing SCROLL_TAB_UNINST&gt;";
var SCROLL_TAB_CREDIT="&lt;Missing SCROLL_TAB_CREDIT&gt;";
var DRAWER_TITLE="&lt;Missing DRAWER_TITLE&gt;";
var TAB_HOME_STATUS="&lt;Missing TAB_HOME_STATUS&gt;";
var TAB_HOME_GET="&lt;Missing TAB_HOME_GET&gt;";
var TAB_HOME_WHY="&lt;Missing TAB_HOME_WHY&gt;";
var TAB_HOME_DESC="&lt;Missing TAB_HOME_DESC&gt;";
var TAB_HOME_FEATURES="&lt;Missing TAB_HOME_FEATURES&gt;";
var TAB_HOME_COMPAT="&lt;Missing TAB_HOME_COMPAT&gt;";
var TAB_HOME_MULTIPLE="&lt;Missing TAB_HOME_MULTIPLE&gt;";
var TAB_HOME_DETECT="&lt;Missing TAB_HOME_DETECT&gt;";
var TAB_DIFF_STATUS="&lt;Missing TAB_DIFF_STATUS&gt;";
var TAB_DIFF_SURE="&lt;Missing TAB_DIFF_SURE&gt;";
var TAB_DIFF_WHITE="&lt;Missing TAB_DIFF_WHITE&gt;";
var TAB_DIFF_BLACK="&lt;Missing TAB_DIFF_BLACK&gt;";
var TAB_DIFF_COMPAT="&lt;Missing TAB_DIFF_COMPAT&gt;";
var TAB_DIFF_REBOOT="&lt;Missing TAB_DIFF_REBOOT&gt;";
var TAB_DIFF_STABLE="&lt;Missing TAB_DIFF_STABLE&gt;";
var TAB_DIFF_DESC="&lt;Missing TAB_DIFF_DESC&gt;";
var TAB_DIFF_MORE="&lt;Missing TAB_DIFF_MORE&gt;";
var TAB_INST_STATUS="&lt;Missing TAB_INST_STATUS&gt;";
var TAB_INST_REQUIRE="&lt;Missing TAB_INST_REQUIRE&gt;";
var TAB_INST_REQUIRE_DESC_1="&lt;Missing TAB_INST_REQUIRE_DESC_1&gt;";
var TAB_INST_REQUIRE_DESC_2="&lt;Missing TAB_INST_REQUIRE_DESC_2&gt;";
var TAB_INST_REQUIRE_DESC_3="&lt;Missing TAB_INST_REQUIRE_DESC_3&gt;";
var TAB_INST_REQUIRE_DESC_4="&lt;Missing TAB_INST_REQUIRE_DESC_4&gt;";
var TAB_INST_REQUIRE_DESC_5="&lt;Missing TAB_INST_REQUIRE_DESC_5&gt;";
var TAB_INST_MODULES="&lt;Missing TAB_INST_MODULES&gt;";
var TAB_INST_MODULES_DESC_1="&lt;Missing TAB_INST_MODULES_DESC_1&gt;";
var TAB_INST_MODULES_DESC_2="&lt;Missing TAB_INST_MODULES_DESC_2&gt;";
var TAB_INST_MODULES_DESC_3="&lt;Missing TAB_INST_MODULES_DESC_3&gt;";
var TAB_INST_MODULES_DESC_4="&lt;Missing TAB_INST_MODULES_DESC_4&gt;";
var TAB_INST_MODULES_DESC_5="&lt;Missing TAB_INST_MODULES_DESC_5&gt;";
var TAB_INST_MODULES_DESC_6="&lt;Missing TAB_INST_MODULES_DESC_6&gt;";
var TAB_INST_MODULES_DESC_7="&lt;Missing TAB_INST_MODULES_DESC_7&gt;";
var TAB_INST_MODULES_DESC_8="&lt;Missing TAB_INST_MODULES_DESC_8&gt;";
var TAB_INST_ALSO_1="&lt;Missing TAB_INST_ALSO_1&gt;";
var TAB_INST_ALSO_2="&lt;Missing TAB_INST_ALSO_2&gt;";
var TAB_INST_TROUBLE="&lt;Missing TAB_INST_TROUBLE&gt;";
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