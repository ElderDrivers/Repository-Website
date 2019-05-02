var snackbarContainer = document.querySelector('#snackbar');
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
$("#faq").click(function(){
	$("#scroll-tab-3").removeClass("is-active");
	$("#tab-3").removeClass("is-active");
	$("#scroll-tab-5").addClass("is-active");
	$("#tab-5").addClass("is-active");
});
$("#en_US").click(function(){
	setCookie("mLang","en-US");
	var data = {
		message: TOAST_LANG_CHANGE,
		timeout: 2000,
		actionHandler: refresh,
		actionText: TOAST_BTN_REFRESH
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});
$("#zh_rCN").click(function(){
	setCookie("mLang","zh-rCN");
	var data = {
		message: TOAST_LANG_CHANGE,
		timeout: 2000,
		actionHandler: refresh,
		actionText: TOAST_BTN_REFRESH
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});
$("#clearLang").click(function(){
	deleteCookie("mLang");
	var data = {
		message: TOAST_LANG_CHANGE,
		timeout: 2000,
		actionHandler: refresh,
		actionText: TOAST_BTN_REFRESH
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});
function refresh() {
	window.location.reload();
}
window.onload = function() {
	setTimeout(function() {
		$("#site-loader").fadeOut();
	},500);
}
