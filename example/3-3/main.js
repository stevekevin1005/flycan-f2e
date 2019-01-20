(function () {

    window.callback = function (data) {
        alert('我是本地函數，JSONP帶來的資料是' + data.data);
    }; 

    var script = document.createElement('script');
    script.src = 'https://www.easy-mock.com/mock/5c421ea1d13fff0d542dc782/example/jsonp/test?jsonp_param_name=callback';
    script.type = 'text/javascript';
    document.body.append(script);
    script.remove();
})();
