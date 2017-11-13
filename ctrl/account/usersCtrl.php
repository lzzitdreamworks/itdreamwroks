<?php
/**
 * Created by PhpStorm.
 * User: sunriselzz
 * Date: 17-11-8
 * Time: 上午10:14
 */

namespace ctrl\account;
use model\usersModel;

class usersCtrl extends \L
{
    private $usersModel;
    /**
     * 描述 : 显示登录界面
     * 作者 : sunrise.lzz
     */
    public function login() {
        echo "<pre>"; print_r($_SESSION); exit();
        $this->display('/account/signin.html');
    }

    /**
     * 描述 : 显示注册界面
     * 作者 : sunrise.lzz
     */
    public function register() {
        $this->display('/account/signup.html');
    }

    /**
     * 描述 : 登录校验
     * 作者 : sunrise.lzz
     */
    public function loginCheck() {
        if (isset($_POST['email']) && isset($_POST['password'])) {
            $email = isset($_POST['email']) ? trim($_POST['email']) : '';
            $password = isset($_POST['password']) ? trim($_POST['password']) : '';
            //校验用户名和密码
            $this->checkUserInfo($email, $password);
        }
    }

    /**
     * 描述 : 注册校验
     * 作者 : sunrise.lzz
     */
    public function registerCheck() {
        if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirmPassword'])) {
            $email = isset($_POST['email']) ? trim($_POST['email']) : '';
            $password = isset($_POST['password']) ? trim($_POST['password']) : '';
            $confirmPassword = isset($_POST['confirmPassword']) ? trim($_POST['confirmPassword']) : '';
            $this->checkRegisterInfo($email, $password, $confirmPassword);

        } else {
            echo "请填写正确的用户名密码";
            exit();
        }

    }

    /**
     * 校验用户名或密码
     * @param $email
     * @param $password
     */
    public function checkUserInfo($email, $password) {
        $usersModel = new usersModel();
        if($usersModel->checkEmail($email)) {
            $userInfo = $usersModel->searchUser($email, $password);
            if (!empty($userInfo)) {
                echo "登录成功";
                $_SESSION['userInfo'] = $usersModel;
                // \L::header(ROOT_URL . '/index.php');
            } else {
                echo "账号或密码错误";
            }
        } else {
            echo '该账号还未注册';
        }
    }

    /**
     * 描述 : 退出帐号
     * 作者 : sunrise.lzz
     */
    public function logout() {
        \L::header(ROOT_URL . '/index.php');
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

    /**
     * @param $email
     * @param $password
     * @param $confirmPassword
     */
    public function checkRegisterInfo($email, $password, $confirmPassword)
    {
        if (empty($email) || empty($password) || empty($confirmPassword)) {
            echo "用户名密码不能为空";
            exit();
        }
        if ($password !== $confirmPassword) {
            echo "密码和确认密码必需一致";
            exit();
        }
        if (strlen($password) < 8 || strlen($confirmPassword) > 20) {
            echo "请输入8～20位密码";
            exit();
        }
        $usersModel = new usersModel();
        if ($usersModel->checkEmail($email)) {
            echo '该邮箱已被注册';
            exit();
        }
        if($usersModel->addUser($email, $password) > 0) {
            echo "注册成功";
            L::header(ROOT_URL . '/index.php');
        }

    }

}

return true;