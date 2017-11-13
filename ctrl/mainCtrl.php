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
        $this->display('/account/signin.html');
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