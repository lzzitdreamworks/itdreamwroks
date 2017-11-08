<?php

namespace ctrl;
class mainCtrl extends \L {
    /**
     * 描述 : 显示主界面
     * 作者 : sunrise.lzz
     */
    public function index() {
        $this->display('/index.html');
    }

    /**
     * 描述 : 显示登录界面
     * 作者 : sunrise.lzz
     */
    public function door() {
        $this->display('/account/login.html');
//        $this->display('/login.html');
//        $this->display('/registered.html');
    }

    /**
     * 描述 : 登录帐号
     * 作者 : sunrise.lzz
     */
    public function login() {
        echo "<pre>"; print_r($_POST); exit();

        if (isset($_POST['user']) && isset($_POST['pwd']) && isset($_POST['captcha'])) {
            //验证通过
            if (of_base_com_com::captcha($_POST['captcha'])) {
                //校验用户名和密码
                $state = of_base_sso_tool::login(array(
                    'user' => &$_POST['user'],
                    'pwd'  => &$_POST['pwd']
                ));

                //登录成功
                if ($state === true) {
                    echo 'done';
                //登录出错
                } else if ($state) {
                    echo $state['msg'];
                //登录失败
                } else {
                    echo '帐号密码错误';
                }
            //验证失败
            } else {
                echo '验证码错误';
            }
        }
    }

    /**
     * 描述 : 退出帐号
     * 作者 : sunrise.lzz
     */
    public function logout() {
        of_base_sso_tool::logout();
        L::header(ROOT_URL . '/index.php');
    }

    /**
     * 描述 : 无权访问界面
     * 作者 : sunrise.lzz
     */
    public function unRole() {
        $this->view->title = '无权访问';
        $this->view->info = '您无权访问当前页面, 请联系管理员开通';
        $this->display('/error.html');
    }

    /**
     * 描述 : CLI模式提示
     * 作者 : sunrise.lzz
     */
    public function cliTip() {
        echo 'Welcome use oFrame';
    }
}
return true;