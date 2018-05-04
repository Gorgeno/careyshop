<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    商品属性验证器
 *
 * @author      zxm <252404501@qq.com>
 * @version     v1.1
 * @date        2017/4/7
 */

namespace app\common\validate;

class GoodsAttribute extends CareyShop
{
    /**
     * 验证规则
     * @var array
     */
    protected $rule = [
        'goods_attribute_id' => 'integer|gt:0',
        'parent_id'          => 'require|integer|egt:0',
        'attr_name'          => 'require|max:60',
        'goods_type_id'      => 'require|gt:0',
        'attr_index'         => 'in:0,1,2',
        'attr_input_type'    => 'require|in:0,1,2',
        'attr_values'        => 'requireIf:attr_input_type,1|array',
        'is_important'       => 'in:0,1',
        'sort'               => 'integer|between:0,255',
        'attribute_all'      => 'in:0,1',
    ];

    /**
     * 字段描述
     * @var array
     */
    protected $field = [
        'goods_attribute_id' => '商品属性编号',
        'parent_id'          => '商品属性主体',
        'attr_name'          => '商品属性名称',
        'goods_type_id'      => '所属商品模型编号',
        'attr_index'         => '商品属性检索',
        'attr_input_type'    => '商品属性录入方式',
        'attr_values'        => '商品属性可选值',
        'is_important'       => '是否属于核心属性',
        'sort'               => '商品属性排序值',
        'attribute_all'      => '所有属性(包括已删除)',
    ];

    /**
     * 场景规则
     * @var array
     */
    protected $scene = [
        'body'      => [
            'attr_name',
            'goods_type_id',
            'sort',
        ],
        'bodylist'  => [
            'goods_type_id',
            'attribute_all',
        ],
        'set'       => [
            'goods_attribute_id' => 'require|integer|gt:0',
            'parent_id',
            'attr_name',
            'goods_type_id',
            'attr_index',
            'attr_input_type',
            'attr_values',
            'is_important',
            'sort',
        ],
        'item'      => [
            'goods_attribute_id' => 'require|integer|gt:0',
        ],
        'list'      => [
            'goods_type_id' => 'require|integer|gt:0',
            'attribute_all',
        ],
        'index'     => [
            'goods_attribute_id' => 'require|arrayHasOnlyInts',
            'attr_index'         => 'require|in:0,1,2',
        ],
        'del'       => [
            'goods_attribute_id' => 'require|arrayHasOnlyInts',
        ],
        'important' => [
            'goods_attribute_id' => 'require|integer|gt:0',
            'is_important'       => 'require|in:0,1',
        ],
        'sort'      => [
            'goods_attribute_id' => 'require|integer|gt:0',
            'sort'               => 'require|integer|between:0,255',
        ],
    ];
}