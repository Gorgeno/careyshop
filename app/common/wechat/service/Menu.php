<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    自定义菜单服务层
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/10/28
 */

namespace app\common\wechat\service;

use think\facade\Cache;

class Menu extends CareyShop
{
    /**
     * 编辑自定义菜单(配置数据为空时表示全部删除)
     * @access public
     * @return bool
     * @throws
     */
    public function setMenuData()
    {
        $button = $this->params['button'];
        if (empty($button)) {
            return $this->delMenuAll();
        }

        $result = $this->getApp('menu')->create($button);
        if (isset($result['errcode']) && $result['errcode'] != 0) {
            return $this->setError($result['errmsg']);
        }

        $cacheName = self::WECHAT_MENU . $this->params['code'];
        Cache::delete($cacheName);

        return true;
    }

    /**
     * 获取自定义菜单
     * @access public
     * @return array|false
     * @throws
     */
    public function getMenuData()
    {
        $cacheName = self::WECHAT_MENU . $this->params['code'];
        $result = Cache::remember($cacheName, function () {
            $result = $this->getApp('menu')->list();
            if (isset($result['errcode']) && $result['errcode'] == 46003) {
                return []; // 菜单尚未创建
            }

            return $result;
        });

        if (empty($result)) {
            return [];
        }

        $result = $this->getApp('menu')->current();
        if (isset($result['errcode']) && $result['errcode'] != 0) {
            return $this->setError($result['errmsg']);
        }

        return $result;
    }

    /**
     * 删除全部自定义菜单
     * @access public
     * @return bool
     * @throws
     */
    public function delMenuAll()
    {
        $result = $this->getApp('menu')->delete();
        $cacheName = self::WECHAT_MENU . $this->params['code'];
        Cache::delete($cacheName);

        if (isset($result['errcode']) && $result['errcode'] != 0) {
            return $this->setError($result['errmsg']);
        }

        return true;
    }
}