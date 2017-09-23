//=============================================================================
// SAN_RendererTypeSelector.js
//=============================================================================
// Copyright (c) 2016 Sanshiro
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc レンダラータイプセレクター 1.0.0
 * レンダラータイプを指定するデバッグコードです。
 * @author サンシロ https://twitter.com/rev2nym
 * @version 1.0.0 2016/12/10
 * 
 * @param RendererType
 * @desc レンダラータイプです。
 * 'auto', 'webgl', 'canvas' が有効です
 * @default auto
 * 
 * @help
 * ■概要
 * プラグインパラメータによってレンダラータイプを指定します。
 * このプラグインは主にデバッグに活用することを想定しています。
 * 
 * ■利用規約
 * MITライセンスのもと、商用利用、改変、再配布が可能です。
 * ただし冒頭のコメントは削除や改変をしないでください。
 * 
 * これを利用したことによるいかなる損害にも作者は責任を負いません。
 * サポートは期待しないでください＞＜。
 */

var Imported = Imported || {};
Imported.SAN_RendererTypeSelector = true;

var Sanshiro = Sanshiro || {};
Sanshiro.RendererTypeSelector = Sanshiro.RendererTypeSelector || {};
Sanshiro.RendererTypeSelector.version = '1.0.0';

(function(SAN) {
'use strict';

//-----------------------------------------------------------------------------
// SceneManager
//
// シーンマネージャー

// 準備可能なレンダラーのタイプ
SceneManager.preferableRendererType = function() {
    return PluginManager.parameters('SAN_RendererTypeSelector')['RendererType'];
};

}) (Sanshiro);
