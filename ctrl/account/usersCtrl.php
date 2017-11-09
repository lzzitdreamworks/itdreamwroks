<?php
/**
 * Created by PhpStorm.
 * User: sunriselzz
 * Date: 17-11-8
 * Time: 上午10:14
 */

namespace ctrl;

class usersCtrl extends \L
{
    /**
     * 描述 : 登录帐号
     * 作者 : sunrise.lzz
     */
    public function login() {
        echo "-----进来了------"; print_r($_POST); exit();

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

}

return true;