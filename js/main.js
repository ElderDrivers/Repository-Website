$("#get-started").click(function(){
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