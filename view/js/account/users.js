var usersObject = {
    /**
     * 描述 : 请求登录
     * 作者 : sunrise.lzz
     */
    'loginCheck' : function (thisObj) {
        var post = {};
        L.open('tip')('正在登录...', false);

        $('input', thisObj).each(function () {
            post[$(this).attr('name')] = this.value;
        });
        $.post(ROOT_URL + '/index.php?c=account_usersCtrl&a=loginCheck', post, function (data) {
            if (data === '登录成功') {
                window.location.reload(true);
            } else {
                // $('#captcha').click(); //登录没成功，刷新验证码
                L.open('tip')(data);
            }
        });
        return false;
    },

    /**
     * 描述 : 注册
     * 作者 : sunrise.lzz
     */
    'registerCheck' : function (thisObj) {
        var post = {};
        L.open('tip')('注册中...', false);

        $('input', thisObj).each(function () {
            post[$(this).attr('name')] = this.value;
        });
        $.post(ROOT_URL + '/index.php?c=account_usersCtrl&a=registerCheck', post, function (data) {
            if (data === '注册成功') {
                window.location.reload(true);
            } else {
                // $('#captcha').click(); //登录没成功，刷新验证码
                L.open('tip')(data);
            }
        });
        return false;
    }

}