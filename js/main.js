const snackbarContainer = document.querySelector('#snackbar');
$("#get-started").click(function () {
    $("#scroll-tab-1").removeClass("is-active");
    $("#tab-1").removeClass("is-active");
    $("#scroll-tab-3").addClass("is-active");
    $("#tab-3").addClass("is-active");
});
$("#why-edxposed").click(function () {
    $("#scroll-tab-1").removeClass("is-active");
    $("#tab-1").removeClass("is-active");
    $("#scroll-tab-2").addClass("is-active");
    $("#tab-2").addClass("is-active");
});
$("#i-am-sure").click(function () {
    $("#scroll-tab-2").removeClass("is-active");
    $("#tab-2").removeClass("is-active");
    $("#scroll-tab-3").addClass("is-active");
    $("#tab-3").addClass("is-active");
});
$("#faq").click(function () {
    $("#scroll-tab-3").removeClass("is-active");
    $("#tab-3").removeClass("is-active");
    $("#scroll-tab-5").addClass("is-active");
    $("#tab-5").addClass("is-active");
});
$("#trouble").click(function () {
    $("#scroll-tab-4").removeClass("is-active");
    $("#tab-4").removeClass("is-active");
    $("#scroll-tab-5").addClass("is-active");
    $("#tab-5").addClass("is-active");
});
$("#en_US").click(function () {
    localStorage.setItem("mLang", "en-US");
    const data = {
        message: TOAST_LANG_CHANGE,
        timeout: 2000,
        actionHandler: refresh,
        actionText: TOAST_BTN_REFRESH
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});
$("#zh_rCN").click(function () {
    localStorage.setItem("mLang", "zh-rCN");
    const data = {
        message: TOAST_LANG_CHANGE,
        timeout: 2000,
        actionHandler: refresh,
        actionText: TOAST_BTN_REFRESH
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});
$("#clearLang").click(function () {
    localStorage.removeItem("mLang");
    const data = {
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

$(document).ready(function () {
    $(".lang").each(function () {
        $(this).text(language[lang][$(this).attr("key")]);
    });
    setTimeout(function () {
        $("#site-loader").fadeOut();
    }, 500);
});
