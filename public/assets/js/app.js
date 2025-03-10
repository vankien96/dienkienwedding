!function (t) { "use strict"; var e = function () { this.$body = t("body"), this.$wrapper = t("#wrapper"), this.$btnFullScreen = t("#btn-fullscreen"), this.$leftMenuButton = t(".button-menu-mobile"), this.$menuItem = t(".has_sub > a") }; e.prototype.intSlimscrollmenu = function () { t(".slimscroll-menu").slimscroll({ height: "auto", position: "right", size: "5px", color: "#9ea5ab", wheelStep: 5, touchScrollStep: 50 }) }, e.prototype.initSlimscroll = function () { t(".slimscroll").slimscroll({ height: "auto", position: "right", size: "5px", color: "#9ea5ab", touchScrollStep: 50 }) }, e.prototype.initMetisMenu = function () { t("#side-menu").metisMenu() }, e.prototype.initLeftMenuCollapse = function () { t(".button-menu-mobile").on("click", function (e) { e.preventDefault(), t("body").toggleClass("enlarged") }) }, e.prototype.initEnlarge = function () { t(window).width() < 1025 ? t("body").addClass("enlarged") : t("body").removeClass("enlarged") }, e.prototype.initActiveMenu = function () { t("#sidebar-menu a").each(function () { var e = window.location.href.split(/[?#]/)[0]; this.href == e && (t(this).addClass("mm-active"), t(this).parent().addClass("mm-active"), t(this).parent().parent().addClass("mm-show"), t(this).parent().parent().prev().addClass("mm-active"), t(this).parent().parent().parent().addClass("mm-active"), t(this).parent().parent().parent().parent().addClass("mm-show"), t(this).parent().parent().parent().parent().parent().addClass("mm-active")) }) }, e.prototype.initComponents = function () { t('[data-toggle="tooltip"]').tooltip(), t('[data-toggle="popover"]').popover() }, e.prototype.initFullScreen = function () { this.$btnFullScreen.on("click", function (e) { e.preventDefault(), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) }) }, e.prototype.init = function () { this.intSlimscrollmenu(), this.initSlimscroll(), this.initMetisMenu(), this.initLeftMenuCollapse(), this.initEnlarge(), this.initActiveMenu(), this.initComponents(), this.initFullScreen(), Waves.init() }, t.MainApp = new e, t.MainApp.Constructor = e }(window.jQuery), function (e) { "use strict"; window.jQuery.MainApp.init() }();
function colorLog(message, color) {

    color = color || "black";

    switch (color) {
        case "success":  
             color = "Green"; 
             break;
        case "info":     
                color = "DodgerBlue";  
             break;
        case "error":   
             color = "Red";     
             break;
        case "warning":  
             color = "Orange";   
             break;
        default: 
             color = color;
    }

    console.log("%c" + message, "color:" + color);
}

