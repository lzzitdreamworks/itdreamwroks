<?php
/**
 * Created by PhpStorm.
 * User: sunriselzz
 * Date: 17-11-10
 * Time: 下午2:56
 */

namespace model;


class usersModel
{
    /**
     * 查询邮箱密码
     * @param $email
     * @param $password
     * @return mixed
     */
    public function searchUser($email, $password) {
        if (!empty($email) && !empty($password)) {
            $sql = "SELECT
                    `user_email`,
                    `user_password`
                FROM
                    `it_users`
                WHERE
                    `user_email` = '{$email}'
                AND `user_password` = '{$password}'";
            return \L::sql($sql);
        }
    }

    /**
     * 检测邮箱是否已注册
     * @param $email
     * @return boolean 存在返回true,不存在返回false
     */
    public function checkEmail($email) {
        if (!empty($email)) {
            $sql = "SELECT
                `user_email`
            FROM
                `it_users`
            WHERE
                `user_email` = '{$email}'";
            $emailResult = \L::sql($sql);
            return !empty($emailResult) && $emailResult[0];
        }
    }

    /**
     * 新用户注册
     * @param $email
     * @param $password
     * @return mixed
     */
    public function addUser($email, $password) {
        $sql ="INSERT INTO `itdreamworks`.`it_users` (
            `user_email`,
            `user_password`,
            `user_registered` ) 
        VALUES (
            '{$email}',
            '{$password}',
            NOW())";
        return \L::sql($sql);
    }


}