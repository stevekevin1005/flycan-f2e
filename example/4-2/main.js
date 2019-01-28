(function() {
    var text = "PC";
    if (/android/i.test(navigator.userAgent)) {
        text = "Android";
    } else if (/iphone/i.test(navigator.userAgent)) {
        text = "iPhone";
    }
    document.getElementsByTagName("body")[0].innerText = `${text} 版網頁`;
})();
