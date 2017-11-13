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
    $_GET += array('c' => 'mainCtrl', 'a' => 'cliTip');
//已登录
} else if (false) {
    //默认调度
    $_GET += array('c' => 'mainCtrl', 'a' => 'index');
    //无权访问
//未登录
} else {
    if (isset($_GET['c']) && isset($_GET['a'])) {
        $_GET = array('c' => $_GET['c'], 'a' => $_GET['a']);
    } else {
        //展示登录界面
        $_GET = array('c' => 'mainCtrl', 'a' => 'door');
    }

}

//echo "<pre>"; print_r($_GET); exit();

//调度
$result = of::dispatch('ctrl\\' . strtr($_GET['c'], '_', '\\'),
    $_GET['a'], PHP_SAPI === 'cli' ? null : true);
if (is_array($result)) echo of_base_com_data::json($result);

