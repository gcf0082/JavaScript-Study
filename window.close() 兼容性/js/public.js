window.onload = function () {
    // 5秒后跳转到起始页面 
    var close_time = 5,
        history_url = "",
        url = " ";
    timedCount();
    function timedCount() {
        document.getElementById('close_time').innerHTML = close_time;
        close_time = close_time - 1;
        var t = setTimeout(function () { timedCount() }, 1000);
        if (close_time < 0) {
            if (history_url == "" || null || undefined) {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                        window.opener = null; window.close();
                    }
                    else {
                        window.open('', '_top');
                        window.top.close();
                    }
                }
                else if (navigator.userAgent.indexOf("Firefox") > 0) {
                    window.location.href = 'about:blank';
                }
                else {
                    window.opener = null;
                    window.open(url, '_self');
                    window.close();
                    // parent.window.opener = null;
                    // parent.window.open("", "_self");
                    // parent.window.close();
                }
            }
            else {
                location.href = history_url;
            }
        }
    }
}


