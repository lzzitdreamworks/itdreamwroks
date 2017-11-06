<?php
/**
 * 描述 : 控制层共享文件, 控制层文件与类名相同, 以$_GET['a']作为方法名(默认index)
 * 作者 : sunrise.lzz
 */
//加载核心
require dirname(__FILE__) . '/include/of/of.php';

//命令行
if (PHP_SAPI === 'cli') {
    //默认调度
    $_GET += array('c' => 'ctrl_main', 'a' => 'cliTip');
//已登录
} else if (true) {
// } else if (of_base_sso_tool::check()) {
    //默认调度
    $_GET += array('c' => 'ctrl_main', 'a' => 'index');
    //无权访问
//    of_base_sso_tool::role("{$_GET['c']}::{$_GET['a']}") || $_GET = array('c' => 'ctrl_main', 'a' => 'unRole');
//未登录
} else {
    //登录中
    if (
        isset($_GET['c']) && $_GET['c'] === 'ctrl_main' &&
        isset($_GET['a']) && $_GET['a'] === 'login'
    ) {
        //启动定时器
        of_base_com_timer::timer();
    } else {
        //展示登录界面
        $_GET = array('c' => 'ctrl_main', 'a' => 'door');
    }
}

//调度
$result = of::dispatch($_GET['c'], $_GET['a'], PHP_SAPI === 'cli' ? null : true);
if (is_array($result)) echo of_base_com_data::json($result);

