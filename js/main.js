$("#get-started").click(function(){
	$("#scroll-tab-1").removeClass("is-active");
	$("#tab-1").removeClass("is-active");
	$("#scroll-tab-3").addClass("is-active");
	$("#tab-3").addClass("is-active");
});
$("#why-edxposed").click(function(){
	$("#scroll-tab-1").removeClass("is-active");
	$("#tab-1").removeClass("is-active");
	$("#scroll-tab-2").addClass("is-active");
	$("#tab-2").addClass("is-active");
});
$("#i-am-sure").click(function(){
	$("#scroll-tab-2").removeClass("is-active");
	$("#tab-2").removeClass("is-active");
	$("#scroll-tab-3").addClass("is-active");
	$("#tab-3").addClass("is-active");
});
window.onload = function() {
	setTimeout(function() {
		$("#site-loader").fadeOut();
	},500);
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
}
function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function setCookie(name, value, expires/*, path, domain, secure*/) {
				var exdate=new Date();
				exdate.setDate(exdate.getDate()+expires);
    document.cookie = name + "=" + escape(value) +
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    //((expires) ? "; expires=" + expires : "") +
   	//((path) ? "; path=" + path : "") +
    //((domain) ? "; domain=" + domain : "") +
    //((secure) ? "; secure" : "");
}
function deleteCookie(name/*, path, domain*/) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
      //((path) ? "; path=" + path : "") +
      //((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
}