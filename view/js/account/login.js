var loginObject = {
    /**
     * 描述 : 请求登录
     * 作者 : sunrise.lzz
     */
    'login' : function (thisObj) {
        var post = {};
        L.open('tip')('正在登录...', false);

        $('input', thisObj).each(function () {
            post[$(this).attr('name')] = this.value;
        });
        // $.post(ROOT_URL + '/index.php?c=mainCtrl&a=login', post, function (data) {
        // 换usersCtrl提交，报错原因未详
        $.post(ROOT_URL + '/index.php?c=usersCtrl&a=login', post, function (data) {
            // if (data === 'done') {
            //     window.location.reload(true);
            // } else {
            //     $('#captcha').click();
            //     L.open('tip')(data);
            // }
        });
        return false;
    }
}